 "use client";

import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import AboutSection from "@/components/AboutSection";

export default function AboutPage() {
  return (
    <PageTransition>
      <Layout>
        <div className="pt-24">
          <AboutSection />
        </div>
      </Layout>
    </PageTransition>
  );
}

