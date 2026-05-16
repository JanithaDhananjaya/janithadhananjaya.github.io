import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#17120E",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 72px",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,244,220,0.04) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-80px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Prompt line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "36px",
            fontSize: "15px",
            color: "#6B6353",
          }}
        >
          <span style={{ color: "#F97316", fontSize: "17px" }}>$</span>
          <span style={{ color: "#9A917A" }}>./portfolio</span>
          <span>--init --env=production</span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 600,
            color: "#FAF6EB",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginBottom: "18px",
          }}
        >
          Janitha Silva
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: "24px",
            color: "#9A917A",
            letterSpacing: "-0.01em",
            marginBottom: "44px",
          }}
        >
          Senior Full-Stack Engineer
        </div>

        {/* Divider */}
        <div
          style={{
            width: "48px",
            height: "2px",
            background: "#F97316",
            marginBottom: "44px",
          }}
        />

        {/* Tags row */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["7+ yrs enterprise SaaS", "React · Next.js · Node", "AWS · GCP", "Pharma · Telecom · Gov"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 14px",
                  background: "rgba(249,115,22,0.10)",
                  border: "1px solid rgba(249,115,22,0.22)",
                  borderRadius: "999px",
                  fontSize: "15px",
                  color: "#D6CFB9",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>

        {/* Bottom status */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "72px",
            right: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              color: "#6B6353",
            }}
          >
            <span style={{ color: "#F97316" }}>✓</span>
            <span>open to lead &amp; staff roles · May 2026</span>
          </div>
          <div style={{ fontSize: "14px", color: "#6B6353" }}>
            janithadhananjaya.github.io
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
