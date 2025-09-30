import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const AboutSection = () => {
  const careerTimeline = [
    {
      company: "Capgemini",
      period: "May 2022 – Present",
      role: "Senior AI/ML Engineer",
      location: "Mumbai, India",
      description: "Leading enterprise GenAI initiatives and building production-scale LLM solutions"
    },
    {
      company: "Tech Mahindra",
      period: "Dec 2019 – May 2022",
      role: "AI/ML Engineer", 
      location: "Pune, India",
      description: "Developed NLP solutions and automated data processing pipelines"
    }
  ];

  const expertiseAreas = [
    {
      title: "LLM Architecture",
      description: "Fine-tuning, LoRA/QLoRA, PEFT, prompt engineering",
      icon: "🧠"
    },
    {
      title: "RAG Pipelines", 
      description: "Vector databases, retrieval optimization, semantic search",
      icon: "🔍"
    },
    {
      title: "Generative AI",
      description: "GPT, Claude, Mistral, Llama integration and optimization",
      icon: "✨"
    },
    {
      title: "AWS Deployment",
      description: "SageMaker, Bedrock, EKS, serverless architectures",
      icon: "☁️"
    }
  ];

  const expertiseBadges = [
    "AI agents and LLM & Generative AI Architect",
    "AWS Cloud Architect",
    "AI & ML Expert",
    "Python, SQL, and data engineering"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-[min(100%,1200px)]">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        {/* About Content Card */}
        <div className="mb-12 animate-fade-in">
          <Card className="bg-card p-6 rounded-2xl shadow-md max-w-3xl mx-auto">
            <CardContent className="p-0">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Results-driven Senior AI/ML Engineer with 5+ years' experience building production LLMs, RAG pipelines, and agentic workflows at enterprise scale. Skilled in PyTorch/Transformers, LoRA/QLoRA/PEFT, LangChain/LangGraph, Agent Core & A2A protocols, and deploying scalable pipelines on AWS (Bedrock, SageMaker, EKS) with CI/CD and monitoring. Seeking a product engineering role to architect scalable, low-latency LLM features and resilient ML platforms that enhance model quality, throughput, and business impact.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Expertise Badges */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-center">Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {expertiseBadges.map((badge, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium"
              >
                {badge}
              </Badge>
            ))}
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center">Career Journey</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {careerTimeline.map((job, index) => (
              <Card key={index} className="hover:shadow-glow-primary transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Building2 className="h-5 w-5 text-primary" />
                        {job.company}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium text-sm sm:text-base">{job.role}</p>
                    </div>
                    <Badge variant="outline" className="shrink-0 text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {job.period}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 animate-fade-in">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground text-xs sm:text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-2">30K+</div>
            <div className="text-muted-foreground text-xs sm:text-sm">Platform Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-neural-blue mb-2">12+</div>
            <div className="text-muted-foreground text-xs sm:text-sm">AI Models Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyber-green mb-2">95%</div>
            <div className="text-muted-foreground text-xs sm:text-sm">NLP Accuracy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;