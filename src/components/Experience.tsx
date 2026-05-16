"use client";

import { motion } from "framer-motion";
import { experiences } from "@/constants/portfolio";
import { useIsMobile } from "@/hooks/useIsMobile";

export function Experience() {
  const isMobile = useIsMobile();

  return (
    <section id="experience" style={{ padding: isMobile ? "64px 0" : "96px 0" }}>
      {/* Eyebrow */}
      <div className="eyebrow">
        <span className="eyebrow-num">01</span>
        <span className="eyebrow-line" />
        <span>experience · git log --oneline</span>
      </div>

      {/* Title */}
      <h2 className="section-title">
        Seven years{" "}
        <span className="serif-italic">shipping</span>{" "}
        production systems for pharma, telecom &amp; government.
      </h2>

      <p className="section-sub">
        Architecting enterprise SaaS, decomposing monoliths into microservices, mentoring engineers.
      </p>

      {/* Timeline */}
      <div
        style={{
          marginTop: "56px",
          borderTop: "1px solid var(--border)",
        }}
      >
        {experiences.map((exp, idx) => {
          const isCurrent = exp.period.toLowerCase().includes("present");
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "200px 1fr",
                gap: isMobile ? "0" : "32px",
                padding: isMobile ? "24px 0" : "32px 0",
                borderBottom: "1px solid var(--border)",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--surface-2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {/* LEFT: period */}
              <div
                style={{
                  fontSize: "12.5px",
                  color: "var(--ink-3)",
                  lineHeight: 1.5,
                  paddingTop: isMobile ? "0" : "4px",
                  marginBottom: isMobile ? "12px" : "0",
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  flexWrap: "wrap",
                  alignItems: isMobile ? "center" : "flex-start",
                  gap: isMobile ? "8px" : "8px",
                }}
              >
                <span>{exp.period}</span>
                {isCurrent && (
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                      fontSize: "11px",
                      fontWeight: 500,
                      padding: "2px 8px",
                      borderRadius: "4px",
                      width: "fit-content",
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                        display: "inline-block",
                      }}
                    />
                    current
                  </span>
                )}
                <span style={{ fontSize: "11.5px", color: "var(--ink-4)" }}>
                  {exp.location}
                </span>
              </div>

              {/* RIGHT: body */}
              <div
                style={{
                  paddingLeft: isMobile ? "0" : "24px",
                  borderLeft: isMobile ? "none" : "1px solid var(--border)",
                }}
              >
                {/* Role */}
                <h3
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: isMobile ? "18px" : "22px",
                    fontWeight: 500,
                    letterSpacing: "-0.018em",
                    color: "var(--ink)",
                    marginBottom: "4px",
                    lineHeight: 1.2,
                  }}
                >
                  {exp.role}
                </h3>

                {/* Company */}
                <p
                  style={{
                    fontSize: "13.5px",
                    marginBottom: "18px",
                  }}
                >
                  <span style={{ color: "var(--ink-2)" }}>{exp.company}</span>
                  <span style={{ color: "var(--ink-4)" }}> · {exp.location}</span>
                </p>

                {/* Responsibilities */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    marginBottom: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {exp.responsibilities.map((r) => (
                    <li
                      key={r.label}
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
                          marginTop: "1px",
                        }}
                      >
                        →
                      </span>
                      <span>
                        <span style={{ color: "var(--ink-2)", fontWeight: 500 }}>
                          {r.label}:{" "}
                        </span>
                        {r.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {exp.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
