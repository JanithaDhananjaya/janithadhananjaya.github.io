"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-24 pb-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        <motion.div variants={itemVariants} className="mb-6 flex items-center">
          <span className="px-5 py-2 rounded-full border border-accent/20 bg-accent/10 text-accent text-sm font-semibold tracking-wide uppercase shadow-sm">
            Senior Full-Stack Engineer
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white">
          Janitha Silva
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl font-medium text-slate-500 dark:text-slate-400 mb-8 max-w-3xl leading-snug">
          Specialized in <span className="text-slate-800 dark:text-slate-200">Next.js Ecosystems</span> & <span className="text-slate-800 dark:text-slate-200">Scalable Microservices</span>
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl leading-relaxed">
          Over 7 years of experience architecting high-performance React applications and robust backend systems. Proven track record in leading technical initiatives for enterprise clients like Zuellig Pharma, focusing on performance optimization, security hardening, and clean architecture.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
          <a href="mailto:janithadhananjaya@gmail.com" className="group flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3.5 rounded-full font-medium hover:scale-105 active:scale-95 transition-all shadow-md hover:shadow-xl">
            <Mail className="w-5 h-5" />
            Let's Talk
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="https://linkedin.com/in/janitha-silva-657b3b142" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-200 dark:border-slate-800 hover:border-accent hover:text-accent font-medium hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all text-slate-700 dark:text-slate-300 hover:shadow-sm">
            <Linkedin className="w-5 h-5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a href="https://github.com/JanithaDhananjaya" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-200 dark:border-slate-800 hover:border-accent hover:text-accent font-medium hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all text-slate-700 dark:text-slate-300 hover:shadow-sm">
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
