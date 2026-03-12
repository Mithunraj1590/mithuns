import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { TextReveal, Marquee, Magnetic, FadeUp, LineDecoration, SectionNumber } from "./AnimatedElements";
import { ArrowDownRight, ArrowUpRight, ArrowRight } from "lucide-react";
const Scene3D = dynamic(() => import("./Scene3DClient"), { ssr: false });

const featuredProjects = [
  {
    title: "Nova Dashboard",
    category: "Web App",
    year: "2025",
    tags: ["React", "Three.js", "D3", "AI"],
    image: "linear-gradient(135deg, hsl(185 100% 50% / 0.2), hsl(280 80% 60% / 0.15))",
  },
  {
    title: "Pulse Commerce",
    category: "E-Commerce",
    year: "2025",
    tags: ["Next.js", "Stripe", "WebGL"],
    image: "linear-gradient(135deg, hsl(280 80% 60% / 0.2), hsl(35 90% 55% / 0.15))",
  },
  {
    title: "Synth Studio",
    category: "Creative Tool",
    year: "2024",
    tags: ["Web Audio", "Canvas", "WASM"],
    image: "linear-gradient(135deg, hsl(35 90% 55% / 0.2), hsl(185 100% 50% / 0.15))",
  },
];

const stats = [
  { number: "15+", label: "Projects Delivered" },
  { number: "3+", label: "Years Experience" },
  { number: "10+", label: "Happy Clients" },
  { number: "3", label: "Companies" },
];

const skills = ["React", "Three.js", "TypeScript", "WebGL", "GSAP", "Node.js", "Figma", "Motion Design"];

/* ───── Scroll Sections ───── */

function HeroChapter() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={ref} className="relative min-h-[120vh] flex flex-col justify-end overflow-hidden pb-12">
      <Scene3D />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40 z-[1]" />

      {/* Scroll-driven parallax hero */}
      <motion.div style={{ y, opacity, scale }} className="relative z-10 px-6 md:px-12 lg:px-20 max-w-[1400px] w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute top-[-120px] right-0 text-right hidden md:block"
        >
          <p className="text-[10px] font-heading tracking-[0.3em] text-muted-foreground uppercase mb-1">Based in</p>
          <p className="text-xs font-heading text-foreground/70">Kerala, India</p>
        </motion.div>

        <div className="mb-8">
          <TextReveal delay={0.2}>
            <p className="text-xs md:text-sm font-heading tracking-[0.4em] uppercase text-primary mb-6">
              Creative Developer & Designer
            </p>
          </TextReveal>
          <TextReveal delay={0.4}>
            <h1 className="text-[clamp(3rem,10vw,9rem)] font-display font-extrabold leading-[0.85] tracking-tight">
              Crafting
            </h1>
          </TextReveal>
          <TextReveal delay={0.5}>
            <h1 className="text-[clamp(3rem,10vw,9rem)] font-display font-extrabold leading-[0.85] tracking-tight">
              <span className="gradient-text">Digital</span>{" "}
              <span className="font-light italic text-foreground/40">Art</span>
            </h1>
          </TextReveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col gap-10 md:gap-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
              I design and develop immersive web experiences
              at the intersection of technology and aesthetics.
              Every pixel is intentional.
            </p>
            <Magnetic>
              <Link
                href="/work"
                data-cursor="pointer"
                className="group flex items-center gap-3 text-sm font-heading tracking-wider uppercase text-foreground hover:text-primary transition-colors duration-500"
              >
                Explore Work
                <span className="w-12 h-12 rounded-full border border-border group-hover:border-primary flex items-center justify-center transition-colors duration-500 group-hover:bg-primary/10">
                  <ArrowDownRight size={18} className="group-hover:rotate-45 transition-transform duration-500" />
                </span>
              </Link>
            </Magnetic>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-panel p-4 md:p-5 text-left md:text-center group hover-lift"
              >
                <p className="text-2xl md:text-3xl font-display font-bold gradient-text mb-1">
                  {stat.number}
                </p>
                <p className="text-[10px] font-heading tracking-[0.25em] text-muted-foreground uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="relative z-10 mt-16 border-t border-b border-border/30 py-4 overflow-hidden"
      >
        <Marquee speed={30}>
          {["React", "Three.js", "TypeScript", "WebGL", "GSAP", "Figma", "Node.js", "Next.js", "Tailwind", "Framer Motion"].map(
            (item) => (
              <span key={item} className="inline-flex items-center mx-8 text-sm font-heading tracking-wider text-muted-foreground/50 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-4" />
                {item}
              </span>
            )
          )}
        </Marquee>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-heading tracking-[0.4em] text-muted-foreground/40 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

