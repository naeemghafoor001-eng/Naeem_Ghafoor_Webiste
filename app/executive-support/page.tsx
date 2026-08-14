import { Metadata } from "next";
import { ExecutiveSupportSection } from "@/components/ExecutiveSupportSection";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Executive & Civil Service Support | CTP, MCMC, SMC, NMC | Naeem Ghafoor",
  description:
    "Specialised research, policy briefs, syndicate project support, and presentation design for civil servants and officers attending CTP, MCMC, SMC, NMC, and national/international courses.",
};

export default function ExecutiveSupportPage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Page Banner Header */}
      <div className="bg-navy text-white py-12 lg:py-16 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-accent bg-forest/40 px-3 py-1 rounded">
            Public-Sector Focus
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Executive &amp; Civil Service Support
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mt-2">
            Tailored research assistance, policy paper structuring, current issue briefs, and presentation decks for officers in Pakistan and international training programmes.
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
