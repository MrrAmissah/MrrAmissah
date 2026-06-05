import Image from "next/image";
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
            className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-paper/10 dark:bg-paper/5"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-ink/5">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
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
                    className="rounded-full border border-ink/10 px-3 py-1 text-xs font-medium text-ink/70 dark:border-paper/15 dark:text-paper/70"
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
                    className="text-sm font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 transition hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent dark:text-paper"
                  >
                    Live
                  </a>
                ) : (
                  <span className="text-sm font-medium text-ink/45 dark:text-paper/45">
                    Live URL pending
                  </span>
                )}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 transition hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent dark:text-paper"
                >
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
