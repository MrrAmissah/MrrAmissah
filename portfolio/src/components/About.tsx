import { CheckCircle2, Compass, ShieldCheck } from "lucide-react";

const workingStyle = [
  {
    title: "Start from the real workflow",
    description:
      "I map how people actually move through a task before choosing the interface.",
    Icon: Compass,
  },
  {
    title: "Make the logic visible",
    description:
      "Calculations, states, and edge cases should be easy to inspect and trust.",
    Icon: ShieldCheck,
  },
  {
    title: "Ship in useful steps",
    description:
      "I prefer clean, working increments over oversized rewrites that delay feedback.",
    Icon: CheckCircle2,
  },
];

export function About() {
  return (
    <section
      id="about"
      className="mx-auto grid w-full max-w-6xl gap-7 px-5 py-7 sm:px-8 sm:py-10 md:grid-cols-[1fr_0.72fr] md:items-start"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          About
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-balance text-ink sm:text-4xl dark:text-paper">
          I build practical systems with a clear eye for local context.
        </h2>
        <div className="mt-6 space-y-4 text-base leading-8 text-ink/72 dark:text-paper/72">
          <p>
            I am an Information Systems graduate based in Accra, Ghana, with
            hands-on training in networking, software development, and practical
            digital systems.
          </p>
          <p>
            My work sits where infrastructure, software, and real user needs
            meet — from calculators and dashboards to fintech tools and
            network-aware products.
          </p>
          <p>
            I am comfortable across TypeScript, React, Next.js, Node.js,
            PostgreSQL, Prisma, Tailwind, Git, and networking fundamentals, with
            a focus on building tools that are useful, clear, and reliable.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-sm dark:bg-surface md:mt-10">
        <div className="bg-navy px-5 py-4 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan">
            HOW I BUILD
          </p>
          <p className="mt-2 text-sm leading-6 text-white/78">
            Practical, trust-first, and designed around the next decision a
            user needs to make.
          </p>
        </div>
        <div className="divide-y divide-line">
          {workingStyle.map(({ title, description, Icon }) => (
            <div key={title} className="flex gap-3 px-5 py-4">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-ink dark:text-paper">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-ink/64 dark:text-paper/64">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
