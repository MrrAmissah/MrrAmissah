"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com/MrrAmissah", label: "GitHub", Icon: Github },
  {
    href: "https://www.linkedin.com/in/prince-kofi-frimpong-amissah/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  { href: "mailto:princeamissah0@gmail.com", label: "Email", Icon: Mail },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the overlay and allow Escape to dismiss it.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled && !open
            ? "border-b border-line bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8"
        >
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="group inline-flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-bg"
          >
            <span className="relative block h-9 w-9 overflow-hidden rounded-full border border-line-strong bg-surface transition group-hover:-translate-y-0.5">
              <Image
                src="/brand-logo-dark.png"
                alt=""
                fill
                priority
                sizes="36px"
                className="object-cover"
              />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-text">
              Prince <span className="text-accent">K. F. Amissah</span>
            </span>
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="group hidden items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-bold text-bg-deep transition hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg sm:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="overlay-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative grid h-11 w-11 place-items-center rounded-full border border-line-strong text-text transition hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span aria-hidden className="relative block h-3 w-4">
                <motion.span
                  animate={
                    open ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-0 block h-0.5 w-4 rounded bg-current"
                />
                <motion.span
                  animate={
                    open ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-0 left-0 block h-0.5 w-4 rounded bg-current"
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            // AnimatePresence tracks children by key; without one the enter
            // animation never runs and the overlay sits invisible at opacity 0
            // while still covering the page and swallowing clicks.
            key="overlay-menu"
            id="overlay-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-bg-deep/97 px-5 pt-20 backdrop-blur-xl sm:px-8"
          >
            <div className="mx-auto w-full max-w-6xl">
              <ul className="border-t border-line">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.06 * i + 0.08,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-line"
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-6 py-4 focus:outline-none sm:gap-10 sm:py-6"
                    >
                      <span className="font-mono text-xs text-dim transition group-hover:text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-4xl font-bold text-text transition-colors duration-200 group-hover:text-accent sm:text-6xl">
                        {link.label}
                      </span>
                      <ArrowUpRight className="ml-auto h-5 w-5 self-center text-dim opacity-0 transition group-hover:translate-x-1 group-hover:text-accent group-hover:opacity-100" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-10 flex flex-wrap items-center justify-between gap-6"
              >
                <a
                  href="mailto:princeamissah0@gmail.com"
                  className="text-sm text-dim transition hover:text-accent"
                >
                  princeamissah0@gmail.com
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
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
