"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

const otherProjects = [
  {
    id: "geo-reach",
    title: "Geo Reach (Ideamart)",
    tech: ["Java", "Spring Boot", "React", "Redis", "RabbitMQ", "Keycloak"],
    summary: "A robust location-based campaign management system. Integrated Keycloak for secure authentication workflows and utilized RabbitMQ alongside Redis for high-throughput message queuing and caching.",
  },
  {
    id: "fieldsmart",
    title: "Fieldsmart",
    tech: ["Python", "Django", "React", "Redux", "PostgreSQL", "SendGrid"],
    summary: "An end-to-end workflow optimization platform designed specifically for contractors. Engineered seamless automated email notifications via SendGrid and established a robust Django REST architecture.",
  },
  {
    id: "onecrm",
    title: "ONECRM (Dialog Axiata)",
    tech: ["Java", "Spring Boot", "Telecom"],
    summary: "Mission-critical telecom billing and CRM platform execution. Spearheaded the resolution of over 100+ critical defects, directly improving aggregate product quality and stability by 15%.",
  },
];

export function OtherProjects() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Other Notable Projects
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
          Additional enterprise systems and high-impact platforms.
        </p>
      </div>

      <div className="flex flex-col gap-4 max-w-4xl">
        {otherProjects.map((project) => {
          const isOpen = openId === project.id;

          return (
            <motion.div
              layout
              key={project.id}
              className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-950 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleOpen(project.id)}
                className="w-full flex items-center justify-between p-6 sm:p-8 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors text-left"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1 pr-4">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xl whitespace-nowrap">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 flex-shrink-0 text-slate-400 dark:text-slate-500">
                  <ExternalLink className="hidden sm:block w-5 h-5 hover:text-accent transition-colors" />
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                      <div className="w-full h-px bg-slate-100 dark:bg-slate-800 mb-6" />
                      <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-3xl">
                        {project.summary}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
