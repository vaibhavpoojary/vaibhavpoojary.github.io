import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import pythonLogo from "@/assets/logos/python.png";
import awsLogo from "@/assets/logos/aws.png";
import dockerLogo from "@/assets/logos/docker.png";
import kubernetesLogo from "@/assets/logos/kubernetes.png";
import pytorchLogo from "@/assets/logos/pytorch.png";
import langchainLogo from "@/assets/logos/langchain.png";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "🚀 Core Programming & Scripting",
      skills: [
        { name: "Python", logo: pythonLogo, description: "Primary programming language" },
        { name: "SQL", logo: "🧠", description: "Database queries & optimization" },
        { name: "Bash/Shell", logo: "💻", description: "System automation & scripting" },
        { name: "Java", logo: "☕", description: "Enterprise applications" },
        { name: "C/C++", logo: "⚡", description: "System programming" },
      ]
    },
    {
      title: "🧠 AI / ML / GenAI Stack",
      skills: [
        { name: "PyTorch", logo: pytorchLogo, description: "Deep learning framework" },
        { name: "LangChain", logo: langchainLogo, description: "LLM application framework" },
        { name: "LangGraph", logo: "🧭", description: "AI workflow orchestration" },
        { name: "OpenAI GPT", logo: "🤖", description: "GPT-3/4 integration" },
        { name: "Anthropic Claude", logo: "💬", description: "Claude 2/3/3.5 models" },
        { name: "Mistral AI", logo: "🌬️", description: "Open-source LLMs" },
        { name: "AWS Bedrock", logo: "🪨", description: "Managed AI services" },
        { name: "RAG Pipelines", logo: "📚", description: "Retrieval-Augmented Generation" },
        { name: "Embeddings", logo: "📐", description: "Vector databases & search" },
        { name: "LlamaIndex", logo: "🦙", description: "Data framework for LLMs" },
        { name: "Transformers", logo: "🤗", description: "HuggingFace models" },
        { name: "Fine-Tuning", logo: "🎛️", description: "LoRA/QLoRA/PEFT" },
      ]
    },
    {
      title: "☁️ Cloud Platforms",
      skills: [
        { name: "AWS", logo: awsLogo, description: "Primary cloud platform" },
        { name: "Azure", logo: "🌐", description: "Microsoft cloud services" },
        { name: "SageMaker", logo: "🧪", description: "ML model deployment" },
        { name: "AI Foundry", logo: "🤖", description: "Azure AI Studio" },
        { name: "AWS Lambda", logo: "⚡", description: "Serverless computing" },
        { name: "AWS S3", logo: "🪣", description: "Object storage" },
        { name: "AWS Glue", logo: "🔗", description: "ETL & data pipelines" },
      ]
    },
    {
      title: "⚙️ DevOps & Containerization",
      skills: [
        { name: "Docker", logo: dockerLogo, description: "Containerization platform" },
        { name: "Kubernetes", logo: kubernetesLogo, description: "Container orchestration" },
        { name: "Git", logo: "🔧", description: "Version control" },
        { name: "GitHub Actions", logo: "⚙️", description: "CI/CD pipelines" },
        { name: "Terraform", logo: "🧱", description: "Infrastructure as code" },
        { name: "MLOps", logo: "🔄", description: "ML deployment pipelines" },
      ]
    },
    {
      title: "🧩 Data & Storage",
      skills: [
        { name: "Azure Blob", logo: "📦", description: "Object storage" },
        { name: "RDS", logo: "🗄️", description: "Relational databases" },
        { name: "DynamoDB", logo: "⚡", description: "NoSQL database" },
        { name: "OpenSearch", logo: "🔍", description: "Search & analytics" },
        { name: "Pinecone", logo: "🌲", description: "Vector database" },
        { name: "ADF", logo: "🔄", description: "Azure Data Factory" },
      ]
    },
    {
      title: "🧭 Workflow & Orchestration",
      skills: [
        { name: "Step Functions", logo: "🔄", description: "AWS workflow orchestration" },
        { name: "ServiceNow", logo: "🧾", description: "ITSM integration" },
        { name: "AgentCore", logo: "🤖", description: "Multi-agent systems" },
        { name: "Streamlit", logo: "📊", description: "ML app development" },
        { name: "FastAPI", logo: "⚡", description: "API development" },
      ]
    },
    {
      title: "📈 MLOps & Monitoring",
      skills: [
        { name: "MLflow", logo: "📊", description: "Model tracking" },
        { name: "Model Evaluation", logo: "📏", description: "BLEU, ROUGE, F1 metrics" },
        { name: "Prometheus", logo: "📈", description: "System monitoring" },
        { name: "Grafana", logo: "📊", description: "Observability dashboards" },
        { name: "AWS CloudWatch", logo: "👁️", description: "Cloud monitoring" },
      ]
    },
    {
      title: "🧰 Development Tools",
      skills: [
        { name: "VS Code", logo: "💻", description: "Primary IDE" },
        { name: "Jupyter", logo: "📓", description: "ML experiments" },
        { name: "Postman", logo: "📬", description: "API testing" },
        { name: "Git", logo: "🔀", description: "Version control" },
        { name: "Linux", logo: "🐧", description: "Server environments" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-secondary bg-clip-text text-transparent">Stack</span>
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
                        {typeof skill.logo === 'string' && skill.logo.startsWith('/') ? (
                          <img 
                            src={skill.logo} 
                            alt={`${skill.name} logo`}
                            className="w-12 h-12 object-contain"
                          />
                        ) : typeof skill.logo === 'string' && skill.logo.length <= 4 ? (
                          <span className="text-3xl animate-float" style={{animationDelay: `${skillIndex * 0.1}s`}}>
                            {skill.logo}
                          </span>
                        ) : (
                          <img 
                            src={skill.logo} 
                            alt={`${skill.name} logo`}
                            className="w-12 h-12 object-contain"
                          />
                        )}
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
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground text-sm">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">8</div>
            <div className="text-muted-foreground text-sm">Tech Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neural-blue mb-2">12+</div>
            <div className="text-muted-foreground text-sm">AI Models</div>
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