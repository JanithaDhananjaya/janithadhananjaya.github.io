"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, MapPin, Instagram, Facebook } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { availabilityLong } from "@/lib/availability";

export function Contact() {
  const isMobile = useIsMobile();

  return (
    <section id="contact" style={{ padding: isMobile ? "64px 0" : "96px 0" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Eyebrow */}
        <div className="eyebrow">
          <span className="eyebrow-num">05</span>
          <span className="eyebrow-line" />
          <span>contact</span>
        </div>

        {/* Availability pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "5px 12px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "999px",
            fontSize: "12px",
            color: "var(--ink-3)",
            marginBottom: "28px",
          }}
        >
          <span className="status-dot" />
          available for lead &amp; staff roles · {availabilityLong()} onwards
        </div>

        {/* Big title */}
        <h2
          style={{
            fontFamily: "var(--mono)",
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 500,
            letterSpacing: "-0.045em",
            lineHeight: 1.0,
            color: "var(--ink)",
            marginBottom: "20px",
          }}
        >
          Let&apos;s build
          <br />
          something{" "}
          <span
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--accent)",
            }}
          >
            that lasts
          </span>
          .
        </h2>

        {/* Sub */}
        <p className="section-sub" style={{ marginBottom: "48px" }}>
          Currently considering lead and staff engineering positions, technical leadership roles,
          and a small number of consulting engagements.
        </p>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
          <a
            href="mailto:janithadhananjaya@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--accent)",
              color: "#FFFCF6",
              borderRadius: "8px",
              padding: "12px 20px",
              fontFamily: "var(--mono)",
              fontSize: "13.5px",
              textDecoration: "none",
              fontWeight: 500,
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
              boxShadow: "var(--shadow-sm)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
            }}
          >
            <span style={{ color: "rgba(255,252,246,0.6)" }}>$</span>{" "}
            mail janithadhananjaya@gmail.com
          </a>
          <a
            href="tel:+94760305091"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid var(--border-2)",
              background: "var(--surface)",
              color: "var(--ink-2)",
              borderRadius: "8px",
              padding: "12px 20px",
              fontFamily: "var(--mono)",
              fontSize: "13.5px",
              textDecoration: "none",
              transition: "border-color 0.15s ease, color 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--ink-3)";
              (e.currentTarget as HTMLElement).style.color = "var(--ink)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-2)";
              (e.currentTarget as HTMLElement).style.color = "var(--ink-2)";
            }}
          >
            +94 760 305 091
          </a>
        </div>

        {/* Channels row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              label: "github",
              href: "https://github.com/JanithaDhananjaya",
              icon: <Github size={13} />,
            },
            {
              label: "linkedin",
              href: "https://linkedin.com/in/janitha-silva-657b3b142",
              icon: <Linkedin size={13} />,
            },
            {
              label: "instagram",
              href: "https://www.instagram.com/janitha__silva/",
              icon: <Instagram size={13} />,
            },
            {
              label: "facebook",
              href: "https://www.facebook.com/janithasilvaa",
              icon: <Facebook size={13} />,
            },
            {
              label: "location",
              href: undefined,
              icon: <MapPin size={13} />,
              value: "Battaramulla, LK",
            },
          ].map((ch) => (
            <div key={ch.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              {ch.href ? (
                <a
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "var(--mono)",
                    fontSize: "12.5px",
                    color: "var(--ink-3)",
                    textDecoration: "none",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--ink-3)";
                  }}
                >
                  {ch.icon}
                  {ch.label}{" "}
                  <span style={{ color: "var(--accent)" }}>→</span>
                </a>
              ) : (
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "var(--mono)",
                    fontSize: "12.5px",
                    color: "var(--ink-3)",
                  }}
                >
                  {ch.icon}
                  {ch.value ?? ch.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
