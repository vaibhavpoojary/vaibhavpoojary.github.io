import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: 0.3 + i * 0.04,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const firstName = "VAIBHAVA";
  const lastName = "POOJARY";

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-6xl w-full">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-lg md:text-xl mb-6 tracking-wide"
        >
          Hello! I'm
        </motion.p>

        {/* Name - Large Display */}
        <div className="mb-4">
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tighter">
            <span className="block overflow-hidden">
              {firstName.split("").map((char, i) => (
                <motion.span
                  key={`first-${i}`}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden mt-1">
              {lastName.split("").map((char, i) => (
                <motion.span
                  key={`last-${i}`}
                  custom={i + firstName.length}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block text-muted-foreground"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="text-xl md:text-3xl font-light text-muted-foreground leading-relaxed">
            Senior AI Platform Engineer
          </h2>
          <p className="text-base md:text-lg text-muted-foreground/60 mt-2 max-w-xl">
            Building enterprise-scale LLMs, RAG pipelines, agentic AI solutions, and multi-agent orchestration systems.
          </p>
        </motion.div>

        {/* Social + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-6"
        >
          {[
            { icon: Github, url: "https://github.com/vaibhavpoojary", label: "GitHub" },
            { icon: Linkedin, url: "https://www.linkedin.com/in/vaibhavpoojary", label: "LinkedIn" },
            { icon: Mail, url: "mailto:vaibhavb568@gmail.com", label: "Email" },
          ].map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm hidden sm:inline">{label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
