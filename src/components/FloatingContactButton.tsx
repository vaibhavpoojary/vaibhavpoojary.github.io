import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Mail, Github, Linkedin } from "lucide-react";

const options = [
  { icon: Mail, href: "mailto:vaibhavb568@gmail.com" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/vaibhavpoojary" },
  { icon: Github, href: "https://github.com/vaibhavpoojary" },
];

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <AnimatePresence>
        {isOpen &&
          options.map((opt, i) => (
            <motion.a
              key={i}
              href={opt.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 10 }}
              transition={{ delay: i * 0.05, duration: 0.2 }}
              className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              <opt.icon className="h-4 w-4" />
            </motion.a>
          ))}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:opacity-90 transition-all duration-300 active:scale-95"
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>
    </div>
  );
};

export default FloatingContactButton;
