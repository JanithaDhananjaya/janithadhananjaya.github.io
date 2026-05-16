"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, ArrowUpRight } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { allProjects } from "@/constants/portfolio";
import { ProjectModal, type Project } from "./ProjectModal";

function toFilename(id: string): string {
  return (
    id
      .replace(/([A-Z])/g, (m) => "-" + m.toLowerCase())
      .replace(/^-/, "")
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .toLowerCase() + ".md"
  );
}

// Determine the featured project (most recent = eZTracker)
const FEATURED_ID = "eZTracker";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const isMobile = useIsMobile();

  // Put featured first
  const sorted = [
    ...allProjects.filter((p) => p.id === FEATURED_ID),
    ...allProjects.filter((p) => p.id !== FEATURED_ID),
  ];

  return (
    <section id="projects" style={{ padding: isMobile ? "64px 0" : "96px 0" }}>
      {/* Eyebrow */}
      <div className="eyebrow">
        <span className="eyebrow-num">03</span>
        <span className="eyebrow-line" />
        <span>work · ls ~/projects</span>
      </div>

      {/* Title */}
      <h2 className="section-title">
        Enterprise platforms,{" "}
        <span className="serif-italic">quietly</span>{" "}
        in production.
      </h2>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: "16px",
          marginTop: "48px",
        }}
      >
        {sorted.map((project, idx) => {
          const isFeatured = project.id === FEATURED_ID;
          const filename = toFilename(project.id);

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.08, ease: "easeOut" }}
              onClick={() => setSelectedProject(project as Project)}
              style={{
                gridColumn: isFeatured && !isMobile ? "span 2" : "span 1",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "28px",
                cursor: "pointer",
                transition:
                  "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              {/* Card header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "var(--mono)",
                    fontSize: "12px",
                    color: "var(--ink-4)",
                  }}
                >
                  <FileText size={13} style={{ color: "var(--ink-4)" }} />
                  <span>~/projects/</span>
                  <span style={{ color: "var(--ink-2)" }}>{filename}</span>
                </div>
                <ArrowUpRight
                  size={16}
                  style={{
                    color: "var(--ink-4)",
                    transition: "color 0.15s ease",
                  }}
                  className="arrow-icon"
                />
              </div>

              {/* Meta */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  marginBottom: "10px",
                  color: "var(--ink-4)",
                }}
              >
                <span style={{ color: "var(--accent)", fontWeight: 500 }}>
                  {project.subtitle}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: isFeatured ? "28px" : "22px",
                  fontWeight: 500,
                  letterSpacing: "-0.025em",
                  color: "var(--ink)",
                  marginBottom: "10px",
                  lineHeight: 1.1,
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "13.5px",
                  color: "var(--ink-3)",
                  lineHeight: 1.65,
                  marginBottom: "18px",
                }}
              >
                {project.description}
              </p>

              {/* Tech tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.tech.slice(0, 6).map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
                {project.tech.length > 6 && (
                  <span
                    style={{
                      padding: "3px 9px",
                      fontFamily: "var(--mono)",
                      fontSize: "11.5px",
                      color: "var(--ink-4)",
                    }}
                  >
                    +{project.tech.length - 6} more
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
