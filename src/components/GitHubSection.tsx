import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Filter } from "lucide-react";

interface GitHubProject {
  name: string;
  description: string;
  tech: string[];
  highlights: string[];
  stars?: number;
  forks?: number;
  category: string;
  githubUrl?: string;
}

const GitHubSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Personal GitHub projects
  const projects: GitHubProject[] = [
    {
      name: "Prompt Optimiser Service",
      description: "Enterprise-grade prompt optimization service compatible with AWS Bedrock and Azure OpenAI, providing intelligent prompt engineering and refinement capabilities",
      tech: ["Python", "AWS Bedrock", "Azure OpenAI", "FastAPI"],
      highlights: ["Multi-cloud support", "Automated prompt optimization", "Enterprise-scale deployment"],
      category: "AI Services",
      githubUrl: "https://github.com/vaibhavpoojary/prompt-optimiser-service"
    },
    {
      name: "Live Image Detection with VGG-16",
      description: "Real-time image detection system leveraging VGG-16 architecture for accurate object recognition and classification with live streaming capabilities",
      tech: ["Python", "PyTorch", "VGG-16", "OpenCV"],
      highlights: ["Real-time processing", "High accuracy detection", "Optimized inference"],
      category: "Computer Vision",
      githubUrl: "https://github.com/vaibhavpoojary/live-image-detection-vgg16"
    },
    {
      name: "Llama 3.2 Fine-tuning QLoRA & PEFT",
      description: "Advanced fine-tuning implementation of Llama 3.2 using QLoRA and PEFT techniques on AWS SageMaker and NVIDIA RTX A1000 Fury G09 for efficient model adaptation",
      tech: ["Python", "Llama 3.2", "QLoRA", "PEFT", "SageMaker"],
      highlights: ["Memory-efficient training", "Multi-platform deployment", "Parameter-efficient fine-tuning"],
      category: "Model Fine-tuning",
      githubUrl: "https://github.com/vaibhavpoojary/llama3.2-finetuning"
    },
    {
      name: "Microsoft Phi-2 Fine-tuning LoRA & PEFT",
      description: "Optimized fine-tuning pipeline for Microsoft Phi-2 model using LoRA and PEFT on AWS SageMaker and NVIDIA RTX A1000 Fury G09 for domain-specific adaptation",
      tech: ["Python", "Microsoft Phi-2", "LoRA", "PEFT", "SageMaker"],
      highlights: ["Low-rank adaptation", "Efficient parameter tuning", "Production-ready models"],
      category: "Model Fine-tuning",
      githubUrl: "https://github.com/vaibhavpoojary/phi2-finetuning"
    },
    {
      name: "Refined React.js ChatBot UI Templates",
      description: "Collection of production-ready, fully customizable chatbot UI templates built with React.js and developed on Lovable, available freely for various AI assistant use cases",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Lovable"],
      highlights: ["Multiple UI variants", "Responsive design", "Easy integration"],
      category: "Web Applications",
      githubUrl: "https://github.com/vaibhavpoojary/chatbot-ui-templates"
    },
    {
      name: "Property Selling Web App",
      description: "Full-stack property marketplace application featuring AI-powered agent for intelligent property recommendations, built with React.js, Tailwind CSS, Python, and FastAPI",
      tech: ["React.js", "Tailwind CSS", "Python", "FastAPI", "AI Agent"],
      highlights: ["AI-powered recommendations", "Modern UI/UX", "Full-stack architecture"],
      category: "Web Applications",
      githubUrl: "https://github.com/vaibhavpoojary/property-selling-app"
    },
    {
      name: "Agent and LLM Evaluation Dashboard",
      description: "Comprehensive analytics and evaluation dashboard for monitoring AI agent performance and LLM metrics with real-time insights and detailed performance tracking",
      tech: ["React.js", "Python", "FastAPI", "MLFlow"],
      highlights: ["Real-time monitoring", "Performance analytics", "Multi-model evaluation"],
      category: "AI Services",
      githubUrl: "https://github.com/vaibhavpoojary/agent-llm-evaluation-dashboard"
    },
    {
      name: "NLP-Chatbot",
      description: "Enterprise-grade conversational AI chatbot for automating customer support queries, trained on domain-specific datasets with serverless deployment capabilities",
      tech: ["Python", "Transformers", "Flask", "AWS Lambda"],
      highlights: ["Domain-specific training", "Fast response times", "Serverless architecture"],
      category: "AI Services",
      githubUrl: "https://github.com/vaibhavpoojary/NLP-Chatbot"
    },
    {
      name: "RAG-Query-Generator",
      description: "Natural language to SQL converter using RAG techniques and embeddings for semantic understanding of complex database queries with AWS Bedrock integration",
      tech: ["Python", "LangChain", "AWS Bedrock", "Titan Embeddings"],
      highlights: ["Semantic SQL generation", "Large-scale data queries", "RAG-powered understanding"],
      category: "AI Services",
      githubUrl: "https://github.com/vaibhavpoojary/RAG-Query-Generator"
    }
  ];

  const categories = ["All", "AI Services", "Computer Vision", "Model Fine-tuning", "Web Applications"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="github" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-[min(100%,1200px)]">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex flex-wrap items-center justify-center gap-3">
            <Github className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
            Personal <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Open-source contributions and personal AI/ML projects showcasing innovation
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          <Filter className="h-5 w-5 text-muted-foreground self-center mr-2" />
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="px-4 py-2 cursor-pointer hover:shadow-glow-primary transition-bounce"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="animate-fade-in hover:shadow-glow-accent transition-smooth hover:scale-105 group">
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                    {project.name}
                  </CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.highlights.slice(0, 3).map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>

                {/* View Project Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:shadow-glow-primary transition-bounce"
                  onClick={() => window.open(project.githubUrl || `https://github.com/vaibhavpoojary/${project.name}`, "_blank")}
                >
                  <Github className="h-4 w-4 mr-2" />
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Profile CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Button
            size="lg"
            className="shadow-glow-primary hover:shadow-glow-accent transition-bounce"
            onClick={() => window.open("https://github.com/vaibhavpoojary", "_blank")}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View Full GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;