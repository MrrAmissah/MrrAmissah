"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";

const milestones = [
  {
    year: "2019",
    text: "Started a BSc in Information Systems Sciences at Regent University, alongside an Honors Diploma in Network Engineering (Soul Food ICT College).",
  },
  {
    year: "2021",
    text: "Earned Huawei Certification in Routing & Switching.",
  },
  {
    year: "2022",
    text: "CCNA training at Improtech Systems and ALX Software Engineering (Front-End) — first hands-on networking and full-stack work.",
  },
  {
    year: "2023",
    text: "Graduated with the BSc and began National Service as a Robotics & STEM facilitator at Mingo Blox.",
  },
  {
    year: "2025",
    text: "Became an ISC2 Candidate (Certified in Cybersecurity pathway) and began designing and building PayGuard, a self-initiated commerce platform.",
  },
  {
    year: "2026",
    text: "CAD/CAM training under the Precision Quality Internship Program (Accent and Arts), and shipped a portfolio of production web tools — Subnet Calculator, Ghana PAYE Calculator, GHS FX Converter, and Snip.",
  },
];

export function Journey() {
  return (
    <Section id="journey" eyebrow="Journey" title="From networks to full-stack products.">
      <ol className="relative ml-2">
        {milestones.map(({ year, text }, i) => (
          <motion.li
            key={year}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.04, ease: "easeOut" }}
            className="relative border-l-2 border-line pb-8 pl-8 last:border-l-transparent last:pb-0"
          >
            <span className="absolute -left-[9px] top-0 grid h-4 w-4 place-items-center rounded-full border-2 border-accent bg-paper dark:bg-background">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="text-sm font-semibold text-accent">{year}</span>
            <p className="mt-1.5 max-w-2xl text-sm leading-7 text-ink/75 dark:text-paper/75">
              {text}
            </p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
