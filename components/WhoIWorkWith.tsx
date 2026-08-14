"use client";

import React from "react";
import { GraduationCap, Landmark, Building2, Briefcase, Globe2, Users } from "lucide-react";

export const WhoIWorkWith: React.FC = () => {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Researchers & Students",
      description: "Postgraduate research support, dissertations, thesis methodology, analytical work, and defence presentation decks.",
    },
    {
      icon: Landmark,
      title: "Civil Servants",
      description: "Executive research papers, policy briefs, syndicate project reports, and briefing decks for CTP, MCMC, and SMC courses.",
    },
    {
      icon: Building2,
      title: "Businesses",
      description: "Analytical reports, ESG sustainability evaluation, executive slide decks, and data dashboard solutions.",
    },
    {
      icon: Briefcase,
      title: "Professionals & Consultants",
      description: "Technical research synthesis, quantitative data processing, administrative write-ups, and slide deck design.",
    },
    {
      icon: Users,
      title: "NGOs & Organisations",
      description: "Baseline study reports, social policy evaluations, thematic qualitative analysis, and institutional briefing packs.",
    },
    {
      icon: Globe2,
      title: "International Clients",
      description: "Seamless remote research, data analysis, and digital solutions for clients in the UK, UAE, and worldwide.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-offwhite border-b border-bordergrey/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-forest bg-softgreen px-3.5 py-1.5 rounded-full border border-softgreen-border inline-flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            <span>Target Audience &amp; Collaborators</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3">
            Who I Help
          </h2>
          <p className="text-bodytext text-base sm:text-lg mt-2 leading-relaxed">
            Tailored advisory, research assistance, and technical solutions for diverse institutional and individual requirements.
          </p>
        </div>

        {/* 6 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-bordergrey hover:border-forest/50 hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-softgreen text-forest flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-navy mb-2">
                    {aud.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-bodytext leading-relaxed">
                    {aud.description}
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
