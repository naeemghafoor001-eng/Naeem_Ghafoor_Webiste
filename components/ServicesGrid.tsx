"use client";

import React from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/servicesData";
import { CheckCircle2, ArrowRight, Compass, ShieldCheck } from "lucide-react";

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-offwhite border-b border-bordergrey/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-forest bg-softgreen px-3.5 py-1.5 rounded-full border border-softgreen-border inline-flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            <span>Professional Advisory &amp; Solutions</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3">
            How I Can Help
          </h2>
          <p className="text-bodytext text-base sm:text-lg mt-3 leading-relaxed">
            Flexible professional support across research, policy, academic work, data, presentations, executive assignments and digital solutions.
          </p>
        </div>

        {/* 8-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-bordergrey hover:border-forest/50 hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between group scroll-mt-32"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-2xl text-forest/40 group-hover:text-forest transition-colors">
                    {service.number}
                  </span>
                  {service.badge && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-softgreen text-forest border border-softgreen-border">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-2xl font-bold text-navy group-hover:text-forest transition-colors">
                  {service.title}
                </h3>

                <p className="text-bodytext text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Key Deliverables List */}
                <div className="pt-2 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-navy/70">
                    Key Deliverables:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-navy">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Tags */}
                {service.tools && (
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {service.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded bg-lightgrey text-bodytext border border-bordergrey"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-6 mt-6 border-t border-bordergrey/60">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-forest group-hover:text-forest-hover transition-colors"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Ethical Academic Support Footer Banner */}
        <div className="mt-12 bg-lightgrey/80 rounded-2xl p-6 border border-bordergrey flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-forest shrink-0 mt-0.5" />
            <p className="text-xs text-bodytext leading-relaxed">
              <strong>Academic Integrity Commitment:</strong> Academic services are provided for research assistance, learning support, editing, analysis, formatting, and professional guidance. Clients remain responsible for compliance with the academic integrity requirements of their respective institutions.
            </p>
          </div>
          <Link
            href="/services"
            className="shrink-0 text-xs font-bold px-4 py-2 rounded-lg bg-navy text-white hover:bg-navy-800 transition-colors"
          >
            Explore All Services &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
};
