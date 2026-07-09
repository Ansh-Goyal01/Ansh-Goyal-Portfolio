"use client";

import * as React from "react";

/**
 * Cross-component motion preference: an explicit user override of the OS
 * `prefers-reduced-motion` setting, toggleable from the menu. Every
 * `usePerfProfile()` caller reads the same value (module-level store +
 * useSyncExternalStore) and the choice persists.
 *
 *   "on"  → force full motion / 3D
 *   "off" → force reduced motion (drop the 3D scene & decorative effects)
 *   null  → follow the OS preference
 */
export type MotionPref = "on" | "off" | null;

const MOTION_PREF_KEY = "portfolio:motion-pref";
let motionPref: MotionPref = null;
let motionInitialized = false;
const motionListeners = new Set<() => void>();

function ensureMotionInit() {
  if (motionInitialized || typeof window === "undefined") return;
  try {
    const v = localStorage.getItem(MOTION_PREF_KEY);
    motionPref = v === "on" || v === "off" ? v : null;
  } catch {
    /* storage blocked — fall back to following the OS */
  }
  motionInitialized = true;
}

/** Set the explicit motion preference, or pass null to follow the OS again. */
export function setMotionPreference(pref: MotionPref) {
  motionPref = pref;
  try {
    if (pref) localStorage.setItem(MOTION_PREF_KEY, pref);
    else localStorage.removeItem(MOTION_PREF_KEY);
  } catch {
    /* ignore */
  }
  motionListeners.forEach((l) => l());
}

/** Opt back into full motion/3D despite `prefers-reduced-motion` (the nudge). */
export function enableMotion() {
  setMotionPreference("on");
}

function subscribeMotion(listener: () => void) {
  motionListeners.add(listener);
  return () => motionListeners.delete(listener);
}
function getMotionSnapshot(): MotionPref {
  ensureMotionInit();
  return motionPref;
}
function getMotionServerSnapshot(): MotionPref {
  return null;
}

/**
 * Real-time FPS watchdog — a single app-wide `requestAnimationFrame` loop
 * (shared across every `usePerfProfile()` caller, not one per component) that
 * measures actual frame pacing and flips a module-level flag if the page is
 * genuinely struggling, regardless of *why* (weak GPU, throttled laptop,
 * background load, the Spline scene itself being heavy, ...). This catches
 * real jank that `prefers-reduced-motion` / Data Saver can't: a perfectly
 * "capable" machine that is nonetheless dropping frames right now.
 *
 * Design notes:
 * - Samples a rolling window of frame deltas; only acts once the window is
 *   full *twice* in a row under threshold, so a single GC pause or tab-switch
 *   hiccup can't false-positive.
 * - Once it flags low-end, it locks that decision in for the session and
 *   stops sampling — we deliberately don't flip back to "fast" mid-session
 *   (that would thrash-mount/unmount the 3D scene) and don't need to keep
 *   burning a monitoring loop after the call has been made.
 * - Skipped entirely if the OS already requested reduced motion (moot) or if
 *   `document.hidden` (a backgrounded tab is expected to be slow/throttled).
 */
const FPS_WINDOW = 45; // frames per check (~0.75s at 60fps, longer if slow)
const FPS_BAD_THRESHOLD = 30; // avg fps below this counts as "struggling"
const FPS_BAD_STRIKES_NEEDED = 2; // consecutive bad windows before acting

let measuredLowEnd = false;
let fpsMonitorStarted = false;
const perfListeners = new Set<() => void>();

function notifyPerfListeners() {
  perfListeners.forEach((l) => l());
}

function startFpsMonitor() {
  if (fpsMonitorStarted || typeof window === "undefined") return;
  fpsMonitorStarted = true;

  let last = performance.now();
  let frames = 0;
  let elapsed = 0;
  let badStrikes = 0;
  let rafId = 0;

  const tick = (now: number) => {
    const delta = now - last;
    last = now;
    // Ignore the first frame after a hidden tab resumes (huge, meaningless delta).
    if (!document.hidden && delta > 0 && delta < 1000) {
      frames += 1;
      elapsed += delta;
    }

    if (frames >= FPS_WINDOW) {
      const avgFps = 1000 / (elapsed / frames);
      if (avgFps < FPS_BAD_THRESHOLD) {
        badStrikes += 1;
      } else {
        badStrikes = 0;
      }
      frames = 0;
      elapsed = 0;

      if (badStrikes >= FPS_BAD_STRIKES_NEEDED) {
        measuredLowEnd = true;
        notifyPerfListeners();
        return; // stop monitoring — decision is locked in for the session
      }
    }

    rafId = requestAnimationFrame(tick);
  };

  rafId = requestAnimationFrame((t) => {
    last = t;
    rafId = requestAnimationFrame(tick);
  });

  // No cleanup: this is a singleton, app-lifetime monitor by design.
  void rafId;
}

