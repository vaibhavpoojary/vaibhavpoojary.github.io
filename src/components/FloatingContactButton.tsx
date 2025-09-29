import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Mail, Github, Linkedin } from "lucide-react";

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: Mail,
      label: "Email",
      action: () => window.open("mailto:vaibhavb568@gmail.com"),
      color: "text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      action: () => window.open("https://www.linkedin.com/in/vaibhavpoojary", "_blank"),
      color: "text-accent"
    },
    {
      icon: Github,
      label: "GitHub",
      action: () => window.open("https://github.com/vaibhavpoojary", "_blank"),
      color: "text-neural-blue"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      {isOpen && (
        <div className="flex flex-col gap-3 mb-3 animate-fade-in">
          {contactOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Button
                key={index}
                size="icon"
                variant="outline"
                className={`shadow-elegant hover:shadow-glow-primary transition-bounce ${option.color} bg-card/90 backdrop-blur-sm`}
                onClick={option.action}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <IconComponent className="h-5 w-5" />
              </Button>
            );
          })}
        </div>
      )}

      {/* Main Button */}
      <Button
        size="icon"
        className={`h-14 w-14 rounded-full shadow-glow-primary hover:shadow-glow-accent transition-bounce ${
          isOpen ? "rotate-45" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default FloatingContactButton;