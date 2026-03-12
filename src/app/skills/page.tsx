 "use client";

import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import SkillsSection from "@/components/SkillsSection";

export default function SkillsPage() {
  return (
    <PageTransition>
      <Layout>
        <div className="pt-24">
          <SkillsSection />
        </div>
      </Layout>
    </PageTransition>
  );
}

