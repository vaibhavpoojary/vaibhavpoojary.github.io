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

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            5+ years building production LLMs, RAG pipelines, and agentic workflows. 
            Expert in PyTorch, Transformers, LangChain, LangGraph, and AWS deployment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Career Timeline */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Career Journey</h3>
            <div className="space-y-6">
              {careerTimeline.map((job, index) => (
                <Card key={index} className="hover:shadow-glow-primary transition-smooth">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Building2 className="h-5 w-5 text-primary" />
                          {job.company}
                        </CardTitle>
                        <p className="text-muted-foreground font-medium">{job.role}</p>
                      </div>
                      <Badge variant="outline" className="shrink-0">
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
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Expertise Areas</h3>
            <div className="grid gap-6">
              {expertiseAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-glow-accent transition-smooth hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                        {area.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{area.title}</h4>
                        <p className="text-muted-foreground text-sm">{area.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">30K+</div>
            <div className="text-muted-foreground">Platform Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neural-blue mb-2">12+</div>
            <div className="text-muted-foreground">AI Models Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyber-green mb-2">95%</div>
            <div className="text-muted-foreground">NLP Accuracy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;