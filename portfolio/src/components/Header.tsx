import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-xl dark:border-paper/10 dark:bg-ink/85">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="font-semibold text-ink transition hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-paper dark:text-paper dark:focus:ring-offset-ink"
        >
          Prince Kofi Amissah
        </a>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-ink/70 transition hover:bg-ink/5 hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent dark:text-paper/70 dark:hover:bg-paper/10 dark:hover:text-paper"
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
