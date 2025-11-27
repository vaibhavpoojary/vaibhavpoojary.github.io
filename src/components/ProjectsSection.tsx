import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users } from "lucide-react";

const ProjectsSection = () => {
  const resumeProjects = [
    {
      title: "Unilever – Agentic Data Pipeline Workflow Manager",
      description: "Built intelligent workflow orchestration system using LangGraph and Claude 3.5 for automated data pipeline management and monitoring.",
      impact: "80% downtime reduction",
      tech: ["AWS Glue", "LangGraph", "Claude 3.5", "Workflow Automation"],
      category: "Enterprise AI"
    },
    {
      title: "GE Aerospace – AI-Powered ServiceNow Agent",
      description: "Developed autonomous agent for automated L1 ticket resolution with intelligent routing and response generation.",
      impact: "60% automated resolution",
      tech: ["ServiceNow", "NLP", "Agent Framework", "Automation"],
      category: "Intelligent Automation"
    },
    {
      title: "Covestro & CCJP – RAG-Based SQL Query Generator",
      description: "Created natural language to SQL converter using RAG techniques for semantic understanding and query optimization.",
      impact: "60% less manual SQL, 30% faster queries",
      tech: ["RAG", "SQL", "NLP", "Semantic Search"],
      category: "Data Intelligence"
    },
    {
      title: "Capgemini RAISE – Modular AI Microservices",
      description: "Architected and deployed scalable LLM inference and RAG pipeline microservices for enterprise AI platform.",
      impact: "30K+ active users",
      tech: ["Microservices", "LLM Inference", "RAG", "Scalability"],
      category: "Platform Architecture"
    },
    {
      title: "Tech Mahindra – Chatbot for ITSM Support Team",
      description: "Built intelligent conversational AI chatbot for IT service management support team automation and ticket handling.",
      impact: "60% ticket resolution automation",
      tech: ["NLP", "RASA", "ITSM Integration", "Automation"],
      category: "Intelligent Automation"
    },
    {
      title: "Capgemini – NLP Chatbot for Insurance Sector",
      description: "Developed intelligent conversational AI chatbot for insurance claims processing and customer support using NLP and intent recognition.",
      impact: "70% faster claim queries, 50% cost reduction",
      tech: ["NLP", "RASA", "Intent Recognition", "Dialogue Management"],
      category: "Intelligent Automation"
    },
    {
      title: "Capgemini – Prompt Optimizer Service",
      description: "Built intelligent prompt optimization service for AWS Bedrock and Azure using GPT-4.1 and Claude 3.5 for enhanced LLM performance.",
      impact: "40% better response quality",
      tech: ["AWS Bedrock", "Azure", "GPT-4.1", "Claude 3.5"],
      category: "Platform Architecture"
    },
    {
      title: "Capgemini – A2A Agent Protocol with LangGraph",
      description: "Orchestrated 400+ AI agents using Agent-to-Agent protocol and LangGraph for scalable multi-agent coordination.",
      impact: "400+ agents orchestrated",
      tech: ["LangGraph", "A2A Protocol", "Multi-Agent", "Orchestration"],
      category: "Enterprise AI"
    },
    {
      title: "Capgemini – Agent Builder Service",
      description: "Comprehensive agent development platform supporting AWS Bedrock Agent core, LangGraph orchestration, MLFlow integration, and advanced agent evaluation frameworks.",
      impact: "Unified agent development platform",
      tech: ["AWS Bedrock", "LangGraph", "MLFlow", "Agent Framework"],
      category: "Platform Architecture"
    },
    {
      title: "AWS FinOps – Cloud Cost Optimization Platform",
      description: "Designed and implemented an AWS FinOps solution to monitor, analyze, and optimize cloud infrastructure costs across multiple business units.",
      impact: "25% cloud spend reduction in 3 months",
      tech: ["AWS Cost Explorer", "AWS Budgets", "CloudWatch", "FinOps"],
      category: "Enterprise AI"
    }
  ];

  const categories = ["All", "Enterprise AI", "Intelligent Automation", "Data Intelligence", "Platform Architecture"];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 max-w-[min(100%,1200px)]">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-scale AI solutions delivering measurable business impact
          </p>
        </div>

        {/* Project Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category, index) => (
            <Badge 
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="px-4 py-2 cursor-pointer hover:shadow-glow-primary transition-bounce"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Resume Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resumeProjects.map((project, index) => (
            <Card key={index} className="animate-fade-in hover:shadow-glow-accent transition-smooth hover:scale-105 group">
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline" className="shrink-0 text-xs">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-2 text-accent font-medium">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">{project.impact}</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tech.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Projects CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto animate-fade-in hover:shadow-glow-primary transition-smooth">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Personal Projects</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Explore my open-source contributions and personal AI/ML projects on GitHub
              </p>
              <Button 
                size="lg"
                className="shadow-glow-primary hover:shadow-glow-accent transition-bounce"
                onClick={() => {
                  const element = document.getElementById('github');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View GitHub Projects
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;