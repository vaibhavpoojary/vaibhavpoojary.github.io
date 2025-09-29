import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "🚀 Core Programming & Scripting",
      skills: [
        { 
          name: "Python", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
          description: "Primary programming language" 
        },
        { 
          name: "SQL", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", 
          description: "Database queries & optimization" 
        },
        { 
          name: "Bash/Shell", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", 
          description: "System automation & scripting" 
        },
        { 
          name: "Java", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", 
          description: "Enterprise applications" 
        },
        { 
          name: "C/C++", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", 
          description: "System programming" 
        },
      ]
    },
    {
      title: "🧠 AI / ML / GenAI Stack",
      skills: [
        { 
          name: "PyTorch", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", 
          description: "Deep learning framework" 
        },
        { 
          name: "TensorFlow", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", 
          description: "ML framework" 
        },
        { 
          name: "OpenAI GPT", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", 
          description: "GPT-3/4 integration" 
        },
        { 
          name: "Transformers", 
          logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", 
          description: "HuggingFace models" 
        },
        { 
          name: "LangChain", 
          logo: "🔗", 
          description: "LLM application framework" 
        },
        { 
          name: "LangGraph", 
          logo: "🧭", 
          description: "AI workflow orchestration" 
        },
        { 
          name: "Anthropic Claude", 
          logo: "💬", 
          description: "Claude 2/3/3.5 models" 
        },
        { 
          name: "Mistral AI", 
          logo: "🌬️", 
          description: "Open-source LLMs" 
        },
        { 
          name: "AWS Bedrock", 
          logo: "🪨", 
          description: "Managed AI services" 
        },
        { 
          name: "RAG Pipelines", 
          logo: "📚", 
          description: "Retrieval-Augmented Generation" 
        },
        { 
          name: "Embeddings", 
          logo: "📐", 
          description: "Vector databases & search" 
        },
        { 
          name: "Fine-Tuning", 
          logo: "🎛️", 
          description: "LoRA/QLoRA/PEFT" 
        },
      ]
    },
    {
      title: "☁️ Cloud Platforms",
      skills: [
        { 
          name: "AWS", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", 
          description: "Primary cloud platform" 
        },
        { 
          name: "Azure", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", 
          description: "Microsoft cloud services" 
        },
        { 
          name: "Google Cloud", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", 
          description: "GCP services" 
        },
        { 
          name: "SageMaker", 
          logo: "🧪", 
          description: "ML model deployment" 
        },
        { 
          name: "AWS Lambda", 
          logo: "⚡", 
          description: "Serverless computing" 
        },
        { 
          name: "AWS S3", 
          logo: "🪣", 
          description: "Object storage" 
        },
        { 
          name: "Azure Blob", 
          logo: "📦", 
          description: "Object storage" 
        },
      ]
    },
    {
      title: "⚙️ DevOps & Containerization",
      skills: [
        { 
          name: "Docker", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", 
          description: "Containerization platform" 
        },
        { 
          name: "Kubernetes", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", 
          description: "Container orchestration" 
        },
        { 
          name: "Git", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", 
          description: "Version control" 
        },
        { 
          name: "GitHub", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", 
          description: "Code repository" 
        },
        { 
          name: "Terraform", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", 
          description: "Infrastructure as code" 
        },
        { 
          name: "Jenkins", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", 
          description: "CI/CD pipeline" 
        },
      ]
    },
    {
      title: "🧩 Data & Storage",
      skills: [
        { 
          name: "PostgreSQL", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", 
          description: "Relational database" 
        },
        { 
          name: "MongoDB", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", 
          description: "NoSQL database" 
        },
        { 
          name: "Redis", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", 
          description: "In-memory data store" 
        },
        { 
          name: "Elasticsearch", 
          logo: "🔍", 
          description: "Search & analytics" 
        },
        { 
          name: "Pinecone", 
          logo: "🌲", 
          description: "Vector database" 
        },
        { 
          name: "ADF", 
          logo: "🔄", 
          description: "Azure Data Factory" 
        },
      ]
    },
    {
      title: "🧭 Frameworks & Libraries",
      skills: [
        { 
          name: "FastAPI", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", 
          description: "Python web framework" 
        },
        { 
          name: "Flask", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", 
          description: "Python web framework" 
        },
        { 
          name: "Streamlit", 
          logo: "📊", 
          description: "ML app development" 
        },
        { 
          name: "React", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
          description: "Frontend framework" 
        },
        { 
          name: "Node.js", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
          description: "JavaScript runtime" 
        },
      ]
    },
    {
      title: "📈 MLOps & Monitoring",
      skills: [
        { 
          name: "MLflow", 
          logo: "📊", 
          description: "Model tracking" 
        },
        { 
          name: "Prometheus", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg", 
          description: "System monitoring" 
        },
        { 
          name: "Grafana", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", 
          description: "Observability dashboards" 
        },
        { 
          name: "DVC", 
          logo: "📏", 
          description: "Data version control" 
        },
        { 
          name: "Weights & Biases", 
          logo: "🏃‍♂️", 
          description: "Experiment tracking" 
        },
      ]
    },
    {
      title: "🧰 Development Tools",
      skills: [
        { 
          name: "VS Code", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", 
          description: "Primary IDE" 
        },
        { 
          name: "Jupyter", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", 
          description: "ML experiments" 
        },
        { 
          name: "PyCharm", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg", 
          description: "Python IDE" 
        },
        { 
          name: "Postman", 
          logo: "📬", 
          description: "API testing" 
        },
        { 
          name: "Linux", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", 
          description: "Server environments" 
        },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-accent">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the modern AI/ML and cloud technology ecosystem
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="animate-fade-in hover:shadow-glow-primary transition-smooth">
              <CardHeader>
                <CardTitle className="text-lg font-bold">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex flex-col items-center p-3 rounded-lg hover:bg-muted/50 transition-smooth group cursor-pointer"
                    >
                      <div className="mb-3 group-hover:scale-110 transition-transform">
                        {skill.logo.startsWith('http') ? (
                          <img 
                            src={skill.logo} 
                            alt={`${skill.name} logo`}
                            className="w-12 h-12 object-contain"
                            onError={(e) => {
                              // Fallback to emoji if CDN fails
                              const target = e.currentTarget as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = target.parentElement?.querySelector('.fallback') as HTMLElement;
                              if (fallback) fallback.style.display = 'block';
                            }}
                          />
                        ) : (
                          <span className="text-3xl animate-float" style={{animationDelay: `${skillIndex * 0.1}s`}}>
                            {skill.logo}
                          </span>
                        )}
                        {/* Emoji fallback */}
                        <span 
                          className="fallback text-3xl animate-float hidden" 
                          style={{animationDelay: `${skillIndex * 0.1}s`}}
                        >
                          {skill.name === 'Python' ? '🐍' : 
                           skill.name === 'AWS' ? '☁️' : 
                           skill.name === 'Docker' ? '🐳' : 
                           skill.name === 'Kubernetes' ? '☸️' : 
                           skill.name === 'Git' ? '🔧' :
                           skill.name === 'GitHub' ? '🐙' :
                           skill.name === 'PyTorch' ? '🔥' :
                           skill.name === 'TensorFlow' ? '📊' :
                           skill.name === 'React' ? '⚛️' :
                           skill.name === 'Node.js' ? '🟢' :
                           skill.name === 'VS Code' ? '💻' :
                           skill.name === 'Linux' ? '🐧' :
                           '⚙️'}
                        </span>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-sm mb-1">{skill.name}</div>
                        <div className="text-xs text-muted-foreground line-clamp-2">
                          {skill.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">60+</div>
            <div className="text-muted-foreground text-sm">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">8</div>
            <div className="text-muted-foreground text-sm">Tech Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neural-blue mb-2">15+</div>
            <div className="text-muted-foreground text-sm">Frameworks</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyber-green mb-2">5+</div>
            <div className="text-muted-foreground text-sm">Cloud Platforms</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;