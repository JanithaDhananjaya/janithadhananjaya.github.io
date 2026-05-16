"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function ScrollProgress() {
  const raw = useMotionValue(0);
  const scaleX = useSpring(raw, { stiffness: 180, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      raw.set(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [raw]);

  return (
    <>
      {/* Track */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          zIndex: 999,
          background: "var(--border-2)",
        }}
      />
      {/* Fill */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          zIndex: 1000,
          scaleX,
          transformOrigin: "0%",
          background: "var(--accent)",
          boxShadow: "0 0 6px var(--accent), 0 0 16px var(--accent-soft)",
        }}
      />
    </>
  );
}
