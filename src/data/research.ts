export type ResearchPaper = {
  id: number;
  title: string;
  venue: string;
  status: "Submitted" | "In Preparation" | "Under Review" | "Conditionally Accepted" | "Published";
  year: string;
  authorship: string;
  summary: string;
  highlights: string[];
  links?: { label: string; href: string }[];
  visual?: string;
};

export const RESEARCH: ResearchPaper[] = [
  {
    id: 1,
    title:
      "A Latch-On-Resistant, False-Alarm-Gated Lead-Time Metric for Bearing Anomaly Detection — and What It Reveals About SCADA-Rate Logging",
    venue: "International Journal of Prognostics and Health Management (IJPHM)",
    status: "Conditionally Accepted",
    year: "2026",
    authorship: "Sole author",
    summary:
      "Predictive-maintenance systems are usually judged on one number: how early they raise an alarm before a machine fails. That number is easy to game: a detector that sits in permanent alarm always looks \"early\". This paper introduces a lead-time metric that a latching detector cannot game and that is gated on false alarms, so a noisy detector cannot score well. It benchmarks 11 detectors on 4 public run-to-failure datasets (XJTU-SY, FEMTO, Ferrara, NASA IMS) plus a real ONGC turbine record, and tests a common worry: that logging at slow SCADA rates hurts early warning. Across all 33 detector–dataset cells, the effect on lead time is effectively zero (within ±1 hour). Accepted subject to major revisions; the revised manuscript is in second-round review.",
    highlights: [
      "11 detectors benchmarked",
      "4 public datasets + 1 real ONGC record",
      "SCADA-rate effect: zero in all 33 cells",
      "Open code, archived with a Zenodo DOI",
    ],
    links: [
      { label: "Code", href: "https://github.com/Ansh-Goyal01/Scada-Leadtime-Benchmark" },
      { label: "Zenodo DOI", href: "https://doi.org/10.5281/zenodo.20719076" },
    ],
    visual: "/assets/research/bearing-lead-time.png",
  },
];
