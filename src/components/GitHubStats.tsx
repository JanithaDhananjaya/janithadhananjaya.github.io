"use client";

import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { motion } from "framer-motion";

interface GitHubData {
  public_repos: number;
  followers: number;
  totalStars: number;
  languages: { name: string; count: number; pct: number }[];
}

const LANG_COLORS: Record<string, string> = {
  TypeScript:  "#3178C6",
  JavaScript:  "#F7DF1E",
  Java:        "#B07219",
  Python:      "#3572A5",
  "C#":        "#239120",
  Go:          "#00ADD8",
  Rust:        "#DEA584",
  Kotlin:      "#A97BFF",
  Swift:       "#F05138",
  CSS:         "#563D7C",
  HTML:        "#E34C26",
  PHP:         "#4F5D95",
  Dart:        "#00B4AB",
  Shell:       "#89E051",
  Vue:         "#41B883",
  SCSS:        "#C6538C",
};

const USERNAME = "JanithaDhananjaya";

export function GitHubStats() {
  const [data, setData]     = useState<GitHubData | null>(null);
  const [error, setError]   = useState(false);
  const isMobile            = useIsMobile();

  useEffect(() => {
    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`, { next: { revalidate: 3600 } } as RequestInit),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=pushed`, { next: { revalidate: 3600 } } as RequestInit),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error("API error");

        const user  = await userRes.json();
        const repos = await reposRes.json();

        const raw: Record<string, number> = {};
        let totalStars = 0;
        repos.forEach((r: { language?: string; stargazers_count?: number }) => {
          if (r.language) raw[r.language] = (raw[r.language] ?? 0) + 1;
          totalStars += r.stargazers_count ?? 0;
        });

        const total    = Object.values(raw).reduce((a, b) => a + b, 0);
        const languages = Object.entries(raw)
          .sort(([, a], [, b]) => b - a)
          .slice(0, isMobile ? 4 : 6)
          .map(([name, count]) => ({ name, count, pct: Math.round((count / total) * 100) }));

        setData({ public_repos: user.public_repos, followers: user.followers, totalStars, languages });
      } catch {
        setError(true);
      }
    }
    load();
  }, [isMobile]);

  if (error) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1,  y: 0  }}
      transition={{ duration: 0.4, delay: 0.1 }}
      style={{ padding: "24px 0 8px", fontFamily: "var(--mono)" }}
    >
      {/* Prompt */}
      <div style={{ fontSize: "11.5px", color: "var(--ink-4)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ color: "var(--accent)" }}>$</span>
        <span>gh api /users/{USERNAME}</span>
        <span style={{ color: "var(--border-2)", margin: "0 4px" }}>·</span>
        <span style={{ color: "#16A34A" }}>live</span>
      </div>

      {!data ? (
        /* Skeleton */
        <div style={{ display: "flex", gap: "8px" }}>
          {[80, 64, 72].map((w) => (
            <div key={w} style={{ height: "26px", width: `${w}px`, background: "var(--surface)", borderRadius: "999px", animation: "pulse 1.6s ease-in-out infinite" }} />
          ))}
        </div>
      ) : (
        <>
          {/* Stat pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "18px" }}>
            {[
              { label: "repos",     value: data.public_repos },
              { label: "stars",     value: data.totalStars   },
              { label: "followers", value: data.followers    },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  padding: "4px 12px",
                  background: "var(--surface)", border: "1px solid var(--border)",
                  borderRadius: "999px", fontSize: "12px", color: "var(--ink-3)",
                }}
              >
                <span style={{ color: "var(--ink)", fontWeight: 500 }}>{value}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* Language bar */}
          <div style={{ display: "flex", height: "3px", borderRadius: "999px", overflow: "hidden", marginBottom: "10px", gap: "2px" }}>
            {data.languages.map(({ name, pct }) => (
              <motion.div
                key={name}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  flex: pct, background: LANG_COLORS[name] ?? "var(--border-2)",
                  borderRadius: "999px", transformOrigin: "left",
                }}
              />
            ))}
          </div>

          {/* Language legend */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px" }}>
            {data.languages.map(({ name, pct }) => (
              <div key={name} style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11.5px", color: "var(--ink-3)" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: LANG_COLORS[name] ?? "var(--border-2)", flexShrink: 0 }} />
                <span>{name}</span>
                <span style={{ color: "var(--ink-4)" }}>{pct}%</span>
              </div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}
