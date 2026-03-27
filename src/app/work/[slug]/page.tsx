"use client";

import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

type WorkDetail = {
  title: string;
  year?: string;
  category?: string;
  featured?: boolean;
  summary: string;
  about?: string;
  challenges?: string;
  solutions?: string;
  results?: string;
  highlights: string[];
  outcome: string;
  techStack: string[];
  liveSiteUrl: string;
  githubUrl?: string;
  backgroundImageUrl: string;
};

const workDetails: Record<string, WorkDetail> = {
  "university-library": {
    title: "University Library",
    year: "2025",
    category: "Management System",
    featured: true,
    summary:
      "A modern university library management system built with Next.js, featuring user authentication, book cataloging, borrowing workflows, and an admin dashboard for managing users and book requests.",
    about:
      "This is a comprehensive University Library Management System that provides a complete digital solution for managing library operations in an educational institution. The application is built using modern web technologies and best practices for scalability, security, and user experience.",
    challenges:
      "Building a scalable university library system that handles complex user workflows, secure authentication, and real-time book management while maintaining performance and user experience.",
    solutions:
      "Implemented a full-stack architecture with Next.js App Router, Neon PostgreSQL and Drizzle ORM for type-safe data operations, NextAuth.js for secure role-based auth, and Tailwind CSS for responsive UI. Added Redis caching, rate limiting, and optimized media delivery.",
    results:
      "A robust library management platform with seamless user/admin workflows, secure authentication, real-time cataloging, and efficient borrowing approvals that scale from mobile to desktop.",
    highlights: [
      "Role-based auth for Students and Administrators",
      "Book catalog search, borrowing requests, and approval workflow",
      "Admin dashboard for user approvals and catalog operations",
      "Performance and security layer with caching and rate limiting",
    ],
    outcome:
      "Delivered a production-ready digital library platform that streamlines operations, improves visibility for administrators, and creates a smooth borrowing journey for students.",
    techStack: ["Next.js", "TypeScript"],
    liveSiteUrl: "#",
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=2000&q=80",
  },
  "travel-agency": {
    title: "Travel Agency",
    year: "2024",
    category: "Web Application",
    featured: true,
    summary:
      "A modern travel platform that combines work and vacation, offering curated workation experiences for teams and individuals seeking to work remotely from stunning destinations around the world.",
    about:
      "Travel Agency is a cutting-edge travel agency platform built with Next.js that revolutionizes remote work through premium workation experiences. It bridges professional productivity and travel exploration, enabling teams and individuals to work from inspiring destinations around the globe.",
    challenges:
      "Creating a modern travel agency platform that combines engaging user experience with powerful administrative functionality while handling complex workation booking workflows for teams of varying sizes.",
    solutions:
      "Implemented a Next.js and React architecture with TypeScript for robust development, integrated Framer Motion for smooth interactions, built a dual-interface system with public travel pages and a comprehensive admin dashboard, and incorporated analytics visualization for business insights.",
    results:
      "Delivered a visually engaging and performant travel platform with seamless booking flows, responsive design across devices, strong admin capabilities for business management, and interaction patterns that improve conversion and user satisfaction.",
    highlights: [
      "Curated workation destinations with productivity-ready accommodations and workspace amenities",
      "Global destination network across Barcelona, Australia, Japan, Greece, and London",
      "Team-focused planning for 5-10, 10-30, 30-60, and 60+ members",
      "Professional admin infrastructure for booking management, user operations, and analytics",
      "Modern UX with smooth animations, parallax interactions, and mobile-first responsiveness",
      "Technical foundation with Next.js, TypeScript, Tailwind CSS, and Framer Motion",
    ],
    outcome:
      "Whether for startups, remote-first companies, or solo professionals, Travel Agency transforms work environments from routine to inspiring by combining curated destinations, team collaboration experiences, and operational tooling in one cohesive platform.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveSiteUrl: "https://worktowander.vercel.app/",
    githubUrl: "https://github.com/Mithunraj1590/worktowander_dashboard.git",
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80",
  },
  "e-tutor": {
    title: "E Tutor",
    year: "2024",
    category: "Education",
    featured: true,
    summary:
      "E-Tutor is a modern online learning platform built with Vue.js that connects students with expert instructors. It features a comprehensive course catalog with advanced filtering, user authentication, and an intuitive interface for discovering and enrolling in courses.",
    about:
      "E-Tutor is a comprehensive online learning platform designed to modernize access to education. Built with Vue.js 3, Vite, and Sass, it delivers a smooth experience for learners and instructors through intelligent course discovery, responsive design, and scalable component architecture.",
    challenges:
      "The project faced legacy Sass deprecation issues from outdated @import syntax, complex filter behavior that required stronger component modularity, and UI/UX constraints for an interactive filter sidebar and course listing. Ensuring consistent responsiveness and reliable filter state handling across components added further complexity.",
    solutions:
      "We migrated Sass from @import to @use and replaced deprecated color utilities with modern alternatives. The filter logic was refactored into a dedicated FilterSidebar component with collapsible sections and clean styling. Responsive behavior was standardized with mixins and breakpoints, while component communication used Vue event-driven patterns for maintainable parent-child interactions.",
    results:
      "The final platform shipped with a clean build pipeline, improved performance, and a modular, maintainable codebase. Users now get a polished and responsive course discovery experience with real-time filtering, while the architecture provides a strong foundation for future scaling.",
    highlights: [
      "Advanced course discovery with filters for category, tools, ratings, level, price, and duration",
      "Smart search with real-time suggestions and course recommendations",
      "Detailed course previews with instructor profiles, ratings, and enrollment signals",
      "Secure user authentication for personalized student learning journeys",
      "Instructor-friendly course management and profile experience",
      "Performance-focused frontend built with Vue.js 3, Vite, and modern Sass",
    ],
    outcome:
      "E-Tutor delivers a future-ready learning experience by combining modern frontend performance, robust filtering workflows, and user-centric design to help students discover the right courses faster.",
    techStack: ["Vue.js", "Vite", "Sass"],
    liveSiteUrl: "https://mithun-etutor-frontend.vercel.app/",
    githubUrl: "https://github.com/Mithunraj1590/etutor-frontend.git",
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=2000&q=80",
  },
  furniro: {
    title: "Furniro",
    year: "2025",
    category: "E-Commerce",
    featured: true,
    summary:
      "A modern, responsive e-commerce frontend built with React 19, featuring a sleek design with dark/light theme support, smooth animations, and comprehensive product management capabilities.",
    about:
      "Furniro is a sophisticated e-commerce frontend showcasing a modern, user-centric retail experience. It includes rich product browsing, wishlist and cart workflows, responsive UI, theme switching, and polished micro-interactions designed for conversion-focused shopping journeys.",
    challenges:
      "The project encountered React 19 compatibility issues with older ecosystem packages, plus CSS compilation/minification failures caused by invalid SCSS syntax and selector edge cases from Swiper integration. Maintaining responsive consistency and reliable filter state management added additional complexity.",
    solutions:
      "Dependency conflicts were stabilized during installation, SCSS syntax was standardized by replacing problematic comment patterns and deprecated usage, and Swiper styling was fixed through safer global selector handling. The UI architecture was refined into modular, reusable components with clear state boundaries.",
    results:
      "The application now builds cleanly with optimized bundles and fully functional features including responsive layouts, theme switching, interactive carousels, and robust product browsing workflows. The codebase is more maintainable and ready for iterative feature growth.",
    highlights: [
      "Comprehensive product catalog with filtering, sorting, and advanced search",
      "Detailed product pages with galleries, wishlist support, and persistent cart state",
      "Dark and light theme support with polished transitions and micro-interactions",
      "Checkout flow with validation and order-oriented shopping experience",
      "Responsive design system for mobile, tablet, and desktop",
      "Modular architecture with performance-focused React frontend patterns",
    ],
    outcome:
      "Furniro delivers a fast, elegant e-commerce experience that balances visual quality with practical shopping functionality, creating a strong foundation for scalable online retail products.",
    techStack: ["React.js"],
    liveSiteUrl: "https://furniro-self-eight.vercel.app/",
    githubUrl: "https://github.com/Mithunraj1590/furniro.git",
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2000&q=80",
  },
  "trumung-fashion-store": {
    title: "Trumung Fashion Store",
    year: "2026",
    category: "E-Commerce",
    featured: true,
    summary:
      "A premium fashion storefront built with Next.js, featuring editorial-first layouts, smooth interactions, product detail journeys, cart workflows, and dedicated Shop, Lookbook, About, Account, and Cart experiences.",
    about:
      "This project delivers a modern digital fashion destination that blends commerce and editorial storytelling. The platform focuses on visual hierarchy, premium motion, and modular UI widgets to create a scalable front-end system. Every page is designed as reusable sections, enabling quick iteration for campaigns, seasonal drops, and lookbook narratives.",
    challenges:
      "Designing a high-end fashion interface that feels cinematic while still supporting practical e-commerce workflows like product browsing, detail pages, authentication, and cart management across multiple routes and device sizes.",
    solutions:
      "Implemented a modular App Router architecture in Next.js with reusable widget sections for each page type. Integrated GSAP + ScrollTrigger for reveal and pinned interactions, Lenis for smooth global scrolling, and a client-side cart provider with persistent local storage state. Built responsive layouts with Tailwind CSS and consistent interaction patterns across all major views.",
    results:
      "A cohesive fashion platform with strong visual identity, animated storytelling, and working commerce fundamentals. Users can discover products through curated sections, view details, add items to cart, and manage quantities with a seamless cross-page experience.",
    highlights: [
      "Multi-page fashion experience with Home, Shop, Lookbook, About, Auth, Cart, and Product Detail routes",
      "Product detail flow with persistent Add-to-Cart and quantity controls",
      "Shared global cart state with live header badge and dropdown preview",
      "Scroll-driven storytelling with GSAP + ScrollTrigger and Lenis smooth scrolling",
      "Reusable widget-based architecture for rapid section composition and scaling",
    ],
    outcome:
      "Delivered a production-ready fashion web experience that combines editorial design language with practical shopping flows, creating a strong foundation for future payment integration, inventory sync, and CMS-driven content expansion.",
    techStack: [
      "Next.js (App Router)",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "GSAP + ScrollTrigger",
      "Lenis",
      "Context API (Cart State)",
    ],
    liveSiteUrl: "https://trumung.vercel.app/",
    githubUrl: "https://github.com/Mithunraj1590/fashion-store.git",
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80",
  },
  "leisurehoppers-dmc": {
    title: "LeisureHoppers Destination Management (DMC)",
    year: "2025",
    category: "Travel & Tourism",
    featured: true,
    summary:
      "LeisureHoppers is a modern B2B destination management website focused on Thailand travel services for global travel agents and tour operators. The platform highlights tailored itineraries, featured destination packages, trusted partnerships, and fast inquiry workflows with a clear, conversion-focused interface.",
    about:
      "LeisureHoppers was built as a high-impact destination marketing website to strengthen inbound B2B leads and improve trust for Thailand-focused travel operations. The site architecture balances brand storytelling with practical conversion elements such as quote requests, package browsing, and always-visible contact access.",
    challenges:
      "Structuring a content-heavy travel website without overwhelming users, balancing visual richness with loading performance, maintaining consistent responsiveness across many section types, and ensuring smooth navigation for long-page scrolling and anchor-based interactions.",
    solutions:
      "Implemented a clear section hierarchy from Hero to Contact, reused card patterns with responsive grid utilities, added AOS animations and Lenis smooth scrolling for polished interactions, and integrated direct conversion CTAs like Request a Quote, View Itinerary, and WhatsApp at key touchpoints.",
    results:
      "Delivered a professional and conversion-ready digital presence with improved content discoverability, stronger partner confidence through social proof, faster lead capture through streamlined inquiry workflows, and a scalable base for future pages and feature expansion.",
    highlights: [
      "B2B-focused service presentation for travel agents and tour operators",
      "Interactive hero and trust metrics for travellers served, partner agents, and destinations",
      "Service showcase for FIT/group tours, MICE, transfers, and multilingual guides",
      "Featured Thailand package cards with curated highlights and itinerary CTAs",
      "Inquiry-first contact flow with package-interest dropdown and direct WhatsApp access",
      "Responsive UI with lightweight animations and smooth-scroll enhancements",
    ],
    outcome:
      "LeisureHoppers now presents a credible, modern, and business-ready web experience that helps travel agents evaluate services quickly, explore destination offerings, and initiate partnerships with confidence.",
    techStack: [
      "WordPress",
      "HTML5",
      "CSS3",
      "JavaScript (Vanilla)",
      "Bootstrap 5",
      "Bootstrap Icons",
      "AOS (Animate On Scroll)",
      "Lenis (Smooth Scroll)",
    ],
    liveSiteUrl: "#",
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=2000&q=80",
  },
};
const projectOrder = Object.keys(workDetails);

