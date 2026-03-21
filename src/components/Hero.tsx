"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Software Engineer. <br />
          <span className="text-slate-500 dark:text-slate-400">Problem Solver.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
          I build high-performance, scalable applications with a focus on seamless user experiences and robust backend architecture. Passionate about solving complex technical challenges.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a href="mailto:hello@example.com" className="group flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-accent hover:text-white transition-colors">
            Get in touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-slate-200 dark:border-slate-800 hover:border-accent hover:text-accent transition-colors">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-slate-200 dark:border-slate-800 hover:border-accent hover:text-accent transition-colors">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
