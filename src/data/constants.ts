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
    shortDescription: "the daily driver — models, pipelines, and everything in between.",
    color: "#3776AB",
    icon: "/assets/logos/python-mono.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "Deep Learning",
    shortDescription: "PyTorch, neural nets, and everything gradient-based.",
    color: "#EE4C2C",
    icon: "/assets/logos/pytorch.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "C++",
    shortDescription: "for when Python isn't fast enough on the edge.",
    color: "#00599C",
    icon: "/assets/logos/cplusplus.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "SQL",
    shortDescription: "querying and wrangling structured data.",
    color: "#4169E1",
    icon: "/assets/logos/postgresql-mono.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "Machine Learning",
    shortDescription: "classical ML — baselines, ensembles, isolation forests.",
    color: "#F7931E",
    icon: "/assets/logos/scikitlearn.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "OpenCV",
    shortDescription: "computer vision preprocessing for edge deployments.",
    color: "#5C3EE8",
    icon: "/assets/logos/opencv.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "RAG",
    shortDescription: "retrieval-augmented pipelines, orchestrated with LangChain.",
    color: "#7FC8FF",
    icon: "/assets/logos/langchain.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Docker",
    shortDescription: "containerizing pipelines so they run the same everywhere.",
    color: "#2496ED",
    icon: "/assets/logos/docker-mono.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "NumPy",
    shortDescription: "vectors, arrays, and the math underneath it all.",
    color: "#013243",
    icon: "/assets/logos/numpy.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Pandas",
    shortDescription: "cleaning and reshaping every dataset before modeling.",
    color: "#150458",
    icon: "/assets/logos/pandas.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "LLMs",
    shortDescription: "LLaMA 3.3 70B on Groq — fast, free-tier inference for agents.",
    color: "#FFD21E",
    icon: "/assets/logos/huggingface.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "APIs",
    shortDescription: "shipping models and agents behind a clean REST interface.",
    color: "#009688",
    icon: "/assets/logos/fastapi.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "version control for every experiment and paper.",
    color: "#F03C2E",
    icon: "/assets/logos/git.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "reproducible pipelines, released open source.",
    color: "#FFFFFF",
    icon: "/assets/logos/github.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "MCP",
    shortDescription: "Model Context Protocol — wiring tools into agent workflows.",
    color: "#D4A27F",
    icon: "/assets/logos/anthropic-mono.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "Agentic AI",
    shortDescription: "multi-agent systems that plan, act, and self-correct.",
    color: "#A78BFA",
    icon: "/assets/logos/bot.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "GenAI",
    shortDescription: "generative models applied to real, messy problems.",
    color: "#0467DF",
    icon: "/assets/logos/meta.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "Vector DBs",
    shortDescription: "embeddings and similarity search — FAISS, Pinecone, ChromaDB.",
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
    label: "Multi-Agent Systems",
    shortDescription: "orchestrating specialized agents into one pipeline.",
    color: "#F472B6",
    icon: "/assets/logos/workflow.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "Tool Use",
    shortDescription: "function calling — letting models actually do things.",
    color: "#FBBF24",
    icon: "/assets/logos/plug-zap.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "Explainable AI",
    shortDescription: "SHAP interpretability — models that explain themselves.",
    color: "#60A5FA",
    icon: "/assets/logos/scan-eye.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Jupyter",
    shortDescription: "where every experiment starts life as a notebook.",
    color: "#F37626",
    icon: "/assets/logos/jupyter.svg",
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
    label: "Streamlit",
    shortDescription: "shipping fast dashboards for models and demos.",
    color: "#FF4B4B",
    icon: "/assets/logos/streamlit.svg",
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
      "Lead technical event strategy and execution for a 500+ member IEEE branch.",
      "Manage a cross-functional committee of 20+ members across workshops, seminars, and industry collaborations.",
    ],
  },
  {
    id: 2,
    startDate: "May 2026",
    endDate: "Jul 2026",
    title: "Research Intern, Predictive Maintenance",
    company: "Oil and Natural Gas Corporation (ONGC)",
    description: [
      "Deployed a multi-scale feature-fusion pipeline on live ONGC Solar Turbine data (4-channel vibration, 42,698 points, 10-sec sampling): fused 6 detectors (Isolation Forest, Temporal Transformer, statistical baselines) via a conformal-prediction layer, raising an alert 57.5 hrs before ESD (peak vibration 75.0 mm/s, 223% of baseline).",
      "Added SHAP root-cause analysis (DE-Y 35%, DE-X 27%, NDE-X 20%, NDE-Y 18%) with natural-language maintenance actions; validated on the NASA IMS benchmark (58-hr lead time, zero false alarms) — targeting IEEE TII (SCI Q1).",
    ],
    skills: [SkillNames.JS, SkillNames.TS, SkillNames.REACT, SkillNames.AWS],
  },
  {
    id: 3,
    startDate: "Nov 2025",
    endDate: "Jan 2026",
    title: "Machine Learning Intern",
    company: "Infosys Springboard (Virtual)",
    description: [
      "Built an end-to-end CNN audio-classification pipeline with MFCC feature extraction for multi-class musical-instrument recognition.",
    ],
    skills: [SkillNames.JS, SkillNames.TS, SkillNames.GCP],
  },
  {
    id: 4,
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
