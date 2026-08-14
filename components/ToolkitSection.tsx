"use client";

import React from "react";
import { Wrench, BookOpen, Binary, FileSpreadsheet, Cpu, Code } from "lucide-react";

export const ToolkitSection: React.FC = () => {
  const toolGroups = [
    {
      category: "Research Methods",
      icon: BookOpen,
      skills: [
        "Quantitative Research",
        "Qualitative Research",
        "Mixed Methods",
        "Literature Review",
        "Policy Analysis",
        "Thematic Analysis",
        "Survey Design",
        "Research Methodology",
      ],
    },
    {
      category: "Data Analytics",
      icon: Binary,
      skills: [
        "SPSS",
        "R Programming",
        "Python Data Stack",
        "Advanced Excel",
        "Kobo Toolbox",
        "Data Visualisation",
        "Statistical Reporting",
        "Panel Data Modeling",
      ],
    },
    {
      category: "Professional Productivity",
      icon: FileSpreadsheet,
      skills: [
        "Microsoft Word",
        "Microsoft Excel",
        "Microsoft PowerPoint",
        "Professional Formatting",
        "Presentation Restructuring",
        "Executive Briefings",
      ],
    },
    {
      category: "AI Technologies",
      icon: Cpu,
      skills: [
        "GPT-4o Integration",
        "Claude 3.5 Workflows",
        "AI Research Workflows",
        "Agentic AI Concepts",
        "Workflow Automation",
        "AI-Assisted Reporting",
      ],
    },
    {
      category: "Digital & Web",
      icon: Code,
      skills: [
        "Web Development (Next.js/React)",
        "Application Prototyping",
        "Python Dashboards (Dash/Plotly)",
        "Digital Workflow Systems",
        "Vercel Deployment",
        "TypeScript",
      ],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-offwhite border-b border-bordergrey/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-forest bg-softgreen px-3.5 py-1.5 rounded-full border border-softgreen-border inline-flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Ecosystem</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3">
            Methods, Tools &amp; Technologies
          </h2>
          <p className="text-bodytext text-base sm:text-lg mt-3 leading-relaxed">
            Categorized technical capabilities and analytical methodologies utilized across research, policy, and digital deliverables.
          </p>
        </div>

        {/* Grouped Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-bordergrey hover:border-forest/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-bordergrey/60">
                    <div className="w-9 h-9 rounded-lg bg-softgreen text-forest flex items-center justify-center font-bold">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-navy">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-medium px-3 py-1.5 rounded-lg bg-lightgrey text-navy border border-bordergrey hover:border-forest/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
