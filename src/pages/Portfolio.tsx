import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import GitHubSection from "@/components/GitHubSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import FloatingContactButton from "@/components/FloatingContactButton";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Vaibhava Poojary – Senior AI Platform Engineer";

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Vaibhava Poojary – Senior AI/ML & Generative AI Engineer. Building production LLMs, RAG pipelines, and agentic workflows at enterprise scale."
      );
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Vaibhava Poojary",
      jobTitle: "Senior AI Platform Engineer",
      email: "vaibhavb568@gmail.com",
      url: "https://vaibhava-poojary-aiml-engineer.lovable.app",
      sameAs: [
        "https://github.com/vaibhavpoojary",
        "https://www.linkedin.com/in/vaibhavpoojary",
      ],
      worksFor: { "@type": "Organization", name: "OpenText" },
      knowsAbout: [
        "Artificial Intelligence", "Machine Learning", "Generative AI",
        "Large Language Models", "RAG Pipelines", "LangGraph", "LangChain",
      ],
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <GitHubSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <FloatingContactButton />

      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Designed and Developed by Vaibhava Poojary
          </p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
