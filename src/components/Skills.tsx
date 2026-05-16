"use client";

import { motion } from "framer-motion";
import { Server, Code2, Cloud, Database } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const categories = [
  {
    name: "Backend",
    Icon: Server,
    items: [
      { name: "Java", primary: true },
      { name: "Spring Boot", primary: true },
      { name: "Node.js", primary: true },
      { name: "Express", primary: true },
      { name: "REST APIs", primary: true },
      { name: "Microservices", primary: true },
      { name: "Hibernate", primary: true },
      { name: "Prisma", primary: true },
      { name: "GraphQL", primary: false },
      { name: "RabbitMQ", primary: false },
      { name: "Sequelize", primary: false },
      { name: "PHP", primary: false },
      { name: "Pyhton", primary: false },
      { name: "Django", primary: false },
      { name: "Next js", primary: false },
    ],
  },
  {
    name: "Frontend",
    Icon: Code2,
    items: [
      { name: "React", primary: true },
      { name: "Next.js", primary: true },
      { name: "TypeScript", primary: true },
      { name: "Redux Toolkit", primary: true },
      { name: "Tailwind CSS", primary: true },
      { name: "Ant Design", primary: true },
      { name: "Storybook", primary: true },
      { name: "Angular", primary: false },
    ],
  },
  {
    name: "Cloud & DevOps",
    Icon: Cloud,
    items: [
      { name: "Azure", primary: true },
      { name: "AWS", primary: true },
      { name: "Docker", primary: true },
      { name: "Kubernetes", primary: true },
      { name: "GitHub Actions", primary: true },
      { name: "SonarQube", primary: true },
      { name: "CI/CD", primary: true },
    ],
  },
  {
    name: "Data & Auth",
    Icon: Database,
    items: [
      { name: "PostgreSQL", primary: true },
      { name: "MySQL", primary: true },
      { name: "MongoDB", primary: true },
      { name: "Redis", primary: true },
      { name: "Keycloak", primary: true },
      { name: "Okta", primary: true },
      { name: "OAuth 2.0", primary: true },
      { name: "JWT", primary: true },
    ],
  },
];

export function Skills() {
  const isMobile = useIsMobile();

  return (
    <section id="skills" style={{ padding: isMobile ? "64px 0" : "96px 0" }}>
      {/* Eyebrow */}
      <div className="eyebrow">
        <span className="eyebrow-num">02</span>
        <span className="eyebrow-line" />
        <span>stack · cat package.json</span>
      </div>

      {/* Title */}
      <h2 className="section-title">
        Tools I reach for{" "}
        <span className="serif-italic">daily</span>.
      </h2>

      <p className="section-sub">
        Filled dots are what I lead with. Hollow dots are what I&apos;m comfortable in.
      </p>

      {/* 2x2 grid of category cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: "16px",
          marginTop: "48px",
        }}
      >
        {categories.map((cat, idx) => {
          const { Icon } = cat;
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "24px",
                transition: "box-shadow 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              {/* Card header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                    borderRadius: "6px",
                    background: "var(--accent-soft)",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={15} />
                </span>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11.5px",
                    color: "var(--ink-3)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 500,
                  }}
                >
                  {cat.name}
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: "11px",
                    color: "var(--ink-4)",
                  }}
                >
                  {cat.items.length} tools
                </span>
              </div>

              {/* Items */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {cat.items.map((item) => (
                  <span
                    key={item.name}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "3px 9px 3px 7px",
                      fontFamily: "var(--mono)",
                      fontSize: "12px",
                      color: item.primary ? "var(--ink-2)" : "var(--ink-4)",
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      borderRadius: "999px",
                    }}
                  >
                    {item.primary ? (
                      /* filled dot */
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "var(--accent)",
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                    ) : (
                      /* hollow dot */
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          border: "1px solid var(--ink-4)",
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                    )}
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
