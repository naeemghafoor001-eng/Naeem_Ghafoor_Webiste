"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PORTFOLIO_PROJECTS, PortfolioProject } from "@/data/portfolioData";
import { Layers, X, ArrowUpRight, ShieldAlert, CheckCircle2, Wrench, ArrowRight } from "lucide-react";

interface PortfolioSectionProps {
  featuredOnly?: boolean;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ featuredOnly = false }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  // 4 Featured project IDs for homepage selection
  const FEATURED_IDS = [
    "llm-cybersecurity-risk",
    "evidence-dashboard-python",
    "hs2-risk-management",
    "parolee-employment-barriers",
  ];

  const categories = [
    "All",
    "Research & Policy",
    "Data & AI",
    "Business & ESG",
    "Construction & Project Management",
    "Sociology & Social Policy",
    "International Relations",
    "Digital Projects",
  ];

  let displayProjects: PortfolioProject[];

  if (featuredOnly) {
    displayProjects = PORTFOLIO_PROJECTS.filter((p) => FEATURED_IDS.includes(p.id));
    // Fallback if needed
    if (displayProjects.length === 0) {
      displayProjects = PORTFOLIO_PROJECTS.slice(0, 4);
    }
  } else {
    displayProjects =
      selectedCategory === "All"
        ? PORTFOLIO_PROJECTS
        : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);
  }

  return (
    <section id="portfolio" className="py-16 lg:py-20 bg-offwhite border-b border-bordergrey/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-forest bg-softgreen px-3.5 py-1.5 rounded-full border border-softgreen-border inline-flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Case Studies &amp; Demonstrations</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3">
            {featuredOnly ? "Selected Work" : "Selected Projects & Case Studies"}
          </h2>
          <p className="text-bodytext text-base sm:text-lg mt-2 leading-relaxed">
            {featuredOnly
              ? "A concise highlight of featured research, data analytics, project management, and policy deliverables."
              : "A comprehensive selection of multidisciplinary research, quantitative analytics, policy briefs, and digital solutions."}
          </p>
        </div>

        {/* Filter Buttons (Only on full portfolio page) */}
        {!featuredOnly && (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  selectedCategory === cat
                    ? "bg-navy text-white border-navy shadow-sm"
                    : "bg-white text-navy border-bordergrey hover:bg-lightgrey"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 ${featuredOnly ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"} gap-6`}>
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl p-6 border border-bordergrey hover:border-forest/50 hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-forest bg-softgreen px-2.5 py-1 rounded border border-softgreen-border">
                    {project.displayCategory || project.category}
                  </span>
                  <span className="text-[11px] font-medium text-bodytext/80">
                    {project.deliverable.split("&")[0]}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-navy group-hover:text-forest transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-bodytext leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* Tools & Methods */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 4).map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-lightgrey text-navy border border-bordergrey"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-4 mt-4 border-t border-bordergrey/60 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-forest hover:text-forest-hover transition-colors"
                >
                  <span>View Case Summary</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Portfolio CTA on Homepage */}
        {featuredOnly ? (
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-forest hover:bg-forest-hover transition-colors shadow-md"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="mt-10 text-center text-xs text-bodytext italic flex items-center justify-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-forest" />
            <span>Selected work is presented in summary form to protect client confidentiality.</span>
          </div>
        )}

      </div>

      {/* Case Summary Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-bordergrey shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-5">
            
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-lightgrey text-navy transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-forest bg-softgreen px-2.5 py-1 rounded border border-softgreen-border">
                {activeModalProject.category}
              </span>
              <h3 className="font-serif text-2xl font-bold text-navy pt-2">
                {activeModalProject.title}
              </h3>
            </div>

            <p className="text-sm text-bodytext leading-relaxed">
              {activeModalProject.summary}
            </p>

            <div className="space-y-3 pt-2">
              <div className="bg-lightgrey rounded-xl p-4 border border-bordergrey/70">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-1">
                  Problem &amp; Context
                </h4>
                <p className="text-xs text-bodytext leading-relaxed">
                  {activeModalProject.problem}
                </p>
              </div>

              <div className="bg-lightgrey rounded-xl p-4 border border-bordergrey/70">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-1">
                  Approach &amp; Methodology
                </h4>
                <p className="text-xs text-bodytext leading-relaxed">
                  {activeModalProject.approach}
                </p>
              </div>

              <div className="bg-softgreen/60 rounded-xl p-4 border border-softgreen-border">
                <h4 className="text-xs font-bold uppercase tracking-wider text-forest mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Key Outcome / Result</span>
                </h4>
                <p className="text-xs text-navy leading-relaxed font-medium">
                  {activeModalProject.outcome}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-bordergrey">
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-forest" />
                <span className="text-xs font-medium text-navy">
                  Deliverable: <strong>{activeModalProject.deliverable}</strong>
                </span>
              </div>
              
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-navy hover:bg-navy-800 transition-colors"
              >
                Close Summary
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
