import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, github }: { live?: string; github?: string }) => {
  if ((!live || live === "#") && (!github || github === "#")) return null;
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Read More
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {github && github !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={github}
        >
          <Button variant={"outline"} size={"sm"}>
            Source Code
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  python: brand("Python", "python-mono.svg"),
  langchain: brand("LangChain", "langchain.svg"),
  llama: brand("LLaMA 3.3 70B", "meta.svg"),
  scikit: brand("Scikit-learn", "scikitlearn.svg"),
  numpy: brand("NumPy", "numpy.svg"),
  pandas: brand("Pandas", "pandas.svg"),
  yolo: brand("YOLOv8", "ultralytics.svg"),
  opencv: brand("OpenCV", "opencv.svg"),
  raspberrypi: brand("Raspberry Pi 5", "raspberrypi.svg"),
  git: brand("Git", "git.svg"),
  github: brand("GitHub", "github.svg"),
  ieee: brand("IEEE", "ieee.svg"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "research-agent",
    category: "Agentic AI",
    title: "Research Agent",
    src: `${BASE_PATH}/research-agent/research-agent.png`,
    screenshots: ["research-agent.png"],
    live: "#",
    github: "https://github.com/Ansh-Goyal01",
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.llama, PROJECT_SKILLS.langchain],
      backend: [PROJECT_SKILLS.scikit, PROJECT_SKILLS.git],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            An 11-agent autonomous pipeline with RAG-powered retrieval (FAISS +
            arXiv/Semantic Scholar): topic → 20+ papers ingested → gap
            identification → ML experiments (RF, XGBoost, LightGBM; 5-fold CV,
            p-values, 95% CI) → a complete IEEE-quality paper with 6
            auto-generated figures. Runs on the Groq free tier at ~20k
            tokens/run with 3 human approval checkpoints.
          </TypographyP>
          <ProjectsLinks live={this.live} github={this.github} />
          <SlideShow images={[`${BASE_PATH}/research-agent/research-agent.png`]} />
        </div>
      );
    },
  },
  {
    id: "metal-crack-detection",
    category: "Edge Computer Vision",
    title: "Real-Time Metal Crack Detection on Edge",
    src: `${BASE_PATH}/metal-crack-detection/metal-crack-detection.png`,
    screenshots: ["metal-crack-detection.png"],
    live: "#",
    github: "https://github.com/Ansh-Goyal01",
    skills: {
      frontend: [PROJECT_SKILLS.yolo, PROJECT_SKILLS.opencv],
      backend: [PROJECT_SKILLS.raspberrypi, PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Trained YOLOv8 to 97.5% precision and 98% mAP@50 for real-time
            metal crack detection, then NCNN-exported the model with threaded
            inference running at 30–40 FPS on a Raspberry Pi 5 under hard
            edge-hardware constraints.
          </TypographyP>
          <ProjectsLinks live={this.live} github={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/metal-crack-detection/metal-crack-detection.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "dynamic-pricing-engine",
    category: "Data Science",
    title: "Dynamic Pricing Engine for Urban Parking",
    src: `${BASE_PATH}/dynamic-pricing-engine/dynamic-pricing-engine.png`,
    screenshots: ["dynamic-pricing-engine.png"],
    live: "#",
    github: "https://github.com/Ansh-Goyal01",
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.pandas],
      backend: [PROJECT_SKILLS.numpy, PROJECT_SKILLS.git],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A data-driven pricing engine with 3 models (baseline linear,
            demand-based, competition-aware) trained on real urban
            parking-lot data, simulating real-time price updates rendered as
            interactive Bokeh dashboards tracking occupancy-to-price
            dynamics.
          </TypographyP>
          <ProjectsLinks live={this.live} github={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/dynamic-pricing-engine/dynamic-pricing-engine.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "traffic-management",
    category: "Explainable AI",
    title: "Explainable AI Traffic Management System",
    src: `${BASE_PATH}/traffic-management/traffic-management.png`,
    screenshots: ["traffic-management.png"],
    live: "#",
    github: "https://github.com/Ansh-Goyal01",
    skills: {
      frontend: [PROJECT_SKILLS.yolo, PROJECT_SKILLS.scikit],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.git],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            YOLOv8 vehicle detection feeds an LSTM traffic-forecasting model
            and a congestion classifier (Low/Medium/High), with a SHAP
            interpretability layer explaining every prediction. Manuscript in
            preparation for an IEEE conference.
          </TypographyP>
          <ProjectsLinks live={this.live} github={this.github} />
          <SlideShow
            images={[`${BASE_PATH}/traffic-management/traffic-management.png`]}
          />
        </div>
      );
    },
  },
  {
    id: "bearing-anomaly-research",
    category: "Published Research",
    title: "Lead-Time Metric for Bearing Anomaly Detection",
    src: `${BASE_PATH}/bearing-anomaly-research/bearing-anomaly-research.png`,
    screenshots: ["bearing-anomaly-research.png"],
    live: "#",
    github: "https://github.com/Ansh-Goyal01",
    skills: {
      frontend: [PROJECT_SKILLS.ieee, PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.scikit, PROJECT_SKILLS.github],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Sole-authored paper (submitted, 2026) for the International
            Journal of Prognostics and Health Management (IJPHM). Introduces
            a false-alarm-gated lead-time metric for rolling-bearing
            prognostics, benchmarking 9 detectors across 4 run-to-failure
            datasets (XJTU-SY, FEMTO/PRONOSTIA, University of Ferrara, NASA
            IMS) plus a real ONGC gas-turbine record — with a full
            reproducible pipeline released on GitHub and an archived Zenodo
            DOI.
          </TypographyP>
          <ProjectsLinks live={this.live} github={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/bearing-anomaly-research/bearing-anomaly-research.png`,
            ]}
          />
        </div>
      );
    },
  },
];

export default projects;
