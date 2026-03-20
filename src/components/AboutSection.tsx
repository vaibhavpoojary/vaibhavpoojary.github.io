import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-8">
            About Me
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-balance">
            Results-driven Senior AI/ML Engineer with{" "}
            <span className="text-foreground font-medium">5+ years</span> building
            production LLMs, RAG pipelines, and agentic workflows at enterprise
            scale. Skilled in PyTorch, Transformers, LangChain, LangGraph, and
            deploying scalable pipelines on AWS.
          </p>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-border">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "30K+", label: "Platform Users" },
              { value: "12+", label: "AI Models Deployed" },
              { value: "95%", label: "NLP Accuracy" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
