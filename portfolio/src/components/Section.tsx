"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  /** Two-digit index rendered as an oversized outlined numeral. */
  index?: string;
  eyebrow: string;
  /** First heading line, set in cream. */
  title: string;
  /** Second heading line, set in accent. Drives the two-line display look. */
  accentTitle?: string;
  lead?: string;
  align?: "left" | "center";
  children: ReactNode;
};

export function Section({
  id,
  index,
  eyebrow,
  title,
  accentTitle,
  lead,
  align = "left",
  children,
}: SectionProps) {
  const centered = align === "center";

  return (
    <section
      id={id}
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28"
    >
      {index ? (
        <span
          aria-hidden
          className={`numeral-ghost pointer-events-none absolute -top-2 select-none font-display font-extrabold ${
            centered ? "left-1/2 -translate-x-1/2" : "right-4"
          }`}
        >
          {index}
        </span>
      ) : null}

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`relative mb-12 sm:mb-16 ${
          centered ? "mx-auto max-w-3xl text-center" : "max-w-4xl"
        }`}
      >
        <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-dim">
          {!centered ? (
            <span aria-hidden className="h-px w-8 bg-accent" />
          ) : null}
          <span className={centered ? "mx-auto" : ""}>{eyebrow}</span>
        </p>

        <h2 className="font-display text-display-sm font-bold text-text">
          <span className="block">{title}</span>
          {accentTitle ? (
            <span className="block text-accent">{accentTitle}</span>
          ) : null}
        </h2>

        {lead ? (
          <p
            className={`mt-6 text-lg leading-8 text-dim ${
              centered ? "mx-auto max-w-2xl" : "max-w-2xl"
            }`}
          >
            {lead}
          </p>
        ) : null}
      </motion.div>

      <div className="relative">{children}</div>
    </section>
  );
}
