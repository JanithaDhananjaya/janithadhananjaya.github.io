import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";
import { ScrollSpy } from "@/components/ScrollSpy";

export default function Home() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <Navbar />
      <ScrollSpy />

      <main
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
        }}
      >
        <Hero />

        <div style={{ borderTop: "1px dashed var(--border)" }} id="experience">
          <Experience />
        </div>

        <div style={{ borderTop: "1px dashed var(--border)" }} id="skills">
          <Skills />
        </div>

        <div style={{ borderTop: "1px dashed var(--border)" }} id="projects">
          <Projects />
        </div>

        <div style={{ borderTop: "1px dashed var(--border)" }} id="education">
          <Education />
        </div>

        <div style={{ borderTop: "1px dashed var(--border)" }} id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
      <CommandPalette />
    </div>
  );
}
