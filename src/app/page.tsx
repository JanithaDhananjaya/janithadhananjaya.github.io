import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { OtherProjects } from "@/components/OtherProjects";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Navbar } from "@/components/Navbar";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent/30 selection:text-accent">
      <Navbar />
      {/* Background grain effect for premium feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}></div>
      
      <main className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 relative z-10 pt-16 space-y-24 pb-32">
        <ScrollReveal><div id="about"><Hero /></div></ScrollReveal>
        <ScrollReveal><div id="experience"><Experience /></div></ScrollReveal>
        <ScrollReveal>
          <div id="projects">
            <Projects />
            <OtherProjects />
          </div>
        </ScrollReveal>
        <ScrollReveal><div id="education"><Education /></div></ScrollReveal>
        <ScrollReveal><div id="skills"><Skills /></div></ScrollReveal>
      </main>

      <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-500 relative z-10">
        <p>© {new Date().getFullYear()} Janitha Silva. Crafted with Next.js and Tailwind.</p>
      </footer>
    </div>
  );
}
