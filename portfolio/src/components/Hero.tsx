"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-ink/10 bg-paper dark:border-paper/10 dark:bg-ink"
    >
      <div className="absolute inset-0 -z-10 opacity-70 dark:opacity-40">
        <div className="absolute left-1/2 top-0 h-full w-[1100px] -translate-x-1/2 bg-[radial-gradient(circle_at_20%_20%,rgba(197,149,57,0.24),transparent_24%),linear-gradient(115deg,rgba(12,31,52,0.08),transparent_45%),repeating-linear-gradient(135deg,rgba(12,31,52,0.08)_0_1px,transparent_1px_18px)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 sm:px-8 sm:py-16 lg:min-h-[calc(78vh-4rem)] lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Accra, Ghana
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.98] text-balance text-ink sm:text-6xl lg:text-7xl dark:text-paper">
            Prince Kofi Amissah
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl dark:text-paper/72">
            Information Systems / Networking & IT Infrastructure / Full-Stack
            Developer
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-paper transition hover:bg-accent hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-paper dark:bg-paper dark:text-ink dark:hover:bg-accent dark:focus:ring-offset-ink"
            >
              View work
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-ink/20 px-6 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-paper dark:border-paper/20 dark:text-paper dark:focus:ring-offset-ink"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto aspect-[16/10] w-full max-w-[22rem] lg:aspect-[4/5] lg:max-w-xs"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-[2rem] border border-ink/10 bg-[linear-gradient(160deg,#0c1f34,#14395c_45%,#c59539)] shadow-2xl dark:border-paper/10" />
          <div className="absolute inset-5 rounded-[1.5rem] border border-paper/25 bg-paper/8 p-6 text-paper backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
              <span className="h-3 w-3 rounded-full bg-[#ffd166]" />
              <span className="h-3 w-3 rounded-full bg-[#2dd4bf]" />
            </div>
            <div className="mt-6 space-y-3 lg:mt-10 lg:space-y-4">
              <div className="h-4 w-28 rounded-full bg-paper/80" />
              <div className="h-12 rounded-2xl border border-paper/20 bg-paper/12 lg:h-16" />
              <div className="grid grid-cols-2 gap-3">
                <div className="h-16 rounded-2xl border border-paper/20 bg-paper/12 lg:h-24" />
                <div className="h-16 rounded-2xl border border-paper/20 bg-paper/12 lg:h-24" />
              </div>
              <div className="hidden h-28 rounded-2xl border border-paper/20 bg-paper/12 lg:block" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
