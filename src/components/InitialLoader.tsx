"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  { time: "00:001", text: "Loading profile",                suffix: "done" },
  { time: "00:142", text: "Mounting 7 enterprise projects", suffix: "done" },
  { time: "00:287", text: "Injecting 7+ years expertise",   suffix: "done" },
  { time: "00:451", text: "Compiling full-stack modules",   suffix: "done" },
  { time: "00:623", text: "Configuring cloud infrastructure",suffix: "done" },
  { time: "00:891", text: "Optimizing bundle",              suffix: "done" },
];

const LINE_DELAY   = 220;  // ms between each line
const LINES_DONE   = BOOT_LINES.length * LINE_DELAY + 100;
const BAR_START    = LINES_DONE;
const BAR_DURATION = 700;
const READY_AT     = BAR_START + BAR_DURATION + 180;
const EXIT_AT      = READY_AT + 600;

export function InitialLoader() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [barWidth, setBarWidth]         = useState(0);
  const [showReady, setShowReady]       = useState(false);
  const [exiting, setExiting]           = useState(false);
  const [done, setDone]                 = useState(false);

  useEffect(() => {
    const EXPIRY_MS = 3 * 60 * 1000;
    const last = sessionStorage.getItem("portfolio-loaded-at");
    if (last && Date.now() - Number(last) < EXPIRY_MS) {
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";

    // Reveal lines one by one
    const lineTimers = BOOT_LINES.map((_, i) =>
      setTimeout(() => setVisibleLines(i + 1), i * LINE_DELAY + 120)
    );

    // Fill progress bar
    const barTimer = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / BAR_DURATION, 1);
        setBarWidth(Math.round(p * 100));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, BAR_START);

    // "Ready" line
    const readyTimer  = setTimeout(() => setShowReady(true), READY_AT);

    // Trigger exit
    const exitTimer   = setTimeout(() => setExiting(true), EXIT_AT);

    // Unmount
    const doneTimer   = setTimeout(() => {
      sessionStorage.setItem("portfolio-loaded-at", String(Date.now()));
      setDone(true);
      document.body.style.overflow = "unset";
    }, EXIT_AT + 700);

    return () => {
      [...lineTimers, barTimer, readyTimer, exitTimer, doneTimer].forEach(clearTimeout);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (done) return null;

  const filledBlocks = Math.round((barWidth / 100) * 32);
  const bar = "█".repeat(filledBlocks) + "░".repeat(32 - filledBlocks);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99990,
            background: "var(--bg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              width: "100%",
              maxWidth: "520px",
              padding: "0 32px",
              fontFamily: "var(--mono)",
            }}
          >
            {/* Header */}
            <div
              style={{
                fontSize: "11px",
                color: "var(--ink-4)",
                marginBottom: "28px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ color: "var(--accent)", fontSize: "13px" }}>$</span>
              <span style={{ color: "var(--ink-3)" }}>./portfolio</span>
              <span style={{ color: "var(--ink-4)" }}>--init --env=production</span>
            </div>

            {/* Boot lines */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "28px" }}>
              {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0",
                    fontSize: "12.5px",
                    color: "var(--ink-3)",
                  }}
                >
                  <span style={{ color: "var(--ink-4)", marginRight: "14px", flexShrink: 0 }}>
                    [{line.time}]
                  </span>
                  <span style={{ flex: 1 }}>{line.text}</span>
                  <span
                    style={{
                      color: "var(--accent)",
                      fontWeight: 500,
                      marginLeft: "12px",
                      flexShrink: 0,
                    }}
                  >
                    {line.suffix}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            {visibleLines >= BOOT_LINES.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                style={{ marginBottom: "20px" }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontFamily: "var(--mono)",
                    color: barWidth === 100 ? "var(--accent)" : "var(--ink-3)",
                    letterSpacing: "0.02em",
                    transition: "color 0.3s ease",
                  }}
                >
                  {bar}{" "}
                  <span style={{ color: "var(--ink)", marginLeft: "8px" }}>
                    {barWidth}%
                  </span>
                </div>
              </motion.div>
            )}

            {/* Ready */}
            {showReady && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontSize: "13px",
                  color: "var(--ink)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: "var(--accent)" }}>✓</span>
                System ready.{" "}
                <span style={{ color: "var(--ink-3)" }}>Launching portfolio...</span>
              </motion.div>
            )}

            {/* Blinking cursor while loading */}
            {!showReady && (
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "15px",
                  background: "var(--accent)",
                  verticalAlign: "middle",
                  animation: "blink 1s step-end infinite",
                }}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
