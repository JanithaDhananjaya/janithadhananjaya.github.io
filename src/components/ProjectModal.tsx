"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

type ExecutionItem = { label: string; text: string };

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge?: string;
  execution?: ExecutionItem[];
  keyResult?: string;
  tech: string[];
  link: string;
  isFeatured: boolean;
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function toFilename(id: string) {
  return (
    id
      .replace(/([A-Z])/g, (m) => "-" + m.toLowerCase())
      .replace(/^-/, "")
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .toLowerCase() + ".md"
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 60,
              background: "rgba(28,25,23,0.55)",
              backdropFilter: "blur(6px)",
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              left: "50%",
              top: isMobile ? "4vh" : "7vh",
              transform: "translateX(-50%)",
              width: isMobile ? "calc(100% - 32px)" : "calc(100% - 48px)",
              maxWidth: "720px",
              maxHeight: isMobile ? "92vh" : "86vh",
              zIndex: 61,
              display: "flex",
              flexDirection: "column",
              background: "var(--surface)",
              border: "1px solid var(--border-2)",
              borderRadius: "16px",
              boxShadow: "var(--shadow-md)",
              overflow: "hidden",
            }}
          >
            {/* Terminal header bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 16px",
                borderBottom: "1px solid var(--border)",
                background: "var(--bg-2)",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "var(--border-2)",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "var(--border-2)",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "12px",
                  color: "var(--ink-3)",
                }}
              >
                <span style={{ color: "var(--ink-4)" }}>~/projects/</span>
                {toFilename(project.id)}
              </span>
              <button
                onClick={onClose}
                aria-label="Close"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "24px",
                  height: "24px",
                  border: "1px solid var(--border)",
                  background: "transparent",
                  borderRadius: "6px",
                  cursor: "pointer",
                  color: "var(--ink-3)",
                  transition: "color 0.15s ease, background 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                  (e.currentTarget as HTMLElement).style.background = "var(--surface-2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--ink-3)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <X size={12} />
              </button>
            </div>

            {/* Scrollable body */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: isMobile ? "20px 20px" : "28px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "28px",
              }}
            >
              {/* Meta + title */}
              <div>
                <div style={{ marginBottom: "10px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: "var(--mono)",
                      fontSize: "11.5px",
                      color: "var(--accent)",
                      background: "var(--accent-soft)",
                      padding: "2px 9px",
                      borderRadius: "4px",
                      fontWeight: 500,
                    }}
                  >
                    {project.subtitle}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "28px",
                    fontWeight: 500,
                    letterSpacing: "-0.03em",
                    color: "var(--ink)",
                    lineHeight: 1.1,
                  }}
                >
                  {project.title}
                </h2>
              </div>

              {/* Summary */}
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--ink-2)",
                  lineHeight: 1.7,
                }}
              >
                {project.description}
              </p>

              {/* What I owned */}
              {project.execution && project.execution.length > 0 && (
                <div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "12px",
                      marginBottom: "14px",
                      color: "var(--ink-3)",
                    }}
                  >
                    <span style={{ color: "var(--accent)" }}>//</span> what i owned
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {project.execution.map((item) => (
                      <li
                        key={item.label}
                        style={{
                          display: "flex",
                          gap: "10px",
                          fontSize: "13.5px",
                          color: "var(--ink-3)",
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            color: "var(--accent)",
                            fontWeight: 500,
                            flexShrink: 0,
                          }}
                        >
                          →
                        </span>
                        <span>
                          <span style={{ color: "var(--ink-2)", fontWeight: 500 }}>
                            {item.label}:{" "}
                          </span>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key result */}
              {project.keyResult && (
                <div
                  style={{
                    padding: "16px 20px",
                    borderRadius: "8px",
                    background: "var(--accent-soft)",
                    border: "1px solid var(--accent-soft-2)",
                    fontSize: "13.5px",
                    color: "var(--ink-2)",
                    lineHeight: 1.65,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "11px",
                      color: "var(--accent)",
                      fontWeight: 500,
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    // key result
                  </span>
                  {project.keyResult}
                </div>
              )}

              {/* Stack */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "12px",
                    marginBottom: "12px",
                    color: "var(--ink-3)",
                  }}
                >
                  <span style={{ color: "var(--accent)" }}>//</span> stack
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
