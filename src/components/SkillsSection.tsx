import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "SQL", level: 90, icon: "🗃️" },
        { name: "Java", level: 80, icon: "☕" },
        { name: "C/C++", level: 75, icon: "⚡" },
        { name: "Shell", level: 85, icon: "💻" },
        { name: "Prompt Engineering", level: 95, icon: "🎯" }
      ]
    },
    {
      title: "AI/ML Frameworks",
      skills: [
        { name: "PyTorch", level: 95, icon: "🔥" },
        { name: "Transformers", level: 95, icon: "🤖" },
        { name: "LangChain", level: 90, icon: "⛓️" },
        { name: "LangGraph", level: 90, icon: "📊" },
        { name: "AgentCore", level: 85, icon: "🤖" },
        { name: "Scikit-learn", level: 85, icon: "📈" },
        { name: "Fine-Tuning (LoRA/QLoRA/PEFT)", level: 90, icon: "🎛️" },
        { name: "NLP", level: 95, icon: "📝" }
      ]
    },
    {
      title: "Cloud & Infrastructure", 
      skills: [
        { name: "AWS Bedrock", level: 90, icon: "🪨" },
        { name: "AWS SageMaker", level: 90, icon: "🧪" },
        { name: "AWS EKS", level: 85, icon: "⚙️" },
        { name: "AWS Lambda", level: 90, icon: "⚡" },
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "Kubernetes", level: 80, icon: "☸️" },
        { name: "S3", level: 90, icon: "🪣" },
        { name: "EC2", level: 85, icon: "🖥️" }
      ]
    },
    {
      title: "Generative AI Models",
      skills: [
        { name: "GPT-3/4", level: 95, icon: "🧠" },
        { name: "Claude 2/3/3.5", level: 90, icon: "🤖" },
        { name: "Mistral", level: 85, icon: "🌪️" },
        { name: "Llama 2/3", level: 90, icon: "🦙" },
        { name: "Phi-2", level: 80, icon: "φ" },
        { name: "Titan Embeddings", level: 85, icon: "📐" }
      ]
    }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 90) return "text-primary";
    if (level >= 80) return "text-accent";
    return "text-neural-blue";
  };

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge expertise in AI/ML technologies, cloud platforms, and modern development practices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="animate-fade-in hover:shadow-glow-primary transition-smooth">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-lg animate-float" style={{animationDelay: `${skillIndex * 0.1}s`}}>
                          {skill.icon}
                        </span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <Badge variant="outline" className={getProgressColor(skill.level)}>
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2" 
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Python", "PyTorch", "AWS", "Docker", "Kubernetes", "LangChain", 
              "Transformers", "Claude", "GPT", "Llama", "Mistral", "Azure"
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm hover:shadow-glow-accent transition-bounce animate-float"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;