import ScrollReveal from "./ScrollReveal";

const certifications = [
  { title: "AWS Certified Solutions Architect", provider: "Amazon Web Services", year: "2023" },
  { title: "AWS Certified AI Practitioner", provider: "Amazon Web Services", year: "2023" },
  { title: "IBM Data Science Professional", provider: "IBM", year: "2022" },
  { title: "Dataiku ML Practitioner", provider: "Dataiku", year: "2022" },
];

const awards = [
  { title: "Shining Star Award", note: "Outstanding performance in GenAI platform development", count: "×2", year: "2023" },
  { title: "Rising Star Award", note: "Exceptional contribution to AI/ML initiatives", count: "", year: "2022" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
            Recognition
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-20 text-balance leading-[1.1]">
            Certifications & Awards
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Certifications */}
          <div>
            <ScrollReveal>
              <h3 className="text-sm text-muted-foreground tracking-widest uppercase mb-8">
                Certifications
              </h3>
            </ScrollReveal>
            <div className="space-y-0">
              {certifications.map((cert, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="py-6 border-t border-border group hover:bg-secondary/30 transition-colors duration-500 -mx-4 px-4 rounded-lg">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold mb-1 group-hover:translate-x-1 transition-transform duration-300">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{cert.provider}</p>
                      </div>
                      <span className="text-sm text-muted-foreground shrink-0">{cert.year}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <ScrollReveal>
              <h3 className="text-sm text-muted-foreground tracking-widest uppercase mb-8">
                Awards
              </h3>
            </ScrollReveal>
            <div className="space-y-0">
              {awards.map((award, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="py-6 border-t border-border group hover:bg-secondary/30 transition-colors duration-500 -mx-4 px-4 rounded-lg">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold mb-1 group-hover:translate-x-1 transition-transform duration-300">
                          {award.title}
                          {award.count && (
                            <span className="ml-2 text-xs text-muted-foreground font-normal">
                              {award.count}
                            </span>
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground">{award.note}</p>
                      </div>
                      <span className="text-sm text-muted-foreground shrink-0">{award.year}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
