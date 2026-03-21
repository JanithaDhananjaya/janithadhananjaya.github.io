"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-max mx-auto px-6 py-3 rounded-full border transition-all duration-500 bg-white/70 dark:bg-black/70 backdrop-blur-md border-slate-200/50 dark:border-slate-800/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.02)]">
        <nav className="flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#about" className="hover:text-accent transition-colors">
            About
          </a>
          <a href="#metrics" className="hover:text-accent transition-colors">
            Impact
          </a>
          <a href="#projects" className="hover:text-accent transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-accent transition-colors">
            Skills
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
