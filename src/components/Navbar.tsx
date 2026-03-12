import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Magnetic } from "./AnimatedElements";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Magnetic>
          <Link href="/" data-cursor="pointer" className="text-xl font-display font-bold tracking-tight text-foreground">
            MR<span className="text-primary">.</span>
          </Link>
        </Magnetic>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Magnetic key={link.label}>
              <Link
                href={link.href}
                data-cursor="pointer"
                className={`text-xs font-heading tracking-[0.2em] uppercase transition-colors duration-500 ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </Magnetic>
          ))}
        </div>

        {/* Status indicator */}
        <div className="hidden md:flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-heading tracking-wider text-muted-foreground uppercase">Available for work</span>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          data-cursor="pointer"
          className="md:hidden relative w-8 h-8 flex flex-col items-end justify-center gap-1.5 z-50"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 4, width: 24 } : { rotate: 0, y: 0, width: 24 }}
            className="block h-px bg-foreground origin-center"
            style={{ width: 24 }}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -4, width: 24 } : { rotate: 0, y: 0, width: 16 }}
            className="block h-px bg-foreground origin-center"
            style={{ width: 16 }}
          />
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 2rem) 2rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 2rem) 2rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2rem) 2rem)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl font-display font-bold transition-colors ${
                    pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
