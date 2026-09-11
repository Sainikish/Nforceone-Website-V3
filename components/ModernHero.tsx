"use client";

import Link from "next/link";
import { motion, useReducedMotion, Variants } from "framer-motion";
import NF1ThreeCube from "./NF1ThreeCube";
import AnimatedStat from "./AnimatedStat";
import styles from "./ModernHero.module.css";

const STATS = [
  { value: "8+", label: "Testing Services" },
  { value: "24/7", label: "Quality Assurance" },
  { value: "100%", label: "Coverage Focus" },
  { value: "0", label: "Critical Defects" },
];
const headlineContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const headlineLine: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function ModernHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={styles.heroSection}>
      {/* Ambient background lighting rays & blueprint grid */}
      <div className={styles.heroBackgroundLight} aria-hidden="true" />
      <div className={styles.heroGridBackground} aria-hidden="true" />

      <div className={styles.heroGrid}>
        <div className={styles.textCol}>
          {shouldReduceMotion ? (
            <h1 className={styles.headline}>
              <span className={styles.headlinePrimary}>AI & Quality Engineering.</span>
              <span className={styles.headlineAccent}>Built to Scale at Speed.</span>
            </h1>
          ) : (
            <motion.h1
              className={styles.headline}
              initial="hidden"
              animate="visible"
              variants={headlineContainer}
            >
              <motion.span variants={headlineLine} className={styles.headlinePrimary}>
                AI & Quality Engineering.
              </motion.span>
              <motion.span variants={headlineLine} className={styles.headlineAccent}>
                Built to Scale at Speed.
              </motion.span>
            </motion.h1>
          )}

          <motion.p
            className={styles.subhead}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          >
            Empowering global enterprises with deep Telecom expertise, autonomous AI solutions, and high-velocity US & India delivery teams.
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
          >
            <Link href="/contact" className={styles.primaryCta}>
              Talk to an Expert
            </Link>
            <Link href="/services" className={styles.textLink}>
              Explore Solutions
              <span className={styles.textLinkArrow} aria-hidden="true">→</span>
            </Link>
          </motion.div>

          <motion.div
            className={styles.statsStrip}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <div className={styles.statValue}>
                  <AnimatedStat value={stat.value} />
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.illustrationCol}
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
        >
          <NF1ThreeCube />
        </motion.div>
      </div>
    </section>
  );
}
