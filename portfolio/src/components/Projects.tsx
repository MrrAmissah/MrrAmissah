import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/projects";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Utility-first projects for networks, finance, and the modern web."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-lg border border-line bg-surface shadow-sm transition hover:-translate-y-1 hover:border-accent/45 hover:shadow-xl dark:bg-surface"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface-muted">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top transition duration-500 hover:scale-[1.02]"
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
                {project.accent}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-ink dark:text-paper">
                {project.title}
              </h3>
              <p className="mt-3 min-h-16 text-sm leading-6 text-ink/68 dark:text-paper/68">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-line bg-surface-muted/70 px-3 py-1 text-xs font-medium text-ink/70 dark:bg-background/50 dark:text-paper/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 items-center gap-2 rounded-lg bg-accent px-3 text-sm font-semibold text-white shadow-sm shadow-accent/30 transition hover:-translate-y-0.5 hover:bg-cyan focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    Live
                  </a>
                ) : (
                  <span className="inline-flex h-9 items-center rounded-lg border border-line px-3 text-sm font-medium text-ink/45 dark:text-paper/45">
                    Live URL pending
                  </span>
                )}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 items-center gap-2 rounded-lg border border-line px-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent dark:text-paper"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
