"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Apps shipped" },
  { value: "CCNA", label: "ISC2 CC pathway" },
  { value: "PayGuard", label: "Live product · in-house build" },
  { value: "Accra", label: "Based in Ghana" },
];

export function Stats() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="rounded-2xl border border-line bg-surface p-5 text-center shadow-sm"
          >
            <div className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl dark:text-paper">
              {value}
            </div>
            <div className="mt-1.5 text-xs font-medium text-ink/60 dark:text-paper/60">
              {label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
