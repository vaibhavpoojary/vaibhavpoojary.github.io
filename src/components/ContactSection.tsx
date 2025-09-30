import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:vaibhavb568@gmail.com",
      value: "vaibhavb568@gmail.com",
      color: "hover:shadow-glow-primary"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/vaibhavpoojary",
      value: "github.com/vaibhavpoojary",
      color: "hover:shadow-glow-accent"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/vaibhavpoojary",
      value: "linkedin.com/in/vaibhavpoojary",
      color: "hover:shadow-glow-primary"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-[min(100%,1200px)]">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss AI/ML opportunities or collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="animate-fade-in hover:shadow-glow-primary transition-smooth">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="h-6 w-6 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="transition-smooth focus:shadow-glow-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="transition-smooth focus:shadow-glow-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, question, or collaboration idea..."
                    rows={5}
                    required
                    className="transition-smooth focus:shadow-glow-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full shadow-glow-primary hover:shadow-glow-accent transition-bounce"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <Card className="hover:shadow-glow-accent transition-smooth">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-accent" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-muted-foreground">
                  <p className="mb-4">
                    I'm always excited to discuss new opportunities in AI/ML, 
                    share insights about the latest developments in generative AI, 
                    or collaborate on innovative projects.
                  </p>
                  <p>
                    Whether you're looking for technical expertise, want to discuss 
                    a potential collaboration, or simply have questions about AI/ML 
                    implementation, feel free to reach out!
                  </p>
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className={`w-full justify-start gap-3 h-auto p-4 ${link.color} transition-bounce`}
                        onClick={() => window.open(link.url, "_blank")}
                      >
                        <IconComponent className="h-5 w-5 shrink-0" />
                        <div className="text-left">
                          <div className="font-medium">{link.name}</div>
                          <div className="text-sm text-muted-foreground">{link.value}</div>
                        </div>
                      </Button>
                    );
                  })}
                </div>

                {/* Response Time */}
                <Card className="bg-muted/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                      <span className="font-medium text-sm">Quick Response</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      I typically respond to messages within 24-48 hours. 
                      For urgent inquiries, feel free to connect via LinkedIn.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;