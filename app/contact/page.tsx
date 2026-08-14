import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Naeem Ghafoor | Discuss Your Project",
  description:
    "Get in touch with Naeem Ghafoor via WhatsApp or email to discuss research proposals, policy briefs, executive support, data analysis, or digital solutions.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Page Banner Header */}
      <div className="bg-navy text-white py-12 lg:py-16 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-accent bg-forest/40 px-3 py-1 rounded">
            Client Acquisition &amp; Enquiry
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Contact &amp; Project Enquiry
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mt-2">
            Discuss your research, policy, presentation, AI, or digital requirement directly with Naeem Ghafoor.
          </p>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
