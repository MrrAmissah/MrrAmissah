import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { Section } from "./Section";

const contacts = [
  {
    label: "Email",
    value: "princeamissah0@gmail.com",
    href: "mailto:princeamissah0@gmail.com",
    Icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/MrrAmissah",
    href: "https://github.com/MrrAmissah",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/prince-kofi-frimpong-amissah",
    href: "https://www.linkedin.com/in/prince-kofi-frimpong-amissah/",
    Icon: Linkedin,
  },
  {
    label: "Phone",
    value: "+233 55 465 5221",
    href: "tel:+233554655221",
    Icon: Phone,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Have a useful problem to solve? Let's talk."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contacts.map(({ label, value, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="group flex flex-col rounded-lg border border-line bg-surface p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent dark:bg-surface"
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
              <Icon className="h-5 w-5" />
            </span>
            <span className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {label}
            </span>
            <span className="mt-1 block break-words text-sm font-semibold text-ink dark:text-paper">
              {value}
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
