import { Code2, Database, Network } from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    title: "Frontend",
    Icon: Code2,
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & data",
    Icon: Database,
    skills: ["Node.js", "PostgreSQL", "Prisma", "Chipper Cash / Clerk"],
  },
  {
    title: "Infrastructure & networking",
    Icon: Network,
    skills: ["Networking (CCNA)", "Git", "Vercel", "Vitest"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A balanced toolkit for software, infrastructure, and delivery."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ title, Icon, skills }) => (
          <div
            key={title}
            className="rounded-2xl border border-line bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg dark:bg-surface"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-base font-semibold text-ink dark:text-paper">
                {title}
              </h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-line bg-surface-muted/60 px-3 py-1.5 text-sm font-medium text-ink/80 dark:bg-background/40 dark:text-paper/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
