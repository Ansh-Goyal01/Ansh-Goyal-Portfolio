const config = {
  title: "Ansh Goyal | AI Engineer & Researcher",
  description: {
    long: "Portfolio of Ansh Goyal — Electronics & Communication Engineering undergrad at JIIT Noida specializing in Industrial AI, Edge ML, and agentic AI engineering. Research deployed on live ONGC Solar Turbine equipment; builds RAG pipelines, multi-agent systems, edge computer vision, and SHAP-interpretable forecasting models.",
    short:
      "Portfolio of Ansh Goyal — AI/ML engineer and researcher building agentic AI, edge computer vision, and predictive-maintenance systems.",
  },
  keywords: [
    "Ansh Goyal",
    "portfolio",
    "AI Engineer",
    "Machine Learning",
    "Industrial AI",
    "Edge ML",
    "Agentic AI",
    "RAG",
    "LangChain",
    "Computer Vision",
    "YOLOv8",
    "Predictive Maintenance",
    "ONGC",
    "IEEE",
    "Python",
    "PyTorch",
  ],
  author: "Ansh Goyal",
  email: "anshgoyal5500@gmail.com",
  site: "https://ansh-goyal.vercel.app",

  // for github stars button
  githubUsername: "Ansh-Goyal01",
  githubRepo: "Ansh-Goyal-Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/anshgoyal-ml/",
    github: "https://github.com/Ansh-Goyal01",
  },
};
export { config };
