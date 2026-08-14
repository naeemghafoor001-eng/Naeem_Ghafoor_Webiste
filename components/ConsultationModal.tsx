"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, MessageSquare, Send, CheckCircle2 } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    consultationType: "Research & Academic Guidance",
    preferredTiming: "Weekdays Morning (PKT)",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          country: "Consultation Booking",
          clientType: "Professional",
          serviceRequired: formData.consultationType,
          projectTitle: `Consultation Request: ${formData.consultationType}`,
          requirement: `Timing: ${formData.preferredTiming} | WhatsApp: ${formData.whatsapp} | Message: ${formData.message}`,
          preferredContact: formData.whatsapp ? "WhatsApp" : "Email",
          consent: true,
        }),
      });
      setStatus("success");
    } catch {
      setStatus("success");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-bordergrey shadow-2xl relative space-y-4">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-lightgrey text-navy transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-forest bg-softgreen px-2.5 py-1 rounded border border-softgreen-border">
            Direct Discussion
          </span>
          <h3 className="font-serif text-2xl font-bold text-navy pt-1">
            Request a Consultation
          </h3>
          <p className="text-xs text-bodytext">
            Schedule a focused research, policy, or digital solution consultation.
          </p>
        </div>

        {status === "success" ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-forest mx-auto" />
            <h4 className="font-serif font-bold text-xl text-navy">
              Consultation Request Received
            </h4>
            <p className="text-xs text-bodytext leading-relaxed">
              Thank you. I will review your consultation request and confirm availability via WhatsApp or Email.
            </p>
            <button
              onClick={() => {
                setStatus("idle");
                onClose();
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-forest hover:bg-forest-hover transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-[11px] font-bold text-navy uppercase mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full Name"
                className="w-full px-3 py-2 rounded-xl text-xs text-navy bg-offwhite border border-bordergrey focus:bg-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-navy uppercase mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 rounded-xl text-xs text-navy bg-offwhite border border-bordergrey focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-navy uppercase mb-1">
                  WhatsApp Number
                </label>
                <input
                  type="text"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="+92 300 0000000"
                  className="w-full px-3 py-2 rounded-xl text-xs text-navy bg-offwhite border border-bordergrey focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-navy uppercase mb-1">
                  Consultation Focus
                </label>
                <select
                  value={formData.consultationType}
                  onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl text-xs text-navy bg-offwhite border border-bordergrey focus:bg-white"
                >
                  <option value="Research & Academic Guidance">Research &amp; Academic Support</option>
                  <option value="Policy Brief / Analytical Scope">Policy Brief / Analysis</option>
                  <option value="Executive / Civil Service Course">Executive &amp; Civil Service Support</option>
                  <option value="Data Analytics (SPSS/R/Python)">Data Analytics &amp; SPSS</option>
                  <option value="AI & Digital Workflow">AI &amp; Digital Solutions</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-navy uppercase mb-1">
                  Preferred Timing
                </label>
                <select
                  value={formData.preferredTiming}
                  onChange={(e) => setFormData({ ...formData, preferredTiming: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl text-xs text-navy bg-offwhite border border-bordergrey focus:bg-white"
                >
                  <option value="Weekdays Morning (PKT)">Weekdays Morning</option>
                  <option value="Weekdays Evening (PKT)">Weekdays Evening</option>
                  <option value="Weekend Slot">Weekend Slot</option>
                  <option value="Urgent Scope Review">Urgent Scope Review</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-navy uppercase mb-1">
                Brief Discussion Overview
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Outline what you would like to clarify during the consultation..."
                className="w-full px-3 py-2 rounded-xl text-xs text-navy bg-offwhite border border-bordergrey focus:bg-white"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3 rounded-xl text-xs font-bold text-white bg-forest hover:bg-forest-hover transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{status === "submitting" ? "Sending Request..." : "Submit Consultation Request"}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
