import ScrollReveal from "./ScrollReveal";

const experiences = [
{
  role: "Senior AI Platform Engineer",
  company: "OpenText",
  period: "2024",
  label: "NOW",
  description:
  "Building Gen AI & Agentic AI platforms with multi-agent orchestration, LangGraph, LangChain, and advanced RAG systems for enterprise-scale solutions."
},
{
  role: "Senior AI/ML Engineer",
  company: "Capgemini",
  period: "2022",
  label: "2022",
  description:
  "Led enterprise GenAI initiatives including RAISE™ platform (30K+ users), AURA NLP assistant (95% accuracy), LangGraph multi-agent workflows, and LoRA/QLoRA fine-tuning pipelines."
},
{
  role: "AI/ML Engineer",
  company: "Tech Mahindra",
  period: "2019",
  label: "2019",
  description:
  "Developed NLP chatbots, ITSM ticket classifiers with Random Forest & XGBoost, and automated ETL pipelines processing 10M+ records on AWS."
}];


const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
            Career
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-20 text-balance leading-[1.1]">​Experience
            <br />Experience
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {experiences.map((exp, i) =>
          <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group grid md:grid-cols-[120px_1fr] gap-6 md:gap-12 py-12 border-t border-border hover:bg-secondary/30 transition-colors duration-500 -mx-6 px-6 rounded-lg">
                <div className="text-sm text-muted-foreground">
                  <span className="text-2xl md:text-3xl font-bold text-foreground block">
                    {exp.label}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-1 group-hover:translate-x-1 transition-transform duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-4">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>);

};

export default ExperienceSection;