"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface CommandItem {
  id: string;
  group: "Navigate" | "Actions" | "Settings" | "Links";
  label: string;
  shortLabel?: string;
  icon: string;
  action: () => void;
}

const HIRE_LINES: Array<{ text: string; color?: string; indent?: boolean; delay: number }> = [
  { text: "[sudo] password for recruiter: ••••••••", color: "var(--ink-3)", delay: 0 },
  { text: "Verifying credentials...", color: "var(--ink-3)", delay: 400 },
  { text: "", delay: 700 },
  { text: "[✓] 7+ years enterprise experience", color: "var(--accent)", indent: true, delay: 900 },
  { text: "[✓] Java · Spring Boot · Next.js · React", color: "var(--accent)", indent: true, delay: 1150 },
  { text: "[✓] Pharma · Telecom · Government cleared", color: "var(--accent)", indent: true, delay: 1400 },
  { text: "[✓] Available May 2026 · Sri Lanka / Remote", color: "var(--accent)", indent: true, delay: 1650 },
  { text: "", delay: 1900 },
  { text: "Permission granted.", color: "var(--ink)", delay: 2000 },
  { text: "Hiring janitha.silva...", color: "var(--ink)", delay: 2300 },
  { text: "", delay: 2550 },
  { text: "→ Redirecting to contact...", color: "var(--accent)", delay: 2700 },
];

