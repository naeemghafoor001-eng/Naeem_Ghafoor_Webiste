import { Metadata } from "next";
import { AIDigitalSection } from "@/components/AIDigitalSection";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI & Digital Solutions | Naeem Ghafoor",
  description:
    "Explore practical AI integration, custom AI agents, document intelligence, Python data dashboards, and Next.js web application development.",
};

export default function AIDigitalPage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Page Banner Header */}
      <div className="bg-navy text-white py-12 lg:py-16 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-accent bg-forest/40 px-3 py-1 rounded">
            Modern Capabilities
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            AI &amp; Digital Solutions
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mt-2">
            Practical AI workflows, document intelligence, custom AI agents, interactive dashboards, and modern web application development.
          </p>
        </div>
      </div>

      <AIDigitalSection />
      
      <div className="py-12 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-3">
            Scope an AI or Digital Solution
          </h2>
          <p className="text-xs sm:text-sm text-bodytext">
            Submit your workflow parameters or digital requirement for tailored scoping.
          </p>
        </div>
      </div>

      <ContactForm defaultService="AI Solution" />
    </div>
  );
}
