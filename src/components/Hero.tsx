"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, Facebook } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

/* ── Syntax token colors per theme ── */
function useCodeColors(theme: string) {
  const isDark = theme === "dark";
  return {
    keyword: isDark ? "#FBBF24" : "#B45309",
    string: isDark ? "#86EFAC" : "#15803D",
    number: "var(--accent)",
    comment: "var(--ink-4)",
    prop: isDark ? "#FCA5A5" : "#7C2D12",
    punct: "var(--ink-3)",
    bool: "var(--accent)",
  };
}

/* ── Count-up hook ── */
function useCountUp(target: number, duration = 1400) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.floor(target * eased));
          if (p < 1) requestAnimationFrame(tick);
          else setCount(target);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return { count, ref };
}

export function Hero() {
  const { theme } = useTheme();
  const c = useCodeColors(theme);
  const isMobile = useIsMobile();
  const [clockTime, setClockTime] = useState("--:--");

  /* ── Colombo clock ── */
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
      const lk = new Date(utcMs + 5.5 * 3600000);
      const h = String(lk.getHours()).padStart(2, "0");
      const m = String(lk.getMinutes()).padStart(2, "0");
      setClockTime(h + ":" + m);
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  /* ── Count-up hooks ── */
  const { count: yearsCount, ref: yearsRef } = useCountUp(7);
  const { count: techCount, ref: techRef } = useCountUp(20);

  return (
    <section
      id="about"
      style={{
        paddingTop: isMobile ? "48px" : "80px",
        paddingBottom: isMobile ? "64px" : "96px",
        position: "relative",
      }}
    >
      {/* Pre-title prompt */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: "var(--mono)",
          fontSize: "13.5px",
          color: "var(--ink-3)",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <span style={{ color: "var(--accent)" }}>$</span>{" "}
        <span>whoami</span>
        <span
          className="cursor-blink"
          style={{
            display: "inline-block",
            width: "8px",
            height: "15px",
            background: "var(--accent)",
            marginLeft: "2px",
            verticalAlign: "middle",
          }}
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          fontFamily: "var(--mono)",
          fontSize: "clamp(56px, 9vw, 132px)",
          fontWeight: 500,
          letterSpacing: "-0.055em",
          lineHeight: 0.95,
          color: "var(--ink)",
          marginBottom: "20px",
        }}
      >
        janitha{" "}
        <span
          style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "var(--ink-2)",
          }}
        >
          silva
        </span>
        <span style={{ color: "var(--accent)" }}>.</span>
      </motion.h1>

      {/* Hero line */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        style={{
          fontSize: "13px",
          color: "var(--ink-3)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "20px",
          letterSpacing: "0.01em",
        }}
      >
        <span>senior full-stack engineer</span>
        <span style={{ color: "var(--border-2)" }}>——</span>
        <span>battaramulla, sri lanka</span>
        <span style={{ color: "var(--border-2)" }}>——</span>
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span className="status-dot" />
          open to lead &amp; staff roles
        </span>
      </motion.p>

      {/* Now strip — live Colombo clock + status */}
      {isMobile ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            overflow: "hidden",
            fontSize: "11.5px",
            fontFamily: "var(--mono)",
            marginBottom: "28px",
          }}
        >
          {[
            { label: "// local time", value: clockTime },
            { label: "build", value: <><span style={{ color: "var(--ink)" }}>#1247</span> <span style={{ color: "var(--accent)" }}>● passing</span></> },
            { label: "currently", value: <>shipping <span style={{ color: "var(--accent)" }}>eZTracker</span></> },
            { label: "last commit", value: "2h ago" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface)",
                padding: "10px 14px",
                display: "flex",
                flexDirection: "column",
                gap: "3px",
              }}
            >
              <span style={{ fontSize: "10px", color: "var(--ink-4)" }}>{item.label}</span>
              <span style={{ color: "var(--ink)" }}>{item.value}</span>
            </div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            padding: "8px 14px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "999px",
            fontSize: "12px",
            color: "var(--ink-3)",
            fontFamily: "var(--mono)",
            marginBottom: "28px",
          }}
        >
          <span>
            <span style={{ color: "var(--ink-4)" }}>// local time</span>{" "}
            <span style={{ color: "var(--ink)" }}>{clockTime}</span>
          </span>
          <span style={{ width: "1px", height: "12px", background: "var(--border-2)", display: "inline-block" }} />
          <span>
            <span style={{ color: "var(--ink-4)" }}>currently</span>{" "}
            <span style={{ color: "var(--ink)" }}>
              shipping <span style={{ color: "var(--accent)" }}>eZTracker</span>
            </span>
          </span>
          <span style={{ width: "1px", height: "12px", background: "var(--border-2)", display: "inline-block" }} />
          <span>
            <span style={{ color: "var(--ink-4)" }}>last commit</span>{" "}
            <span style={{ color: "var(--ink)" }}>2h ago</span>
          </span>
          <span style={{ width: "1px", height: "12px", background: "var(--border-2)", display: "inline-block" }} />
          <span>
            <span style={{ color: "var(--ink-4)" }}>build</span>{" "}
            <span style={{ color: "var(--ink)" }}>#1247</span>{" "}
            <span style={{ color: "var(--accent)" }}>● passing</span>
          </span>
        </motion.div>
      )}

      {/* Role paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        style={{
          fontSize: "14.5px",
          color: "var(--ink-2)",
          lineHeight: 1.7,
          maxWidth: "640px",
          marginBottom: "56px",
        }}
      >
        Building enterprise SaaS platforms with{" "}
        <span className="tag">Java</span>{" "}
        <span className="tag">Spring Boot</span> on the backend and{" "}
        <span className="tag">React</span>{" "}
        <span className="tag">Next.js</span> on the front.{" "}
        <span style={{ color: "var(--accent)", fontWeight: 500 }}>7+ years</span>{" "}
        shipping high-stakes systems for pharma, telecom, and government.
      </motion.p>

      {/* Two-column grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "32px" : "48px",
          alignItems: "start",
        }}
      >
        {/* LEFT: Stats + Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              borderTop: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
              padding: "20px 0",
            }}
          >
            {/* Years stat — count-up */}
            <div ref={yearsRef} style={{ padding: isMobile ? "0 6px" : "0 12px" }}>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: isMobile ? "24px" : "32px",
                  fontWeight: 500,
                  color: "var(--ink)",
                  lineHeight: 1,
                  marginBottom: "6px",
                  letterSpacing: "-0.04em",
                }}
              >
                {yearsCount}
                <span style={{ color: "var(--accent)" }}>+</span>
              </div>
              <div
                style={{
                  fontSize: "11.5px",
                  color: "var(--ink-3)",
                  fontFamily: "var(--mono)",
                }}
              >
                // years shipping
              </div>
            </div>

            {/* Technologies stat — count-up */}
            <div ref={techRef} style={{ padding: isMobile ? "0 6px" : "0 12px" }}>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: isMobile ? "24px" : "32px",
                  fontWeight: 500,
                  color: "var(--ink)",
                  lineHeight: 1,
                  marginBottom: "6px",
                  letterSpacing: "-0.04em",
                }}
              >
                {techCount}
                <span style={{ color: "var(--accent)" }}>+</span>
              </div>
              <div
                style={{
                  fontSize: "11.5px",
                  color: "var(--ink-3)",
                  fontFamily: "var(--mono)",
                }}
              >
                // technologies
              </div>
            </div>

            {/* Location stat — static */}
            <div style={{ padding: isMobile ? "0 6px" : "0 12px" }}>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: isMobile ? "24px" : "32px",
                  fontWeight: 500,
                  color: "var(--ink)",
                  lineHeight: 1,
                  marginBottom: "6px",
                  letterSpacing: "-0.04em",
                }}
              >
                LK
              </div>
              <div
                style={{
                  fontSize: "11.5px",
                  color: "var(--ink-3)",
                  fontFamily: "var(--mono)",
                }}
              >
                // sri lanka · remote
              </div>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "var(--accent)",
                  color: "#FFFCF6",
                  borderRadius: "8px",
                  padding: "11px 18px",
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
                <span style={{ color: "rgba(255,252,246,0.6)" }}>$</span> get in touch
              </a>
              <a
                href="https://drive.google.com/file/d/11D802TUY3xn0ug4C23N3hUQ0RXFWhgFT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "1px solid var(--border-2)",
                  background: "var(--surface)",
                  color: "var(--ink-2)",
                  borderRadius: "8px",
                  padding: "11px 18px",
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
                cv.pdf
              </a>
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "8px" }}>
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/JanithaDhananjaya",
                  icon: <Github size={15} />,
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/janitha-silva-657b3b142",
                  icon: <Linkedin size={15} />,
                },
                {
                  label: "Email",
                  href: "mailto:janithadhananjaya@gmail.com",
                  icon: <Mail size={15} />,
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/janitha__silva/",
                  icon: <Instagram size={15} />,
                },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/janithasilvaa",
                  icon: <Facebook size={15} />,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    border: "1px solid var(--border)",
                    background: "var(--surface)",
                    borderRadius: "8px",
                    color: "var(--ink-3)",
                    textDecoration: "none",
                    transition: "border-color 0.15s ease, color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--ink-3)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Code card */}
        <CodeCard colors={c} />
      </motion.div>
    </section>
  );
}

