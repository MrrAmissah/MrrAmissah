"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { RevealWords } from "./RevealWords";

const workingStyle = [
  {
    title: "Start from the real workflow",
    description:
      "I map how people actually move through a task before choosing the interface.",
  },
  {
    title: "Make the logic visible",
    description:
      "Calculations, states, and edge cases should be easy to inspect and trust.",
  },
  {
    title: "Ship in useful steps",
    description:
      "I prefer clean, working increments over oversized rewrites that delay feedback.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      index="02"
      eyebrow="About"
      title="Where infrastructure meets"
      accentTitle="the things people actually use."
      align="center"
    >
      <RevealWords
        text="I build practical systems with a clear eye for local context: calculators, dashboards, fintech tools, and network-aware products."
        highlight={["practical", "systems", "local", "context"]}
        className="mx-auto max-w-4xl justify-center text-center font-display text-statement font-bold leading-tight text-text"
      />

      <div className="mt-20 grid gap-12 border-t border-line pt-12 md:grid-cols-[0.8fr_1fr] md:gap-16">
        <div>
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-2xl">
            <Image
              src="/prince-speaking.jpg"
              alt="Prince speaking at the Accra Stablecoin Conference"
              fill
              sizes="(min-width: 768px) 24rem, 100vw"
              className="object-cover object-center"
            />
          </div>
          <p className="mt-5 font-display text-xl font-bold text-accent">
            Prince Kofi Frimpong Amissah
          </p>
          <p className="mt-1.5 text-sm uppercase tracking-[0.2em] text-dim">
            Accra, Ghana
          </p>
        </div>

        <div className="space-y-5 self-center text-lg leading-8 text-dim">
          <p>
            I am an Information Systems graduate based in Accra, Ghana, with
            hands-on training in networking, software development, and practical
            digital systems.
          </p>
          <p>
            My work sits where infrastructure, software, and real user needs meet.
            I am comfortable across TypeScript, React, Next.js, Node.js,
            PostgreSQL, Prisma, Tailwind, Git, and networking fundamentals, with a
            focus on building tools that are{" "}
            <span className="text-text">useful, clear, and reliable.</span>
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
        {workingStyle.map(({ title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-bg p-8 transition-colors duration-300 hover:bg-surface"
          >
            <span className="font-mono text-xs text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-text">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-dim">{description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
