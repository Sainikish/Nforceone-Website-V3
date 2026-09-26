"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, Variants } from "framer-motion";
import styles from "./ModernHero.module.css";

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
      <div className={styles.heroBg}>
        <Image
          src="/images/Team6.png"
          alt="NForceOne engineering team at work"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "70% center" }}
        />
      </div>
      <div className={styles.heroOverlay} aria-hidden="true" />

      <div className={styles.heroContent}>
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
      </div>
    </section>
  );
}
