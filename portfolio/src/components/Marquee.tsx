const items = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Networking / CCNA",
  "Supabase",
  "Vercel",
  "Git",
  "Cybersecurity",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-bg-deep py-5">
      {/* Fade the edges so items enter and leave rather than snapping. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg-deep to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg-deep to-transparent"
      />

      <div className="flex w-max animate-marquee items-center">
        {/* Rendered twice so the -50% translate loops seamlessly. */}
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
          >
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center whitespace-nowrap px-6 font-display text-xl font-semibold text-dim sm:text-2xl"
              >
                {item}
                <span
                  aria-hidden
                  className="ml-12 block h-1.5 w-1.5 rounded-full bg-accent"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
