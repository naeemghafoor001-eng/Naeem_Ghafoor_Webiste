"use client";

import React from "react";
import { BookOpenCheck, Shield, Layers, Clock } from "lucide-react";

export const WhyWorkWithMe: React.FC = () => {
  const principles = [
    {
      icon: BookOpenCheck,
      title: "Evidence-Based",
      description: "Rigorous methodology grounded in empirical research, verified data, and academic standards.",
    },
    {
      icon: Shield,
      title: "Confidential",
      description: "Strict data privacy and professional handling of all sensitive institutional and project materials.",
    },
    {
      icon: Layers,
      title: "Multidisciplinary",
      description: "Seamless integration of public policy, social science research, quantitative data, and digital tools.",
    },
    {
      icon: Clock,
      title: "Tailored & Deadline-Conscious",
      description: "Customized deliverables aligned with specific requirements and reliable target timelines.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-lightgrey/50 via-offwhite to-lightgrey/50 border-b border-bordergrey/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-forest bg-softgreen px-3.5 py-1.5 rounded-full border border-softgreen-border inline-flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" />
            <span>Trust &amp; Standards</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3">
            Why Work With Me
          </h2>
          <p className="text-bodytext text-base sm:text-lg mt-2 leading-relaxed">
            Grounded in public-sector discipline, academic rigour, and commercial responsiveness.
          </p>
        </div>

        {/* 4 Concise Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-bordergrey hover:border-forest/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-softgreen text-forest flex items-center justify-center mb-4 font-bold group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-navy mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-bodytext leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
