"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Enforce scrolling lock while loading
    document.body.style.overflow = "hidden";

    const timeout = setTimeout(() => {
      setIsLoading(false);
      // Bring back scrolling gently
      setTimeout(() => {
        document.body.style.overflow = "unset";
      }, 500); 
    }, 1800);

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-[#020617]"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            {/* Elegant Spinning Loader */}
            <div className="relative flex items-center justify-center w-16 h-16">
              <div className="absolute inset-0 border-4 border-slate-200 dark:border-slate-800 rounded-full" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-transparent border-t-accent rounded-full"
              />
            </div>
            
            <h2 className="text-sm font-bold tracking-[0.3em] text-slate-400 dark:text-slate-500 uppercase">
              Initializing
            </h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
