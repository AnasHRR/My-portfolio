import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Profile } from "@/components/sections/Profile";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Profile />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
