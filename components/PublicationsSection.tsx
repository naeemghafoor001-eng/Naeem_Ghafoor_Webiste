"use client";

import React from "react";
import { PUBLICATIONS_DATA } from "@/data/publicationsData";
import { BookOpen, ExternalLink, ShieldCheck, Newspaper } from "lucide-react";

export const PublicationsSection: React.FC = () => {
  return (
    <section id="publications" className="py-16 lg:py-24 bg-gradient-to-b from-lightgrey/50 via-offwhite to-lightgrey/50 border-b border-bordergrey/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-forest bg-softgreen px-3.5 py-1.5 rounded-full border border-softgreen-border inline-flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic &amp; Policy Scholarship</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3">
            Published Work
          </h2>
          <p className="text-bodytext text-base sm:text-lg mt-3 leading-relaxed">
            Peer-reviewed journal contributions and policy analysis articles published in mainstream research platforms.
          </p>
        </div>

        {/* Publications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PUBLICATIONS_DATA.map((pub) => (
            <div
              key={pub.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-bordergrey hover:border-forest/50 hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${
                    pub.isPeerReviewed
                      ? "bg-softgreen text-forest border-softgreen-border"
                      : "bg-lightgrey text-navy border-bordergrey"
                  }`}>
                    {pub.type}
                  </span>
                  {pub.isPeerReviewed && (
                    <span className="text-[10px] font-bold text-forest flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      Peer-Reviewed
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-navy group-hover:text-forest transition-colors leading-snug">
                  {pub.title}
                </h3>

                {pub.authors && (
                  <p className="text-xs text-navy font-medium italic">
                    Authors: {pub.authors}
                  </p>
                )}

                <p className="text-xs text-forest font-semibold">
                  {pub.outlet} &bull; <span className="text-bodytext font-normal">{pub.dateOrVolume}</span>
                </p>

                <p className="text-xs sm:text-sm text-bodytext leading-relaxed pt-1">
                  {pub.summary}
                </p>
              </div>

              {/* External Link Action */}
              <div className="pt-4 mt-4 border-t border-bordergrey/60 flex items-center justify-between">
                {pub.externalUrl ? (
                  <a
                    href={pub.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-forest hover:text-forest-hover transition-colors"
                  >
                    <span>Read Publication</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs font-semibold text-navy/70 flex items-center gap-1">
                    <Newspaper className="w-3.5 h-3.5 text-forest" />
                    Indexed Journal Entry
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
