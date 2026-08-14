"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  FileText,
  Shield,
  BarChart3,
  Presentation,
  Cpu,
  ArrowRight,
  Compass,
} from "lucide-react";

export const HomepageServices: React.FC = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Research & Academic Support",
      sentence:
        "Research guidance, literature reviews, methodology, dissertations, assignments, editing and academic presentation support.",
      href: "/services#research-academic-support",
      ctaText: "Explore Research Support →",
    },
    {
      icon: FileText,
      title: "Policy & Analytical Reports",
      sentence:
        "Policy briefs, analytical reports, governance studies, executive summaries and evidence-based recommendations.",
      href: "/services#policy-research-analytical-reports",
      ctaText: "Explore Policy Services →",
    },
    {
      icon: Shield,
      title: "Executive & Civil Service Support",
      sentence:
        "Professional research and presentation support for CTP, MCMC, SMC, NMC and executive training programmes.",
      href: "/executive-support",
      ctaText: "Explore Executive Support →",
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Research Methods",
      sentence:
        "SPSS, R, Python, Excel, survey analysis, statistical reporting, thematic analysis and visualisation.",
      href: "/services#data-analysis-research-methods",
      ctaText: "Explore Data Services →",
    },
    {
      icon: Presentation,
      title: "Presentations & Professional Documents",
      sentence:
        "PowerPoint presentations, executive decks, reports, Word formatting, speaker notes and professional documentation.",
      href: "/services#presentations-professional-documents",
      ctaText: "Explore Presentation Services →",
    },
    {
      icon: Cpu,
      title: "AI & Digital Solutions",
      sentence:
        "AI agents, workflow automation, dashboards, research tools, web solutions and digital prototypes.",
      href: "/ai-digital-solutions",
      ctaText: "Explore Digital Solutions →",
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-20 bg-offwhite border-b border-bordergrey/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-forest bg-softgreen px-3.5 py-1.5 rounded-full border border-softgreen-border inline-flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            <span>Capabilities &amp; Solutions</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3">
            What I Do
          </h2>
          <p className="text-bodytext text-base sm:text-lg mt-2 leading-relaxed">
            Professional advisory and technical support tailored to your research, policy, data, and digital requirements.
          </p>
        </div>

        {/* 6 Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-bordergrey hover:border-forest/50 hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-softgreen text-forest flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy group-hover:text-forest transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-bodytext leading-relaxed">
                    {service.sentence}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-bordergrey/60">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-forest group-hover:text-forest-hover transition-colors"
                  >
                    <span>{service.ctaText}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Gateway Link */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-navy bg-white hover:bg-lightgrey border border-bordergrey transition-colors shadow-sm"
          >
            <span>View All Capabilities &amp; Advisory</span>
            <ArrowRight className="w-4 h-4 text-forest" />
          </Link>
        </div>
      </div>
    </section>
  );
};
