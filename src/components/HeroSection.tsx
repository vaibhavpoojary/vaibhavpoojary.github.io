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
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-accent rounded-full animate-float opacity-40" style={{animationDelay: "1s"}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-neural-blue rounded-full animate-float opacity-50" style={{animationDelay: "2s"}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-cyber-green rounded-full animate-float opacity-60" style={{animationDelay: "0.5s"}}></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-primary rounded-full animate-float opacity-70" style={{animationDelay: "1.5s"}}></div>
        <div className="absolute top-1/6 right-1/6 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{animationDelay: "2.5s"}}></div>
        <div className="absolute bottom-1/2 right-1/5 w-2 h-2 bg-tech-purple rounded-full animate-float opacity-55" style={{animationDelay: "3s"}}></div>
        <div className="absolute top-2/5 left-1/5 w-1 h-1 bg-code-orange rounded-full animate-float opacity-65" style={{animationDelay: "2.2s"}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-[min(100%,1200px)] text-center relative z-10">
        <div className="space-y-8">
          {/* Avatar */}
          <div className="mb-8 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-neural-blue rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src={vaibhavaPhoto} 
                alt="Vaibhava Poojary - AI/ML Engineer"
                className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full object-cover shadow-elegant border-4 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Main Heading */}
          <div className="animate-slide-in-bottom" style={{animationDelay: "0.2s"}}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-neural-blue bg-clip-text text-transparent">
                Vaibhava Poojary
              </span>
            </h1>
          </div>

          <div className="animate-slide-in-bottom" style={{animationDelay: "0.4s"}}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold mb-6 text-foreground">
              AI/ML & Generative AI Engineer
            </h2>
          </div>

          {/* Tagline */}
          <div className="animate-slide-in-bottom" style={{animationDelay: "0.6s"}}>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-4xl mx-auto text-muted-foreground leading-relaxed font-light">
              Building enterprise-scale{" "}
              <span className="text-primary font-semibold hover:text-primary/80 transition-colors">LLMs</span>,{" "}
              <span className="text-accent font-semibold hover:text-accent/80 transition-colors">RAG pipelines</span>,{" "}
              <span className="text-neural-blue font-semibold hover:text-neural-blue/80 transition-colors">agentic AI solutions</span>,{" "}
              <span className="text-primary font-semibold hover:text-primary/80 transition-colors">ML</span>, and{" "}
              <span className="text-accent font-semibold hover:text-accent/80 transition-colors">DL</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="animate-slide-in-bottom flex justify-center space-x-4 mb-12" style={{animationDelay: "0.8s"}}>
            <Button
              variant="outline"
              size="icon"
              className="hover:shadow-glow-primary transition-all duration-300 hover:scale-110 hover:border-primary/50 backdrop-blur-sm"
              onClick={() => window.open("https://github.com/vaibhavpoojary", "_blank")}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:shadow-glow-accent transition-all duration-300 hover:scale-110 hover:border-accent/50 backdrop-blur-sm"
              onClick={() => window.open("https://www.linkedin.com/in/vaibhavpoojary", "_blank")}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:shadow-glow-primary transition-all duration-300 hover:scale-110 hover:border-primary/50 backdrop-blur-sm"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="animate-slide-in-bottom flex flex-col sm:flex-row justify-center gap-4 mb-16" style={{animationDelay: "1s"}}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-neural-blue hover:from-primary/90 hover:to-neural-blue/90 text-primary-foreground shadow-glow-primary transition-all duration-300 hover:scale-105 font-display font-semibold"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:shadow-glow-accent transition-all duration-300 hover:scale-105 hover:bg-accent/10 hover:border-accent/50 backdrop-blur-sm font-display font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div 
            className="animate-slide-in-bottom flex flex-col items-center cursor-pointer hover:opacity-80 transition-smooth group"
            onClick={() => scrollToSection("about")}
            style={{animationDelay: "1.2s"}}
          >
            <p className="text-sm text-muted-foreground mb-2 font-light">Scroll to explore</p>
            <ChevronDown className="h-6 w-6 text-primary animate-bounce group-hover:text-accent transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;