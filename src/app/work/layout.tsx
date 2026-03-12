import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work and projects by Mithun Raj — Web apps, creative tools, and design-driven development.",
  openGraph: {
    title: "Work | Mithun Raj",
    description: "Selected work and projects by Mithun Raj.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

