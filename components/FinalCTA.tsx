"use client";

import React from "react";
import { MessageSquare, Calendar, Send } from "lucide-react";

interface FinalCTAProps {
  onOpenConsultation?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenConsultation }) => {
  const scrollToContact = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-navy text-white relative overflow-hidden border-y border-navy-800">
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-accent bg-forest/40 px-3.5 py-1.5 rounded-full border border-forest/60">
          Get Started
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
          Have a Project in Mind?
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Discuss your research, policy, presentation, data or digital requirement.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/923025887436?text=Hello%20Naeem,%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-forest hover:bg-forest-hover transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-navy bg-white hover:bg-lightgrey transition-colors"
          >
            <Send className="w-4 h-4 text-forest" />
            <span>Submit Enquiry</span>
          </button>

          {onOpenConsultation && (
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-emerald-accent bg-navy-800 border border-emerald-accent/30 hover:bg-forest/30 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Consultation</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
