"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./HeroIllustration.module.css";

export default function HeroIllustration() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg
      className={styles.illustration}
      viewBox="0 0 480 480"
      role="img"
      aria-label="Shield with a checkmark, representing quality assurance"
      initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <circle cx="240" cy="240" r="200" fill="rgba(230, 0, 0, 0.05)" />
      <circle
        cx="240"
        cy="240"
        r="170"
        fill="none"
        stroke="#e4e4e7"
        strokeWidth="1.5"
        strokeDasharray="6 9"
      />

      <path
        d="M240 130 L320 165 C320 250 300 320 240 365 C180 320 160 250 160 165 Z"
        fill="#0a0a0a"
      />
      <polyline
        points="205,255 230,285 285,220"
        fill="none"
        stroke="#ffffff"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="120" cy="175" r="5" fill="#d4d4d8" />
      <circle cx="378" cy="298" r="5" fill="#d4d4d8" />

      <motion.circle
        cx="345"
        cy="150"
        r="14"
        fill="var(--accent)"
        animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.rect
        x="95"
        y="330"
        width="22"
        height="22"
        rx="5"
        fill="none"
        stroke="#a1a1aa"
        strokeWidth="2"
        transform="rotate(12 106 341)"
        animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
    </motion.svg>
  );
}
