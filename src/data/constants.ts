// Keycap object names below are baked into public/assets/skills-keyboard.spline
// and must stay in sync with the Spline scene's object names — see README.md
// for how to re-bake the keyboard. Labels/icons/descriptions are freely editable.
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "Python",
    shortDescription: "the daily driver: engines, models, APIs and every experiment.",
    color: "#3776AB",
    icon: "/assets/logos/python-mono.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "Deep Learning",
    shortDescription: "PyTorch: Temporal Transformers, CNNs and audio models.",
    color: "#EE4C2C",
    icon: "/assets/logos/pytorch.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "C++",
    shortDescription: "firmware for ESP32 nodes and anything that must run fast at the edge.",
    color: "#00599C",
    icon: "/assets/logos/cplusplus.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "PostgreSQL",
    shortDescription: "accounts, saved trips and audit logs for Verity, behind row-level security.",
    color: "#4169E1",
    icon: "/assets/logos/postgresql-mono.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "Machine Learning",
    shortDescription: "XGBoost, LightGBM, Isolation Forest: strong baselines before anything fancy.",
    color: "#F7931E",
    icon: "/assets/logos/scikitlearn.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Computer Vision",
    shortDescription: "YOLOv8 + OpenCV: 97.5% precision crack detection at 30-40 FPS on a Pi.",
    color: "#5C3EE8",
    icon: "/assets/logos/opencv.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "LangGraph",
    shortDescription: "agent graphs where a rules engine decides and the LLM only explains.",
    color: "#7FC8FF",
    icon: "/assets/logos/langchain.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Docker",
    shortDescription: "Verity's API ships as a container that passes CI with networking off.",
    color: "#2496ED",
    icon: "/assets/logos/docker-mono.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Monte Carlo",
    shortDescription: "1,500 simulated trips per forecast, so every answer comes with a band.",
    color: "#4DABCF",
    icon: "/assets/logos/numpy.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Pandas",
    shortDescription: "cleaning and reshaping every dataset before it gets near a model.",
    color: "#150458",
    icon: "/assets/logos/pandas.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "LLMs",
    shortDescription: "LLaMA 3.3, Gemini and Groq, used for language, never for the final call.",
    color: "#FFD21E",
    icon: "/assets/logos/huggingface.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "FastAPI",
    shortDescription: "every project ships behind a typed, tested REST API.",
    color: "#009688",
    icon: "/assets/logos/fastapi.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "version control for every experiment, paper and hackathon build.",
    color: "#F03C2E",
    icon: "/assets/logos/git.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "open code and benchmarks, archived with a Zenodo DOI.",
    color: "#FFFFFF",
    icon: "/assets/logos/github.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Neo4j",
    shortDescription: "charger trust graphs: independent backups and fake-report rings in Cypher.",
    color: "#018BFF",
    icon: "/assets/logos/network.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "Agentic AI",
    shortDescription: "multi-agent systems, from an 11-agent research pipeline to voice agents.",
    color: "#A78BFA",
    icon: "/assets/logos/bot.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Voice AI",
    shortDescription: "Sarvam for Hindi speech, ElevenLabs for phone and web voice agents.",
    color: "#22D3EE",
    icon: "/assets/logos/mic.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "Vector DBs",
    shortDescription: "ChromaDB, BGE embeddings and cross-encoder reranking for grounded RAG.",
    color: "#34D399",
    icon: "/assets/logos/database.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "runs everything from the Raspberry Pi to the training rig.",
    color: "#FCC624",
    icon: "/assets/logos/linux.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Anomaly Detection",
    shortDescription: "11 detectors benchmarked; an alert 57.5 hrs before a turbine shutdown.",
    color: "#F472B6",
    icon: "/assets/logos/activity.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "Signal Processing",
    shortDescription: "vibration spectra, MFCCs and SCADA time series.",
    color: "#FBBF24",
    icon: "/assets/logos/audio-waveform.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "Explainable AI",
    shortDescription: "SHAP root-cause attribution: models that say why they alarmed.",
    color: "#60A5FA",
    icon: "/assets/logos/scan-eye.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Conformal Prediction",
    shortDescription: "uncertainty bands widened until they hold, never narrowed.",
    color: "#FB923C",
    icon: "/assets/logos/gauge.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Raspberry Pi",
    shortDescription: "edge inference at 30-40 FPS under hard constraints.",
    color: "#A22846",
    icon: "/assets/logos/raspberrypi.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "ESP32",
    shortDescription: "low-cost vibration nodes; runner-up at IEEE TechFusion 2026.",
    color: "#E7352C",
    icon: "/assets/logos/cpu.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description?: string[];
  skills?: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jun 2026",
    endDate: "Present",
    title: "Organising Secretary",
    company: "IEEE Student Branch, JIIT Noida",
    description: [
      "Run the branch's event operations: permissions, official correspondence and logistics for orientation, induction and technical events.",
      "Helped host NXP Cup India 2026 and the LUMINA Women in Engineering event.",
    ],
  },
  {
    id: 2,
    startDate: "Aug 2026",
    endDate: "Oct 2026",
    title: "Data Annotator",
    company: "ERIC Robotics",
    description: [
      "Labelled and quality-checked railway-infrastructure images for an instance-segmentation project in Roboflow.",
      "Used SAM 3-assisted labelling to produce segmentation masks for training computer-vision models.",
    ],
    skills: [SkillNames.VUE],
  },
  {
    id: 3,
    startDate: "May 2026",
    endDate: "Jul 2026",
    title: "Research Intern, Predictive Maintenance",
    company: "Oil and Natural Gas Corporation (ONGC)",
    description: [
      "Built a predictive-maintenance pipeline on live Solar Turbine data (4-channel vibration, 42,698 readings at 10-second sampling), fusing 6 detectors (Isolation Forest, a Temporal Transformer, statistical baselines) through a conformal-prediction layer.",
      "Raised an alert 57.5 hours before an emergency shutdown, at 223% of baseline vibration with all 4 channels in alarm.",
      "Added per-channel SHAP root-cause attribution with plain-language maintenance actions; validated on the NASA IMS benchmark (58-hour lead time, zero false alarms). The work led to my sole-authored IJPHM paper.",
    ],
    skills: [SkillNames.JS, SkillNames.DOCKER, SkillNames.GCP, SkillNames.AWS],
  },
  {
    id: 4,
    startDate: "Nov 2025",
    endDate: "Jan 2026",
    title: "Machine Learning Intern",
    company: "Infosys Springboard (Virtual)",
    description: [
      "Built an end-to-end CNN audio-classification pipeline with MFCC feature extraction for multi-class musical-instrument recognition.",
    ],
    skills: [SkillNames.JS, SkillNames.TS, SkillNames.NGINX],
  },
  {
    id: 5,
    startDate: "Sep 2025",
    endDate: "Sep 2025",
    title: "Workshop Mentor, Agentic AI Bootcamp",
    company: "IEEE Student Branch, JIIT Noida",
    description: [
      "Designed and delivered an LLM & multi-agent architecture curriculum to 150+ students over 5 days.",
      "Mentored project teams from concept to working prototype.",
    ],
    skills: [SkillNames.POSTGRES, SkillNames.NPM],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
