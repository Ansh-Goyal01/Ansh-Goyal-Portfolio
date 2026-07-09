export type ResearchPaper = {
  id: number;
  title: string;
  venue: string;
  status: "Submitted" | "In Preparation" | "Under Review" | "Published";
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
    status: "Submitted",
    year: "2026",
    authorship: "Sole author",
    summary:
      "Predictive-maintenance systems are usually judged on one number: how early they raise an alarm before a machine fails. That number is easy to game — a detector that fires constantly will always look \"early,\" even if most of those alarms are false. This paper introduces a false-alarm-gated lead-time metric that only credits a detector for an early warning if it isn't also crying wolf, giving a fairer way to compare bearing-failure detectors against each other. The metric is validated by benchmarking 9 detectors across 4 public run-to-failure datasets plus a real ONGC gas-turbine record, and the results show that a factor most prior work ignores — how fast a plant's sensors actually log data (the SCADA sampling rate) — quietly changes which detectors come out looking best.",
    highlights: [
      "9 detectors benchmarked",
      "4 public datasets + 1 real ONGC record",
      "Reproducible pipeline on GitHub",
      "Archived with a Zenodo DOI",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Ansh-Goyal01" }],
    visual: "/assets/research/bearing-lead-time.png",
  },
];
