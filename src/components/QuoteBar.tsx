"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Quote { content: string; author: string }

const FALLBACKS: Quote[] = [
  { content: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { content: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { content: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { content: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { content: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { content: "The best way to predict the future is to implement it.", author: "Alan Kay" },
  { content: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { content: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { content: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" },
  { content: "The most powerful tool we have as developers is automation.", author: "Scott Hanselman" },
];

export function QuoteBar() {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    fetch("https://api.quotable.io/random?tags=technology,programming&maxLength=140")
      .then((r) => {
        if (!r.ok) throw new Error("bad response");
        return r.json();
      })
      .then((d) => {
        if (d?.content) setQuote({ content: d.content, author: d.author });
        else throw new Error("empty");
      })
      .catch(() => {
        setQuote(FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)]);
      });
  }, []);

  if (!quote) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      style={{
        borderTop: "1px dashed var(--border)",
        padding: "20px 0",
        fontFamily: "var(--mono)",
        display: "flex",
        gap: "10px",
        alignItems: "flex-start",
      }}
    >
      <span style={{ color: "var(--accent)", flexShrink: 0, fontSize: "13px" }}>//</span>
      <p style={{ margin: 0, fontSize: "12.5px", color: "var(--ink-4)", lineHeight: 1.6 }}>
        <span style={{ color: "var(--ink-3)", fontStyle: "italic" }}>"{quote.content}"</span>
        {"  "}
        <span style={{ color: "var(--ink-4)" }}>— {quote.author}</span>
      </p>
    </motion.div>
  );
}
