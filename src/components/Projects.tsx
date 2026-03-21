"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useState, useRef, MouseEvent } from "react";

const projects = [
  {
    id: "eZPharmacy",
    title: "eZPharmacy",
    description: "A comprehensive pharmacy management system. Solved complex architecture scaling issues and effectively achieved a 30% reduction in database query latency.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    link: "https://github.com",
    metrics: ["30% Latency Reduction", "High Availability"],
  },
  {
    id: "eZTracker",
    title: "eZTracker",
    description: "An enterprise fleet tracking mechanism. Built a real-time data ingestion pipeline handling 10k+ GPS points per minute. Implemented strict role-based access control.",
    tech: ["React", "Express", "MongoDB", "WebSockets"],
    link: "https://github.com",
    metrics: ["50% Security Hardening", "Real-time Tracking"],
  },
  {
    id: "MarketPlace",
    title: "MarketPlace Hub",
    description: "A multi-tenant e-commerce marketplace enabling transactions between vendors and customers. Implemented a robust microservices architecture handling massive query load.",
    tech: ["Vue.js", "Go", "Docker", "Kubernetes"],
    link: "https://github.com",
    metrics: ["Microservices", "Scalable Payments"],
  },
];

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // For the spotlight effect
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Case Studies</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Highlighting technical challenges and engineering solutions.</p>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 overflow-hidden transition-colors"
          >
            {/* Spotlight Gradient */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.06),transparent_40%)]`}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
              {/* Project Content */}
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                </h3>
  
                <ul className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                  {project.metrics.map(m => (
                    <li key={m} className="bg-accent/10 px-3 py-1 rounded-full">{m}</li>
                  ))}
                </ul>
  
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg pb-4">
                  {project.description}
                </p>
  
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Link/Image abstraction */}
              <div className="lg:col-span-4 h-full min-h-[160px] relative rounded-2xl overflow-hidden bg-white/40 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-500">
                 <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors z-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform duration-300">
                   <Github className="w-4 h-4" /> Source
                 </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
