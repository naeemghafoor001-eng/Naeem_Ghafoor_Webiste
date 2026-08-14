"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Briefcase, Building2, Award, ArrowRight, Shield } from "lucide-react";

export const AboutSection: React.FC = () => {
  const education = [
    { degree: "M.Phil Sociology", institution: "University of the Punjab" },
    { degree: "BS (Hons) Sociology", institution: "University of the Punjab" },
    { degree: "MA Political Science", institution: "University of the Punjab" },
    { degree: "Bachelor of Arts", institution: "University of the Punjab" },
  ];

  const exposure = [
    "Headquarters coordination & executive correspondence",
    "Analytical reporting & departmental monitoring",
    "Policy-related work & probation/parole administration",
    "Inter-agency coordination & institutional research",
    "Digital transformation & AI workflow initiatives",
    "Executive presentation preparation & briefing notes",
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-offwhite border-b border-bordergrey/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-forest bg-softgreen px-3 py-1 rounded-md border border-softgreen-border">
            Professional Biography
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3 leading-tight">
            Research Experience Meets Practical Delivery
          </h2>
          <p className="text-bodytext text-base sm:text-lg mt-3 leading-relaxed">
            A public-sector professional and researcher operating at the intersection of social science, public policy, administrative reporting, and modern digital workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Biography Narrative (Left Column) */}
          <div className="lg:col-span-7 space-y-6 text-bodytext text-sm sm:text-base leading-relaxed">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-bordergrey shadow-card space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-bordergrey/60">
                <div className="w-10 h-10 rounded-lg bg-softgreen text-forest flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy">
                    Public-Sector Service &amp; Executive Exposure
                  </h3>
                  <p className="text-xs text-forest font-medium">
                    Punjab Probation &amp; Parole Service &bull; Home Department
                  </p>
                </div>
              </div>

              <p>
                Naeem Ghafoor is a public-sector officer serving as <strong>Parole Officer BS-17</strong> in the Punjab Probation &amp; Parole Service, Home Department, Government of the Punjab. He is presently working at Headquarters and supporting the Director General as <strong>Principal Staff Officer</strong>.
              </p>

              <p>
                His professional exposure spans headquarters coordination, executive correspondence, analytical reporting, institutional monitoring, high-level presentations, policy-related work, probation and parole administration, inter-agency coordination, research, and digital transformation initiatives.
              </p>

              <p>
                Prior to joining the Punjab Probation &amp; Parole Service, he served in <strong>Pakistan Customs, Federal Board of Revenue (FBR)</strong>. His earlier professional foundation includes an internship at <strong>WAPDA House Lahore</strong> during his BS in Sociology, experience at the <strong>Abacus Call Centre</strong>, and work within an outbound English-language call centre serving US-based campaigns.
              </p>

              <p className="text-xs text-navy/70 italic pt-2 border-t border-bordergrey/40">
                He has also successfully qualified in competitive recruitment processes for several public-sector positions before pursuing his eventual career path.
              </p>
            </div>

            {/* Core Professional Exposure Grid */}
            <div className="bg-lightgrey/80 rounded-2xl p-6 border border-bordergrey/80 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-forest" />
                <span>Key Areas of Professional Exposure</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {exposure.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-navy">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Academic Qualifications (Right Column) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academic Credentials Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-bordergrey shadow-card">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-bordergrey/60">
                <div className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy">
                    Academic Qualifications
                  </h3>
                  <p className="text-xs text-bodytext">
                    University of the Punjab, Lahore
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-lightgrey/60 hover:bg-softgreen/50 border border-bordergrey/60 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-serif font-bold text-sm text-navy">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-bodytext">{edu.institution}</p>
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-white text-forest border border-bordergrey">
                      Verified
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Public Service Disclaimer Note */}
            <div className="bg-softgreen/60 rounded-xl p-4 border border-softgreen-border text-xs text-navy leading-relaxed">
              <div className="flex items-center gap-2 font-bold text-forest mb-1">
                <Shield className="w-4 h-4" />
                <span>Personal Capacity Notice</span>
              </div>
              Views and professional services presented on this website are offered in a personal capacity and do not represent or imply endorsement by the Government of the Punjab, Home Department, or Punjab Probation &amp; Parole Service.
            </div>

            {/* Link to Full About Page */}
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-forest hover:text-forest-hover hover:underline"
              >
                <span>Read Complete Professional Profile &amp; Background</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
