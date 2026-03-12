import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { TextReveal, FadeUp, SectionNumber, LineDecoration, Magnetic } from "./AnimatedElements";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Nova Dashboard",
    category: "Web App",
    year: "2025",
    description: "Real-time analytics platform with AI-powered data visualization and predictive insights engine. Built with React, D3.js and custom WebGL shaders for rendering millions of data points.",
    tags: ["React", "Three.js", "D3", "AI", "WebGL"],
    number: "01",
    color: "from-primary/20 to-accent/10",
    role: "Lead Developer & Designer",
    duration: "6 months",
  },
  {
    title: "Pulse Commerce",
    category: "E-Commerce",
    year: "2025",
    description: "Next-gen shopping experience with 3D product previews, AR try-on, and spatial commerce. Features real-time inventory sync and dynamic pricing engine.",
    tags: ["Next.js", "Stripe", "WebGL", "AR", "Node.js"],
    number: "02",
    color: "from-accent/20 to-warm/10",
    role: "Full-stack Developer",
    duration: "4 months",
  },
  {
    title: "Synth Studio",
    category: "Creative Tool",
    year: "2024",
    description: "Browser-based music production suite with real-time audio processing and generative composition. Uses WebAssembly for near-native audio performance.",
    tags: ["Web Audio", "Canvas", "WASM", "React"],
    number: "03",
    color: "from-warm/20 to-primary/10",
    role: "Creative Technologist",
    duration: "8 months",
  },
  {
    title: "Orbit Social",
    category: "Social Platform",
    year: "2024",
    description: "Spatial social networking with audio rooms, live collaboration, and immersive 3D environments. Real-time WebRTC communication with spatial audio.",
    tags: ["React", "WebRTC", "Three.js", "Socket.io"],
    number: "04",
    color: "from-primary/15 to-accent/15",
    role: "Frontend Lead",
    duration: "5 months",
  },
  {
    title: "Neon Gallery",
    category: "Art Platform",
    year: "2024",
    description: "Virtual gallery for digital artists featuring WebGL-rendered exhibition spaces with real-time lighting and interactive installations.",
    tags: ["Three.js", "GLSL", "React", "Firebase"],
    number: "05",
    color: "from-accent/15 to-primary/10",
    role: "Creative Developer",
    duration: "3 months",
  },
  {
    title: "DataFlow",
    category: "SaaS Tool",
    year: "2023",
    description: "Visual data pipeline builder with drag-and-drop nodes, real-time data preview, and automated workflow orchestration.",
    tags: ["React", "D3", "Node.js", "PostgreSQL"],
    number: "06",
    color: "from-warm/15 to-accent/10",
    role: "Full-stack Developer",
    duration: "7 months",
  },
];

const categories = ["All", "Web App", "E-Commerce", "Creative Tool", "Social Platform", "Art Platform", "SaaS Tool"];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FadeUp delay={0.1 * index}>
      <div
        className="group relative border border-border/20 rounded-2xl overflow-hidden hover-lift"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-cursor="pointer"
      >
        {/* Visual area */}
        <div className={`aspect-[16/10] relative overflow-hidden bg-gradient-to-br ${project.color}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_30%,hsl(var(--background))_100%)]" />
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }} />

          {/* Number overlay */}
          <div className="absolute top-6 left-6">
            <span className="text-6xl md:text-7xl font-display font-extrabold text-foreground/[0.06]">{project.number}</span>
          </div>

          {/* Year badge */}
          <div className="absolute top-6 right-6 glass-panel px-3 py-1">
            <span className="text-[10px] font-heading tracking-wider text-muted-foreground">{project.year}</span>
          </div>

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="text-center px-8">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-md">{project.description}</p>
              <div className="flex items-center justify-center gap-6 text-xs font-heading tracking-wider text-muted-foreground/60 uppercase">
                <span>{project.role}</span>
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span>{project.duration}</span>
              </div>
            </div>
          </motion.div>

          {/* Hover arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            className="absolute bottom-6 right-6 w-12 h-12 rounded-full border border-primary bg-primary/10 flex items-center justify-center"
          >
            <ExternalLink size={18} className="text-primary" />
          </motion.div>
        </div>

        {/* Info area */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors duration-500 mb-1">
                {project.title}
              </h3>
              <p className="text-xs font-heading tracking-wider text-muted-foreground uppercase">
                {project.category}
              </p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-3 py-1 rounded-full border border-border/30 text-muted-foreground/60 font-heading tracking-wider uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const bgX = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" ref={containerRef} className="relative">
      {/* Hero banner */}
      <div className="relative h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-card to-primary/5" />
        <motion.div style={{ x: bgX }} className="absolute top-1/2 -translate-y-1/2 right-0 whitespace-nowrap pointer-events-none">
          <span className="text-[20vw] font-display font-extrabold text-foreground/[0.02] uppercase">Projects</span>
        </motion.div>
        <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-12 max-w-[1400px] mx-auto w-full">
          <SectionNumber number="02" />
          <TextReveal delay={0.1}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold mt-4 leading-[0.85]">
              Selected<br />
              <span className="gradient-text">Projects</span>
            </h1>
          </TextReveal>
        </div>
      </div>

      <div className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          {/* Filter bar */}
          <FadeUp>
            <div className="flex flex-wrap gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  data-cursor="pointer"
                  className={`text-xs px-5 py-2.5 rounded-full font-heading tracking-wider uppercase transition-all duration-500 border ${
                    activeFilter === cat
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border/30 text-muted-foreground hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>

          <LineDecoration />

          {/* Project grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>

          {/* Bottom CTA */}
          <FadeUp delay={0.3}>
            <div className="mt-20 text-center">
              <p className="text-sm text-muted-foreground mb-6">Interested in working together?</p>
              <Magnetic>
                <a
                  href="/contact"
                  data-cursor="pointer"
                  className="group inline-flex items-center gap-3 text-lg font-heading tracking-wider uppercase text-foreground hover:text-primary transition-colors duration-500"
                >
                  Let's talk
                  <span className="w-14 h-14 rounded-full border border-border group-hover:border-primary flex items-center justify-center transition-all duration-500 group-hover:bg-primary/10">
                    <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-500" />
                  </span>
                </a>
              </Magnetic>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
