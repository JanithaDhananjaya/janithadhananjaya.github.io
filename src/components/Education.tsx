"use client";

import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const educationCards = [
  {
    id: 1,
    icon: GraduationCap,
    degree: "B.Sc. (Hons) Computer",
    degreeAccent: "Science",
    institution: "IIT / University of Westminster, UK",
    period: "2018 – 2022",
    commentLabel: "// undergraduate degree",
    badge: "verified",
  },
  {
    id: 2,
    icon: ShieldCheck,
    degree: "Graduate Diploma in",
    degreeAccent: "Software Engineering",
    institution: "Institute of Java SE — Authorized Oracle Partner",
    period: "2016 – 2018",
    commentLabel: "// GDSE",
    badge: "java specialization",
  },
];

export function Education() {
  const isMobile = useIsMobile();

  return (
    <section id="education" style={{ padding: isMobile ? "64px 0" : "96px 0" }}>
      {/* Eyebrow */}
      <div className="eyebrow">
        <span className="eyebrow-num">04</span>
        <span className="eyebrow-line" />
        <span>education · ~/.credentials</span>
      </div>

      {/* Title */}
      <h2 className="section-title">
        Foundations &amp;{" "}
        <span className="serif-italic">credentials</span>.
      </h2>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: "16px",
          marginTop: "48px",
        }}
      >
        {educationCards.map((card, idx) => {
          const { icon: Icon } = card;
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: "easeOut" }}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "0",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Header row: icon + year */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "var(--accent-soft)",
                    color: "var(--accent)",
                  }}
                >
                  <Icon size={18} />
                </span>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "12px",
                    color: "var(--ink-4)",
                  }}
                >
                  {card.period}
                </span>
              </div>

              {/* Degree */}
              <h3
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "var(--ink)",
                  lineHeight: 1.25,
                  marginBottom: "8px",
                  letterSpacing: "-0.02em",
                }}
              >
                {card.degree}{" "}
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "var(--ink-2)",
                  }}
                >
                  {card.degreeAccent}
                </span>
              </h3>

              {/* Institution */}
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--ink-3)",
                  lineHeight: 1.5,
                  flex: 1,
                  marginBottom: "24px",
                }}
              >
                {card.institution}
              </p>

              {/* Footer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px dashed var(--border-2)",
                  paddingTop: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11.5px",
                    color: "var(--ink-4)",
                  }}
                >
                  {card.commentLabel}
                </span>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11.5px",
                    color: "var(--accent)",
                    fontWeight: 500,
                  }}
                >
                  {card.badge}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
