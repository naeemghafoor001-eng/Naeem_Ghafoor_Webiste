"use client";

import React, { useState } from "react";
import { MessageSquare } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {/* Tooltip on hover / desktop */}
      <div
        className={`bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg border border-navy-800 transition-all duration-300 pointer-events-none hidden sm:block ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        Discuss Your Project
      </div>

      <a
        href="https://wa.me/923025887436?text=Hello%20Naeem,%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Discuss Your Project on WhatsApp"
        className="w-13 h-13 rounded-full bg-forest text-white flex items-center justify-center shadow-lg hover:bg-forest-hover hover:scale-105 transition-all border-2 border-white focus:outline-none"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
};
