"use client";

import { motion } from "framer-motion";
import { Code2, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js", "Redux", "GraphQL"],
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "REST APIs", "Docker", "Kubernetes"],
  },
];

export function Skills() {
  return (
    <section className="py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Technical Proficiency</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Core technologies I use to build robust applications.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-accent">
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map(skill => (
                <span 
                  key={skill} 
                  className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-full font-medium text-slate-700 dark:text-slate-300 hover:border-accent hover:text-accent transition-colors bg-white dark:bg-slate-950 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