function subscribePerf(listener: () => void) {
  perfListeners.add(listener);
  return () => perfListeners.delete(listener);
}
function getPerfSnapshot(): boolean {
  return measuredLowEnd;
}
function getPerfServerSnapshot(): boolean {
  return false;
}

/**
 * Single source of truth for "how much eye-candy should we run?".
 *
 * Combines the user's reduced-motion preference with cheap device-capability
 * signals so heavy effects (the Spline 3D scene, the particle canvas, the
 * elastic cursor, infinite GSAP tweens) can be scaled down or skipped on
 * low-end hardware instead of running full-tilt everywhere.
 */
export type PerfProfile = {
  /** Effective reduced-motion (OS pref, unless the user opted back into motion). */
  reducedMotion: boolean;
  /** Raw OS-level `prefers-reduced-motion`, ignoring the user override. */
  rawReducedMotion: boolean;
  /** User has explicitly opted back into full motion/3D. */
  motionEnabled: boolean;
  /** Small viewport (phone-sized). */
  isMobile: boolean;
  /** Conserve mode: Data Saver is on, or the FPS watchdog measured real jank. */
  lowEnd: boolean;
  /** Drop the WebGL 3D scene entirely (show a static fallback). */
  disable3D: boolean;
  /** Skip purely decorative effects (particles, elastic cursor jelly). */
  disableDecorative: boolean;
  /** How many background particles to render (0 = none). */
  particleCount: number;
  /** Pixel-ratio ceiling for any canvas/WebGL renderer. */
  maxDpr: number;
  /** True once detection has run on the client (avoids SSR/CSR mismatch). */
  ready: boolean;
};

/**
 * Data Saver — an explicit, reliable signal that the user wants to conserve.
 *
 * We deliberately do NOT use `navigator.hardwareConcurrency` / `deviceMemory`
 * here: browsers clamp them unpredictably (the same capable machine has been
 * observed reporting 12, 8, and 2 cores across sessions), so gating the 3D
 * scene on them dropped it for plenty of perfectly capable devices. Capability
 * is too noisy to decide whether the headline feature renders.
 */
function detectSaveData(): boolean {
  if (typeof navigator === "undefined") return false;
  return (
    (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData ?? false
  );
}

export function usePerfProfile(): PerfProfile {
  const [state, setState] = React.useState({
    reducedMotion: false,
    isMobile: false,
    saveData: false,
    ready: false,
  });

  React.useEffect(() => {
    const motionMq = matchMedia("(prefers-reduced-motion: reduce)");
    const mobileMq = matchMedia("(max-width: 768px)");

    const update = () =>
      setState({
        reducedMotion: motionMq.matches,
        isMobile: mobileMq.matches,
        saveData: detectSaveData(),
        ready: true,
      });

    update();
    motionMq.addEventListener("change", update);
    mobileMq.addEventListener("change", update);
    return () => {
      motionMq.removeEventListener("change", update);
      mobileMq.removeEventListener("change", update);
    };
  }, []);

  const { reducedMotion: rawReducedMotion, isMobile, saveData, ready } = state;
  const motionPref = React.useSyncExternalStore(
    subscribeMotion,
    getMotionSnapshot,
    getMotionServerSnapshot
  );
  const measuredLowEndValue = React.useSyncExternalStore(
    subscribePerf,
    getPerfSnapshot,
    getPerfServerSnapshot
  );

  // Kick off the FPS watchdog once we know the OS isn't already asking for
  // reduced motion (in which case measuring is moot — we're already light).
  React.useEffect(() => {
    if (!ready || rawReducedMotion) return;
    startFpsMonitor();
  }, [ready, rawReducedMotion]);

  return React.useMemo<PerfProfile>(() => {
    // Explicit preference wins; otherwise follow the OS.
    const reducedMotion =
      motionPref === "on" ? false : motionPref === "off" ? true : rawReducedMotion;
    const motionEnabled = motionPref === "on";
    // A user who explicitly forced motion back on gets what they asked for —
    // the measured watchdog only ever makes things *lighter*, never overrides
    // an explicit "on". Otherwise: reduced-motion, Data Saver, or genuinely
    // measured jank all count as "too heavy, back off".
    const measuredLowEnd = motionEnabled ? false : measuredLowEndValue;
    const lowEnd = saveData || measuredLowEnd;
    const disable3D = reducedMotion || saveData || measuredLowEnd;
    const disableDecorative = reducedMotion || measuredLowEnd;
    const particleCount = disableDecorative ? 0 : isMobile ? 20 : 60;
    const maxDpr = isMobile ? 1.25 : 1.75;
    return {
      reducedMotion,
      rawReducedMotion,
      motionEnabled,
      isMobile,
      lowEnd,
      disable3D,
      disableDecorative,
      particleCount,
      maxDpr,
      ready,
    };
  }, [rawReducedMotion, motionPref, isMobile, saveData, ready, measuredLowEndValue]);
}
