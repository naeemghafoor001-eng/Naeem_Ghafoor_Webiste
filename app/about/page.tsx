import { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { RecognitionSection } from "@/components/RecognitionSection";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";

export const metadata: Metadata = {
  title: "About Naeem Ghafoor | Research, Policy & Digital Solutions",
  description:
    "Learn about Naeem Ghafoor's professional background as a Parole Officer BS-17 (PP&PS), former FBR officer, M.Phil Sociology researcher, and digital practitioner.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Page Banner Header */}
      <div className="bg-navy text-white py-12 lg:py-16 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-accent bg-forest/40 px-3 py-1 rounded">
            Professional Profile
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            About Naeem Ghafoor
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mt-2">
            Multidisciplinary researcher, public-sector professional, and digital practitioner committed to evidence-based delivery.
          </p>
        </div>
      </div>

      <AboutSection />
      <RecognitionSection />
      <WhyWorkWithMe />
    </div>
  );
}