function CodeCard({
  colors,
}: {
  colors: ReturnType<typeof useCodeColors>;
}) {
  const lines: Array<{ tokens: React.ReactNode }> = [
    {
      tokens: (
        <>
          <span style={{ color: colors.comment, fontStyle: "italic" }}>
            {"// senior full-stack engineer"}
          </span>
        </>
      ),
    },
    {
      tokens: (
        <>
          <span style={{ color: colors.keyword }}>const</span>{" "}
          <span style={{ color: "var(--ink)" }}>me</span>{" "}
          <span style={{ color: colors.punct }}>=</span>{" "}
          <span style={{ color: colors.punct }}>{"{"}</span>
        </>
      ),
    },
    {
      tokens: (
        <>
          {"  "}
          <span style={{ color: colors.prop }}>name</span>
          <span style={{ color: colors.punct }}>:</span>{"      "}
          <span style={{ color: colors.string }}>{'"Janitha Silva"'}</span>
          <span style={{ color: colors.punct }}>,</span>
        </>
      ),
    },
    {
      tokens: (
        <>
          {"  "}
          <span style={{ color: colors.prop }}>role</span>
          <span style={{ color: colors.punct }}>:</span>{"      "}
          <span style={{ color: colors.string }}>{'"Senior Full-Stack Engineer"'}</span>
          <span style={{ color: colors.punct }}>,</span>
        </>
      ),
    },
    {
      tokens: (
        <>
          {"  "}
          <span style={{ color: colors.prop }}>company</span>
          <span style={{ color: colors.punct }}>:</span>{"   "}
          <span style={{ color: colors.string }}>{'"Embla Software"'}</span>
          <span style={{ color: colors.punct }}>,</span>
        </>
      ),
    },
    {
      tokens: (
        <>
          {"  "}
          <span style={{ color: colors.prop }}>location</span>
          <span style={{ color: colors.punct }}>:</span>{"  "}
          <span style={{ color: colors.string }}>{'"Battaramulla, LK"'}</span>
          <span style={{ color: colors.punct }}>,</span>
        </>
      ),
    },
    {
      tokens: (
        <>
          {"  "}
          <span style={{ color: colors.prop }}>years</span>
          <span style={{ color: colors.punct }}>:</span>{"     "}
          <span style={{ color: colors.number }}>7</span>
          <span style={{ color: colors.punct }}>,</span>
        </>
      ),
    },
    {
      tokens: (
        <>
          {"  "}
          <span style={{ color: colors.prop }}>stack</span>
          <span style={{ color: colors.punct }}>:</span>{" "}
          <span style={{ color: colors.punct }}>{"["}</span>
        </>
      ),
    },
    ...["Java", "Spring Boot", "Microservices", "React", "Next.js", "TypeScript", "Azure", "Kubernetes", "PostgreSQL"].map(
      (s) => ({
        tokens: (
          <>
            {"    "}
            <span style={{ color: colors.string }}>{`"${s}"`}</span>
            <span style={{ color: colors.punct }}>,</span>
          </>
        ),
      })
    ),
    {
      tokens: (
        <>
          {"  "}
          <span style={{ color: colors.punct }}>{"],"}</span>
        </>
      ),
    },
    {
      tokens: (
        <>
          {"  "}
          <span style={{ color: colors.prop }}>focus</span>
          <span style={{ color: colors.punct }}>:</span>{"     "}
          <span style={{ color: colors.string }}>{'"enterprise SaaS & microservices"'}</span>
          <span style={{ color: colors.punct }}>,</span>
        </>
      ),
    },
    {
      tokens: (
        <>
          {"  "}
          <span style={{ color: colors.prop }}>available</span>
          <span style={{ color: colors.punct }}>:</span>{" "}
          <span style={{ color: colors.bool }}>true</span>
          <span style={{ color: colors.punct }}>,</span>
        </>
      ),
    },
    {
      tokens: (
        <>
          <span style={{ color: colors.punct }}>{"}"}</span>{" "}
          <span style={{ color: colors.keyword }}>as const</span>
          <span style={{ color: colors.punct }}>;</span>
        </>
      ),
    },
  ];

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        boxShadow: "var(--shadow-md)",
        overflow: "hidden",
        fontSize: "12px",
        fontFamily: "var(--mono)",
      }}
    >
      {/* Header bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 16px",
          borderBottom: "1px solid var(--border)",
          background: "var(--bg-2)",
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
            fontSize: "11.5px",
            color: "var(--ink-3)",
          }}
        >
          <span style={{ color: "var(--ink-4)" }}>~/</span>
          identity.ts
        </span>
        <span
          style={{
            fontSize: "10px",
            color: "var(--accent)",
            background: "var(--accent-soft)",
            padding: "1px 6px",
            borderRadius: "4px",
            fontWeight: 500,
          }}
        >
          ts
        </span>
      </div>

      {/* Code body */}
      <div
        style={{
          padding: "18px 20px",
          background: "var(--code-bg)",
          overflowX: "auto",
        }}
      >
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <tbody>
            {lines.map((line, i) => (
              <tr
                key={i}
                className="code-line-anim"
                style={{ "--line-i": i } as React.CSSProperties}
              >
                <td
                  style={{
                    paddingRight: "16px",
                    textAlign: "right",
                    color: "var(--ink-4)",
                    userSelect: "none",
                    fontSize: "11px",
                    verticalAlign: "top",
                    minWidth: "24px",
                    lineHeight: "1.6",
                  }}
                >
                  {i + 1}
                </td>
                <td style={{ lineHeight: "1.6", whiteSpace: "pre", color: "var(--ink)" }}>
                  {line.tokens}
                </td>
              </tr>
            ))}
            {/* Blinking cursor after last line */}
            <tr>
              <td colSpan={2}>
                <span className="code-cursor-anim" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
