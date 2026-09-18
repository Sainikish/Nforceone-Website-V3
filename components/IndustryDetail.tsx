import Link from "next/link";
import PageHero from "./PageHero";
import ImpactBand from "./ImpactBand";
import FadeIn from "./FadeIn";
import AnimatedHeading from "./AnimatedHeading";
import { IndustryItem } from "@/lib/industries-data";
import styles from "./ServiceDetail.module.css";
import ctaStyles from "./IndustryDetail.module.css";

export default function IndustryDetail({ industry }: { industry: IndustryItem }) {
  const ctaLabel = industry.ctaLabel ?? "Talk to an Expert";
  const ctaHref = industry.ctaHref ?? "/contact";

  return (
    <main>
      <PageHero
        eyebrow="Industries"
        title={industry.title}
        subtitle={industry.tagline}
        image="/images/Team6.png"
      />

      <section className={styles.section}>
        <FadeIn>
          <p className={styles.whyBody}>{industry.intro}</p>
        </FadeIn>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <FadeIn>
          <AnimatedHeading as="h2" variant="style1" text="Our Solutions" />
        </FadeIn>
        <div className={styles.grid}>
          {industry.solutions.map((solution, i) => (
            <FadeIn key={solution.title} delay={i * 0.08}>
              <div className={styles.card}>
                <h3>{solution.title}</h3>
                <p>{solution.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <ImpactBand items={industry.impact} />

      <section className={ctaStyles.ctaSection}>
        <FadeIn>
          <Link className={ctaStyles.ctaButton} href={ctaHref}>
            {ctaLabel}
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
