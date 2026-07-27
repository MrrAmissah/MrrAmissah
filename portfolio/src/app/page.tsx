import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Featured } from "@/components/Featured";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Marquee } from "@/components/Marquee";
import { Preloader } from "@/components/Preloader";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Featured />
        <Projects />
        <About />
        <Journey />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
