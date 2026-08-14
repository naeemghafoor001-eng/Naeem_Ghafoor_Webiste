"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, MessageSquare, ChevronDown } from "lucide-react";

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "All Services & Advisory", href: "/services", desc: "Overview of research, data, and policy services" },
        { name: "AI & Digital Solutions", href: "/ai-digital-solutions", desc: "Custom AI tools, dashboards & web apps" },
        { name: "Publications & Articles", href: "/publications", desc: "Journal papers & published commentaries" },
      ],
    },
    { name: "Executive Support", href: "/executive-support" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-header border-b border-bordergrey/80 shadow-sm py-3"
          : "bg-offwhite/90 backdrop-blur-md py-4 border-b border-bordergrey/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Monogram */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Naeem Ghafoor Home"
          >
            <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-white font-serif font-bold text-lg tracking-wider group-hover:bg-forest transition-colors shadow-sm">
              NG
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-navy leading-tight group-hover:text-forest transition-colors">
                Naeem Ghafoor
              </span>
              <span className="text-[11px] font-sans font-medium text-bodytext tracking-tight">
                Research, Policy &amp; Digital Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1 px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors ${
                        isActive(item.href) || pathname === "/ai-digital-solutions" || pathname === "/publications"
                          ? "text-forest bg-softgreen font-semibold"
                          : "text-navy hover:text-forest hover:bg-lightgrey"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-75" />
                    </Link>

                    {/* Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-64 pt-2 animate-fade-in z-50">
                        <div className="bg-white rounded-xl p-2 border border-bordergrey shadow-xl space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className={`block p-2.5 rounded-lg text-xs transition-colors ${
                                pathname === subItem.href
                                  ? "bg-softgreen text-forest font-bold"
                                  : "hover:bg-lightgrey text-navy"
                              }`}
                            >
                              <div className="font-semibold text-navy hover:text-forest">
                                {subItem.name}
                              </div>
                              <div className="text-[11px] text-bodytext mt-0.5">
                                {subItem.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-forest bg-softgreen font-semibold"
                      : "text-navy hover:text-forest hover:bg-lightgrey"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/923025887436?text=Hello%20Naeem,%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-forest bg-softgreen hover:bg-emerald-accent/15 transition-all border border-softgreen-border"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-forest hover:bg-forest-hover transition-all shadow-sm hover:shadow-md"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-navy hover:bg-lightgrey transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-offwhite border-b border-bordergrey px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                isActive("/") ? "text-forest bg-softgreen font-semibold" : "text-navy hover:bg-lightgrey"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                isActive("/about") ? "text-forest bg-softgreen font-semibold" : "text-navy hover:bg-lightgrey"
              }`}
            >
              About
            </Link>

            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                isActive("/services") ? "text-forest bg-softgreen font-semibold" : "text-navy hover:bg-lightgrey"
              }`}
            >
              Services
            </Link>

            <Link
              href="/executive-support"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                isActive("/executive-support") ? "text-forest bg-softgreen font-semibold" : "text-navy hover:bg-lightgrey"
              }`}
            >
              Executive Support
            </Link>

            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                isActive("/portfolio") ? "text-forest bg-softgreen font-semibold" : "text-navy hover:bg-lightgrey"
              }`}
            >
              Portfolio
            </Link>

            {/* Secondary Pages in Mobile Drawer */}
            <Link
              href="/ai-digital-solutions"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-md text-xs font-medium pl-6 transition-colors ${
                isActive("/ai-digital-solutions") ? "text-forest font-bold" : "text-bodytext hover:bg-lightgrey"
              }`}
            >
              • AI &amp; Digital Solutions
            </Link>

            <Link
              href="/publications"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-md text-xs font-medium pl-6 transition-colors ${
                isActive("/publications") ? "text-forest font-bold" : "text-bodytext hover:bg-lightgrey"
              }`}
            >
              • Publications &amp; Articles
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                isActive("/contact") ? "text-forest bg-softgreen font-semibold" : "text-navy hover:bg-lightgrey"
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="pt-4 border-t border-bordergrey/60 flex flex-col gap-2.5">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-3 rounded-lg text-sm font-semibold text-white bg-forest hover:bg-forest-hover transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/923025887436?text=Hello%20Naeem,%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold text-forest bg-softgreen border border-softgreen-border flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
