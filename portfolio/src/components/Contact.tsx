import { Section } from "./Section";

const contacts = [
  {
    label: "Email",
    href: "mailto:princeamissah0@gmail.com",
    value: "princeamissah0@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/MrrAmissah",
    value: "github.com/MrrAmissah",
  },
  {
    label: "LinkedIn",
    href: "#",
    value: "LinkedIn URL pending",
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
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
            className="rounded-lg border border-ink/10 bg-white p-5 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent dark:border-paper/10 dark:bg-paper/5"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {contact.label}
            </span>
            <span className="mt-3 block break-words text-sm font-semibold text-ink dark:text-paper">
              {contact.value}
            </span>
          </a>
        ))}
        <a
          href="tel:+233554655221"
          aria-label="Call Prince Kofi Amissah"
          className="rounded-lg border border-ink/10 bg-accent p-5 text-ink transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ink dark:border-paper/10"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.16em]">
            Phone
          </span>
          <span className="mt-3 block text-sm font-semibold">
            Call directly
          </span>
        </a>
      </div>
    </Section>
  );
}
