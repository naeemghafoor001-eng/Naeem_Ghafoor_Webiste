"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, ArrowRight, FileText, CheckCircle2, Shield } from "lucide-react";

export const Hero: React.FC = () => {
  const capabilityChips = [
    "Research & Policy",
    "Data Analysis",
    "AI Solutions",
    "Presentations",
    "Professional Reports",
    "Digital Development",
  ];

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-offwhite via-lightgrey/40 to-offwhite overflow-hidden border-b border-bordergrey/60">
      {/* Subtle Background Geometric Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-softgreen/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-accent/5 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Small Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-softgreen border border-softgreen-border text-forest text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
              <span>Research • Policy • Data • Digital</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.25rem] font-bold text-navy leading-[1.15] tracking-tight">
              Research, Policy &amp; Digital Solutions
            </h1>

            {/* Supporting Headline */}
            <p className="text-base sm:text-lg text-navy/90 font-medium leading-relaxed">
              Turning complex ideas, evidence and data into clear research, professional reports, presentations and practical digital solutions.
            </p>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-base text-bodytext leading-relaxed">
              Professional support for researchers, civil servants, businesses, professionals and international clients across research, policy, data analysis, presentations, AI and digital development.
            </p>

            {/* Action Buttons Group */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-forest hover:bg-forest-hover transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-navy bg-white hover:bg-lightgrey border border-bordergrey transition-all shadow-sm hover:shadow-md"
              >
                <FileText className="w-4 h-4 text-forest" />
                <span>View Selected Work</span>
              </Link>

              <a
                href="https://wa.me/923025887436?text=Hello%20Naeem,%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-forest bg-softgreen border border-softgreen-border hover:bg-emerald-accent/15 transition-all"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-forest" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Capability Chips */}
            <div className="pt-4 border-t border-bordergrey/70 w-full">
              <p className="text-xs font-semibold text-navy/70 uppercase tracking-wider mb-3">
                Core Capabilities
              </p>
              <div className="flex flex-wrap gap-2">
                {capabilityChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-navy bg-white border border-bordergrey shadow-2xs hover:border-forest/40 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Naeem Ghafoor Portrait & Identity Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-sm lg:max-w-[340px] xl:max-w-[360px] bg-white rounded-2xl p-4 sm:p-5 border border-bordergrey shadow-premium relative group">
              
              {/* Discrete Accent Border Header */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-lightgrey border border-bordergrey/60 mb-4">
                <Image
                  src="/images/naeem-ghafoor.jpg"
                  alt="Naeem Ghafoor - Research, Policy & Digital Solutions Practitioner"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  priority
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Subtle Experience Tag Badge */}
                <div className="absolute top-3 left-3 bg-navy/90 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-md shadow-sm border border-white/10 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-accent" />
                  <span>Public-Sector &amp; Academic Professional</span>
                </div>
              </div>

              {/* Compact Identity Card */}
              <div className="bg-lightgrey/80 rounded-xl p-4 border border-bordergrey/70">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-xl font-bold text-navy">
                    Naeem Ghafoor
                  </h2>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-softgreen text-forest border border-softgreen-border">
                    M.Phil Sociology
                  </span>
                </div>
                <p className="text-xs font-semibold text-forest mt-1">
                  Research, Policy &amp; Digital Solutions
                </p>
                <p className="text-xs text-bodytext mt-2 leading-relaxed">
                  Public-sector professional &bull; Researcher &bull; Digital practitioner
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
