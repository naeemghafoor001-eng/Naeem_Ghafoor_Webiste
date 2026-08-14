"use client";

import React from "react";
import { Award, BookOpen, FileCheck, Cpu, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export const RecognitionSection: React.FC = () => {
  const contributions = [
    {
      icon: BookOpen,
      title: "Correctional Guide",
      subtitle: "Professional Authorship",
      description: "Authorship and development of a practical, evidence-based professional guide for Probation and Parole Officers across Punjab.",
    },
    {
      icon: FileCheck,
      title: "Instructions Manual",
      subtitle: "Institutional Standardisation",
      description: "Active participation in the official departmental committee responsible for formulating the comprehensive Instructions Manual.",
    },
    {
      icon: ShieldCheck,
      title: "Knowledge & Reporting",
      subtitle: "Administrative Excellence",
      description: "Key contribution to analytical reporting, knowledge resources, executive correspondence, and structured administrative documentation.",
    },
    {
      icon: Cpu,
      title: "Data & Digital Innovation",
      subtitle: "R & AI Workflow Integration",
      description: "Pioneering work in R-based reporting, digital administrative systems, AI productivity tools, and modern knowledge-management solutions.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-lightgrey/60 via-offwhite to-lightgrey/60 border-b border-bordergrey/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-forest bg-softgreen px-3.5 py-1.5 rounded-full border border-softgreen-border inline-flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            <span>Honours &amp; Impact</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3">
            Recognition &amp; Professional Contribution
          </h2>
          <p className="text-bodytext text-base sm:text-lg mt-3 leading-relaxed">
            Departmental recognition for research, institutional reporting, manual development, and digital innovation.
          </p>
        </div>

        {/* Feature Card: Certificate of Appreciation */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-bordergrey shadow-premium mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-softgreen/30 rounded-bl-full pointer-events-none -z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-forest bg-softgreen px-3 py-1 rounded-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Official Departmental Recognition</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
                Certificate of Appreciation
              </h3>
              <p className="text-bodytext text-sm sm:text-base leading-relaxed">
                Formally awarded departmental recognition in appreciation of exceptional contributions toward the formulation of the <strong>Correctional Guide</strong>, participation in preparing the <strong>Instructions Manual</strong>, R-based analytical reporting, AI-related workflow initiatives, and administrative knowledge work.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-navy font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-accent shrink-0" />
                  <span>2nd Position in PP&amp;PS In-Service Training Final Assessment</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-navy font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-accent shrink-0" />
                  <span>Clean Professional &amp; Departmental Service Record</span>
                </div>
              </div>
            </div>

            {/* Visual Recognition Badge Container */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-xs bg-lightgrey/90 rounded-2xl p-6 border border-bordergrey text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-navy text-white mx-auto flex items-center justify-center shadow-md">
                  <Award className="w-8 h-8 text-emerald-accent" />
                </div>
                <h4 className="font-serif font-bold text-base text-navy">
                  Departmental Commendation
                </h4>
                <p className="text-xs text-bodytext leading-relaxed">
                  Acknowledging research leadership, presentation excellence, and digital transformation initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Institutional Contributions Grid */}
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy mb-6 text-center lg:text-left">
            Selected Institutional Contributions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contributions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-bordergrey hover:border-forest/50 hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-softgreen text-forest flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-forest">
                      {item.subtitle}
                    </span>
                    <h4 className="font-serif font-bold text-lg text-navy mt-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-bodytext mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
