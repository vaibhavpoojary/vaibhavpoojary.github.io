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

  // Mock data for personal projects (in real implementation, you'd fetch from GitHub API)
  const projects: GitHubProject[] = [
    {
      name: "AgentCore",
      description: "Modular framework for building and deploying agent-based AI systems, supporting multi-agent orchestration, enterprise-scale deployment, and seamless integration of various AI models",
      tech: ["Python", "LangChain", "AWS Lambda", "Docker"],
      highlights: ["Multi-agent orchestration", "Scalable deployment", "Enterprise AI integration"],
      stars: 156,
      forks: 34,
      category: "AI/ML",
      githubUrl: "https://github.com/vaibhavpoojary/AgentCore"
    },
    {
      name: "LangGraph",
      description: "Graph-based framework for building complex AI workflows with efficient task management and dynamic pipeline orchestration",
      tech: ["Python", "LangChain", "NetworkX", "AWS Step Functions"],
      highlights: ["Real-time workflow processing", "AWS integration", "Dynamic AI pipelines"],
      stars: 203,
      forks: 67,
      category: "AI/ML",
      githubUrl: "https://github.com/vaibhavpoojary/LangGraph"
    },
    {
      name: "RAG-Query-Generator",
      description: "Converts natural language to SQL using embeddings and RAG techniques for semantic understanding of complex database queries",
      tech: ["Python", "LangChain", "AWS Bedrock", "Titan Embeddings"],
      highlights: ["Reduces manual query writing", "Supports large-scale data queries", "Semantic SQL generation"],
      stars: 89,
      forks: 23,
      category: "Generative AI"
    },
    {
      name: "NLP-Chatbot",
      description: "Conversational AI for automating customer support queries, trained on domain-specific datasets, deployable serverless",
      tech: ["Python", "Transformers", "Flask", "AWS Lambda"],
      highlights: ["Fast response times", "Enterprise support integration", "Domain-specific training"],
      stars: 124,
      forks: 41,
      category: "AI/ML"
    },
    {
      name: "SQL-Query-Optimizer",
      description: "Analyzes and optimizes SQL queries for performance improvement with intelligent recommendations",
      tech: ["Python", "SQLAlchemy", "Pandas"],
      highlights: ["Detects inefficiencies", "Suggests optimizations", "Multi-DB support"],
      stars: 76,
      forks: 18,
      category: "Tools"
    },
    {
      name: "Image-Classification-Model",
      description: "CNN-based image classifier with data augmentation techniques for benchmark datasets",
      tech: ["Python", "PyTorch", "OpenCV"],
      highlights: ["High accuracy", "Adaptable architecture", "Multiple classification tasks"],
      stars: 62,
      forks: 15,
      category: "AI/ML"
    },
    {
      name: "Data-Pipeline-Automation",
      description: "Automated ETL pipelines for data ingestion, transformation, and loading into centralized storage systems",
      tech: ["Python", "AWS Glue", "S3", "SQL"],
      highlights: ["Ensures data consistency", "Scalable for large datasets", "Automated scheduling"],
      stars: 45,
      forks: 12,
      category: "Data Pipelines"
    },
    {
      name: "Model-Evaluation-Framework",
      description: "Comprehensive framework for evaluating ML models using multiple metrics with detailed visualization",
      tech: ["Python", "Scikit-learn", "Matplotlib"],
      highlights: ["Model comparison", "Visual performance insights", "Multiple evaluation metrics"],
      stars: 38,
      forks: 9,
      category: "Tools"
    },
    {
      name: "CI-CD-Pipeline-Setup",
      description: "CI/CD pipeline for automated ML model testing and deployment with version control integration",
      tech: ["Python", "GitHub Actions", "Docker"],
      highlights: ["Reliable deployments", "Version control integration", "Automated testing"],
      stars: 52,
      forks: 14,
      category: "Tools"
    },
    {
      name: "AWS-Resource-Optimization",
      description: "Tool for analyzing AWS resource usage and suggesting optimizations for cost and efficiency improvements",
      tech: ["Python", "Boto3", "AWS Cost Explorer"],
      highlights: ["Identifies underutilized resources", "Cost-saving strategies", "Resource monitoring"],
      stars: 71,
      forks: 19,
      category: "Tools"
    }
  ];

  const categories = ["All", "AI/ML", "Generative AI", "Data Pipelines", "Tools"];

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