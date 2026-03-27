import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  // Intentionally no route transition animation.
  return <>{children}</>;
}
