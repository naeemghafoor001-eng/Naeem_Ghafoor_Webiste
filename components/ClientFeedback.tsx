"use client";

import React from "react";
import { MessageSquareQuote, ShieldCheck } from "lucide-react";

export interface VerifiedReview {
  id: string;
  clientRole: string;
  clientType: string;
  serviceProvided: string;
  quote: string;
  date: string;
}

// Extensible array structure ready for verified reviews once permissions are obtained
const VERIFIED_REVIEWS: VerifiedReview[] = [];

export const ClientFeedback: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-offwhite border-b border-bordergrey/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-softgreen text-forest text-xs font-bold uppercase tracking-wider border border-softgreen-border">
            <MessageSquareQuote className="w-4 h-4" />
            <span>Client References</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
            Client Feedback
          </h2>

          {VERIFIED_REVIEWS.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 border border-bordergrey shadow-card max-w-xl mx-auto space-y-3">
              <ShieldCheck className="w-8 h-8 text-forest mx-auto" />
              <p className="text-sm sm:text-base text-bodytext leading-relaxed font-medium">
                Client feedback and selected reviews will be added as permissions are obtained.
              </p>
              <p className="text-xs text-navy/70 italic">
                Client confidentiality is strictly maintained across all research, executive support, policy, and digital assignments.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left pt-6">
              {VERIFIED_REVIEWS.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white rounded-2xl p-6 border border-bordergrey shadow-card space-y-3"
                >
                  <p className="text-sm text-navy italic leading-relaxed">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                  <div className="pt-2 border-t border-bordergrey/60 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-navy block">{rev.clientRole}</span>
                      <span className="text-forest font-medium">{rev.serviceProvided}</span>
                    </div>
                    <span className="text-bodytext">{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
