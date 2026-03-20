import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    num: "01",
    title: "Unilever – Agentic Data Pipeline",
    category: "Enterprise AI",
    tools: "AWS Glue, LangGraph, Claude 3.5",
    impact: "80% downtime reduction",
  },
  {
    num: "02",
    title: "GE Aerospace – ServiceNow Agent",
    category: "Intelligent Automation",
    tools: "ServiceNow, NLP, Agent Framework",
    impact: "60% automated resolution",
  },
  {
    num: "03",
    title: "RAG-Based SQL Query Generator",
    category: "Data Intelligence",
    tools: "RAG, NLP, Semantic Search",
    impact: "60% less manual SQL",
  },
  {
    num: "04",
    title: "RAISE™ – AI Microservices Platform",
    category: "Platform Architecture",
    tools: "LLM Inference, RAG, Microservices",
    impact: "30K+ active users",
  },
  {
    num: "05",
    title: "A2A Agent Protocol – Multi-Agent",
    category: "Enterprise AI",
    tools: "LangGraph, A2A Protocol, Orchestration",
    impact: "400+ agents orchestrated",
  },
  {
    num: "06",
    title: "Agent Builder Service",
    category: "Platform Architecture",
    tools: "AWS Bedrock, LangGraph, MLFlow",
    impact: "Unified agent platform",
  },
];

const ProjectsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
                Work
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                My Work
              </h2>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 active:scale-95"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 active:scale-95"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-2 gap-12 items-start py-12 border-t border-border"
          >
            <div>
              <span className="text-6xl md:text-8xl font-bold text-muted-foreground/20">
                {projects[current].num}
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold mt-4 mb-2">
                {projects[current].title}
              </h3>
              <p className="text-muted-foreground">{projects[current].category}</p>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  Impact
                </p>
                <p className="text-xl font-medium">{projects[current].impact}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  Tools & Features
                </p>
                <p className="text-muted-foreground">{projects[current].tools}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex items-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-foreground" : "w-2 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="flex md:hidden items-center gap-3 mt-6">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 active:scale-95"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 active:scale-95"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
