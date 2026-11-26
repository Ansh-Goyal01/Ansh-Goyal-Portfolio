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
            Live Demo
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
  fastapi: brand("FastAPI", "fastapi.svg"),
  neo4j: brand("Neo4j", "network.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  sarvam: brand("Sarvam AI (voice)", "mic.svg"),
  montecarlo: brand("Monte Carlo", "gauge.svg"),
  nextjs: brand("Next.js", "nextdotjs-mono.svg"),
  langgraph: brand("LangGraph", "langchain.svg"),
  chroma: brand("ChromaDB", "database.svg"),
  llm: brand("Gemini / Groq", "bot.svg"),
  langchain: brand("LangChain", "langchain.svg"),
  llama: brand("LLaMA 3.3 70B", "meta.svg"),
  scikit: brand("Scikit-learn", "scikitlearn.svg"),
  yolo: brand("YOLOv8", "ultralytics.svg"),
  opencv: brand("OpenCV", "opencv.svg"),
  raspberrypi: brand("Raspberry Pi 5", "raspberrypi.svg"),
  elevenlabs: brand("ElevenLabs", "audio-waveform.svg"),
  agents: brand("Voice Agents", "bot.svg"),
  esp32: brand("ESP32", "cpu.svg"),
  cpp: brand("C++", "cplusplus.svg"),
  vibration: brand("Vibration Analysis", "activity.svg"),
  vercel: brand("Vercel", "vercel-mono.svg"),
  git: brand("Git", "git.svg"),
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
    id: "verity",
    category: "Probabilistic ML · hackFront India 2026 top 14",
    title: "Verity: Calibrated EV Trip Dispatch",
    src: `${BASE_PATH}/verity/verity.png`,
    screenshots: ["home.webp", "planner.webp"],
    live: "https://verity-three-pi.vercel.app/web/home.html",
    github: "https://github.com/Ansh-Goyal01/verity",
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.montecarlo, PROJECT_SKILLS.neo4j],
      backend: [PROJECT_SKILLS.fastapi, PROJECT_SKILLS.postgres, PROJECT_SKILLS.sarvam],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A flight dispatcher for EV trips. Before a long drive, Verity answers &ldquo;Will I make it?&rdquo; with a GO / NO-GO decision, an arrival band, a Bingo Line (the battery level below which you must divert) and a backup charger that doesn&apos;t share the main charger&apos;s site or operator. With too little evidence it says &ldquo;not sure&rdquo; instead of guessing.
          </TypographyP>
          <TypographyP className="font-mono">
            A physics-first energy model runs 1,500 Monte Carlo simulations per forecast. A Neo4j trust graph weighs every charger report by its source&apos;s track record and catches coordinated fake-report rings. Drivers can plan and report by voice in Hindi through Sarvam AI.
          </TypographyP>
          <TypographyP className="font-mono">
            On 21 held-out real Indian trips, the 90% arrival band contained the real outcome 19 times, against 14 for an ML regression, and range error was under a quarter of the manufacturer&apos;s claimed range. Placed in the top 14 of 2,000+ teams at hackFront India 2026.
          </TypographyP>
          <ProjectsLinks live={this.live} github={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/verity/home.webp`,
              `${BASE_PATH}/verity/planner.webp`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "adhikaar",
    category: "Agentic AI · Civic Tech",
    title: "Adhikaar: Welfare-Eligibility Agent",
    src: `${BASE_PATH}/adhikaar/adhikaar.png`,
    screenshots: ["home.webp", "how-it-works.webp"],
    live: "https://adhikaar-frontend.vercel.app/",
    github: "https://github.com/Ansh-Goyal01/ADHIKAAR",
    skills: {
      frontend: [PROJECT_SKILLS.nextjs, PROJECT_SKILLS.langgraph, PROJECT_SKILLS.llm],
      backend: [PROJECT_SKILLS.fastapi, PROJECT_SKILLS.chroma, PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Tells citizens which central and Uttar Pradesh welfare schemes they qualify for, in 11 Indian languages, and proves it. A deterministic rules engine decides eligibility and cites the official clause behind every rule; the LLM only reads the user&apos;s input and explains the result.
          </TypographyP>
          <TypographyP className="font-mono">
            Against an LLM-only agent: accuracy 56.5% &rarr; 91.3% and false entitlements 16 &rarr; 0; a later 111-check evaluation had zero false and zero missed entitlements. It also builds an application packet with a document checklist. 2nd runner-up at Bit N Build &apos;26 UP Regionals (Google Developer Groups).
          </TypographyP>
          <ProjectsLinks live={this.live} github={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/adhikaar/home.webp`,
              `${BASE_PATH}/adhikaar/how-it-works.webp`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "research-agent",
    category: "Agentic AI",
    title: "Research Agent: 11-Agent Research Pipeline",
    src: `${BASE_PATH}/research-agent/research-agent.png`,
    screenshots: ["research-agent.png"],
    live: "#",
    github: "https://github.com/Ansh-Goyal01/Research-Agent",
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.llama, PROJECT_SKILLS.langchain],
      backend: [PROJECT_SKILLS.scikit, PROJECT_SKILLS.git],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Give it one topic and 11 agents carry it to a drafted IEEE-style paper: literature search on arXiv and Semantic Scholar, gap finding, ML experiments (RF, XGBoost, LightGBM with Optuna tuning), SHAP explanations, statistical checks and auto-generated figures. Runs on LLaMA 3.3 70B via Groq with human approval checkpoints.
          </TypographyP>
          <ProjectsLinks live={this.live} github={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/research-agent/research-agent.png`,
            ]}
          />
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
    github: "https://github.com/Ansh-Goyal01/edge-ai-crack-detection-yolo",
    skills: {
      frontend: [PROJECT_SKILLS.yolo, PROJECT_SKILLS.opencv],
      backend: [PROJECT_SKILLS.raspberrypi, PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Trained YOLOv8 to 97.5% precision and 98% mAP@50 for real-time metal crack detection, then exported it to NCNN with threaded inference running at 30&ndash;40 FPS on a Raspberry Pi 5.
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
    id: "vaniforge",
    category: "Voice AI · Build Arena 2026 finalist",
    title: "VaniForge: No-Code Voice AI Agent Builder",
    src: `${BASE_PATH}/vaniforge/vaniforge.png`,
    screenshots: ["vaniforge.png"],
    live: "#",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.elevenlabs, PROJECT_SKILLS.agents],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Turns a plain-English or Hindi description of a business into a deterministic conversation graph, tests it against synthetic difficult callers, then deploys it as a phone or web voice agent on ElevenLabs. Finalist at Build Arena 2026 (ElevenLabs track), presented at the Microsoft office in Noida.
          </TypographyP>
          <ProjectsLinks live={this.live} github={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/vaniforge/vaniforge.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "anumaan",
    category: "Edge AI · Hardware",
    title: "Anumaan: Edge Vibration-Monitoring Node",
    src: `${BASE_PATH}/anumaan/anumaan.png`,
    screenshots: ["anumaan.png"],
    live: "#",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.esp32, PROJECT_SKILLS.cpp],
      backend: [PROJECT_SKILLS.vibration, PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            An ESP32 + MPU6050 node that monitors machine vibration for early fault warning, built on the same false-alarm-gated approach as my predictive-maintenance research. Presented solo, with live hardware, at the IEEE TechFusion Innovation Challenge 2026 Grand Finale and placed runner-up.
          </TypographyP>
          <ProjectsLinks live={this.live} github={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/anumaan/anumaan.png`,
            ]}
          />
        </div>
      );
    },
  },
];

export default projects;
