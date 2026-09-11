"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "@/lib/case-studies-data";
import AnimatedStat from "./AnimatedStat";
import AnimatedHeading from "./AnimatedHeading";
import FadeIn from "./FadeIn";
import styles from "./CaseStudySection.module.css";

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function CaseStudySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = caseStudies[activeIndex];

  return (
    <section id="featured-case-study" className={styles.section}>
      <FadeIn>
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>Case Studies</p>
          <AnimatedHeading as="h2" variant="style2" text="Real Results, Measurable Impact" />
        </div>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className={styles.tabs} role="tablist" aria-label="Case studies">
          {caseStudies.map((cs, idx) => (
            <button
              key={cs.slug}
              role="tab"
              aria-selected={idx === activeIndex}
              onClick={() => setActiveIndex(idx)}
              className={idx === activeIndex ? styles.tabActive : styles.tab}
            >
              {cs.client.split(":")[0]}
            </button>
          ))}
        </div>
      </FadeIn>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.slug}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={styles.content}
        >
          <div className={styles.statsCol}>
            <p className={styles.narrative}>
              {active.challenge.split(".")[0]}. {active.solution}
            </p>

            <div className={styles.statChipRow}>
              {active.stats.map((stat) => (
                <div key={stat.label} className={styles.statChip}>
                  <span className={styles.statChipValue}>
                    <AnimatedStat value={stat.value} duration={700} />
                  </span>
                  <span className={styles.statChipLabel}>{stat.label}</span>
                </div>
              ))}
            </div>

            {active.disclaimer && <p className={styles.disclaimer}>{active.disclaimer}</p>}

            <Link href={`/case-studies/${active.slug}`} className={styles.exploreLink}>
              <span>Read Full Case Study</span>
              <ArrowRightIcon />
            </Link>
          </div>

          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <Image
                src={active.image}
                alt={active.client}
                fill
                sizes="(max-width: 860px) 100vw, 45vw"
                style={{ objectFit: "cover", objectPosition: active.imagePosition || "center" }}
              />
            </div>
            <div className={styles.imageTag}>{active.snapshot[0]?.value}</div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
