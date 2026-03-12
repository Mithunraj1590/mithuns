import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Skills and expertise of Mithun Raj — Development, design, and creative tech. React, Next.js, TypeScript, Three.js, and more.",
  openGraph: {
    title: "Skills | Mithun Raj",
    description: "Skills and expertise of Mithun Raj — Development and design.",
  },
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

