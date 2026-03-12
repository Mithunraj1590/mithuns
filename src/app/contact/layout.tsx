import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mithun Raj — Available for projects. Let's create something great together.",
  openGraph: {
    title: "Contact | Mithun Raj",
    description: "Get in touch with Mithun Raj. Let's create something great together.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

