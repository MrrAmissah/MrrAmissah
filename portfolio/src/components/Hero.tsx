"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Terminal } from "./Terminal";

const socials = [
  { href: "https://github.com/MrrAmissah", label: "GitHub", Icon: Github },
  {
    href: "https://www.linkedin.com/in/prince-kofi-frimpong-amissah/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  { href: "mailto:princeamissah0@gmail.com", label: "Email", Icon: Mail },
];

const rise = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 0.94]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, reduced ? 1 : 0.35],
  );

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-14 pt-24 sm:px-8"
    >
      {/* Portrait bleeds off the right edge on wide screens and melts into the
          canvas through the gradient scrim layered over it. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 -z-20 hidden w-[46%] lg:block"
      >
        <Image
          src="/prince-portrait.jpg"
          alt=""
          fill
          priority
          sizes="46vw"
          className="object-cover object-[30%_20%] grayscale contrast-[1.08]"
        />
        {/* Holds solid navy for the first fifth so the panel edge has no visible
            seam, then eases off fast enough to keep the face legible. */}
        <div className="hero-scrim-x absolute inset-0" />
        <div className="hero-scrim-y absolute inset-0" />
      </div>

      <motion.div
        style={{ scale, opacity }}
        className="relative mx-auto w-full max-w-6xl origin-bottom"
      >
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.09, delayChildren: 0.15 }}
        >
          {/* Portrait card for narrow screens, where the bleed version is off. */}
          <motion.div
            variants={rise}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 lg:hidden"
          >
            <div className="relative aspect-[4/5] w-40 -rotate-3 overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-2xl sm:w-48">
              <Image
                src="/prince-portrait.jpg"
                alt="Prince Kofi Frimpong Amissah"
                fill
                priority
                sizes="12rem"
                className="object-cover object-[30%_15%] grayscale"
              />
            </div>
          </motion.div>

          <motion.p
            variants={rise}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-semibold uppercase tracking-[0.28em]"
          >
            <span className="rounded-full border border-accent/45 px-4 py-2 text-accent">
              Available for work
            </span>
            <span className="text-dim">Accra, Ghana</span>
          </motion.p>

          <h1 className="mt-6 max-w-3xl font-display text-display font-extrabold text-text">
            <motion.span
              variants={rise}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Prince Kofi F.
            </motion.span>
            <motion.span
              variants={rise}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="block text-accent"
            >
              Amissah
            </motion.span>
          </h1>

          <motion.p
            variants={rise}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-lg leading-8 text-dim sm:text-xl sm:leading-9"
          >
            Information Systems graduate, CCNA-trained network technician, and
            full-stack developer building{" "}
            <span className="text-text">practical tools</span> for
            infrastructure, finance, and Ghanaian workflows.
          </motion.p>

          <motion.div
            variants={rise}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-bg-deep transition hover:bg-accent-soft focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
            >
              See the work
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3.5 text-sm font-bold text-text transition hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
            >
              Let&apos;s talk
            </a>

            <div className="flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line text-dim transition hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* In flow on narrow screens; on wide screens it lifts out of the column
          and sits over the dark foot of the portrait, so it costs no vertical
          height and the name can stay at full size. */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-12 w-full max-w-6xl lg:absolute lg:inset-x-0 lg:bottom-24 lg:mt-0 lg:px-8"
      >
        <div className="lg:ml-auto lg:w-[25rem]">
          <Terminal />
        </div>
      </motion.div>

      <motion.a
        href="#featured"
        aria-label="Scroll to featured work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-dim transition hover:text-accent sm:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
