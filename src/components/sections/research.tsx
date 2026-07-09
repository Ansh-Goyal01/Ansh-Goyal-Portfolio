import { RESEARCH, ResearchPaper } from "@/data/research";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, FileText } from "lucide-react";
import Link from "next/link";

const statusStyles: Record<ResearchPaper["status"], string> = {
  Submitted: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "Under Review": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  "In Preparation": "bg-zinc-500/15 text-zinc-400 border-zinc-500/30",
  Published: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
};

const ResearchSection = () => {
  return (
    <SectionWrapper
      className="flex flex-col items-center justify-center min-h-[100vh] py-20"
    >
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="research"
          title="Research"
          desc="Published and in-progress work."
          align="left"
          className="mb-12 md:mb-16 mt-0"
        />

        <div className="flex flex-col gap-8">
          {RESEARCH.map((paper, index) => (
            <ResearchCard key={paper.id} paper={paper} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const ResearchCard = ({
  paper,
  index,
}: {
  paper: ResearchPaper;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border overflow-hidden",
          "hover:border-primary/20 transition-colors duration-300",
          "shadow-sm hover:shadow-md"
        )}
      >
        <div className="grid md:grid-cols-[1.4fr_1fr]">
          {/* Left: text content */}
          <div className="flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-1">
                <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
                <span className="text-sm font-medium text-muted-foreground text-left">
                  {paper.venue}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <CardTitle className="text-xl font-bold tracking-tight leading-snug text-left">
                  {paper.title}
                </CardTitle>
                <Badge
                  variant="outline"
                  className={cn(
                    "w-fit font-mono text-xs font-normal",
                    statusStyles[paper.status]
                  )}
                >
                  {paper.status} · {paper.year}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground text-left">
                {paper.authorship}
              </div>
            </CardHeader>
            <CardContent className="space-y-6 flex-1">
              <p className="text-base text-muted-foreground leading-relaxed text-left">
                {paper.summary}
              </p>

              {paper.highlights.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {paper.highlights.map((h) => (
                    <Badge
                      key={h}
                      variant="outline"
                      className="text-xs font-normal bg-secondary/30 hover:bg-secondary/50 transition-colors border-transparent"
                    >
                      {h}
                    </Badge>
                  ))}
                </div>
              )}

              {paper.links && paper.links.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-1">
                  {paper.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener"
                    >
                      <Button variant="outline" size="sm" className="gap-2">
                        {link.label}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </div>

          {/* Right: visual */}
          {paper.visual && (
            <div className="relative min-h-[240px] md:min-h-full border-t md:border-t-0 md:border-l border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={paper.visual}
                alt={paper.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default ResearchSection;
