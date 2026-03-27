import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal, FadeUp, SectionNumber, LineDecoration } from "./AnimatedElements";

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Three.js / React Three Fiber", level: 85 },
      { name: "WebGL / GLSL Shaders", level: 78 },
      { name: "Framer Motion / GSAP", level: 92 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "PostgreSQL / MongoDB", level: 82 },
      { name: "GraphQL", level: 80 },
      { name: "Docker / CI-CD", level: 75 },
      { name: "AWS / Vercel", level: 85 },
      { name: "REST API Design", level: 90 },
    ],
  },
  {
    title: "Design & Creative",
    skills: [
      { name: "UI/UX Design", level: 92 },
      { name: "Figma / Sketch", level: 90 },
      { name: "Motion Design", level: 85 },
      { name: "Typography", level: 88 },
      { name: "Brand Identity", level: 80 },
      { name: "3D Modeling (Blender)", level: 70 },
    ],
  },
];

const tools = [
  { name: "VS Code", category: "Editor" },
  { name: "Figma", category: "Design" },
  { name: "Blender", category: "3D" },
  { name: "After Effects", category: "Motion" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Vercel", category: "Hosting" },
  { name: "GitHub", category: "Version Control" },
  { name: "Linear", category: "PM" },
  { name: "Notion", category: "Docs" },
  { name: "Postman", category: "API" },
  { name: "Chrome DevTools", category: "Debug" },
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Malayalam", level: "Native" },
  { name: "Hindi", level: "Conversational" },
  { name: "Tamil", level: "Conversational" },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const bgX = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section id="skills" ref={containerRef} className="relative">
      {/* Hero banner */}
      <div className="relative h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-card to-accent/5" />
        <motion.div style={{ x: bgX }} className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap pointer-events-none">
          <span className="text-[20vw] font-display font-extrabold text-foreground/[0.02] uppercase">Skills</span>
        </motion.div>
        <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-12 max-w-[1400px] mx-auto w-full">
          <SectionNumber number="03" />
          <TextReveal delay={0.1}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold mt-4 leading-[0.85]">
              Skills &<br />
              <span className="gradient-text">Expertise</span>
            </h1>
          </TextReveal>
        </div>
      </div>

      <div className="section-padding" ref={ref}>
        <div className="max-w-[1400px] mx-auto">
          {/* Skill groups — 3 columns */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-10 mb-32">
            {skillGroups.map((group, gi) => (
              <FadeUp key={group.title} delay={gi * 0.15}>
                <div>
                  <h3 className="text-lg font-display font-semibold mb-8 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {group.title}
                  </h3>
                  <div className="space-y-5">
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
                            transition={{
                              duration: 1.2,
                              delay: 0.3 + gi * 0.15 + si * 0.08,
                              ease: [0.22, 1, 0.36, 1],
                            }}
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

          <LineDecoration />

          {/* Tools & Platforms */}
          <div className="my-32">
            <TextReveal>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 leading-[0.9]">
                Tools & <span className="gradient-text">Platforms</span>
              </h2>
            </TextReveal>

            <FadeUp delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.04 }}
                    className="glass-panel p-5 text-center group hover-lift"
                    data-cursor="pointer"
                  >
                    <p className="text-sm font-heading text-foreground group-hover:text-primary transition-colors duration-500">{tool.name}</p>
                    <p className="text-[10px] font-heading tracking-wider text-muted-foreground/50 uppercase mt-1">{tool.category}</p>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>

          <LineDecoration />

          {/* Languages */}
          <div className="mt-32">
              <TextReveal>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 leading-[0.9]">
                  <span className="gradient-text">Languages</span>
                </h2>
              </TextReveal>

              <div className="space-y-4">
                {languages.map((lang, i) => (
                  <FadeUp key={lang.name} delay={i * 0.1}>
                    <div className="glass-panel p-6 flex items-center justify-between group hover-lift">
                      <span className="text-base font-display font-semibold group-hover:text-primary transition-colors duration-500">{lang.name}</span>
                      <span className="text-xs font-heading tracking-wider text-muted-foreground uppercase">{lang.level}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
