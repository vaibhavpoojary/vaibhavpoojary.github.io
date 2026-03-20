import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const skillGroups = [
{
  title: "AI / ML / GenAI",
  subtitle: "Building Intelligent Systems",
  description:
  "Fine-tuning LLMs, building RAG pipelines, multi-agent orchestration, and deploying production AI solutions at scale.",
  skills: [
  "PyTorch", "Transformers", "LangChain", "LangGraph", "OpenAI GPT",
  "Claude", "Mistral", "Llama", "RAG Pipelines", "LoRA/QLoRA",
  "PEFT", "Embeddings", "AWS Bedrock", "ML Algorithms"]

},
{
  title: "Cloud & DevOps",
  subtitle: "Scalable Infrastructure",
  description:
  "Deploying and managing AI workloads on cloud platforms with containerized microservices and CI/CD pipelines.",
  skills: [
  "AWS", "Azure", "Databricks", "Docker", "Kubernetes",
  "SageMaker", "FastAPI", "Flask", "Streamlit", "React",
  "Python", "SQL", "Bash/Shell", "Git"]

}];


const SkillsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
            What I Do
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-16 text-balance leading-[1.1]">​

            <br />Skillset
          </h2>
        </ScrollReveal>

        {/* Toggle */}
        <ScrollReveal delay={0.1}>
          <div className="flex gap-2 mb-12">
            {skillGroups.map((group, i) => <button
              key={group.title}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeIndex === i ?
              "bg-foreground text-background" :
              "bg-secondary text-muted-foreground hover:text-foreground"}`
              }>
                
                {group.title}
              </button>
            )}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  {skillGroups[activeIndex].subtitle}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {skillGroups[activeIndex].description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {skillGroups[activeIndex].skills.map((skill, i) =>
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03, duration: 0.3 }}
                  className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-300 cursor-default">
                  
                    {skill}
                  </motion.span>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>);

};

export default SkillsSection;