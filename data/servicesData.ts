export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  badge?: string;
  description: string;
  deliverables: string[];
  tools?: string[];
  ctaText: string;
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "research-academic-support",
    number: "01",
    title: "Research & Academic Support",
    badge: "Ethical Guidance & Mentoring",
    description: "Comprehensive research support, methodology design, literature synthesis, and academic structuring across social sciences, policy, management, and technology disciplines.",
    deliverables: [
      "Research proposals & grant applications",
      "Dissertation & thesis structuring & methodology",
      "Systematic literature reviews & conceptual frameworks",
      "Qualitative, quantitative & mixed-method design",
      "Academic editing, proofreading & formatting",
      "Citation & referencing (APA, Harvard, OSCOLA, Chicago)",
    ],
    tools: ["SPSS", "R", "NVivo", "Zotero", "Mendeley", "LaTeX"],
    ctaText: "Discuss Research Work",
  },
  {
    id: "policy-research-analytical-reports",
    number: "02",
    title: "Policy Research & Analytical Reports",
    badge: "Evidence-Based Analysis",
    description: "Rigorously researched policy briefs, governance reviews, current issue write-ups, and strategic policy evaluations tailored for decision-makers and organisations.",
    deliverables: [
      "Policy papers & policy briefs",
      "Governance & institutional analysis",
      "Current issue briefs & executive summaries",
      "Comparative international policy analysis",
      "Programme evaluation & impact assessments",
      "Social policy & criminal justice research",
    ],
    tools: ["Policy Frameworks", "Institutional Analysis", "Comparative Method"],
    ctaText: "Discuss Policy Work",
  },
  {
    id: "executive-civil-service-support",
    number: "03",
    title: "Executive & Civil Service Support",
    badge: "CTP • MCMC • SMC • NMC",
    description: "Specialised research assistance, analytical briefs, syndicate work support, and presentation design for civil servants and executives attending national and international training programmes.",
    deliverables: [
      "Policy papers & current issue briefs",
      "Individual & syndicate research paper support",
      "Analytical briefs & executive summaries",
      "High-impact presentation decks & speaker notes",
      "Post-training documentation & briefing packs",
      "Case study analysis & course assignments support",
    ],
    tools: ["Governmental Analysis", "Executive Briefings", "PowerPoint"],
    ctaText: "Discuss Executive Support",
  },
  {
    id: "data-analysis-research-methods",
    number: "04",
    title: "Data Analysis & Research Methods",
    badge: "Statistical & Qualitative",
    description: "End-to-end data processing, statistical testing, qualitative thematic coding, survey design, and empirical interpretation using industry-standard analytical platforms.",
    deliverables: [
      "Descriptive & inferential statistical analysis",
      "Regression modeling, ANOVA & reliability testing",
      "Survey design & Kobo Toolbox integration",
      "Qualitative thematic & content analysis",
      "Data visualisations, charts & statistical tables",
      "Clear narrative interpretation of analytical findings",
    ],
    tools: ["SPSS", "R", "Python", "Excel", "Kobo Toolbox"],
    ctaText: "Discuss Data Analysis",
  },
  {
    id: "presentations-professional-documents",
    number: "05",
    title: "Presentations & Professional Documents",
    badge: "Executive Design",
    description: "Transforming complex data, policy papers, and technical reports into visually arresting presentation decks and impeccably formatted corporate documents.",
    deliverables: [
      "Executive & policy presentation decks",
      "Dissertation defence slides & conference presentations",
      "Word document formatting & layout design",
      "Infographic integration & visual summaries",
      "Comprehensive speaker notes & script preparation",
      "Presentation restructuring & visual enhancement",
    ],
    tools: ["Microsoft PowerPoint", "Microsoft Word", "Microsoft Excel", "Canva"],
    ctaText: "Discuss Presentation Design",
  },
  {
    id: "ai-automation-solutions",
    number: "06",
    title: "AI & Automation Solutions",
    badge: "Practical AI Workflow",
    description: "Designing modern AI-assisted research workflows, document intelligence systems, custom AI agents, and administrative automation tailored to operational requirements.",
    deliverables: [
      "Practical AI workflow integration & prompt engineering",
      "Custom AI agent concepts & retrieval augmented generation (RAG)",
      "Document intelligence & automated research extraction",
      "Knowledge-management systems & reporting automation",
      "AI productivity frameworks for teams & researchers",
      "Workflow scoping & operational AI implementation",
    ],
    tools: ["GPT-4o", "Claude 3.5", "Python", "RAG Concepts", "Automation"],
    ctaText: "Explore AI Solutions",
  },
  {
    id: "web-app-digital-solutions",
    number: "07",
    title: "Web, App & Digital Solutions",
    badge: "Modern Technical Capability",
    description: "Building crisp, production-grade custom websites, portfolio platforms, interactive research dashboards, and digital prototypes to showcase work and streamline operations.",
    deliverables: [
      "Custom responsive websites & web applications",
      "Interactive data & research dashboards",
      "Python-based data utility tools",
      "Digital prototyping & concept wireframing",
      "Web optimization & Vercel deployment support",
      "Digital workflow integration for organisations",
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Python Dash", "Vercel"],
    ctaText: "Discuss Digital Projects",
  },
  {
    id: "professional-writing-documentation",
    number: "08",
    title: "Professional Writing & Documentation",
    badge: "Institutional Clarity",
    description: "High-precision administrative writing, institutional documentation, standard operating procedures, manuals, and professional correspondence for organisations and leaders.",
    deliverables: [
      "Institutional reports & briefing material",
      "Standard Operating Procedures (SOPs) & Instructions Manuals",
      "Concept notes, proposals & grant documentation",
      "Executive correspondence & official write-ups",
      "Training manuals & correctional guide development",
      "Knowledge-management documentation",
    ],
    tools: ["MS Word", "Institutional Frameworks", "Technical Writing"],
    ctaText: "Discuss Writing Project",
  },
];
