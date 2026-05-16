"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const navLinks = [
  { num: "01", label: "experience", href: "#experience" },
  { num: "02", label: "stack", href: "#skills" },
  { num: "03", label: "work", href: "#projects" },
  { num: "04", label: "education", href: "#education" },
  { num: "05", label: "contact", href: "#contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        transition: "background 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: `${isMobile ? "12px" : "16px"} var(--page-padding)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        {/* Brand */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "28px",
              height: "28px",
              background: "var(--ink)",
              color: "var(--bg)",
              fontFamily: "var(--mono)",
              fontSize: "11px",
              fontWeight: 700,
              borderRadius: "4px",
              letterSpacing: "-0.02em",
              flexShrink: 0,
            }}
          >
            js
          </span>
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: "13.5px",
              color: "var(--ink)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            janitha.silva
          </span>
          {!isMobile && (
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: "13.5px",
                color: "var(--ink-4)",
                letterSpacing: "-0.02em",
              }}
            >
              / portfolio
            </span>
          )}
        </a>

        {/* Desktop nav links */}
        {!isMobile && (
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.num}
                href={link.href}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "4px",
                  padding: "5px 10px",
                  fontFamily: "var(--mono)",
                  fontSize: "12.5px",
                  color: "var(--ink-3)",
                  textDecoration: "none",
                  borderRadius: "6px",
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
                <span style={{ fontSize: "10.5px", color: "var(--ink-4)", fontWeight: 400 }}>
                  {link.num}
                </span>
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* Right controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
          {/* Command palette trigger */}
          {isMobile ? (
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-cmd"))}
              aria-label="Search"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "32px",
                height: "32px",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                borderRadius: "8px",
                cursor: "pointer",
                color: "var(--ink-3)",
                flexShrink: 0,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <circle cx="5.5" cy="5.5" r="4" stroke="currentColor" strokeWidth="1.3" />
                <line x1="8.7" y1="8.7" x2="12" y2="12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-cmd"))}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                height: "32px",
                padding: "0 8px 0 10px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                color: "var(--ink-3)",
                fontFamily: "var(--mono)",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <circle cx="5.5" cy="5.5" r="4" stroke="currentColor" strokeWidth="1.3" />
                <line x1="8.7" y1="8.7" x2="12" y2="12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              <span>search</span>
              <kbd
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10.5px",
                  padding: "1px 5px",
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "3px",
                  color: "var(--ink-3)",
                }}
              >
                ⌘K
              </kbd>
            </button>
          )}

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "32px",
              height: "32px",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              borderRadius: "8px",
              cursor: "pointer",
              color: "var(--ink-3)",
              transition: "color 0.15s ease, border-color 0.15s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--ink-3)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
            }}
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* Hamburger — mobile only */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "32px",
                height: "32px",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                borderRadius: "8px",
                cursor: "pointer",
                color: "var(--ink-3)",
                flexShrink: 0,
              }}
            >
              {menuOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile dropdown nav */}
      {isMobile && menuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            padding: "8px var(--page-padding) 16px",
            background: "var(--bg)",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {navLinks.map((link) => (
              <a
                key={link.num}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "10px",
                  padding: "11px 12px",
                  fontFamily: "var(--mono)",
                  fontSize: "14px",
                  color: "var(--ink-3)",
                  textDecoration: "none",
                  borderRadius: "8px",
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
                <span style={{ fontSize: "11px", color: "var(--accent)", fontWeight: 500 }}>
                  {link.num}
                </span>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
