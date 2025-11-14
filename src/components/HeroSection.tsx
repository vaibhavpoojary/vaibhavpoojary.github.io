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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">

      <div className="container mx-auto px-4 sm:px-6 max-w-[min(100%,1400px)] text-center relative z-10">
        <div className="animate-fade-in space-y-8 py-12">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={vaibhavaPhoto} 
                alt="Vaibhava Poojary - AI/ML Engineer"
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover shadow-elegant"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight tracking-tight">
            VAIBHAVA POOJARY
          </h1>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground/90">
            AI/ML & Generative AI Engineer
          </h2>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-5xl mx-auto text-foreground/80 leading-relaxed font-medium">
            Building enterprise-scale LLMs, RAG pipelines, agentic AI solutions, ML, and DL
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