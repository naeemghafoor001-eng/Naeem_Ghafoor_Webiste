"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Bot, FileSearch, Terminal, Database, Code, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export const AIDigitalSection: React.FC = () => {
  const aiCapabilities = [
    {
      icon: Bot,
      title: "Custom AI Agents & Workflows",
      description: "Designing agentic AI concepts, custom prompt sequences, and tailored LLM workflows to automate research synthesis.",
    },
    {
      icon: FileSearch,
      title: "Document Intelligence",
      description: "Extracting analytical insights, structured summaries, and policy matrices from large administrative document repositories.",
    },
    {
      icon: Cpu,
      title: "Reporting & Knowledge Automation",
      description: "Building automated data processing pipelines and knowledge-management systems to streamline institutional reporting.",
    },
    {
      icon: Terminal,
      title: "Python Data Tools & Dashboards",
      description: "Developing interactive web dashboards (Plotly/Dash) and Python utility tools for visualising complex datasets.",
    },
  ];

  const digitalSolutions = [
    "Professional Consultancy & Portfolio Websites",
    "Interactive Research & Institutional Dashboards",
    "Web Application Concepts & Rapid Prototypes",
    "Python Data Processing & Automation Utilities",
    "Digital Workflow Integration for Organisations",
    "Vercel & Next.js Web Deployment Guidance",
  ];

  return (
    <section id="ai-digital" className="py-16 lg:py-24 bg-gradient-to-b from-offwhite via-lightgrey/50 to-offwhite border-b border-bordergrey/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-forest bg-softgreen px-3.5 py-1.5 rounded-full border border-softgreen-border inline-flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            <span>Modern Technical Capability</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3">
            AI &amp; Digital Solutions
          </h2>
          <p className="text-bodytext text-base sm:text-lg mt-3 leading-relaxed">
            Bridging evidence-based policy research with cutting-edge artificial intelligence, custom data dashboards, and web solutions.
          </p>
        </div>

        {/* 4 AI Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {aiCapabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-bordergrey hover:border-forest/50 hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-navy text-emerald-accent flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-bodytext leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Web & Digital Integration Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-bordergrey shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-forest bg-softgreen px-3 py-1 rounded">
              Web &amp; Digital Capabilities
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
              Digital Systems &amp; Web Development
            </h3>
            <p className="text-bodytext text-sm sm:text-base leading-relaxed">
              From responsive client acquisition websites to specialized research dashboards, digital projects are built cleanly using Next.js, Python, and modern web standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {digitalSolutions.map((sol, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-navy">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                  <span>{sol}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-navy/70 italic pt-3 border-t border-bordergrey/60">
              Note: AI solutions can be scoped according to the client&apos;s workflow, data environment, and operational requirements.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-navy rounded-2xl p-6 text-white space-y-4">
              <div className="w-10 h-10 rounded-lg bg-forest/40 text-emerald-accent flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-xl text-white">
                Have an AI or Digital Project?
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Discuss custom AI agents, automated reporting, or web application development tailored to your institutional goals.
              </p>
              <Link
                href="/contact?service=AI%20Solution"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-xs font-bold text-navy bg-white hover:bg-lightgrey transition-colors"
              >
                <span>Discuss Digital Requirements</span>
                <ArrowRight className="w-4 h-4 text-forest" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
