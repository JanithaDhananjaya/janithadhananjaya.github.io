"use client";

import { useIsMobile } from "@/hooks/useIsMobile";

const asciiLines: Array<Array<{ text: string; accent?: boolean; bold?: boolean }>> = [
  [{ text: "╭──────────────────────────────────────────────╮" }],
  [{ text: "│                                              │" }],
  [
    { text: "│   " },
    { text: "$", accent: true },
    { text: " " },
    { text: "janitha.silva", bold: true },
    { text: " " },
    { text: "--deploy --prod", accent: true },
    { text: "            │" },
  ],
  [{ text: "│                                              │" }],
  [
    { text: "│   " },
    { text: "[✓]", accent: true },
    { text: " portfolio v2.0 → deployed              │" },
  ],
  [
    { text: "│   " },
    { text: "[✓]", accent: true },
    { text: " available may 2026                     │" },
  ],
  [
    { text: "│   " },
    { text: "[✓]", accent: true },
    { text: " open to lead / staff roles             │" },
  ],
  [
    { text: "│   " },
    { text: "[✓]", accent: true },
    { text: " thanks for scrolling                   │" },
  ],
  [{ text: "│                                              │" }],
  [
    { text: "│   " },
    { text: "›", accent: true },
    { text: " build #1247 · sri lanka · 2026          │" },
  ],
  [{ text: "│                                              │" }],
  [{ text: "╰──────────────────────────────────────────────╯" }],
];

export function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer style={{ marginTop: "0" }}>
      {/* ASCII signature block */}
      <div
        style={{
          borderTop: "1px dashed var(--border)",
          padding: isMobile ? "40px var(--page-padding) 20px" : "56px 48px 24px",
          maxWidth: "1180px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            overflowX: "auto",
            maxWidth: "100%",
          }}
        >
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: isMobile ? "9.5px" : "11.5px",
            lineHeight: 1.35,
            color: "var(--ink-3)",
            whiteSpace: "pre",
            textAlign: "left",
            userSelect: "none",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: isMobile ? "16px 20px" : "20px 28px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          {asciiLines.map((parts, i) => (
            <div key={i}>
              {parts.map((part, j) => (
                <span
                  key={j}
                  style={{
                    color: part.accent
                      ? "var(--accent)"
                      : part.bold
                      ? "var(--ink)"
                      : undefined,
                    fontWeight: part.bold ? 600 : undefined,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          ))}
        </div>
        </div>

        <div
          style={{
            fontSize: "12px",
            color: "var(--ink-3)",
            fontFamily: "var(--mono)",
            textAlign: "center",
          }}
        >
          {"// signed off — "}
          <span style={{ color: "var(--ink)" }}>janitha silva</span>
          {" · "}
          <span style={{ color: "var(--accent)" }}>●</span>
          {" crafted in colombo · "}
          <a
            href="#about"
            style={{
              color: "var(--ink-3)",
              textDecoration: "none",
              borderBottom: "1px dashed var(--border-2)",
            }}
          >
            ↑ back to top
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          padding: `20px var(--page-padding)`,
          maxWidth: "1180px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: "11.5px",
            color: "var(--ink-3)",
          }}
        >
          © 2026 Janitha Silva · crafted in Sri Lanka · v2.0
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--mono)",
              fontSize: "11.5px",
              color: "var(--ink-3)",
            }}
          >
            <span className="status-dot" />
            available may 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
