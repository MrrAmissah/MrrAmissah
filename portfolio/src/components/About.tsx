import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="I build practical systems with a clear eye for local context."
    >
      <div className="max-w-3xl space-y-5 text-base leading-8 text-ink/72 dark:text-paper/72">
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
    </Section>
  );
}
