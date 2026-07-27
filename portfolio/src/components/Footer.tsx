import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com/MrrAmissah", label: "GitHub", Icon: Github },
  {
    href: "https://www.linkedin.com/in/prince-kofi-frimpong-amissah/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  { href: "mailto:princeamissah0@gmail.com", label: "Email", Icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-deep">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div>
            <p className="font-display text-3xl font-extrabold text-text">
              Prince <span className="text-accent">K. F. Amissah</span>
            </p>
            <p className="mt-3 text-sm text-dim">
              Full-stack developer and network technician based in Accra, Ghana.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line text-dim transition hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="space-y-2.5">
              {links.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-baseline gap-4 text-sm text-dim transition hover:text-accent"
                  >
                    <span className="font-mono text-xs text-dim/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 text-sm text-dim">
          <p>
            &copy; {new Date().getFullYear()} Prince Kofi Frimpong Amissah. Built
            with Next.js and Tailwind CSS.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 transition hover:text-accent"
          >
            Back to top
            <ArrowUp className="h-4 w-4 transition group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
