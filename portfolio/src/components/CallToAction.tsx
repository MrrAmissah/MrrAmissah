"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

export function CallToAction() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 sm:py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-lg bg-navy px-6 py-14 text-center shadow-xl sm:px-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,108,255,0.28),transparent_42%)]" />

        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-balance text-paper sm:text-4xl">
            Have a useful problem to solve? Let&apos;s build it.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-paper/70">
            Open to roles and collaborations across full-stack development,
            networking, and IT infrastructure.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-navy"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://github.com/MrrAmissah"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-paper/25 px-6 text-sm font-semibold text-paper transition hover:border-paper/50 focus:outline-none focus:ring-2 focus:ring-paper/40"
            >
              <Github className="h-4 w-4" />
              View GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