function AboutChapter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Floating horizontal text */}
      <motion.div style={{ x }} className="absolute top-20 left-0 whitespace-nowrap pointer-events-none">
        <span className="text-[12vw] font-display font-extrabold text-foreground/[0.02] uppercase">About Me</span>
      </motion.div>

      <div className="max-w-[1400px] mx-auto relative">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-5">
            <SectionNumber number="01" />
            <TextReveal delay={0.1}>
              <h2 className="text-5xl md:text-7xl font-display font-bold mt-4 leading-[0.9]">
                About<br />
                <span className="gradient-text">Me</span>
              </h2>
            </TextReveal>

            {/* Stats inline */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {stats.map((stat, i) => (
                <FadeUp key={stat.label} delay={0.15 * i}>
                  <div className="glass-panel p-5 text-center group hover-lift">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="text-2xl md:text-3xl font-display font-bold gradient-text block mb-1"
                    >
                      {stat.number}
                    </motion.span>
                    <span className="text-[10px] font-heading tracking-wider text-muted-foreground uppercase">{stat.label}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-center">
            <FadeUp delay={0.2}>
              <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed mb-8 text-foreground/90">
                I'm a creative developer who believes in the power of{" "}
                <span className="text-primary">design-driven development</span>.
                I don't just write code — I craft experiences.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Specializing in interactive web experiences, 3D visualizations, and
                creative coding. I bring ideas to life through thoughtful motion,
                precise typography, and obsessive attention to detail.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <LineDecoration />
            </FadeUp>

            <FadeUp delay={0.5}>
              <div className="flex flex-wrap gap-3 mt-8">
                {skills.map((skill) => (
                  <span key={skill} className="text-xs px-4 py-2 rounded-full border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-500">
                    {skill}
                  </span>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.6}>
              <Magnetic>
                <Link
                  href="/about"
                  data-cursor="pointer"
                  className="group inline-flex items-center gap-3 mt-10 text-sm font-heading tracking-wider uppercase text-foreground hover:text-primary transition-colors duration-500"
                >
                  Learn more
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Magnetic>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsChapter() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Floating text */}
      <motion.div style={{ x }} className="absolute top-16 right-0 whitespace-nowrap pointer-events-none">
        <span className="text-[12vw] font-display font-extrabold text-foreground/[0.02] uppercase">Selected Work</span>
      </motion.div>

      <div className="max-w-[1400px] mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <SectionNumber number="02" />
            <TextReveal delay={0.1}>
              <h2 className="text-5xl md:text-7xl font-display font-bold mt-4 leading-[0.9]">
                Selected<br />
                <span className="gradient-text">Projects</span>
              </h2>
            </TextReveal>
          </div>
          <FadeUp delay={0.3}>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              A curated selection of projects showcasing design-driven development.
            </p>
          </FadeUp>
        </div>

        <LineDecoration />

        {/* Featured project cards — larger, visual */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {featuredProjects.map((project, i) => (
            <FadeUp key={project.title} delay={i * 0.15}>
              <div className="group relative rounded-2xl border border-border/20 overflow-hidden hover-lift" data-cursor="pointer">
                {/* Visual area */}
                <div
                  className="aspect-[4/3] relative overflow-hidden"
                  style={{ background: project.image }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_30%,hsl(var(--background))_100%)]" />
                  {/* Grid overlay */}
                  <div className="absolute inset-0 opacity-[0.04]" style={{
                    backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                  }} />
                  {/* Year badge */}
                  <div className="absolute top-4 right-4 glass-panel px-3 py-1">
                    <span className="text-[10px] font-heading tracking-wider text-muted-foreground">{project.year}</span>
                  </div>
                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-background/50 backdrop-blur-sm">
                    <ArrowUpRight size={16} className="text-primary" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors duration-500 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-heading tracking-wider text-muted-foreground uppercase mb-4">
                    {project.category}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-3 py-1 rounded-full border border-border/30 text-muted-foreground/60 font-heading tracking-wider uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* View all link */}
        <FadeUp delay={0.5}>
          <div className="mt-12 text-center">
            <Magnetic>
              <Link
                href="/work"
                data-cursor="pointer"
                className="group inline-flex items-center gap-3 text-sm font-heading tracking-wider uppercase text-foreground hover:text-primary transition-colors duration-500"
              >
                View all projects
                <span className="w-12 h-12 rounded-full border border-border group-hover:border-primary flex items-center justify-center transition-all duration-500 group-hover:bg-primary/10">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </Magnetic>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function SkillsChapter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  const devSkills = [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Three.js / R3F", level: 85 },
    { name: "Node.js", level: 88 },
  ];

  const designSkills = [
    { name: "UI/UX Design", level: 92 },
    { name: "Figma", level: 90 },
    { name: "Motion Design", level: 85 },
    { name: "Typography", level: 88 },
  ];

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <motion.div style={{ x }} className="absolute top-16 left-0 whitespace-nowrap pointer-events-none">
        <span className="text-[12vw] font-display font-extrabold text-foreground/[0.02] uppercase">Expertise</span>
      </motion.div>

      <div className="max-w-[1400px] mx-auto relative">
        <SectionNumber number="03" />
        <TextReveal delay={0.1}>
          <h2 className="text-5xl md:text-7xl font-display font-bold mt-4 leading-[0.9] mb-16">
            Skills &<br />
            <span className="gradient-text">Expertise</span>
          </h2>
        </TextReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {[
            { title: "Development", skills: devSkills },
            { title: "Design", skills: designSkills },
          ].map((group, gi) => (
            <FadeUp key={group.title} delay={gi * 0.2}>
              <div>
                <h3 className="text-lg font-display font-semibold mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {group.title}
                </h3>
                <div className="space-y-6">
                  {group.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-heading text-foreground/80">{skill.name}</span>
                        <span className="text-xs font-heading text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-[2px] rounded-full bg-border/50 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.2, delay: 0.3 + gi * 0.2 + si * 0.1, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.5}>
          <div className="mt-12 text-center">
            <Magnetic>
              <Link
                href="/skills"
                data-cursor="pointer"
                className="group inline-flex items-center gap-3 text-sm font-heading tracking-wider uppercase text-foreground hover:text-primary transition-colors duration-500"
              >
                View full skillset
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Magnetic>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function ContactChapter() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <section ref={ref} className="section-padding relative">
      <motion.div style={{ scale }} className="max-w-[1400px] mx-auto text-center">
        <SectionNumber number="04" />
        <TextReveal>
          <h2 className="text-5xl md:text-8xl font-display font-bold leading-[0.85] mt-4">
            Let's create
          </h2>
        </TextReveal>
        <TextReveal delay={0.1}>
          <h2 className="text-5xl md:text-8xl font-display font-bold leading-[0.85]">
            something <span className="gradient-text">great</span>
          </h2>
        </TextReveal>

        <FadeUp delay={0.3}>
          <p className="text-lg text-muted-foreground max-w-md mx-auto mt-8 mb-12 leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your vision to life.
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Magnetic>
              <Link
                href="/contact"
                data-cursor="pointer"
                className="group flex items-center gap-3 px-8 py-4 rounded-full border border-primary bg-primary/10 text-primary font-heading tracking-wider text-sm uppercase hover:bg-primary/20 transition-all duration-500"
              >
                Get in touch
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Magnetic>
            <Magnetic>
              <a
                href="mailto:hello@mithunraj.dev"
                data-cursor="pointer"
                className="text-sm font-heading tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-500"
              >
                hello@mithunraj.dev
              </a>
            </Magnetic>
          </div>
        </FadeUp>
      </motion.div>
    </section>
  );
}

/* ───── Main Scrollytelling Component ───── */

export default function ScrollytellingHome() {
  return (
    <>
      <HeroChapter />
      <AboutChapter />
      <ProjectsChapter />
      <SkillsChapter />
      <ContactChapter />
    </>
  );
}
