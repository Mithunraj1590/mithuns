import { forwardRef, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";

const Layout = forwardRef<HTMLDivElement, { children: ReactNode }>(({ children }, ref) => {
  return (
    <div ref={ref} className="min-h-screen bg-background text-foreground overflow-x-hidden grain no-cursor">
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
});

Layout.displayName = "Layout";
export default Layout;
