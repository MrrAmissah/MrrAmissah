"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Lock, Wrench } from "lucide-react";
import { inProgressProjects, projects } from "@/lib/projects";
import { ProjectGallery } from "./ProjectGallery";
import { Section } from "./Section";

/**
 * "Ghana PAYE Calculator" -> "GP", "LiveLayer" -> "LL".
 * Used when a project has no logo.
 */
function monogram(title: string) {
  const words = title.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  return words
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

export function Projects() {
  return (
    <Section
      id="work"
      index="01"
      eyebrow="Selected work"
      title="Utility-first tools for"
      accentTitle="networks, money and the web."
    >
      <div className="space-y-24 sm:space-y-32">
        {projects.map((project, i) => {
          const flipped = i % 2 === 1;

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="group grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={`relative ${flipped ? "lg:order-2" : "lg:order-1"}`}
              >
                <ProjectGallery
                  images={project.images}
                  title={project.title}
                  flipped={flipped}
                />
              </div>

              <div className={flipped ? "lg:order-1" : "lg:order-2"}>
                <div className="flex items-center gap-4">
                  <span className="font-display text-3xl font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="h-px w-8 bg-line-strong" />
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-dim">
                    {project.accent}
                  </p>
                </div>

                <h3 className="mt-5 font-display text-4xl font-extrabold text-text sm:text-5xl">
                  {project.title}
                </h3>

                <p className="mt-5 max-w-xl text-lg leading-8 text-dim">
                  {project.description}
                </p>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line px-3.5 py-1.5 text-xs font-medium text-dim"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-bold text-bg-deep transition hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
                    >
                      Live site
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-bold text-text transition hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {inProgressProjects.length > 0 ? (
        <div className="mt-32 border-t border-line pt-16">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-dim">
              <span aria-hidden className="h-px w-8 bg-accent" />
              Also building
            </p>
            <h3 className="font-display text-3xl font-bold text-text sm:text-4xl">
              Not deployed{" "}
              <span className="text-accent">yet.</span>
            </h3>
            <p className="mt-5 text-lg leading-8 text-dim">
              What I am building next, and what is already underway behind a
              closed repo. Happy to talk through the thinking on any of these.
            </p>
          </div>

          {/* Only split into columns once there is more than one entry, or a
              lone card leaves an empty half-panel. */}
          <div
            className={`grid gap-px overflow-hidden rounded-2xl border border-line bg-line ${
              inProgressProjects.length > 1 ? "sm:grid-cols-2" : ""
            }`}
          >
            {inProgressProjects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col bg-bg p-8 transition-colors duration-300 hover:bg-surface"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-line-strong bg-surface">
                    {project.logo ? (
                      <Image
                        src={project.logo}
                        alt=""
                        width={32}
                        height={32}
                        className="h-8 w-8"
                      />
                    ) : (
                      <span className="font-display text-xl font-extrabold text-accent">
                        {monogram(project.title)}
                      </span>
                    )}
                  </span>

                  {/* A padlock would contradict an open repo, so it only shows
                      when there genuinely is no public code. */}
                  <span className="inline-flex items-center gap-2 rounded-full border border-line-strong px-3.5 py-1.5 text-xs font-semibold text-dim">
                    {project.repoUrl ? (
                      <Wrench className="h-3.5 w-3.5" />
                    ) : (
                      <Lock className="h-3.5 w-3.5" />
                    )}
                    {project.status}
                  </span>
                </div>

                <h4 className="mt-6 font-display text-2xl font-bold text-text">
                  {project.title}
                </h4>
                <p className="mt-3 flex-1 text-base leading-7 text-dim">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line px-3.5 py-1.5 text-xs font-medium text-dim"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-line pt-5">
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-text transition hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <Github className="h-4 w-4" />
                      View code
                    </a>
                  ) : (
                    <p className="text-xs uppercase tracking-[0.2em] text-dim/70">
                      Private repo, no live link yet
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  );
}
