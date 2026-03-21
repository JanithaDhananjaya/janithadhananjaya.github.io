"use client";

import { motion } from "framer-motion";
import { Github, Target } from "lucide-react";

const projects = [
  {
    id: "eZPharmacy",
    title: "eZPharmacy",
    subtitle: "Digital Healthcare Ecosystem",
    description: "Refactoring and securing a centralized healthcare portal for the Singapore market.",
    challenge: "Building a high-performance, secure bridge between patients, doctors, and pharmacies while adhering to Singapore’s stringent national security standards.",
    execution: [
      { label: "Architecture", text: "Modernized the frontend using Next.js App Router and Server Components to improve First Contentful Paint (FCP)." },
      { label: "Identity & Security", text: "Integrated Singpass (Singapore’s National Digital Identity) for robust user verification and managed secure sessions via NextAuth." },
      { label: "Data Strategy", text: "Implemented GraphQL with Apollo Client to eliminate over-fetching, ensuring efficient state management across complex prescription workflows." },
    ],
    keyResult: "Delivered a seamless, enterprise-grade UI that supports end-to-end digital prescription fulfillment for a nationwide user base.",
    tech: ["#NextJS", "#GraphQL", "#Singpass", "#NextAuth", "#TailwindCSS"],
    link: "https://github.com",
  },
  {
    id: "eZTracker",
    title: "eZTracker",
    subtitle: "Enterprise Supply Chain Intelligence",
    description: "Architecting a real-time inventory and logistics tracking system.",
    challenge: "Managing complex supply chain workflows—including Receiving, Dispatching, and Decommissioning—across multiple global warehouse locations with 100% accuracy.",
    execution: [
      { label: "Real-time Interaction", text: "Developed a high-speed barcode scanning interface using Next.js for instant item verification at the frontend level." },
      { label: "Access Control", text: "Implemented complex backend workflows and Role-Based Access Control (RBAC) using Okta to ensure data integrity." },
      { label: "Optimization", text: "Streamlined asynchronous operations for critical logistics processes, significantly reducing system idle time during high-volume transfers." },
    ],
    keyResult: "Standardized warehouse operations into a modular, reusable system that minimized manual entry errors and improved overall supply chain visibility.",
    tech: ["#React", "#NextJS", "#Express", "#Okta", "#MongoDB"],
    link: "https://github.com",
  },
  {
    id: "MarketPlace",
    title: "MarketPlace (Ideamart)",
    subtitle: "High-Scale Microservices",
    description: "Optimizing a centralized enterprise solution platform for high-concurrency environments.",
    challenge: "Reducing backend latency and hardening security for a platform handling sensitive employee and campaign management data for large enterprises.",
    execution: [
      { label: "Microservices", text: "Engineered scalable services using Java and Spring Boot, leading to a documented 30% boost in overall system performance." },
      { label: "Performance Tuning", text: "Optimized PostgreSQL queries and implemented Redis caching strategies to slash response times for critical report services." },
      { label: "Security Posture", text: "Remediated vulnerabilities identified in third-party penetration tests, reducing security risks by 50% through robust Spring Boot security protocols." },
    ],
    keyResult: "Successfully launched new enterprise features that drove a 20% increase in user engagement and maintained a 100% security validation record.",
    tech: ["#Java", "#SpringBoot", "#Redis", "#PostgreSQL", "#Docker"],
    link: "https://github.com",
  },
];

export function Projects() {
  return (
    <section className="py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="mb-20">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Featured Projects</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-3 text-lg">In-depth technical breakdowns of enterprise-scale systems.</p>
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            className="flex flex-col gap-10"
          >
            {/* Header section */}
            <div className="space-y-6 border-b border-slate-200 dark:border-slate-800 pb-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white flex flex-col md:flex-row md:items-center gap-2 md:gap-4 leading-tight">
                    {project.title}
                    <span className="hidden md:inline text-xl font-light text-slate-300 dark:text-slate-700">|</span>
                    <span className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400">{project.subtitle}</span>
                  </h3>
                  <p className="mt-4 text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center gap-2 text-sm font-semibold hover:text-white transition-colors z-10 bg-slate-100 dark:bg-slate-900 hover:bg-slate-900 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transform duration-300 w-fit shrink-0"
                >
                  <Github className="w-5 h-5" /> View Source
                </a>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-2">
                {project.tech.map(t => (
                  <span key={t} className="text-sm font-semibold tracking-wider text-accent bg-accent/5 px-3 py-1.5 rounded-md text-nowrap">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Content section */}
            <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
              {/* Challenge Column */}
              <div className="md:col-span-4 space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-2">
                  <Target className="w-4 h-4" /> The Challenge
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium text-lg">
                  {project.challenge}
                </p>
              </div>

              {/* Technical Execution Column */}
              <div className="md:col-span-8 flex flex-col justify-center space-y-8">
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
                  Technical Execution
                </h4>
                <ul className="space-y-6">
                  {project.execution.map(exe => (
                    <li key={exe.label} className="flex gap-5">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                        <span className="font-semibold text-slate-900 dark:text-white">{exe.label}:</span> {exe.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Result Banner */}
            <div className="p-8 md:p-10 mt-6 bg-slate-50/80 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-[2rem] flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-950 shadow-sm flex items-center justify-center flex-shrink-0 border border-slate-100 dark:border-slate-800 text-3xl">
                🚀
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Key Result</h4>
                <p className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                  {project.keyResult}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
