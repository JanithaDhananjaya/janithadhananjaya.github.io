"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about",      label: "00 — intro" },
  { id: "experience", label: "01 — experience" },
  { id: "skills",     label: "02 — stack" },
  { id: "projects",   label: "03 — work" },
  { id: "education",  label: "04 — education" },
  { id: "contact",    label: "05 — contact" },
];

export function ScrollSpy() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <aside
      style={{
        position: "fixed",
        left: "18px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 40,
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        padding: "8px 0",
      }}
      className="scrollspy-rail"
    >
      {sections.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              color: isActive ? "var(--accent)" : "var(--ink-4)",
              fontFamily: "var(--mono)",
              fontSize: "10.5px",
              padding: "6px 6px",
              borderRadius: "6px",
              transition: "color 0.2s ease",
            }}
          >
            <span
              style={{
                display: "block",
                width: isActive ? "32px" : "16px",
                height: isActive ? "2px" : "1px",
                background: isActive ? "var(--accent)" : "var(--ink-4)",
                transition: "all 0.25s ease",
              }}
            />
            <span
              style={{
                opacity: 0,
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
              className="spy-label"
            >
              {label}
            </span>
          </a>
        );
      })}
    </aside>
  );
}
