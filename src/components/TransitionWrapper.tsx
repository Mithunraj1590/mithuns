"use client";

import { ReactNode } from "react";

export default function TransitionWrapper({ children }: { children: ReactNode }) {
  // Intentionally no route transition animation.
  return <div className="relative min-h-screen">{children}</div>;
}
