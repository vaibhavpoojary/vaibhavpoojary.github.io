import { Github, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    name: "Prompt Optimiser Service",
    description: "Enterprise prompt optimization for AWS Bedrock & Azure OpenAI",
    tech: ["Python", "AWS Bedrock", "FastAPI"],
    url: "https://github.com/vaibhavpoojary/prompt-optimiser-service",
  },
  {
    name: "Live Image Detection VGG-16",
    description: "Real-time object recognition using VGG-16 architecture",
    tech: ["PyTorch", "VGG-16", "OpenCV"],
    url: "https://github.com/vaibhavpoojary/live-image-detection-vgg16",
  },
  {
    name: "Llama 3.2 Fine-tuning QLoRA",
    description: "Advanced fine-tuning with QLoRA and PEFT on SageMaker",
    tech: ["Llama 3.2", "QLoRA", "SageMaker"],
    url: "https://github.com/vaibhavpoojary/llama3.2-finetuning",
  },
  {
    name: "RAG Query Generator",
    description: "Natural language to SQL using RAG and AWS Bedrock",
    tech: ["LangChain", "AWS Bedrock", "Embeddings"],
    url: "https://github.com/vaibhavpoojary/RAG-Query-Generator",
  },
  {
    name: "Agent & LLM Evaluation Dashboard",
    description: "Analytics dashboard for AI agent and LLM performance",
    tech: ["React", "Python", "MLFlow"],
    url: "https://github.com/vaibhavpoojary/agent-llm-evaluation-dashboard",
  },
  {
    name: "NLP Chatbot",
    description: "Enterprise conversational AI with serverless deployment",
    tech: ["Transformers", "Flask", "AWS Lambda"],
    url: "https://github.com/vaibhavpoojary/NLP-Chatbot",
  },
];

const GitHubSection = () => {
  return (
    <section id="github" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
            Open Source
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-16 text-balance leading-[1.1]">
            Personal<br />Projects
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid md:grid-cols-[1fr_auto] gap-4 py-8 border-t border-border hover:bg-secondary/30 transition-all duration-500 -mx-6 px-6 rounded-lg cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg md:text-xl font-semibold group-hover:translate-x-1 transition-transform duration-300">
                      {project.name}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-muted-foreground text-sm mb-3 max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden md:flex items-center">
                  <Github className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 pt-8 border-t border-border">
            <a
              href="https://github.com/vaibhavpoojary"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              <Github className="h-5 w-5" />
              <span className="text-sm">View full GitHub profile</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GitHubSection;
