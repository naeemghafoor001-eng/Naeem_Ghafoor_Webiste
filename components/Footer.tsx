"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, Mail, Linkedin, Facebook, Shield } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800">
          
          {/* Column 1: Brand & Monogram */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-forest text-white font-serif font-bold text-lg flex items-center justify-center">
                NG
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-white block leading-tight">
                  Naeem Ghafoor
                </span>
                <span className="text-xs text-emerald-accent font-medium">
                  Research, Policy &amp; Digital Solutions
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
              Professional research, policy, analytical, presentation and digital support for clients in Pakistan and internationally.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/923025887436?text=Hello%20Naeem,%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-forest text-white flex items-center justify-center transition-colors border border-navy-800"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-emerald-accent" />
              </a>

              <a
                href="mailto:naeemghafoor001@gmail.com"
                className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-forest text-white flex items-center justify-center transition-colors border border-navy-800"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-emerald-accent" />
              </a>

              <a
                href="https://www.linkedin.com/in/naeem-ghafoor-08b479331/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-forest text-white flex items-center justify-center transition-colors border border-navy-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-emerald-accent" />
              </a>

              <a
                href="https://www.facebook.com/naeemrajput300"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-forest text-white flex items-center justify-center transition-colors border border-navy-800"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-emerald-accent" />
              </a>
            </div>
          </div>

          {/* Column 2: Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="/services#research-academic-support" className="hover:text-emerald-accent transition-colors">
                  Research &amp; Academic Support
                </Link>
              </li>
              <li>
                <Link href="/services#policy-research-analytical-reports" className="hover:text-emerald-accent transition-colors">
                  Policy Research &amp; Briefs
                </Link>
              </li>
              <li>
                <Link href="/services#executive-civil-service-support" className="hover:text-emerald-accent transition-colors">
                  Executive &amp; Civil Service Support
                </Link>
              </li>
              <li>
                <Link href="/services#data-analysis-research-methods" className="hover:text-emerald-accent transition-colors">
                  Data Analysis (SPSS / R / Python)
                </Link>
              </li>
              <li>
                <Link href="/services#presentations-professional-documents" className="hover:text-emerald-accent transition-colors">
                  Presentation &amp; Document Design
                </Link>
              </li>
              <li>
                <Link href="/ai-digital-solutions" className="hover:text-emerald-accent transition-colors">
                  AI &amp; Digital Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation Explore */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-base text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="/about" className="hover:text-emerald-accent transition-colors">
                  About Naeem Ghafoor
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-emerald-accent transition-colors">
                  Selected Projects
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:text-emerald-accent transition-colors">
                  Published Work
                </Link>
              </li>
              <li>
                <Link href="/executive-support" className="hover:text-emerald-accent transition-colors">
                  Civil Service CTP/MCMC
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-accent transition-colors">
                  Discuss Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Connect */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-white">
              Direct Connect
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <a
                href="https://wa.me/923025887436?text=Hello%20Naeem,%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-navy-800 hover:bg-forest/40 transition-colors text-emerald-accent font-medium border border-navy-800"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="mailto:naeemghafoor001@gmail.com"
                className="flex items-center gap-2 p-2 rounded-lg bg-navy-800 hover:bg-forest/40 transition-colors text-gray-200 border border-navy-800"
              >
                <Mail className="w-4 h-4 text-emerald-accent" />
                <span>naeemghafoor001@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Legal & Academic Integrity Disclaimers Bar */}
        <div className="py-6 border-b border-navy-800 text-[11px] text-gray-400 space-y-2 leading-relaxed">
          <div className="flex items-start gap-2">
            <Shield className="w-4 h-4 text-emerald-accent shrink-0 mt-0.5" />
            <p>
              <strong>Academic Integrity Notice:</strong> Academic support is intended for research assistance, editing, analysis, formatting and learning support. Clients are responsible for compliance with institutional academic integrity requirements.
            </p>
          </div>
          <p className="pl-6">
            <strong>Public Capacity Notice:</strong> Independent professional website. Professional services offered in a personal capacity. Views and professional services presented on this website are offered in a personal capacity and do not represent or imply endorsement by the Government of the Punjab, Home Department or Punjab Probation &amp; Parole Service.
          </p>
        </div>

        {/* Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>&copy; 2026 Naeem Ghafoor. All rights reserved.</p>
          <p className="text-[11px]">Research, Policy &amp; Digital Solutions</p>
        </div>

      </div>
    </footer>
  );
};
