"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const proofPoints = [
  "Escrow workflow",
  "KYC + disputes",
  "Audit trail + payouts",
];

const stackGroups = [
  {
    label: "Frontend",
    items: ["Next.js", "TypeScript"],
  },
  {
    label: "Backend",
    items: ["Prisma", "PostgreSQL"],
  },
  {
    label: "Auth & Payments",
    items: ["Clerk", "Chipper Cash"],
  },
];

export function Featured() {
  return (
    <section id="featured" className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 pb-5 pt-10 sm:px-8 sm:pb-6 sm:pt-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#0EA5E9]">
          Flagship case study
        </p>

        <div className="overflow-hidden rounded-lg border border-[#CFE3F7] bg-white shadow-sm dark:border-paper/10 dark:bg-surface">
          <div className="border-b border-[#CFE3F7] bg-[#EFF7FF] p-3 dark:border-paper/10 dark:bg-background/45">
            <div className="relative aspect-[1000/320] w-full overflow-hidden rounded-md border border-[#CFE3F7] bg-white dark:border-paper/10 dark:bg-surface">
              <Image
                src="/payguard-cover.png"
                alt="PayGuard — defend your finances"
                fill
                sizes="(min-width: 1024px) 64rem, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.25fr_0.95fr] lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/payguard-logo.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <h3 className="text-2xl font-semibold text-[#071B3A] dark:text-paper">
                  PayGuard
                </h3>
              </div>
              <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-[#071B3A] dark:text-paper">
                Escrow-protected commerce infrastructure for safer buyer-seller
                transactions.
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#4B5F7A] dark:text-paper/70">
                A production-grade fintech platform where funds stay protected
                until delivery is confirmed. PayGuard combines escrow workflows,
                KYC verification, dispute resolution, automated payouts, audit
                trails, and real-time risk checks into one secure transaction
                layer.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {proofPoints.map((point) => (
                  <span
                    key={point}
                    className="rounded-lg border border-[#CFE3F7] bg-[#EFF7FF] px-3 py-1.5 text-xs font-semibold text-[#071B3A] dark:border-paper/10 dark:bg-background/55 dark:text-paper/80"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-[#CFE3F7] bg-[#EFF7FF]/65 p-4 dark:border-paper/10 dark:bg-background/40">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4B5F7A] dark:text-paper/55">
                Built with
              </p>
              <div className="mt-4 space-y-3">
                {stackGroups.map((group) => (
                  <div
                    key={group.label}
                    className="rounded-md border border-[#CFE3F7] bg-white p-3 dark:border-paper/10 dark:bg-surface/70"
                  >
                    <p className="text-xs font-semibold text-[#006CFF] dark:text-cyan">
                      {group.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#071B3A] dark:text-paper">
                      {group.items.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
              <a
                href="https://payguardgh.com"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex h-11 items-center gap-2 rounded-lg bg-[#006CFF] px-5 text-sm font-semibold text-white shadow-sm shadow-[#006CFF]/25 transition hover:-translate-y-0.5 hover:bg-[#0EA5E9] hover:shadow-lg hover:shadow-[#006CFF]/30 focus:outline-none focus:ring-2 focus:ring-[#006CFF]"
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
