const config = {
  title: "Ansh Goyal | AI Engineer & Researcher",
  description: {
    long: "Portfolio of Ansh Goyal — third-year Electronics & Communication Engineering student at JIIT Noida working on edge AI, predictive maintenance and LLM agents. Sole author of an IJPHM paper on bearing anomaly detection; built Verity (calibrated EV trip dispatch, top 14 of 2,000+ teams at hackFront India 2026) and Adhikaar (a welfare-eligibility agent where a rules engine decides and the LLM explains).",
    short:
      "Portfolio of Ansh Goyal — AI/ML engineer and researcher building calibrated predictive systems, LLM agents and edge AI.",
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
    "Verity",
    "Adhikaar",
    "IJPHM",
    "Neo4j",
    "Monte Carlo",
    "Conformal Prediction",
  ],
  author: "Ansh Goyal",
  email: "anshgoyal5500@gmail.com",
  site: "https://ansh-goyal-portfolio.vercel.app",

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
