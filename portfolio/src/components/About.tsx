import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="I build practical systems with a clear eye for local context."
    >
      <div className="grid gap-5 text-base leading-8 text-ink/72 md:grid-cols-[1fr_0.72fr] dark:text-paper/72">
        <div className="space-y-5">
        <p>
          I am an Information Systems graduate based in Accra, Ghana, with
          hands-on training as a CCNA network technician and a growing full-stack
          development practice.
        </p>
        <p>
          My work sits at the point where infrastructure, software, and real
          user needs meet: calculators, web tools, dashboards, and products that
          make technical decisions easier to understand.
        </p>
        <p>
          I am comfortable across TypeScript, React, Next.js, Node.js,
          PostgreSQL, Prisma, Tailwind, Git, and networking fundamentals, and I
          enjoy building tools for the Ghanaian context.
        </p>
        </div>
        <div className="rounded-lg border border-line bg-surface p-5 shadow-sm dark:bg-surface">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Working style
          </p>
          <p className="mt-3 text-sm leading-7">
            I like simple interfaces, verifiable behavior, and products that
            earn trust by making the next step obvious.
          </p>
        </div>
      </div>
    </Section>
  );
}
