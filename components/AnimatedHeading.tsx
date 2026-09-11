"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";

type Variant = "style1" | "style2" | "style3";
type HeadingTag = "h1" | "h2" | "h3" | "h4";

const MOTION_TAGS: Record<HeadingTag, typeof motion.h1> = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
};

const containerVariants: Record<Variant, Variants> = {
  style1: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
  },
  style2: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.025, delayChildren: 0.1 } },
  },
  style3: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.02 } },
  },
};

const itemVariants: Record<Variant, Variants> = {
  style1: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  },
  style2: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
  },
  style3: {
    hidden: { opacity: 0, x: 50, rotateX: 90 },
    visible: {
      opacity: 1,
      x: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
    },
  },
};

// Word-level split: each word is one animated unit (style1).
function splitWords(text: string) {
  return text.split(" ");
}

// Char-level split: each character is its own animated unit, grouped by word
// so a run of characters never gets a line-break inserted mid-word (style2/style3).
function splitChars(text: string) {
  return text.split(" ").map((word) => word.split(""));
}

export default function AnimatedHeading({
  text,
  as: Tag = "h1",
  className,
  variant,
}: {
  text: string;
  as?: HeadingTag;
  className?: string;
  variant?: Variant;
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = MOTION_TAGS[Tag];

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  // No variant: preserve the original word-by-word, vertical-slide reveal.
  if (!variant) {
    const words = splitWords(text);
    return (
      <Tag className={className}>
        {words.map((word, i) => (
          <span key={i}>
            <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: "0.5em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: "easeOut" }}
              >
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </Tag>
    );
  }

  if (variant === "style1") {
    const words = splitWords(text);
    return (
      <MotionTag
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants.style1}
      >
        {words.map((word, i) => (
          <span key={i}>
            <motion.span style={{ display: "inline-block" }} variants={itemVariants.style1}>
              {word}
            </motion.span>
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </MotionTag>
    );
  }

  // style2 / style3: character-level split.
  const wordGroups = splitChars(text);
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants[variant]}
      style={variant === "style3" ? { perspective: 400 } : undefined}
    >
      {wordGroups.map((chars, wi) => (
        <span key={wi} style={{ display: "inline-block" }}>
          {chars.map((char, ci) => (
            <motion.span key={ci} style={{ display: "inline-block" }} variants={itemVariants[variant]}>
              {char}
            </motion.span>
          ))}
          {wi < wordGroups.length - 1 ? " " : ""}
        </span>
      ))}
    </MotionTag>
  );
}
