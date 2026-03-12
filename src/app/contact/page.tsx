 "use client";

import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <PageTransition>
      <Layout>
        <div className="pt-24">
          <ContactSection />
        </div>
      </Layout>
    </PageTransition>
  );
}

