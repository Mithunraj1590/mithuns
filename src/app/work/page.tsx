 "use client";

import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import ProjectsSection from "@/components/ProjectsSection";

export default function WorkPage() {
  return (
    <PageTransition>
      <Layout>
        <div className="pt-24">
          <ProjectsSection />
        </div>
      </Layout>
    </PageTransition>
  );
}

