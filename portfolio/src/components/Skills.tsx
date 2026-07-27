"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    title: "Frontend",
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & data",
    skills: ["Node.js", "PostgreSQL", "Prisma", "Supabase", "Clerk"],
  },
  {
    title: "Infrastructure & networking",
    skills: ["Networking (CCNA)", "Routing & switching", "Git", "Vercel", "Vitest"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Skills"
      title="A toolkit that spans"
      accentTitle="the wire and the browser."
    >
      <div className="border-t border-line">
        {groups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-6 border-b border-line py-10 md:grid-cols-[18rem_1fr] md:gap-12"
          >
            <h3 className="font-display text-2xl font-bold text-text sm:text-3xl">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2.5 self-center">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-dim transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
