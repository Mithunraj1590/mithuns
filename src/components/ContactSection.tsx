import { useState } from "react";
import { TextReveal, FadeUp, SectionNumber, LineDecoration, Magnetic } from "./AnimatedElements";
import { Send, ArrowUpRight } from "lucide-react";

const socials = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "Dribbble", href: "#" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        setStatus("Something went wrong. Please try again.");
      } else {
        setStatus("Message sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-[1400px] mx-auto">
        <SectionNumber number="04" />

        <div className="mt-4 mb-16">
          <TextReveal>
            <h2 className="text-5xl md:text-8xl font-display font-bold leading-[0.85]">
              Let's create
            </h2>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-5xl md:text-8xl font-display font-bold leading-[0.85]">
              something <span className="gradient-text">great</span>
            </h2>
          </TextReveal>
        </div>

        <LineDecoration />

        <div className="grid md:grid-cols-12 gap-12 mt-16">
          {/* Left — info */}
          <div className="md:col-span-5 space-y-10">
            <FadeUp>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have a project in mind or just want to say hello? I'm always 
                excited to discuss new opportunities and creative collaborations.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div>
                <p className="text-xs font-heading tracking-[0.3em] text-muted-foreground uppercase mb-4">Get in touch</p>
                <a href="mailto:mithunmacsafe@gmail.com" data-cursor="pointer" className="text-xl md:text-2xl font-display font-semibold text-foreground hover:text-primary transition-colors duration-500">
                  mithunmacsafe@gmail.com
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div>
                <p className="text-xs font-heading tracking-[0.3em] text-muted-foreground uppercase mb-4">Socials</p>
                <div className="space-y-3">
                  {socials.map((social) => (
                    <Magnetic key={social.label}>
                      <a
                        href={social.href}
                        data-cursor="pointer"
                        className="group flex items-center justify-between py-2 border-b border-border/20 hover:border-primary/30 transition-colors duration-500"
                      >
                        <span className="text-sm font-heading text-foreground/70 group-hover:text-primary transition-colors duration-500">
                          {social.label}
                        </span>
                        <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-500" />
                      </a>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right — form */}
          <FadeUp delay={0.2} className="md:col-span-7">
            <form onSubmit={handleSubmit} className="glass-panel glow-border p-8 md:p-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-heading tracking-[0.2em] text-muted-foreground uppercase mb-3 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-b border-border/50 text-foreground text-sm font-body focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="text-[10px] font-heading tracking-[0.2em] text-muted-foreground uppercase mb-3 block">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-b border-border/50 text-foreground text-sm font-body focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30"
                    placeholder="john@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-heading tracking-[0.2em] text-muted-foreground uppercase mb-3 block">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-0 py-3 bg-transparent border-b border-border/50 text-foreground text-sm font-body focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted-foreground/30"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <Magnetic>
                <button
                  type="submit"
                  disabled={submitting}
                  data-cursor="pointer"
                  className="group flex items-center gap-3 mt-4 text-sm font-heading tracking-wider uppercase text-foreground hover:text-primary transition-colors duration-500 disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  <span className="w-12 h-12 rounded-full border border-border group-hover:border-primary flex items-center justify-center transition-all duration-500 group-hover:bg-primary/10">
                    <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
                  </span>
                </button>
              </Magnetic>
              {status && (
                <p className="text-xs text-muted-foreground">
                  {status}
                </p>
              )}
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
