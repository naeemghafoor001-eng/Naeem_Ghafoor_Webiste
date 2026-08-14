"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Mail, Send, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";

interface ContactFormProps {
  defaultService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultService }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    clientType: "Professional",
    serviceRequired: defaultService || "Research / Academic Support",
    projectTitle: "",
    requirement: "",
    deadline: "",
    wordCountOrScope: "",
    fileAvailability: "Available",
    preferredContact: "WhatsApp",
    consent: false,
    websiteUrlHoneypot: "", // Honeypot field for anti-spam
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, serviceRequired: defaultService }));
    }
  }, [defaultService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setErrorMessage("Please accept the consent terms to submit your enquiry.");
      setStatus("error");
      return;
    }

    // Honeypot check
    if (formData.websiteUrlHoneypot) {
      // Bot detected silently
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to submit enquiry. Please try again or contact via WhatsApp.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try contacting via WhatsApp directly.");
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-b from-offwhite via-lightgrey/60 to-offwhite border-b border-bordergrey/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-forest bg-softgreen px-3.5 py-1.5 rounded-full border border-softgreen-border inline-flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Client Consultation</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3">
            Let&apos;s Discuss Your Project
          </h2>
          <p className="text-bodytext text-base sm:text-lg mt-3 leading-relaxed">
            Share your research, professional, analytical or digital requirement. I will review the scope and suggest an appropriate way forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Action Cards */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Primary Contact: WhatsApp */}
            <div className="bg-white rounded-2xl p-6 border border-bordergrey shadow-card hover:border-emerald-accent/50 transition-colors space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-softgreen text-forest flex items-center justify-center font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-navy">
                    WhatsApp (Fastest)
                  </h3>
                  <span className="text-[11px] text-forest font-semibold">
                    Primary Contact Method
                  </span>
                </div>
              </div>

              <p className="text-xs text-bodytext leading-relaxed">
                Direct messaging for immediate scope discussion, project clarification, and urgent requirements.
              </p>

              <a
                href="https://wa.me/923025887436?text=Hello%20Naeem,%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-xs font-bold text-white bg-forest hover:bg-forest-hover transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Email Contact Card */}
            <div className="bg-white rounded-2xl p-6 border border-bordergrey shadow-card hover:border-navy/40 transition-colors space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-navy">
                    Email Correspondence
                  </h3>
                  <span className="text-[11px] text-bodytext">
                    Formal Documents &amp; Scope Briefs
                  </span>
                </div>
              </div>

              <p className="text-xs text-bodytext leading-relaxed">
                Send initial project files, research outline documents, or formal procurement requests via email.
              </p>

              <a
                href="mailto:naeemghafoor001@gmail.com"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-xs font-bold text-navy bg-lightgrey hover:bg-bordergrey/60 border border-bordergrey transition-colors"
              >
                <Mail className="w-4 h-4 text-forest" />
                <span>Send an Email</span>
              </a>
            </div>

            {/* Confidentiality Notice */}
            <div className="bg-softgreen/60 rounded-2xl p-5 border border-softgreen-border space-y-2 text-xs text-navy">
              <div className="flex items-center gap-2 font-bold text-forest">
                <ShieldCheck className="w-4 h-4" />
                <span>Confidential Handling</span>
              </div>
              <p className="leading-relaxed text-bodytext">
                All submitted materials, proposals, and communication are held under strict professional confidentiality.
              </p>
            </div>

          </div>

          {/* Right Column: Multi-field Enquiry Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-bordergrey shadow-card">
              
              {status === "success" ? (
                <div className="p-8 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-softgreen text-forest mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy">
                    Thank You! Your Enquiry Has Been Received.
                  </h3>
                  <p className="text-sm text-bodytext max-w-md mx-auto leading-relaxed">
                    Thank you. Your enquiry has been received. You may also contact me through WhatsApp for a faster discussion.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="https://wa.me/923025887436?text=Hello%20Naeem,%20I%20just%20submitted%20a%20project%20enquiry%20on%20your%20website."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-forest hover:bg-forest-hover transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Follow Up on WhatsApp</span>
                    </a>
                    
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-4 py-3 rounded-xl text-xs font-semibold text-navy bg-lightgrey hover:bg-bordergrey transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Hidden Honeypot for Anti-Spam */}
                  <input
                    type="text"
                    name="websiteUrlHoneypot"
                    value={formData.websiteUrlHoneypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Ahmed Khan / Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs text-navy bg-offwhite border border-bordergrey focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs text-navy bg-offwhite border border-bordergrey focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Country */}
                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Pakistan, UK, UAE, etc."
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs text-navy bg-offwhite border border-bordergrey focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Client Type */}
                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                        Client Type
                      </label>
                      <select
                        name="clientType"
                        value={formData.clientType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs text-navy bg-offwhite border border-bordergrey focus:bg-white transition-colors"
                      >
                        <option value="Student / Researcher">Student / Researcher</option>
                        <option value="Civil Servant">Civil Servant</option>
                        <option value="Professional">Professional</option>
                        <option value="Business">Business</option>
                        <option value="NGO / Organisation">NGO / Organisation</option>
                        <option value="Consultant">Consultant</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                        Service Required
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs text-navy bg-offwhite border border-bordergrey focus:bg-white transition-colors"
                      >
                        <option value="Research / Academic Support">Research / Academic Support</option>
                        <option value="Policy Research">Policy Research</option>
                        <option value="Executive / Civil Service Support">Executive / Civil Service Support</option>
                        <option value="Data Analysis">Data Analysis</option>
                        <option value="Presentation Design">Presentation Design</option>
                        <option value="AI Solution">AI Solution</option>
                        <option value="Web / Digital Solution">Web / Digital Solution</option>
                        <option value="Professional Report">Professional Report</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Title */}
                  <div>
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                      Project Title / Topic <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="projectTitle"
                      required
                      value={formData.projectTitle}
                      onChange={handleChange}
                      placeholder="e.g. M.Phil Thesis Data Analysis in SPSS / Executive Policy Presentation Deck"
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs text-navy bg-offwhite border border-bordergrey focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Brief Requirement */}
                  <div>
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                      Brief Requirement Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="requirement"
                      required
                      rows={4}
                      value={formData.requirement}
                      onChange={handleChange}
                      placeholder="Describe your research objectives, dataset parameters, presentation guidelines, or digital solution scope..."
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs text-navy bg-offwhite border border-bordergrey focus:bg-white transition-colors resize-y"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Deadline */}
                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                        Target Deadline
                      </label>
                      <input
                        type="text"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                        placeholder="e.g. 15th Sept 2026 / 2 Weeks"
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs text-navy bg-offwhite border border-bordergrey focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Scope / Word Count */}
                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                        Word Count / Scope
                      </label>
                      <input
                        type="text"
                        name="wordCountOrScope"
                        value={formData.wordCountOrScope}
                        onChange={handleChange}
                        placeholder="e.g. 5,000 words / 20 slides / Dashboard"
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs text-navy bg-offwhite border border-bordergrey focus:bg-white transition-colors"
                      />
                    </div>

                    {/* File Availability */}
                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                        File Availability
                      </label>
                      <select
                        name="fileAvailability"
                        value={formData.fileAvailability}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs text-navy bg-offwhite border border-bordergrey focus:bg-white transition-colors"
                      >
                        <option value="Available">Available for sharing</option>
                        <option value="Drafting">Draft in progress</option>
                        <option value="Discussion Required">Requires initial discussion</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Contact & Consent */}
                  <div className="pt-2 border-t border-bordergrey space-y-3">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs font-bold text-navy uppercase tracking-wider block mb-1">
                          Preferred Follow-up Method:
                        </span>
                        <div className="flex items-center gap-4 text-xs font-medium text-navy">
                          <label className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="WhatsApp"
                              checked={formData.preferredContact === "WhatsApp"}
                              onChange={handleChange}
                              className="text-forest focus:ring-forest"
                            />
                            WhatsApp
                          </label>
                          <label className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="Email"
                              checked={formData.preferredContact === "Email"}
                              onChange={handleChange}
                              className="text-forest focus:ring-forest"
                            />
                            Email
                          </label>
                        </div>
                      </div>

                      {/* Consent Checkbox */}
                      <label className="flex items-start gap-2 cursor-pointer text-xs text-bodytext max-w-sm">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          className="mt-0.5 rounded text-forest focus:ring-forest shrink-0"
                        />
                        <span>
                          I agree to share project details for scope evaluation. Information will remain strictly confidential.
                        </span>
                      </label>
                    </div>

                    {status === "error" && (
                      <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-4 rounded-xl text-sm font-bold text-white bg-forest hover:bg-forest-hover disabled:opacity-50 transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      {status === "submitting" ? (
                        <span>Submitting Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Project Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
