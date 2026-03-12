import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const isHovering = useRef(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor='pointer']")) {
        if (cursorRef.current) {
          cursorRef.current.style.transform = "scale(2.5)";
          cursorRef.current.style.borderColor = "hsl(185 100% 50% / 0.6)";
          cursorRef.current.style.background = "hsl(185 100% 50% / 0.05)";
        }
      }
    };

    const handleMouseOut = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = "scale(1)";
        cursorRef.current.style.borderColor = "hsl(185 100% 50% / 0.4)";
        cursorRef.current.style.background = "transparent";
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border pointer-events-none z-[10000] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          borderColor: "hsl(185 100% 50% / 0.4)",
          transition: "transform 0.2s ease, border-color 0.2s ease, background 0.2s ease",
        }}
      />
      {/* Inner dot */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[10001] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
        }}
      />
    </>
  );
}
