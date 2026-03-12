 "use client";

import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import ScrollytellingHome from "@/components/ScrollytellingHome";

export default function HomePage() {
  return (
    <PageTransition>
      <Layout>
        <ScrollytellingHome />
      </Layout>
    </PageTransition>
  );
}

