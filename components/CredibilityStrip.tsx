"use client";

import React from "react";
import { GraduationCap, Landmark, Binary, Cpu, Presentation, ShieldCheck } from "lucide-react";

export const CredibilityStrip: React.FC = () => {
  const items = [
    {
      icon: GraduationCap,
      title: "M.Phil Sociology",
      subtitle: "Academic Foundation",
    },
    {
      icon: Landmark,
      title: "Research & Policy",
      subtitle: "Evidence-Based",
    },
    {
      icon: Binary,
      title: "R • Python • SPSS",
      subtitle: "Data & Analytics",
    },
    {
      icon: Cpu,
      title: "AI & Digital",
      subtitle: "Workflow Solutions",
    },
    {
      icon: Presentation,
      title: "Professional Presentations",
      subtitle: "Executive Communication",
    },
    {
      icon: ShieldCheck,
      title: "Public-Sector Experience",
      subtitle: "Institutional Exposure",
    },
  ];

  return (
    <section className="bg-navy py-6 text-white border-y border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-navy-800/80 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-forest/30 border border-forest/50 flex items-center justify-center shrink-0 text-emerald-accent group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-semibold text-white leading-tight">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-gray-400 font-sans mt-0.5">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
