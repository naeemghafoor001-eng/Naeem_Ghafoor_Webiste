"use client";

import React from "react";

export const JsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://naeemghafoor.vercel.app/#person",
        "name": "Naeem Ghafoor",
        "jobTitle": "Research, Policy & Digital Solutions Practitioner",
        "alumniOf": "University of the Punjab",
        "knowsAbout": [
          "Sociology",
          "Public Policy",
          "Data Analysis",
          "SPSS",
          "R Programming",
          "Python",
          "AI Workflows",
          "Executive Presentations"
        ],
        "sameAs": [
          "https://www.linkedin.com/in/naeem-ghafoor-08b479331/",
          "https://www.facebook.com/naeemrajput300"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://naeemghafoor.vercel.app/#service",
        "name": "Naeem Ghafoor | Research, Policy & Digital Solutions",
        "description": "Professional research, policy briefs, data analysis, presentation design, AI solutions and digital development.",
        "url": "https://naeemghafoor.vercel.app",
        "email": "naeemghafoor001@gmail.com",
        "areaServed": ["Pakistan", "United Kingdom", "Worldwide"],
        "serviceType": [
          "Research Support",
          "Policy Analysis",
          "Executive Support",
          "Data Analytics",
          "Presentation Design",
          "AI Workflow Solutions",
          "Digital Development"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://naeemghafoor.vercel.app/#website",
        "url": "https://naeemghafoor.vercel.app",
        "name": "Naeem Ghafoor | Research, Policy & Digital Solutions",
        "publisher": {
          "@id": "https://naeemghafoor.vercel.app/#person"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
