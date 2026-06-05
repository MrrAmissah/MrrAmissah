"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stack = [
  "Next.js",
  "TypeScript",
  "Prisma",
  "PostgreSQL",
  "Paystack",
  "Clerk",
];

export function Featured() {
  return (
    <section id="featured" className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Flagship product
        </p>

        <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-sm dark:bg-surface">
          <div className="relative aspect-[1000/360] w-full overflow-hidden border-b border-line bg-surface-muted">
            <Image
              src="/payguard-cover.png"
              alt="PayGuard — defend your finances"
              fill
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/payguard-logo.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <h3 className="text-2xl font-semibold text-ink dark:text-paper">
                  PayGuard
                </h3>
              </div>
              <p className="mt-4 text-base font-medium text-ink dark:text-paper">
                Escrow-protected payments for buyers and sellers in West Africa.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-ink/70 dark:text-paper/70">
                A production fintech platform where funds stay in escrow until
                delivery is confirmed, with KYC verification, dispute
                resolution, automated payouts, and real-time risk checks. Built
                end to end, from authentication and payments to the database and
                infrastructure.
              </p>
            </div>

            <div className="lg:border-l lg:border-line lg:pl-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/45 dark:text-paper/45">
                Built with
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-line bg-surface-muted/70 px-3 py-1 text-xs font-medium text-ink/70 dark:bg-background/50 dark:text-paper/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://payguardgh.com"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-white shadow-sm shadow-accent/30 transition hover:-translate-y-0.5 hover:bg-cyan hover:shadow-lg hover:shadow-accent/40 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                Visit payguardgh.com
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
