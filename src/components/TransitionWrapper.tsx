"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const transition = { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const };

export default function TransitionWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen">
      <AnimatePresence initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          className="absolute inset-0 min-h-screen bg-background"
          style={{ zIndex: 0 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
