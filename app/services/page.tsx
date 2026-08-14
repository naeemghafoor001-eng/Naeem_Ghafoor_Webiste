import { Metadata } from "next";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ToolkitSection } from "@/components/ToolkitSection";
import { WhoIWorkWith } from "@/components/WhoIWorkWith";

export const metadata: Metadata = {
  title: "Professional Services | Naeem Ghafoor",
  description:
    "Explore 8 core service categories: Research & Academic Support, Policy Briefs, Executive Support, SPSS/R/Python Data Analysis, Presentation Design, and AI Solutions.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Page Banner Header */}
      <div className="bg-navy text-white py-12 lg:py-16 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-accent bg-forest/40 px-3 py-1 rounded">
            Capabilities &amp; Advisory
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Services &amp; Advisory Solutions
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mt-2">
            Flexible professional support across research, policy, data analytics, presentations, executive training, and digital solutions.
          </p>
        </div>
      </div>

      <ServicesGrid />
      <WhoIWorkWith />
      <ToolkitSection />
    </div>
  );
}
