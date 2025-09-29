import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Star, Calendar } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      provider: "Amazon Web Services",
      date: "2023",
      description: "Comprehensive cloud architecture and deployment expertise",
      icon: "☁️",
      color: "text-code-orange"
    },
    {
      title: "AWS Certified AI Practitioner",
      provider: "Amazon Web Services", 
      date: "2023",
      description: "AI/ML services and implementation on AWS platform",
      icon: "🤖",
      color: "text-primary"
    },
    {
      title: "IBM Data Science Professional Certificate",
      provider: "IBM",
      date: "2022",
      description: "Advanced data science methodologies and machine learning",
      icon: "📊",
      color: "text-neural-blue"
    },
    {
      title: "Dataiku ML Practitioner Certification",
      provider: "Dataiku",
      date: "2022", 
      description: "Enterprise machine learning platform expertise",
      icon: "🛠️",
      color: "text-cyber-green"
    }
  ];

  const achievements = [
    {
      title: "Shining Star Award",
      description: "Outstanding performance in GenAI platform development",
      year: "2023",
      count: 2,
      icon: "⭐"
    },
    {
      title: "Rising Star Award",
      description: "Exceptional contribution to AI/ML initiatives",
      year: "2022",
      count: 1,
      icon: "🌟"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="bg-gradient-secondary bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-recognized certifications and awards highlighting expertise and excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Professional Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="animate-fade-in hover:shadow-glow-primary transition-smooth">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`text-3xl animate-float ${cert.color}`} style={{animationDelay: `${index * 0.5}s`}}>
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{cert.title}</CardTitle>
                        <p className="text-muted-foreground font-medium">{cert.provider}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Awards & Achievements */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
              <Star className="h-6 w-6 text-accent" />
              Awards & Recognition
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="animate-fade-in hover:shadow-glow-accent transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-lg">{achievement.title}</h4>
                          {achievement.count > 1 && (
                            <Badge variant="secondary" className="text-xs">
                              {achievement.count}x
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">
                          {achievement.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{achievement.year}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Statistics Card */}
              <Card className="animate-fade-in hover:shadow-glow-primary transition-smooth">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4 text-center">Recognition Summary</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">3</div>
                      <div className="text-sm text-muted-foreground">Total Awards</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent mb-1">4</div>
                      <div className="text-sm text-muted-foreground">Certifications</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;