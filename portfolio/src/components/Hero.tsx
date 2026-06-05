"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-line bg-paper dark:bg-background"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,var(--paper)_0%,var(--paper)_54%,rgba(0,108,255,0.10)_54%,rgba(14,165,233,0.14)_100%)] dark:bg-[linear-gradient(120deg,var(--background)_0%,var(--background)_54%,rgba(0,108,255,0.16)_54%,rgba(14,165,233,0.10)_100%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:min-h-[72svh] sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.74fr)]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="flex items-center gap-2 text-sm font-medium text-ink/60 dark:text-paper/60">
            <MapPin className="h-4 w-4 text-accent" />
            Accra, Ghana
          </p>

          <h1 className="mt-6 text-[2.2rem] font-semibold leading-[1.04] text-ink sm:text-6xl dark:text-paper">
            <span className="block">
              Prince <span className="text-accent">Kofi</span>
            </span>
            <span className="block whitespace-nowrap">Frimpong Amissah</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-ink/72 sm:text-xl sm:leading-9 dark:text-paper/72">
            Information Systems graduate, CCNA-trained network technician, and
            full-stack developer building practical tools for infrastructure,
            finance, and Ghanaian workflows.
          </p>

          <div className="mt-6 grid max-w-xl gap-3 text-sm font-medium text-ink/72 sm:grid-cols-3 dark:text-paper/72">
            {["Networking", "Full-stack apps", "Ghanaian utilities"].map((item) => (
              <div
                key={item}
                className="border border-line bg-white/65 px-3 py-2 backdrop-blur dark:bg-surface/55"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-white shadow-sm shadow-accent/30 transition hover:-translate-y-0.5 hover:bg-cyan hover:shadow-lg hover:shadow-accent/40 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-paper dark:hover:bg-cyan dark:focus:ring-offset-background"
            >
              View work
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-line bg-white/70 px-6 text-sm font-semibold text-ink backdrop-blur transition hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-paper dark:bg-surface/70 dark:text-paper dark:focus:ring-offset-background"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3 text-ink/60 dark:text-paper/60">
            {[
              { href: "https://github.com/MrrAmissah", label: "GitHub", Icon: Github },
              { href: "https://www.linkedin.com/in/prince-kofi-frimpong-amissah/", label: "LinkedIn", Icon: Linkedin },
              { href: "mailto:princeamissah0@gmail.com", label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white/70 backdrop-blur transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent dark:bg-surface/70"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[19rem] sm:max-w-[21rem] lg:max-w-sm"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(0,108,255,0.28),transparent_70%)] blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl ring-1 ring-accent/20">
            <Image
              src="/prince.jpg"
              alt="Prince Kofi Frimpong Amissah"
              fill
              priority
              sizes="(min-width: 1024px) 24rem, (min-width: 640px) 21rem, 19rem"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-4 left-4 max-w-[14rem] rounded-lg border border-line bg-white/88 px-4 py-3 font-mono text-[0.72rem] leading-5 text-muted shadow-lg backdrop-blur-md dark:border-paper/10 dark:bg-navy/88 dark:text-paper/72 sm:-left-6 sm:bottom-8">
            <p>
              <span className="text-accent">const</span> build =
              &quot;useful&quot;;
            </p>
            <p>
              <span className="text-accent">trust</span>.ship(clearSystems);
            </p>
            <p className="text-ink/55 dark:text-paper/45">
              {"// networks + fintech"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
