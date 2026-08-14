import { Metadata } from "next";
import { ExecutiveSupportSection } from "@/components/ExecutiveSupportSection";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Executive Research Support | CTP, MCMC, SMC, NMC | Naeem Ghafoor",
  description:
    "Professional research, analytical writing, policy papers, presentations and documentation support for civil servants and executives attending CTP, MCMC, SMC, NMC, national and international training programmes.",
  alternates: {
    canonical: "https://naeemghafoor.vercel.app/executive-support",
  },
};

export default function ExecutiveSupportPage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Page Banner Header */}
      <div className="bg-navy text-white py-12 lg:py-16 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-accent bg-forest/40 px-3 py-1 rounded">
            Public-Sector &amp; Executive Focus
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Executive Research Support for Public-Sector Professionals
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
            Professional research, analytical writing, policy papers, presentations and documentation support for executive development and civil-service training programmes.
          </p>
        </div>
      </div>

      <ExecutiveSupportSection />
      
      <div className="py-12 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-3">
            Enquire About Executive Support
          </h2>
          <p className="text-xs sm:text-sm text-bodytext">
            Submit your course assignment parameters, research topic, or presentation timeline for confidential evaluation.
          </p>
        </div>
      </div>

      <ContactForm defaultService="Executive / Civil Service Support" />
    </div>
  );
}
