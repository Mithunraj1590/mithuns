import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Providers from "./providers";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://mithunraj.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Mithun Raj — Portfolio",
    template: "%s | Mithun Raj",
  },
  description:
    "Portfolio of Mithun Raj — Creative Developer & Designer. Crafting digital experiences at the intersection of technology and aesthetics.",
  keywords: ["Mithun Raj", "portfolio", "developer", "designer", "creative", "frontend", "React", "Next.js"],
  authors: [{ name: "Mithun Raj", url: baseUrl }],
  creator: "Mithun Raj",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Mithun Raj — Portfolio",
    title: "Mithun Raj — Portfolio",
    description: "Creative Developer & Designer. Crafting digital experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mithun Raj — Portfolio",
    description: "Creative Developer & Designer. Crafting digital experiences.",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

