"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";

const milestones = [
  {
    year: "2019",
    title: "BSc + Network Engineering",
    text: "Started a BSc in Information Systems Sciences at Regent University, alongside an Honors Diploma in Network Engineering at Soul Food ICT College.",
  },
  {
    year: "2021",
    title: "Huawei Certified",
    text: "Earned Huawei Certification in Routing & Switching.",
  },
  {
    year: "2022",
    title: "CCNA + ALX Front-End",
    text: "CCNA training at Improtech Systems and ALX Software Engineering. First hands-on networking and full-stack work.",
  },
  {
    year: "2023",
    title: "Graduated, then taught robotics",
    text: "Graduated with the BSc and began National Service as a Robotics & STEM facilitator at Mingo Blox.",
  },
  {
    year: "2025",
    title: "ISC2 candidate, PayGuard begins",
    text: "Became an ISC2 Candidate on the Certified in Cybersecurity pathway, and began designing and building PayGuard.",
  },
  {
    year: "2026",
    title: "CAD/CAM + shipped tools",
    text: "CAD/CAM training under the Precision Quality Internship Program, and shipped a portfolio of production web tools.",
  },
];

export function Journey() {
  return (
    <Section
      id="journey"
      index="03"
      eyebrow="Journey"
      title="From routing tables"
      accentTitle="to production software."
    >
      <ol className="border-t border-line">
        {milestones.map(({ year, title, text }, i) => (
          <motion.li
            key={year}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group grid gap-3 border-b border-line py-8 transition-colors duration-300 hover:bg-surface/40 sm:grid-cols-[7rem_1fr] sm:gap-8 lg:grid-cols-[7rem_16rem_1fr]"
          >
            <span className="font-display text-xl font-bold text-accent">
              {year}
            </span>
            <h3 className="font-display text-xl font-bold text-text">
              {title}
            </h3>
            <p className="max-w-2xl text-base leading-7 text-dim">{text}</p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
