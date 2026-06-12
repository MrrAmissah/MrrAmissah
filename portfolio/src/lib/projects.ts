export type Project = {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl: string;
  image: string;
  accent: string;
};

export const projects: Project[] = [
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
    image: "/projects/urbanflow.png",
    accent: "Civic tech AI",
  },
  {
    title: "Subnet Calculator",
    description:
      "IPv4 subnet and CIDR utility with binary breakdowns and subnet splitting.",
    stack: ["React", "TypeScript", "Vite", "Tailwind", "Vitest"],
    liveUrl: "https://subnet-calculator-jade.vercel.app/",
    repoUrl: "https://github.com/MrrAmissah/Subnet-Calculator",
    image: "/projects/subnet-calculator.png",
    accent: "Networking",
  },
  {
    title: "Ghana PAYE Calculator",
    description:
      "Ghana payroll calculator for 2026 GRA bands, SSNIT Tier 1, Tier 3 relief, and printable payslips.",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    liveUrl: "https://ghana-paye-calculator.vercel.app/",
    repoUrl: "https://github.com/MrrAmissah/Ghana-Paye-Calculator",
    image: "/projects/ghana-paye-calculator.png",
    accent: "Ghana finance",
  },
  {
    title: "GHS FX Converter",
    description:
      "Live Ghana cedi exchange rates with resilient offline cache for everyday currency checks.",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    liveUrl: "https://ghs-fx-converter.vercel.app",
    repoUrl: "https://github.com/MrrAmissah/GHS-FX-Converter",
    image: "/projects/ghs-fx-converter.png",
    accent: "Live API",
  },
  {
    title: "Snip",
    description:
      "Full-stack URL shortener with clean redirects, persistent links, and click analytics.",
    stack: ["Next.js", "TypeScript", "Prisma", "Neon", "Tailwind"],
    liveUrl: "https://snipnow.vercel.app",
    repoUrl: "https://github.com/MrrAmissah/Link-Shortener",
    image: "/projects/snip.png",
    accent: "Full stack",
  },
];
