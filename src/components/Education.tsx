"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationDetails = [
  {
    id: 1,
    degree: "B.Sc. (Hons) in Computer Science",
    institution: "University of Westminster - IIT",
    period: "2018 - 2022",
    description: "Focus on Advanced Algorithms and Software Engineering.",
  },
  {
    id: 2,
    degree: "Graduate Diploma in Software Engineering (GDSE)",
    institution: "Institute of Java Software Engineering - Authorized Oracle Partner",
    period: "2016 - 2018",
    description: "",
  },
];

export function Education() {
  return (
    <section className="py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="mb-16 flex items-center gap-4">
        <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
          <GraduationCap className="w-6 h-6 text-slate-800 dark:text-slate-200" />
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Education & Certifications
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {educationDetails.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="flex flex-col gap-3 group"
          >
            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-accent transition-colors">
                {item.degree}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-slate-500 dark:text-slate-400 font-medium">
                <span className="text-sm tracking-wide uppercase">{item.institution}</span>
                <span className="hidden sm:block text-slate-300 dark:text-slate-700">•</span>
                <span className="text-xs tracking-widest uppercase font-bold text-slate-400 dark:text-slate-500">
                  {item.period}
                </span>
              </div>
            </div>

            {item.description && (
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-2 text-lg">
                {item.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
