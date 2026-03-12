import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal, FadeUp, SectionNumber, LineDecoration, Magnetic } from "./AnimatedElements";
import { ArrowUpRight, Calendar, MapPin, Award, Briefcase } from "lucide-react";

const stats = [
  { number: "15+", label: "Projects Delivered", icon: Briefcase },
  { number: "3+", label: "Years Experience", icon: Calendar },
  { number: "10+", label: "Happy Clients", icon: Award },
  { number: "3", label: "Companies", icon: Award },
];

const timeline = [
  {
    year: "2025 — Present",
    title: "Frontend Developer",
    company: "Element 8",
    description:
      "Building high-performance marketing sites and web applications for global brands, focusing on smooth interactions and pixel-perfect implementation.",
  },
  {
    year: "2024 — 2025",
    title: "Frontend Developer",
    company: "Nuox Technologies",
    description:
      "Implemented responsive dashboards and product interfaces with React and modern tooling, collaborating closely with designers and backend teams.",
  },
  {
    year: "2022 — 2023",
    title: "UI Developer",
    company: "Webandcrafts",
    description:
      "Started my career crafting UI for websites and landing pages, translating Figma designs into clean, accessible, production-ready interfaces.",
  },
];

const philosophy = [
  {
    number: "01",
    title: "Design First",
    description: "Every project starts with understanding the vision. I obsess over typography, spacing, and visual hierarchy before writing a single line of code.",
  },
  {
    number: "02",
    title: "Motion Matters",
    description: "Thoughtful animation transforms static layouts into living experiences. I use motion to guide attention and create emotional resonance.",
  },
  {
    number: "03",
    title: "Code as Craft",
    description: "Clean, performant, accessible code is non-negotiable. I write code that's as elegant as the interfaces it creates.",
  },
  {
    number: "04",
    title: "Push Boundaries",
    description: "The web is a creative medium without limits. I constantly explore new technologies — WebGL, shaders, generative art — to create the unexpected.",
  },
];

const interests = [
  "Generative Art", "Creative Coding", "Typography", "Photography",
  "Sci-Fi", "Architecture", "Music Production", "Open Source",
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const bgX = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section id="about" ref={containerRef} className="relative">
      {/* Hero banner */}
      <div className="relative h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-accent/5" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        <motion.div style={{ x: bgX }} className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap pointer-events-none">
          <span className="text-[20vw] font-display font-extrabold text-foreground/[0.02] uppercase">About Me</span>
        </motion.div>
        <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-12 max-w-[1400px] mx-auto w-full">
          <SectionNumber number="01" />
          <TextReveal delay={0.1}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold mt-4 leading-[0.85]">
              About<br />
              <span className="gradient-text">Me</span>
            </h1>
          </TextReveal>
        </div>
      </div>

      {/* Intro section */}
      <div className="section-padding" ref={ref}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-24">
            <FadeUp className="md:col-span-5">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border/30 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(var(--primary)/0.15),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--accent)/0.1),transparent_60%)]" />
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-panel p-4">
                    <p className="text-xs font-heading tracking-wider text-primary uppercase mb-1">Currently</p>
                    <p className="text-sm text-foreground">Building the future of web</p>
                  </div>
                </div>
                {/* Location badge */}
                <div className="absolute top-6 left-6">
                  <div className="glass-panel px-3 py-2 flex items-center gap-2">
                    <MapPin size={12} className="text-primary" />
                    <span className="text-[10px] font-heading tracking-wider text-muted-foreground uppercase">Kerala, India</span>
                  </div>
                </div>
              </div>
            </FadeUp>

            <div className="md:col-span-7 flex flex-col justify-center">
              <FadeUp delay={0.2}>
                <p className="text-3xl md:text-4xl font-display font-medium leading-relaxed mb-8 text-foreground/90">
                  I'm a creative developer who believes in the power of{" "}
                  <span className="text-primary">design-driven development</span>.
                  I don't just write code — I craft experiences that leave lasting impressions.
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-lg">
                  With over 5 years of experience at the intersection of design and engineering,
                  I specialize in creating immersive digital experiences that push creative boundaries.
                  From 3D web experiences to complex data visualizations, I bring ideas to life
                  through thoughtful motion, precise typography, and obsessive attention to detail.
                </p>
              </FadeUp>

              <FadeUp delay={0.35}>
                <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  When I'm not coding, you'll find me experimenting with generative art,
                  contributing to open source, or exploring the latest in creative technology.
                </p>
              </FadeUp>

              <FadeUp delay={0.4}>
                <LineDecoration />
              </FadeUp>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
            {stats.map((stat, i) => (
              <FadeUp key={stat.label} delay={0.1 * i}>
                <div className="glass-panel p-6 md:p-8 text-center group hover-lift">
                  <stat.icon size={20} className="text-primary mx-auto mb-3 opacity-50" />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-3xl md:text-4xl font-display font-bold gradient-text block mb-2"
                  >
                    {stat.number}
                  </motion.span>
                  <span className="text-[10px] font-heading tracking-wider text-muted-foreground uppercase">
                    {stat.label}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Philosophy */}
          <div className="mb-32">
            <TextReveal>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 leading-[0.9]">
                My <span className="gradient-text">Philosophy</span>
              </h2>
            </TextReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {philosophy.map((item, i) => (
                <FadeUp key={item.number} delay={i * 0.1}>
                  <div className="glass-panel p-8 group hover-lift h-full">
                    <span className="text-xs font-heading text-primary/60 tracking-[0.3em] uppercase mb-4 block">({item.number})</span>
                    <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-500">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mb-32">
            <TextReveal>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 leading-[0.9]">
                Experience <span className="gradient-text">Timeline</span>
              </h2>
            </TextReveal>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

              {timeline.map((item, i) => (
                <FadeUp key={item.year} delay={i * 0.15}>
                  <div className={`relative flex flex-col md:flex-row gap-6 md:gap-0 mb-12 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 w-3.5 h-3.5 rounded-full bg-primary border-4 border-background z-10" />

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                      <span className="text-xs font-heading tracking-[0.3em] text-primary uppercase mb-2 block">{item.year}</span>
                      <h3 className="text-xl font-display font-bold mb-1">{item.title}</h3>
                      <p className="text-sm font-heading text-muted-foreground mb-3">{item.company}</p>
                      <p className="text-sm text-muted-foreground/70 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <TextReveal>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 leading-[0.9]">
                Beyond <span className="gradient-text">Code</span>
              </h2>
            </TextReveal>

            <FadeUp delay={0.2}>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, i) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="text-sm px-6 py-3 rounded-full border border-border/30 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-500"
                    data-cursor="pointer"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
