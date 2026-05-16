"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

interface Track {
  name:     string;
  artist:   string;
  url:      string;
  duration: string;
}

interface SpotifyData {
  configured: boolean;
  tracks:     Track[];
}

const DEMO_TRACKS: Track[] = [
  { name: "Blinding Lights",  artist: "The Weeknd",        url: "https://open.spotify.com", duration: "3:20" },
  { name: "Starboy",          artist: "The Weeknd, Daft Punk", url: "https://open.spotify.com", duration: "3:50" },
  { name: "Save Your Tears",  artist: "The Weeknd",        url: "https://open.spotify.com", duration: "3:35" },
];

export function SpotifyWidget() {
  const [data, setData]   = useState<SpotifyData | null>(null);
  const [open, setOpen]   = useState(false);
  const isMobile          = useIsMobile();

  useEffect(() => {
    fetch("/api/spotify")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({ configured: false, tracks: [] }));
  }, []);

  if (data === null) return null; // still loading

  const isDemo = !data.configured || data.tracks.length === 0;
  const tracks = isDemo ? DEMO_TRACKS : data.tracks;
  const top    = tracks[0];

  return (
    <div
      style={{
        position: "fixed",
        bottom: isMobile ? "16px" : "24px",
        left:   isMobile ? "16px" : "24px",
        zIndex: 900,
        fontFamily: "var(--mono)",
      }}
    >
      <AnimatePresence mode="wait">
        {!open ? (
          /* ── Collapsed pill ── */
          <motion.button
            key="pill"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(true)}
            title="Top tracks · last 4 weeks"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 13px",
              background: "var(--surface)",
              border: "1px solid var(--border-2)",
              borderRadius: "999px",
              cursor: "pointer",
              fontSize: "12px",
              color: "var(--ink-3)",
              maxWidth: isMobile ? "220px" : "280px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <span style={{ fontSize: "13px", flexShrink: 0 }}>♫</span>
            <span
              style={{
                color: "var(--ink)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {top.name}
            </span>
            <span style={{ color: "var(--ink-4)", flexShrink: 0 }}>—</span>
            <span
              style={{
                color: "var(--ink-4)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                flexShrink: 1,
              }}
            >
              {top.artist}
            </span>
          </motion.button>
        ) : (
          /* ── Expanded card ── */
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.22 }}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-2)",
              borderRadius: "14px",
              overflow: "hidden",
              width: isMobile ? "240px" : "272px",
              boxShadow: "var(--shadow-md)",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 14px",
                borderBottom: "1px solid var(--border)",
                background: "var(--bg-2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "11.5px", color: "var(--ink-3)" }}>
                <span style={{ color: "#1DB954", fontSize: "13px" }}>♫</span>
                <span>top tracks</span>
                {isDemo ? (
                  <span style={{ color: "var(--ink-4)", background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "4px", padding: "0 5px", fontSize: "10px" }}>demo</span>
                ) : (
                  <span style={{ color: "var(--ink-4)" }}>· last 4 weeks</span>
                )}
              </div>
              <button
                onClick={() => setOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--ink-4)",
                  fontSize: "16px",
                  lineHeight: 1,
                  padding: "0 2px",
                }}
              >
                ×
              </button>
            </div>

            {/* Tracks */}
            {tracks.map((track, i) => (
              <a
                key={i}
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 14px",
                  borderBottom: i < data.tracks.length - 1 ? "1px solid var(--border)" : "none",
                  textDecoration: "none",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--surface-2)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
              >
                <span
                  style={{
                    fontSize: "10px",
                    color: "var(--accent)",
                    fontWeight: 500,
                    width: "16px",
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "12.5px",
                      color: "var(--ink)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {track.name}
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--ink-4)", marginTop: "2px" }}>
                    {track.artist}
                  </div>
                </div>
                <span style={{ fontSize: "11px", color: "var(--ink-4)", flexShrink: 0 }}>
                  {track.duration}
                </span>
              </a>
            ))}

            {/* Footer */}
            <div
              style={{
                padding: "8px 14px",
                borderTop: "1px solid var(--border)",
                fontSize: "10.5px",
                color: "var(--ink-4)",
                background: "var(--bg-2)",
                textAlign: "center",
              }}
            >
              updated on deploy · powered by{" "}
              <span style={{ color: "#1DB954" }}>Spotify</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
