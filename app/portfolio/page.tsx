import { Metadata } from "next";
import { PortfolioSection } from "@/components/PortfolioSection";

export const metadata: Metadata = {
  title: "Selected Projects & Case Studies | Naeem Ghafoor",
  description:
    "Explore 15+ multidisciplinary research, policy, data analytics, ESG, construction management, and digital projects handled by Naeem Ghafoor.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Page Banner Header */}
      <div className="bg-navy text-white py-12 lg:py-16 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-accent bg-forest/40 px-3 py-1 rounded">
            Project Showcase
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Selected Projects &amp; Work
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mt-2">
            A selection of multidisciplinary research, quantitative data analysis, policy briefs, and technical projects.
          </p>
        </div>
      </div>

      <PortfolioSection />
    </div>
  );
}
