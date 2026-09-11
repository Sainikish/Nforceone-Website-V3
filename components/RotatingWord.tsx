"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function RotatingWord({
  words,
  interval = 2200,
}: {
  words: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval, shouldReduceMotion]);

  const current = words[shouldReduceMotion ? 0 : index];

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{
            display: "inline-block",
            color: "var(--accent)",
            whiteSpace: "normal",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            maxWidth: "100%",
          }}
        >
          {current}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
