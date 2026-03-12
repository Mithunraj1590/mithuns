import type { ReactNode } from "react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-heading tracking-[0.3em] uppercase text-muted-foreground">
              Admin
            </span>
            <span className="h-4 w-px bg-border/60" />
            <span className="text-sm font-display text-foreground/80">
              Contact Messages Dashboard
            </span>
          </div>
          <nav className="flex items-center gap-4 text-xs font-heading tracking-[0.2em] uppercase">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Back to site
            </Link>
            <Link href="/admin/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
              Dashboard
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}

