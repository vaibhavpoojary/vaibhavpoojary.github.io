import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ScrollReveal from "./ScrollReveal";
import profileImage from "@/assets/vaibhava-profile.jpg";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });
      if (error) throw error;
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Error", description: "Failed to send. Try emailing directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { label: "Email", value: "vaibhavb568@gmail.com", href: "mailto:vaibhavb568@gmail.com" },
    { label: "GitHub", value: "github.com/vaibhavpoojary", href: "https://github.com/vaibhavpoojary" },
    { label: "LinkedIn", value: "linkedin.com/in/vaibhavpoojary", href: "https://www.linkedin.com/in/vaibhavpoojary" },
  ];

  const inputClass =
    "w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300 text-sm";

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-20 text-balance leading-[1.1]">
            Let's Work <br />Together
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Form */}
          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClass}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-2 px-8 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-all duration-300 disabled:opacity-50 active:scale-[0.97]"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && (
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                )}
              </button>
            </form>
          </ScrollReveal>

          {/* Profile + Socials */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-[0_8px_30px_hsl(0_0%_0%/0.4)] border border-border">
                <img
                  src={profileImage}
                  alt="Vaibhava Poojary"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 75%" }}
                />
              </div>

              <div className="space-y-0">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between py-6 border-t border-border hover:bg-secondary/30 transition-colors duration-500 -mx-4 px-4 rounded-lg"
                  >
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{s.label}</p>
                      <p className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                        {s.value}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 mt-1 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
