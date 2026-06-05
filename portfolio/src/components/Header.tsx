import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-xl dark:bg-background/90">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          aria-label="Prince Kofi Frimpong Amissah, back to top"
          className="group inline-flex items-center rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-paper dark:focus:ring-offset-background"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-sm font-bold text-white shadow-sm shadow-accent/30 transition group-hover:-translate-y-0.5 group-hover:bg-cyan">
            PA
          </span>
        </a>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink/70 transition hover:bg-accent/10 hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent dark:text-paper/70 dark:hover:bg-paper/10 dark:hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