function HireSequence({ onDone }: { onDone: () => void }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const done = visibleCount >= HIRE_LINES.length;

  useEffect(() => {
    const timers = HIRE_LINES.map((line, i) =>
      setTimeout(() => setVisibleCount(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (!done) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter") { e.preventDefault(); onDone(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [done, onDone]);

  return (
    <div
      style={{
        padding: "20px 22px 24px",
        fontFamily: "var(--mono)",
        fontSize: "12.5px",
        lineHeight: 1.7,
        background: "var(--bg-2)",
        borderRadius: "0 0 14px 14px",
      }}
    >
      {HIRE_LINES.slice(0, visibleCount).map((line, i) => (
        <div
          key={i}
          style={{
            color: line.color ?? "var(--ink-3)",
            paddingLeft: line.indent ? "16px" : "0",
            minHeight: "1.7em",
          }}
        >
          {line.text}
        </div>
      ))}
      {!done && (
        <span
          style={{
            display: "inline-block",
            width: "7px",
            height: "13px",
            background: "var(--accent)",
            verticalAlign: "middle",
            animation: "blink 1s step-end infinite",
          }}
        />
      )}
      {done && (
        <div
          style={{
            marginTop: "8px",
            color: "var(--ink-4)",
            fontSize: "11.5px",
            animation: "blink 1.2s step-end infinite",
          }}
        >
          press ↵ to connect →
        </div>
      )}
    </div>
  );
}

const WHOAMI_LINES: Array<{ text: string; color?: string; dim?: boolean; delay: number }> = [
  { text: "$ whoami --verbose", color: "var(--ink-3)", delay: 0 },
  { text: "", delay: 300 },
  { text: "name:      Janitha Silva", color: "var(--ink)", delay: 500 },
  { text: "role:      Senior Full-Stack Engineer", color: "var(--ink)", delay: 680 },
  { text: "uptime:    7+ years", color: "var(--ink)", delay: 860 },
  { text: "location:  Battaramulla, LK · remote-ready", color: "var(--ink)", delay: 1040 },
  { text: "stack:     Java · Spring Boot · React · Next.js", color: "var(--ink)", delay: 1220 },
  { text: "status:    ● available May 2026", color: "var(--accent)", delay: 1400 },
  { text: "", delay: 1700 },
  { text: "$ git log --author=\"janitha\" --oneline", color: "var(--ink-3)", delay: 1900 },
  { text: "", delay: 2150 },
  { text: "a1b2c3  feat: shipped eZTracker supply chain platform", color: "var(--ink-2)", delay: 2300 },
  { text: "d4e5f6  feat: decomposed monolith into microservices", color: "var(--ink-2)", delay: 2480 },
  { text: "g7h8i9  fix: 50% security vulnerability reduction", color: "var(--ink-2)", delay: 2660 },
  { text: "j0k1l2  chore: mentoring 4+ engineers @ Embla", color: "var(--ink-2)", delay: 2840 },
  { text: "000001  init: 7 years of enterprise engineering", color: "var(--ink-2)", delay: 3020 },
];

function WhoAmISequence({ onDone }: { onDone: () => void }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const done = visibleCount >= WHOAMI_LINES.length;

  useEffect(() => {
    const timers = WHOAMI_LINES.map((line, i) =>
      setTimeout(() => setVisibleCount(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (!done) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter") { e.preventDefault(); onDone(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [done, onDone]);

  return (
    <div
      style={{
        padding: "20px 22px 24px",
        fontFamily: "var(--mono)",
        fontSize: "12px",
        lineHeight: 1.75,
        background: "var(--bg-2)",
        borderRadius: "0 0 14px 14px",
      }}
    >
      {WHOAMI_LINES.slice(0, visibleCount).map((line, i) => (
        <div
          key={i}
          style={{
            color: line.color ?? "var(--ink-3)",
            minHeight: "1.75em",
          }}
        >
          {line.text}
        </div>
      ))}
      {!done && (
        <span
          style={{
            display: "inline-block",
            width: "7px",
            height: "13px",
            background: "var(--accent)",
            verticalAlign: "middle",
            animation: "blink 1s step-end infinite",
          }}
        />
      )}
      {done && (
        <div
          style={{
            marginTop: "8px",
            color: "var(--ink-4)",
            fontSize: "11.5px",
            animation: "blink 1.2s step-end infinite",
          }}
        >
          press ↵ to close →
        </div>
      )}
    </div>
  );
}

function Toast({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "32px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        background: "var(--ink)",
        color: "var(--bg)",
        fontFamily: "var(--mono)",
        fontSize: "12.5px",
        padding: "8px 18px",
        borderRadius: "999px",
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.22s ease",
        whiteSpace: "nowrap",
      }}
    >
      {message}
    </div>
  );
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const [toastMsg, setToastMsg] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { toggle: toggleTheme } = useTheme();

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 1800);
  }, []);

  const navigateTo = useCallback((hash: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }, []);

  const commands: CommandItem[] = [
    {
      id: "nav-experience",
      group: "Navigate",
      label: "01 — Experience",
      icon: "→",
      action: () => navigateTo("#experience"),
    },
    {
      id: "nav-skills",
      group: "Navigate",
      label: "02 — Stack",
      icon: "→",
      action: () => navigateTo("#skills"),
    },
    {
      id: "nav-projects",
      group: "Navigate",
      label: "03 — Work / Projects",
      icon: "→",
      action: () => navigateTo("#projects"),
    },
    {
      id: "nav-education",
      group: "Navigate",
      label: "04 — Education",
      icon: "→",
      action: () => navigateTo("#education"),
    },
    {
      id: "nav-contact",
      group: "Navigate",
      label: "05 — Contact",
      icon: "→",
      action: () => navigateTo("#contact"),
    },
    {
      id: "act-copy-email",
      group: "Actions",
      label: "Copy email address",
      icon: "@",
      action: () => {
        navigator.clipboard.writeText("janithadhananjaya@gmail.com").catch(() => {});
        showToast("email copied to clipboard");
        setOpen(false);
      },
    },
    {
      id: "act-send-email",
      group: "Actions",
      label: "Send email",
      icon: "✉",
      action: () => {
        window.location.href = "mailto:janithadhananjaya@gmail.com";
        setOpen(false);
      },
    },
    {
      id: "act-copy-phone",
      group: "Actions",
      label: "Copy phone number",
      icon: "☎",
      action: () => {
        navigator.clipboard.writeText("+94 760 305 091").catch(() => {});
        showToast("phone copied to clipboard");
        setOpen(false);
      },
    },
    {
      id: "act-download-cv",
      group: "Actions",
      label: "Download CV",
      icon: "↓",
      action: () => {
        showToast("cv download → coming soon");
        setOpen(false);
      },
    },
    {
      id: "set-theme",
      group: "Settings",
      label: "Toggle theme",
      icon: "◑",
      action: () => {
        toggleTheme();
        setOpen(false);
      },
    },
    {
      id: "link-github",
      group: "Links",
      label: "GitHub",
      icon: "⌥",
      action: () => {
        window.open("https://github.com/JanithaDhananjaya", "_blank", "noopener,noreferrer");
        setOpen(false);
      },
    },
    {
      id: "link-linkedin",
      group: "Links",
      label: "LinkedIn",
      icon: "⌥",
      action: () => {
        window.open("https://www.linkedin.com/in/janitha-silva-657b3b142", "_blank", "noopener,noreferrer");
        setOpen(false);
      },
    },
  ];

  const isEasterEgg = query.trim().toLowerCase() === "sudo hire janitha";
  const isWhoAmI = /^(sudo\s+)?(who\s+is\s+janitha|whoami(\s+janitha)?)$/i.test(query.trim());

  const filtered = query.trim()
    ? commands.filter(
        (c) =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.group.toLowerCase().includes(query.toLowerCase())
      )
    : commands;

  // Reset active index when filtered list changes
  useEffect(() => {
    setActiveIdx(0);
  }, [query]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 30);
      setQuery("");
      setActiveIdx(0);
    }
  }, [open]);

  // Global event listeners
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onCustom = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-cmd", onCustom);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-cmd", onCustom);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[activeIdx]) filtered[activeIdx].action();
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const items = listRef.current.querySelectorAll("[data-cmd-item]");
    const el = items[activeIdx] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIdx]);

  const groups = ["Navigate", "Actions", "Settings", "Links"] as const;

  if (!open) {
    return <Toast message={toastMsg} visible={toastVisible} />;
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1000,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1001,
          display: "flex",
          justifyContent: "center",
          paddingTop: "14vh",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "560px",
            background: "var(--surface)",
            border: "1px solid var(--border-2)",
            borderRadius: "14px",
            boxShadow: "var(--shadow-md), 0 24px 64px rgba(0,0,0,0.35)",
            overflow: "hidden",
            pointerEvents: "all",
            display: "flex",
            flexDirection: "column",
            maxHeight: "68vh",
          }}
          onKeyDown={handleKeyDown}
        >
          {/* Input row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 18px",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: "14px",
                color: "var(--accent)",
                flexShrink: 0,
              }}
            >
              $
            </span>
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="type a command or search..."
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                fontFamily: "var(--mono)",
                fontSize: "14px",
                color: "var(--ink)",
                caretColor: "var(--accent)",
              }}
            />
          </div>

          {/* Commands list / Easter egg */}
          <div
            ref={listRef}
            style={{ overflowY: "auto", padding: "8px 0" }}
          >
            {isEasterEgg ? (
              <HireSequence onDone={() => {
                setOpen(false);
                setTimeout(() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 120);
              }} />
            ) : isWhoAmI ? (
              <WhoAmISequence onDone={() => setOpen(false)} />
            ) : (
              <>
                {groups.map((group) => {
                  const items = filtered.filter((c) => c.group === group);
                  if (items.length === 0) return null;
                  return (
                    <div key={group}>
                      <div
                        style={{
                          padding: "6px 18px 4px",
                          fontFamily: "var(--mono)",
                          fontSize: "10px",
                          color: "var(--ink-4)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                        }}
                      >
                        {group}
                      </div>
                      {items.map((cmd) => {
                        const globalIdx = filtered.indexOf(cmd);
                        const isActive = globalIdx === activeIdx;
                        return (
                          <div
                            key={cmd.id}
                            data-cmd-item
                            onClick={cmd.action}
                            onMouseEnter={() => setActiveIdx(globalIdx)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              padding: "9px 18px",
                              cursor: "pointer",
                              background: isActive ? "var(--accent-soft)" : "transparent",
                              transition: "background 0.1s ease",
                            }}
                          >
                            <span
                              style={{
                                width: "20px",
                                textAlign: "center",
                                fontFamily: "var(--mono)",
                                fontSize: "13px",
                                color: isActive ? "var(--accent)" : "var(--ink-4)",
                                flexShrink: 0,
                              }}
                            >
                              {cmd.icon}
                            </span>
                            <span
                              style={{
                                fontFamily: "var(--mono)",
                                fontSize: "13.5px",
                                color: "var(--ink)",
                                flex: 1,
                              }}
                            >
                              {cmd.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
                {filtered.length === 0 && (
                  <div
                    style={{
                      padding: "24px 18px",
                      textAlign: "center",
                      fontFamily: "var(--mono)",
                      fontSize: "12.5px",
                      color: "var(--ink-4)",
                    }}
                  >
                    no results for &ldquo;{query}&rdquo;
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer */}
          <div
            style={{
              padding: "10px 18px",
              borderTop: "1px solid var(--border)",
              fontFamily: "var(--mono)",
              fontSize: "10.5px",
              color: "var(--ink-4)",
              display: "flex",
              gap: "16px",
            }}
          >
            <span>↑↓ navigate</span>
            <span>· ↵ select</span>
            <span>· esc close</span>
            <span style={{ marginLeft: "auto", color: "var(--ink-4)", fontStyle: "italic" }}>try sudo...</span>
          </div>
        </div>
      </div>

      <Toast message={toastMsg} visible={toastVisible} />
    </>
  );
}
