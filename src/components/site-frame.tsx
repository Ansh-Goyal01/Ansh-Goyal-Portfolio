"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import AppOverlays from "@/components/app-overlays";
import AnimatedBackground from "@/components/animated-background";

/**
 * Wraps the app shell. The `/components*` showcase routes are rendered
 * "bare" (no header / footer / decorative overlays) so the component
 * galleries can be judged in isolation. Everything else gets full chrome.
 *
 * AnimatedBackground (the 3D Spline keyboard) lives here rather than inside
 * the home page component on purpose: this shell persists across client-side
 * navigations (App Router only swaps `children`), so leaving "/" for e.g.
 * "/blogs" and coming back no longer tears down and re-mounts the whole
 * WebGL scene — which was making the keycaps disappear and replay their
 * ~1.3s pop-in reveal (or show a bare, key-less slab mid-load) every time.
 */
export default function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare = pathname?.startsWith("/components") ?? false;

  if (bare) return <>{children}</>;

  return (
    <>
      <AnimatedBackground />
      <Header />
      {children}
      <Footer />
      <AppOverlays />
    </>
  );
}
