"use client";

import React from "react";
import Link from "next/link";
import { Shield, GraduationCap, Cpu, ArrowRight, UserCheck } from "lucide-react";

export const AboutSnapshot: React.FC = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Public-Sector & Executive Experience",
      desc: "Parole Officer BS-17 & PSO at Punjab Probation & Parole Service, Home Department.",
    },
    {
      icon: GraduationCap,
      title: "M.Phil Sociology, University of the Punjab",
      desc: "Advanced social research, qualitative/quantitative methods, and policy studies.",
    },
    {
      icon: Cpu,
      title: "Research, Data & Digital Capability",
      desc: "Integration of SPSS, R, Python data analytics, AI workflows, and modern web solutions.",
    },
  ];

  return (
    <section id="about-snapshot" className="py-16 lg:py-20 bg-offwhite border-b border-bordergrey/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Container Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-bordergrey shadow-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-softgreen/30 rounded-bl-full pointer-events-none -z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Summary Copy */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-forest bg-softgreen px-3.5 py-1.5 rounded-full border border-softgreen-border inline-flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Professional Snapshot</span>
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy leading-tight">
                About Naeem Ghafoor
              </h2>

              <p className="text-bodytext text-base sm:text-lg leading-relaxed">
                Naeem Ghafoor is an M.Phil Sociology researcher and public-sector professional with experience in policy, analytical reporting, executive communication, research, data analysis and digital transformation. His work combines practical public administration exposure with modern research, analytical and technology tools to support complex professional and academic requirements.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-forest hover:bg-forest-hover transition-colors shadow-md"
                >
                  <span>Read Full Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: 3 Compact Highlights */}
            <div className="lg:col-span-6 space-y-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-lightgrey/80 border border-bordergrey/80 hover:border-forest/40 hover:bg-softgreen/20 transition-colors flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-navy text-emerald-accent flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-base text-navy">
                        {item.title}
                      </h3>
                      <p className="text-xs text-bodytext mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
