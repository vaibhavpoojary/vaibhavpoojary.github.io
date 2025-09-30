import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Capgemini",
      role: "Senior AI/ML Engineer",
      period: "May 2022 – Present",
      location: "Mumbai, India",
      achievements: [
        {
          title: "RAISE™ GenAI Platform",
          description: "Built enterprise LLM inference, RAG retrievers, chat pipelines, and guardrails serving 30K+ users",
          impact: "30K+ active users",
          tech: ["LangChain", "AWS Bedrock", "RAG", "LLMs"]
        },
        {
          title: "AURA NLP Assistant",
          description: "Developed intelligent assistant achieving 95% accuracy for 65K employees",
          impact: "95% accuracy",
          tech: ["NLP", "Transformers", "Python", "AWS"]
        },
        {
          title: "LangGraph ReAct Multi-Agent Workflows",
          description: "Implemented agentic workflows for automated incident resolution",
          impact: "40% faster resolution",
          tech: ["LangGraph", "Multi-Agent", "ReAct", "Automation"]
        },
        {
          title: "LoRA/QLoRA Fine-Tuning Pipeline",
          description: "Built client-specific LLM adaptation pipeline with parameter-efficient fine-tuning",
          impact: "5K+ monthly queries",
          tech: ["LoRA", "QLoRA", "PEFT", "Fine-Tuning"]
        },
        {
          title: "AgentCore Services Deployment",
          description: "Deployed production AI services on AWS with scalable architecture",
          impact: "60% faster deployment",
          tech: ["AWS SageMaker", "EKS", "Bedrock", "MLOps"]
        },
        {
          title: "Model Evaluation Framework",
          description: "Created comprehensive evaluation system for 12+ AI models using BLEU, ROUGE, F1 metrics",
          impact: "25% cost reduction",
          tech: ["Evaluation", "BLEU", "ROUGE", "Metrics"]
        }
      ]
    },
    {
      company: "Tech Mahindra", 
      role: "AI/ML Engineer",
      period: "Dec 2019 – May 2022",
      location: "Pune, India",
      achievements: [
        {
          title: "NLP Chatbot for Customer Support",
          description: "Automated FAQ resolution system with intelligent query understanding",
          impact: "+35% efficiency",
          tech: ["NLP", "Chatbot", "Python", "ML"]
        },
        {
          title: "ITSM Ticket Classifier",
          description: "Built ML classifier using Random Forest & XGBoost for automated ticket routing",
          impact: "+40% SLA adherence",
          tech: ["Random Forest", "XGBoost", "Classification", "ITSM"]
        },
        {
          title: "Data Migration & ETL Automation",
          description: "Migrated 10M+ call records and automated ETL pipelines with AWS services",
          impact: "10M+ records processed",
          tech: ["AWS Glue", "Lambda", "ETL", "Data Pipeline"]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-[min(100%,1200px)]">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Building enterprise-scale AI solutions with measurable business impact
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="animate-fade-in hover:shadow-glow-primary transition-smooth">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Building2 className="h-6 w-6 text-primary" />
                      {exp.company}
                    </CardTitle>
                    <p className="text-lg text-muted-foreground font-medium mt-1">
                      {exp.role}
                    </p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <Badge variant="outline" className="lg:shrink-0">
                    <Calendar className="h-3 w-3 mr-1" />
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="border-l-2 border-primary/30 pl-6 hover:border-primary/60 transition-smooth">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-lg">{achievement.title}</h4>
                        <div className="flex items-center gap-1 text-accent font-medium">
                          <TrendingUp className="h-4 w-4" />
                          {achievement.impact}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-3">{achievement.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {achievement.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;