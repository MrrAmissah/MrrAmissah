import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-ink/10 px-5 py-8 text-center text-sm text-ink/60 dark:border-paper/10 dark:text-paper/60">
        &copy; {new Date().getFullYear()} Prince Kofi Amissah. Built with Next.js
        and Tailwind CSS.
      </footer>
    </>
  );
}
