"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-balance text-ink sm:text-4xl dark:text-paper">
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  );
}