export default function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = workDetails[slug];

  if (!project) {
    notFound();
  }

  return (
    <PageTransition>
      <Layout>
        <section className="section-padding pt-28">
          <div className="max-w-[1200px] mx-auto">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-heading tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
              data-cursor="pointer"
            >
              <ArrowLeft size={14} />
              Back to work
            </Link>

            <div className="mt-8 mb-12">
              <p className="text-xs font-heading tracking-[0.3em] uppercase text-primary mb-4">Case Study</p>
              {(project.year || project.category || project.featured) && (
                <p className="text-xs font-heading tracking-wider uppercase text-muted-foreground mb-3">
                  {project.year ? `${project.year} • ` : ""}
                  {project.category ?? ""}
                  {project.featured ? " • Featured" : ""}
                </p>
              )}
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[0.92]">{project.title}</h1>
              <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-4xl leading-relaxed">
                {project.summary}
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border/30 mb-8">
              <div
                className="h-[260px] md:h-[420px] bg-cover bg-center"
                style={{ backgroundImage: `url(${project.backgroundImageUrl})` }}
              />
            </div>

            <div className="rounded-2xl border border-border/30 p-8 md:p-10 bg-card/30">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.highlights.map((item) => (
                  <div key={item} className="rounded-xl border border-border/20 p-4 bg-background/40">
                    <p className="text-sm text-foreground/90 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {(project.about || project.challenges || project.solutions || project.results) && (
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {project.about && (
                  <div className="md:col-span-2 rounded-2xl border border-border/30 p-8 bg-card/30">
                    <h3 className="text-xl font-display font-semibold mb-4">About Project</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.about}</p>
                  </div>
                )}
                {project.challenges && (
                  <div className="rounded-2xl border border-border/30 p-8 bg-card/30">
                    <h3 className="text-xl font-display font-semibold mb-4">Challenges</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.challenges}</p>
                  </div>
                )}
                {project.solutions && (
                  <div className="rounded-2xl border border-border/30 p-8 bg-card/30">
                    <h3 className="text-xl font-display font-semibold mb-4">Solutions</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.solutions}</p>
                  </div>
                )}
                {project.results && (
                  <div className="md:col-span-2 rounded-2xl border border-border/30 p-8 bg-card/30">
                    <h3 className="text-xl font-display font-semibold mb-4">Results</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.results}</p>
                  </div>
                )}
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="md:col-span-2 rounded-2xl border border-border/30 p-8 bg-card/30">
                <h3 className="text-xl font-display font-semibold mb-4">Outcome</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.outcome}</p>
              </div>

              <div className="rounded-2xl border border-border/30 p-8 bg-card/30">
                <h3 className="text-xl font-display font-semibold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-3 py-1 rounded-full border border-border/40 text-muted-foreground font-heading tracking-wider uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={project.liveSiteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary bg-primary/10 text-primary text-sm font-heading tracking-wider uppercase hover:bg-primary/20 transition-colors"
                data-cursor="pointer"
              >
                View live site
                <ArrowUpRight size={16} />
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border text-foreground text-sm font-heading tracking-wider uppercase hover:border-primary hover:text-primary transition-colors"
                  data-cursor="pointer"
                >
                  View on GitHub
                  <ArrowUpRight size={16} />
                </a>
              )}

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-sm font-heading tracking-wider uppercase text-foreground hover:text-primary transition-colors"
                data-cursor="pointer"
              >
                Start a similar project
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {(() => {
              const currentIndex = projectOrder.indexOf(slug);
              const nextSlug = currentIndex >= 0 ? projectOrder[(currentIndex + 1) % projectOrder.length] : null;
              return nextSlug ? (
                <div className="mt-12">
                  <Link
                    href={`/work/${nextSlug}`}
                    className="inline-flex items-center gap-2 text-xs font-heading tracking-[0.25em] uppercase text-muted-foreground hover:text-primary transition-colors"
                    data-cursor="pointer"
                  >
                    Next project
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              ) : null;
            })()}
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
}
