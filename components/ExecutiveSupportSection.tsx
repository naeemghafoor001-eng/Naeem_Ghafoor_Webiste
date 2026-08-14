"use client";

import React from "react";
import Link from "next/link";
import { Landmark, ArrowRight, CheckCircle2, Shield, FileText, Presentation, BookOpen } from "lucide-react";

export const ExecutiveSupportSection: React.FC = () => {
  const trainingProgrammes = [
    { title: "CTP", description: "Common Training Programme" },
    { title: "MCMC", description: "Mid-Career Management Course" },
    { title: "SMC", description: "Senior Management Course" },
    { title: "NMC", description: "National Management Course" },
    { title: "Departmental", description: "In-Service & Specialist Courses" },
    { title: "International", description: "Executive Training Fellowships" },
  ];

  const executiveServices = [
    "Policy Papers & Strategic Write-ups",
    "Individual & Syndicate Research Papers",
    "Current Issue Briefing Notes",
    "Executive Presentation Decks & Speaker Notes",
    "Training Assignments & Case Analysis",
    "Post-Training Documentation & Reports",
  ];

  return (
    <section id="executive-support" className="py-16 lg:py-24 bg-navy text-white relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-accent bg-forest/40 px-3.5 py-1.5 rounded-full border border-forest/60 inline-flex items-center gap-1.5">
            <Landmark className="w-3.5 h-3.5" />
            <span>Public-Sector &amp; Executive Focus</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-3 leading-tight">
            Executive &amp; Civil Service Support
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mt-3 leading-relaxed">
            High-level research, policy briefs, syndicate project support, and presentation design for civil servants, public-sector leaders, and professionals attending national and international training courses.
          </p>
        </div>

        {/* Training Programme Pills Grid */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-accent mb-4">
            Supporting Participants Attending Programmes Including:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {trainingProgrammes.map((prog, idx) => (
              <div
                key={idx}
                className="bg-navy-800/90 border border-navy-800 hover:border-emerald-accent/50 rounded-xl p-3 text-center transition-colors"
              >
                <span className="font-serif font-bold text-lg text-emerald-accent block">
                  {prog.title}
                </span>
                <span className="text-[11px] text-gray-400 block mt-0.5 font-sans">
                  {prog.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Grid & Messaging */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 bg-navy-800/70 rounded-2xl p-6 sm:p-8 border border-navy-800 space-y-4">
            <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-accent" />
              <span>Specialised Support Deliverables</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {executiveServices.map((service, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-accent shrink-0 mt-0.5" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-navy-800 text-xs text-gray-400 leading-relaxed flex items-start gap-2">
              <Shield className="w-4 h-4 text-emerald-accent shrink-0 mt-0.5" />
              <span>
                <strong>Confidential &amp; Ethical Assistance:</strong> All executive support is conducted with strict confidentiality, structured around official departmental frameworks, empirical research, and rigorous policy standards.
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-full">
            <div className="bg-gradient-to-br from-forest/30 to-navy-800 rounded-2xl p-6 sm:p-8 border border-forest/40 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-white">
                Elevate Your Executive Output
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Whether you require structured evidence synthesis for a syndicate report, data formatting in SPSS/Excel, or a board-ready PowerPoint deck, support is tailored to your course parameters.
              </p>
              
              <Link
                href="/contact?service=Executive%20%26%20Civil%20Service%20Support"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-forest hover:bg-forest-hover transition-all shadow-md"
              >
                <span>Discuss Executive Support</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
