import { Magnetic, Marquee } from "./AnimatedElements";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Big marquee CTA */}
      <div className="border-t border-border/20 py-8 overflow-hidden">
        <Marquee speed={80}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="inline-flex items-center mx-6 text-6xl md:text-8xl font-display font-bold text-foreground/[0.03] uppercase whitespace-nowrap">
              Let's Work Together
              <span className="mx-6 text-primary/20">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Footer content */}
      <div className="border-t border-border/20 px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-lg font-display font-bold text-foreground">
              Mithun Raj<span className="text-primary">.</span>
            </span>
            <span className="text-xs font-heading text-muted-foreground/50">
              © 2026 — Portfolio. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            {["GitHub", "LinkedIn", "Twitter"].map((label) => (
              <Magnetic key={label}>
                <a
                  href="#"
                  data-cursor="pointer"
                  className="group flex items-center gap-1 text-xs font-heading tracking-wider text-muted-foreground hover:text-primary transition-colors duration-500 uppercase"
                >
                  {label}
                  <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
