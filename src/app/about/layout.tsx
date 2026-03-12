import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Mithun Raj — Creative Developer & Designer. Design-driven development, interactive experiences, and thoughtful craft.",
  openGraph: {
    title: "About | Mithun Raj",
    description: "Learn more about Mithun Raj — Creative Developer & Designer.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

