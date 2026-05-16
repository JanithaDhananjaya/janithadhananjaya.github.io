"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

export function CustomCursor() {
  const isMobile = useIsMobile();
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const ringX = useSpring(mouseX, { stiffness: 120, damping: 18, restDelta: 0.1 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 18, restDelta: 0.1 });

  useEffect(() => {
    if (isMobile) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovering(!!el.closest("a, button, [role='button'], [data-cmd-item]"));
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
    };
  }, [isMobile, mouseX, mouseY, visible]);

  if (isMobile) return null;

  return (
    <>
      {/* Dot — exact position, no lag */}
      <motion.div
        animate={{
          scale: clicking ? 0.5 : hovering ? 0 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.12 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "var(--accent)",
          pointerEvents: "none",
          zIndex: 99999,
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Ring — spring lag */}
      <motion.div
        animate={{
          width: hovering ? "42px" : "28px",
          height: hovering ? "42px" : "28px",
          background: hovering ? "var(--accent-soft)" : "transparent",
          borderColor: hovering ? "var(--accent)" : "var(--accent)",
          opacity: visible ? (hovering ? 0.85 : 0.45) : 0,
          scale: clicking ? 0.85 : 1,
        }}
        transition={{ duration: 0.18 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          borderRadius: "50%",
          border: "1.5px solid var(--accent)",
          pointerEvents: "none",
          zIndex: 99998,
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
