import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function TextReveal({ children, delay = 0, className = "" }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%" }}
        animate={isInView ? { y: 0 } : { y: "110%" }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeUp({ children, delay = 0, className = "" }: FadeUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Marquee({ children, speed = 25 }: { children: ReactNode; speed?: number }) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {children}
        {children}
      </div>
    </div>
  );
}

interface MagneticProps {
  children: ReactNode;
  className?: string;
}

export function Magnetic({ children, className = "" }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0, 0)";
    }
  };

  return (
    <div
      ref={ref}
      className={`magnetic ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

export function SectionNumber({ number }: { number: string }) {
  return (
    <span className="text-[10px] font-heading tracking-[0.3em] text-muted-foreground uppercase">
      ({number})
    </span>
  );
}

export function LineDecoration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="h-px bg-gradient-to-r from-primary/50 via-accent/30 to-transparent origin-left"
      />
    </div>
  );
}
