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
    // Update document title and meta tags for SEO
    document.title = "Vaibhava Poojary - AI/ML & Generative AI Engineer | Portfolio";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Vaibhava Poojary - Senior AI/ML & Generative AI Engineer with 5+ years building production LLMs, RAG pipelines, and agentic workflows. Expert in PyTorch, Transformers, LangChain, AWS.");
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Vaibhava Poojary",
      "jobTitle": "AI/ML & Generative AI Engineer",
      "description": "Senior AI/ML Engineer specializing in enterprise-scale LLMs, RAG pipelines, and agentic AI solutions",
      "email": "vaibhavb568@gmail.com",
      "url": "https://vaibhava-poojary-aiml-engineer.lovable.app",
      "sameAs": [
        "https://github.com/vaibhavpoojary",
        "https://www.linkedin.com/in/vaibhavpoojary"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Capgemini"
      },
      "alumniOf": [
        {
          "@type": "Organization",
          "name": "Tech Mahindra"
        }
      ],
      "knowsAbout": [
        "Artificial Intelligence",
        "Machine Learning", 
        "Generative AI",
        "Large Language Models",
        "RAG Pipelines",
        "PyTorch",
        "LangChain",
        "AWS",
        "Python"
      ]
    };

    // Add structured data to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data on unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Experience Section */}
        <ExperienceSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* GitHub Projects Section */}
        <GitHubSection />
        
        {/* Certifications Section */}
        <CertificationsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Floating Contact Button */}
      <FloatingContactButton />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/50">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Vaibhava Poojary. All rights reserved. | 
            <span className="text-primary font-medium"> AI/ML & Generative AI Engineer</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Built with React, TypeScript, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;