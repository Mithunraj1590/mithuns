import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { TextReveal, Marquee, Magnetic } from "./AnimatedElements";
import { ArrowDownRight } from "lucide-react";

const Scene3D = dynamic(() => import("./Scene3DClient"), { ssr: false });

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-12">
      <Scene3D />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40 z-[1]" />

      {/* Top-right corner info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute top-28 right-8 md:right-12 z-10 text-right"
      >
        <p className="text-[10px] font-heading tracking-[0.3em] text-muted-foreground uppercase mb-1">Based in</p>
        <p className="text-xs font-heading text-foreground/70">Kerala, India</p>
      </motion.div>

      {/* Main content — bottom-aligned */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-[1400px] w-full">
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

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
        >
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
        </motion.div>
      </div>

      {/* Marquee strip */}
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
    </section>
  );
}
