"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const proofPoints = [
  "Escrow workflow",
  "KYC + disputes",
  "Audit trail + payouts",
  "Real-time risk checks",
];

const stackGroups = [
  { label: "Frontend", items: "Next.js, TypeScript" },
  { label: "Backend", items: "Prisma, PostgreSQL" },
  { label: "Auth & payments", items: "Clerk, Chipper Cash" },
];

export function Featured() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Slow drift on the cover art as the section passes through the viewport.
  const y = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["-8%", "8%"]);

  return (
    <section ref={ref} id="featured" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-dim"
        >
          <span aria-hidden className="h-px w-8 bg-accent" />
          Flagship case study
        </motion.p>
      </div>

      {/* The brand banner is light-on-white, so it sits in a contained frame
          rather than bleeding into the navy canvas. */}
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[1568/400] w-full overflow-hidden rounded-2xl border border-line-strong bg-white shadow-2xl"
        >
          <motion.div style={{ y }} className="absolute inset-[-6%]">
            <Image
              src="/payguard-banner-slim.png"
              alt="PayGuard, escrow-protected commerce infrastructure"
              fill
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_0.85fr] lg:items-start"
        >
          <div>
            {/* No logo mark here: the banner directly above already carries the
                PayGuard logo and wordmark. */}
            <h3 className="font-display text-5xl font-extrabold text-text sm:text-6xl">
              PayGuard
            </h3>

            <p className="mt-8 max-w-2xl font-display text-statement font-bold leading-tight text-text">
              Funds stay protected until{" "}
              <span className="text-accent">delivery is confirmed.</span>
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-dim">
              A production-grade fintech platform combining escrow workflows, KYC
              verification, dispute resolution, automated payouts, audit trails,
              and real-time risk checks into one secure transaction layer.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {proofPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-text"
                >
                  {point}
                </span>
              ))}
            </div>

            <a
              href="https://payguardgh.com"
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-bg-deep transition hover:bg-accent-soft focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
            >
              Visit payguardgh.com
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <dl className="divide-y divide-line border-y border-line lg:mt-6">
            {stackGroups.map((group) => (
              <div key={group.label} className="flex items-baseline gap-6 py-5">
                <dt className="w-36 shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-dim">
                  {group.label}
                </dt>
                <dd className="font-display text-lg font-semibold text-text">
                  {group.items}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* The identity and campaign pieces were designed alongside the build,
            so they sit here as evidence of the brand work, not as decoration. */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 border-t border-line pt-12"
        >
          <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-dim">
            <span aria-hidden className="h-px w-8 bg-accent" />
            Brand collateral
          </p>

          {/* Stacking two 3:1 cards on a phone makes each one tiny; swiping
              keeps them legible. Falls back to a grid once there is width. */}
          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-2 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
            {[
              {
                src: "/payguard-quote.png",
                alt: "PayGuard brand card carrying the line: trust is not a feature, it is the foundation.",
                ratio: "aspect-[1500/500]",
              },
              {
                src: "/payguard-thanks-wide.png",
                alt: "PayGuard thank-you card used to close client conversations.",
                ratio: "aspect-[1500/500]",
              },
            ].map((item) => (
              <div
                key={item.src}
                className={`relative ${item.ratio} w-[88%] shrink-0 snap-center overflow-hidden rounded-2xl border border-line-strong bg-white shadow-2xl sm:w-[70%] lg:w-full`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 32rem, 100vw"
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
