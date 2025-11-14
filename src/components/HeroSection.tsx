import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import vaibhavaPhoto from "@/assets/vaibhava-photo.png";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Floating Neural Network Nodes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{animationDelay: "1s"}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-neural-blue rounded-full animate-float opacity-50" style={{animationDelay: "2s"}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-cyber-green rounded-full animate-float opacity-60" style={{animationDelay: "0.5s"}}></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-primary rounded-full animate-float opacity-70" style={{animationDelay: "1.5s"}}></div>
        <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-accent rounded-full animate-float opacity-50" style={{animationDelay: "2.5s"}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-[min(100%,1200px)] text-center relative z-10">
        <div className="animate-fade-in">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={vaibhavaPhoto} 
                alt="Vaibhava Poojary - AI/ML Engineer"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover shadow-elegant animate-pulse-glow"
              />
              <div className="absolute -bottom-2 -right-2 animate-wave">
                <span className="text-4xl">👋</span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-space text-5xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight tracking-tight">
            <span className="block text-foreground mb-2">Hi, I'm</span>
            <span className="block font-orbitron text-6xl md:text-9xl lg:text-[10rem] text-gradient animate-pulse-glow">
              Vaibhava Poojary
            </span>
          </h1>

          <h2 className="font-space text-3xl md:text-5xl lg:text-7xl font-bold mb-8 text-gradient-alt tracking-wide">
            AI/ML & Generative AI Engineer
          </h2>

          {/* Tagline */}
          <p className="font-space text-xl md:text-3xl lg:text-4xl mb-12 max-w-6xl mx-auto text-foreground leading-relaxed tracking-wide">
            Building enterprise-scale{" "}
            <span className="font-bold text-primary">LLMs</span>,{" "}
            <span className="font-bold text-accent">RAG pipelines</span>,{" "}
            <span className="font-bold text-neural-blue">agentic AI solutions</span>,{" "}
            <span className="font-bold text-primary">ML</span>, and{" "}
            <span className="font-bold text-accent">DL</span>
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              className="hover:shadow-glow-primary transition-bounce"
              onClick={() => window.open("https://github.com/vaibhavpoojary", "_blank")}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:shadow-glow-accent transition-bounce"
              onClick={() => window.open("https://www.linkedin.com/in/vaibhavpoojary", "_blank")}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:shadow-glow-primary transition-bounce"
              onClick={() => window.open("mailto:vaibhavb568@gmail.com", "_blank")}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              size="lg"
              className="shadow-glow-primary hover:shadow-glow-accent transition-bounce"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="hover:shadow-glow-primary transition-bounce"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute right-4 bottom-6 sm:right-8 sm:bottom-8 animate-float">
          <ChevronDown 
            className="h-8 w-8 text-muted-foreground cursor-pointer hover:text-primary transition-smooth"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;