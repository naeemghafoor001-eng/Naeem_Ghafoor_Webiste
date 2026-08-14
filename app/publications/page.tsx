import { Metadata } from "next";
import { PublicationsSection } from "@/components/PublicationsSection";

export const metadata: Metadata = {
  title: "Published Work & Articles | Naeem Ghafoor",
  description:
    "Read Naeem Ghafoor's peer-reviewed paper in Jahan-e-Tahqeeq and published policy commentaries in Republic Policy.",
};

export default function PublicationsPage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Page Banner Header */}
      <div className="bg-navy text-white py-12 lg:py-16 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-accent bg-forest/40 px-3 py-1 rounded">
            Scholarship
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Publications &amp; Articles
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mt-2">
            Peer-reviewed empirical journal papers and published public policy commentary.
          </p>
        </div>
      </div>

      <PublicationsSection />
    </div>
  );
}
