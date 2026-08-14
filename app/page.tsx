"use client";

import React, { useState } from "react";
import { Hero } from "@/components/Hero";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { HomepageServices } from "@/components/HomepageServices";
import { WhoIWorkWith } from "@/components/WhoIWorkWith";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AboutSnapshot } from "@/components/AboutSnapshot";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";
import { FinalCTA } from "@/components/FinalCTA";
import { ContactForm } from "@/components/ContactForm";
import { ConsultationModal } from "@/components/ConsultationModal";

export default function Home() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  return (
    <div className="space-y-0">
      {/* 1. HERO */}
      <Hero />

      {/* 2. CREDIBILITY STRIP */}
      <CredibilityStrip />

      {/* 3. WHAT I DO */}
      <HomepageServices />

      {/* 4. WHO I HELP */}
      <WhoIWorkWith />

      {/* 5. SELECTED WORK */}
      <PortfolioSection featuredOnly={true} />

      {/* 6. ABOUT SNAPSHOT */}
      <AboutSnapshot />

      {/* 7. WHY WORK WITH ME */}
      <WhyWorkWithMe />

      {/* 8. FINAL CTA + CONTACT */}
      <FinalCTA onOpenConsultation={() => setConsultationModalOpen(true)} />
      <ContactForm />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />
    </div>
  );
}
