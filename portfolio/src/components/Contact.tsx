"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";

const channels = [
  {
    label: "Email",
    value: "princeamissah0@gmail.com",
    href: "mailto:princeamissah0@gmail.com",
    Icon: Mail,
  },
  {
    label: "Phone",
    value: "+233 55 465 5221",
    href: "tel:+233554655221",
    Icon: Phone,
  },
  {
    label: "GitHub",
    value: "github.com/MrrAmissah",
    href: "https://github.com/MrrAmissah",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    value: "in/prince-kofi-frimpong-amissah",
    href: "https://www.linkedin.com/in/prince-kofi-frimpong-amissah/",
    Icon: Linkedin,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-line bg-bg-deep py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="accent-wash pointer-events-none absolute inset-0"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-dim">
            Contact
          </p>

          <h2 className="font-display text-display font-extrabold leading-[0.9] text-text">
            <span className="block">Got a useful</span>
            <span className="block text-accent">problem?</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-dim">
            Open to roles and collaborations across full-stack development,
            networking, and IT infrastructure.
          </p>

          <a
            href="mailto:princeamissah0@gmail.com"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-bg-deep transition hover:bg-accent-soft focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-deep"
          >
            Start a conversation
            <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ label, value, href, Icon }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col gap-4 bg-bg-deep p-7 transition-colors duration-300 hover:bg-surface focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
            >
              <Icon className="h-5 w-5 text-accent" />
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-dim">
                  {label}
                </span>
                <span className="mt-1.5 block break-words text-sm font-semibold text-text transition-colors group-hover:text-accent">
                  {value}
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
