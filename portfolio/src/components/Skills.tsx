import { Section } from "./Section";

const groups = [
  {
    title: "Technical",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL/Prisma",
      "Tailwind",
      "Networking (CCNA)",
      "Git",
    ],
  },
  {
    title: "Professional",
    skills: ["Planning", "Collaboration", "Communication", "Adaptability"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A balanced toolkit for software, infrastructure, and delivery."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-lg border border-ink/10 bg-white p-6 dark:border-paper/10 dark:bg-paper/5"
          >
            <h3 className="text-lg font-semibold text-ink dark:text-paper">
              {group.title}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-ink px-3 py-1.5 text-sm font-medium text-paper dark:bg-paper dark:text-ink"
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
