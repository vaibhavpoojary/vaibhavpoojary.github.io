import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Core Programming & Scripting",
      skills: [
        { 
          name: "Python", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
          description: "Primary language" 
        },
        { 
          name: "SQL", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", 
          description: "Database queries" 
        },
        { 
          name: "Bash/Shell", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", 
          description: "Automation" 
        },
        { 
          name: "C/C++", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", 
          description: "System programming" 
        },
      ]
    },
    {
      title: "AI / ML / GenAI Stack",
      skills: [
        { 
          name: "PyTorch", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", 
          description: "Deep learning" 
        },
        { 
          name: "Transformers", 
          logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", 
          description: "HuggingFace" 
        },
        { 
          name: "OpenAI GPT", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", 
          description: "GPT-3/4" 
        },
        { 
          name: "LangChain", 
          logo: "🔗", 
          description: "LLM framework" 
        },
        { 
          name: "LangGraph", 
          logo: "🧭", 
          description: "AI orchestration" 
        },
        { 
          name: "Anthropic Claude", 
          logo: "💬", 
          description: "Claude models" 
        },
        { 
          name: "Mistral AI", 
          logo: "🌬️", 
          description: "Open LLMs" 
        },
        { 
          name: "Llama", 
          logo: "🦙", 
          description: "Meta LLMs" 
        },
        { 
          name: "AWS Bedrock", 
          logo: "🪨", 
          description: "Managed AI" 
        },
        { 
          name: "RAG Pipelines", 
          logo: "📚", 
          description: "Retrieval-Augmented" 
        },
        { 
          name: "Embeddings", 
          logo: "📐", 
          description: "Vector search" 
        },
        { 
          name: "Fine-Tuning", 
          logo: "🎛️", 
          description: "LoRA/QLoRA/PEFT" 
        },
        { 
          name: "ML Algorithms", 
          logo: "🤖", 
          description: "Core ML" 
        },
      ]
    },
    {
      title: "Cloud Platforms",
      skills: [
        { 
          name: "AWS", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", 
          description: "Primary cloud" 
        },
        { 
          name: "Azure", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", 
          description: "Microsoft cloud" 
        },
        { 
          name: "Databricks", 
          logo: "🧱", 
          description: "Data + AI platform" 
        },
      ]
    },
    {
      title: "DevOps & Containerization",
      skills: [
        { 
          name: "Docker", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", 
          description: "Containerization" 
        },
        { 
          name: "Kubernetes", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", 
          description: "Orchestration" 
        },
      ]
    },
    {
      title: "Data & Storage",
      skills: [
        { 
          name: "SQL", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", 
          description: "Relational DB" 
        },
        { 
          name: "NoSQL", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", 
          description: "Document DB" 
        },
        { 
          name: "OpenSearch", 
          logo: "🔍", 
          description: "Search engine" 
        },
        { 
          name: "Redis", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", 
          description: "In-memory cache" 
        },
        { 
          name: "Pinecone", 
          logo: "🌲", 
          description: "Vector DB" 
        },
        { 
          name: "AWS S3", 
          logo: "🪣", 
          description: "Object storage" 
        },
        { 
          name: "DynamoDB", 
          logo: "💾", 
          description: "NoSQL AWS" 
        },
        { 
          name: "RDS", 
          logo: "🗄️", 
          description: "Relational AWS" 
        },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { 
          name: "FastAPI", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", 
          description: "Python web" 
        },
        { 
          name: "API Gateway", 
          logo: "⚡", 
          description: "AWS Gateway" 
        },
        { 
          name: "Flask", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", 
          description: "Python micro" 
        },
        { 
          name: "Streamlit", 
          logo: "📊", 
          description: "ML apps" 
        },
        { 
          name: "React", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
          description: "Frontend" 
        },
      ]
    },
    {
      title: "MLOps & Monitoring",
      skills: [
        { 
          name: "MLOps", 
          logo: "📊", 
          description: "Model monitoring" 
        },
        { 
          name: "LLM Evaluation", 
          logo: "🎯", 
          description: "Model metrics" 
        },
        { 
          name: "Agent Evaluation", 
          logo: "🤖", 
          description: "Agent testing" 
        },
      ]
    },
    {
      title: "Development Tools",
      skills: [
        { 
          name: "VS Code", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", 
          description: "Primary IDE" 
        },
        { 
          name: "Jupyter", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", 
          description: "Notebooks" 
        },
        { 
          name: "Git", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", 
          description: "Version control" 
        },
        { 
          name: "GitHub", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", 
          description: "Code hosting" 
        },
        { 
          name: "Postman", 
          logo: "📬", 
          description: "API testing" 
        },
        { 
          name: "Linux", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", 
          description: "OS" 
        },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 max-w-[min(100%,1200px)]">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-accent">Stack</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the modern AI/ML and cloud technology ecosystem
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="animate-fade-in hover:shadow-glow-primary transition-smooth">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg font-bold">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 sm:gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex items-center justify-center p-2 rounded-lg hover:bg-muted/50 transition-smooth group cursor-pointer"
                      title={skill.name}
                    >
                      <div className="group-hover:scale-110 transition-transform">
                        {skill.logo.startsWith('http') ? (
                          <img 
                            src={skill.logo} 
                            alt={`${skill.name} logo`}
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain opacity-80 group-hover:opacity-100"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = target.parentElement?.querySelector('.fallback') as HTMLElement;
                              if (fallback) fallback.style.display = 'block';
                            }}
                          />
                        ) : (
                          <span className="text-lg sm:text-xl animate-float opacity-80 group-hover:opacity-100" style={{animationDelay: `${skillIndex * 0.1}s`}}>
                            {skill.logo}
                          </span>
                        )}
                        <span 
                          className="fallback text-lg sm:text-xl animate-float hidden" 
                          style={{animationDelay: `${skillIndex * 0.1}s`}}
                        >
                          {skill.name === 'Python' ? '🐍' : 
                           skill.name === 'AWS' ? '☁️' : 
                           skill.name === 'Docker' ? '🐳' : 
                           skill.name === 'Kubernetes' ? '☸️' : 
                           skill.name === 'Git' ? '🔧' :
                           skill.name === 'GitHub' ? '🐙' :
                           skill.name === 'PyTorch' ? '🔥' :
                           skill.name === 'React' ? '⚛️' :
                           skill.name === 'VS Code' ? '💻' :
                           skill.name === 'Linux' ? '🐧' :
                           '⚙️'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 animate-fade-in">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground text-xs sm:text-sm">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-2">8</div>
            <div className="text-muted-foreground text-xs sm:text-sm">Tech Categories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-neural-blue mb-2">12+</div>
            <div className="text-muted-foreground text-xs sm:text-sm">Frameworks</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyber-green mb-2">3</div>
            <div className="text-muted-foreground text-xs sm:text-sm">Cloud Platforms</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;