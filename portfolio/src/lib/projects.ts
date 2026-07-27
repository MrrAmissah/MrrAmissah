export type Project = {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** One or more screenshots. More than one renders as a carousel. */
  images: string[];
  accent: string;
};

/** Work with a public repo and (usually) a live deployment. */
export const projects: Project[] = [
  {
    title: "PacketSage",
    description:
      "Evidence-grounded network forensics workspace for bounded packet analysis, with exact citations, AI-assisted investigation, incident timelines, and report building.",
    stack: ["React", "TypeScript", "Vite", "Express", "Tailwind", "Gemini API"],
    liveUrl: "https://packetsage.vercel.app",
    repoUrl: "https://github.com/MrrAmissah/PacketSage",
    images: [
      "/projects/packetsage-command-center.jpg",
      "/projects/packetsage-flow-explorer.jpg",
      "/projects/packetsage-protocol-intelligence.jpg",
      "/projects/packetsage-incident-timeline.jpg",
    ],
    accent: "Network forensics",
  },
  {
    title: "FraudCase Ghana",
    description:
      "AI-assisted fraud evidence organizer that helps individuals and small businesses collect, structure, analyze, and export scam-related evidence into a clean case report.",
    stack: ["React", "TypeScript", "Vite", "Firebase", "Express", "Gemini API"],
    liveUrl: "https://fraudcase-gh.vercel.app",
    repoUrl: "https://github.com/MrrAmissah/fraudcase-gh",
    images: ["/projects/fraudcase.jpg"],
    accent: "Fraud evidence",
  },
  {
    title: "Team Urbanflow",
    description:
      "AI-powered drone gutter inspection dashboard with browser-side classification, batch workflows, human review, Supabase persistence, and CSV export.",
    stack: [
      "Next.js",
      "TypeScript",
      "TensorFlow.js",
      "Teachable Machine",
      "Supabase",
    ],
    liveUrl: "https://urbanflow-mvp.vercel.app",
    repoUrl: "https://github.com/MrrAmissah/urbanflow-mvp",
    images: ["/projects/urbanflow.png"],
    accent: "Civic tech AI",
  },
  {
    title: "Subnet Calculator",
    description:
      "IPv4 subnet and CIDR utility with binary breakdowns and subnet splitting.",
    stack: ["React", "TypeScript", "Vite", "Tailwind", "Vitest"],
    liveUrl: "https://subnet-calculator-jade.vercel.app/",
    repoUrl: "https://github.com/MrrAmissah/Subnet-Calculator",
    images: ["/projects/subnet-calculator.png"],
    accent: "Networking",
  },
  {
    title: "Ghana PAYE Calculator",
    description:
      "Ghana payroll calculator for 2026 GRA bands, SSNIT Tier 1, Tier 3 relief, and printable payslips.",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    liveUrl: "https://ghana-paye-calculator.vercel.app/",
    repoUrl: "https://github.com/MrrAmissah/Ghana-Paye-Calculator",
    images: ["/projects/ghana-paye-calculator.png"],
    accent: "Ghana finance",
  },
  {
    title: "GHS FX Converter",
    description:
      "Live Ghana cedi exchange rates with resilient offline cache for everyday currency checks.",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    liveUrl: "https://ghs-fx-converter.vercel.app",
    repoUrl: "https://github.com/MrrAmissah/GHS-FX-Converter",
    images: ["/projects/ghs-fx-converter.png"],
    accent: "Live API",
  },
  {
    title: "Snip",
    description:
      "Full-stack URL shortener with clean redirects, persistent links, and click analytics.",
    stack: ["Next.js", "TypeScript", "Prisma", "Neon", "Tailwind"],
    liveUrl: "https://snipnow.vercel.app",
    repoUrl: "https://github.com/MrrAmissah/Link-Shortener",
    images: ["/projects/snip.png"],
    accent: "Full stack",
  },
];

export type InProgressProject = {
  title: string;
  /** Short snippet describing the work without exposing anything private. */
  description: string;
  stack: string[];
  /** Optional logo path. Falls back to a monogram built from the title. */
  logo?: string;
  /** e.g. "In development", "Client work", "Under NDA". */
  status: string;
  /** Set when the repo is public but there is no live deployment yet. */
  repoUrl?: string;
};

/**
 * Work that is built but not yet deployed. Rendered with a monogram or logo
 * instead of a screenshot, so the work is visible even without a live link.
 *
 * Add entries here as they come. Only list projects that actually have code —
 * an empty repo shown here reads worse than not listing it at all.
 */
export const inProgressProjects: InProgressProject[] = [
  {
    title: "PayGuard Payment Core",
    // TODO(prince): reword if this over- or under-states what Payment Core covers.
    description:
      "The settlement engine behind PayGuard: escrow holds, payout orchestration, and the transaction audit trail that the rest of the platform is built on.",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    logo: "/payguard-logo.svg",
    status: "Private",
  },
  {
    title: "LiveLayer",
    description:
      "Local-first broadcast graphics for OBS: a control dock and a transparent output overlay running entirely in the browser, for lower thirds, scripture, and announcements without a native plugin or an account.",
    stack: ["React", "TypeScript", "Zustand", "Zod"],
    status: "In development",
    repoUrl: "https://github.com/MrrAmissah/Live-Layer",
  },

  /*
   * The four below are scaffolded repos with no code yet. Descriptions and
   * stacks are inferred from the repo names, NOT from an implementation.
   * TODO(prince): rewrite each in your own words before launch, and move to
   * "In development" with a repoUrl once there is something to show.
   */
  {
    title: "VendorVerify",
    description:
      "Lightweight vendor due-diligence for Ghanaian online trade: check a seller's identity and trading history before money changes hands, so buyers can judge who they are dealing with.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    status: "Early concept",
  },
  {
    title: "ReceiptOps",
    description:
      "Receipt and expense workflow built around how Ghanaian small businesses actually record sales, reconcile payments, and produce clean records at the end of the month.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    status: "Early concept",
  },
  {
    title: "Snip-Guard",
    description:
      "Link-safety layer for the Snip shortener: screen destinations for phishing and impersonation before a short link resolves, and flag suspicious redirects.",
    stack: ["Next.js", "TypeScript", "Prisma"],
    status: "Early concept",
  },
  {
    title: "SME-IR-Copilot",
    description:
      "Incident-response assistant for small and medium businesses without a security team: triage what happened, capture evidence in order, and produce a report someone can act on.",
    stack: ["Next.js", "TypeScript", "Node.js"],
    status: "Early concept",
  },
];
