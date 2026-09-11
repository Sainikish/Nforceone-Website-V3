import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies-data";
import AnimatedStat from "@/components/AnimatedStat";
import AnimatedHeading from "@/components/AnimatedHeading";
import styles from "./page.module.css";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);

  if (!study) notFound();

  const others = caseStudies.filter((cs) => cs.slug !== slug);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/#featured-case-study" className={styles.backLink}>
          ← Back to Home
        </Link>

        <div className={styles.header}>
          <span className={styles.tag}>Featured Case Study</span>
          <AnimatedHeading as="h1" variant="style3" text={study.client} />

          {study.snapshot && (
            <div className={styles.snapshot}>
              {study.snapshot.map((item, i) => (
                <div key={item.label} className={i > 0 ? styles.snapshotItemBordered : styles.snapshotItem}>
                  <div className={styles.snapshotLabel}>{item.label}</div>
                  <div className={styles.snapshotValue}>{item.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.statsBar}>
          {study.stats.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <div className={styles.statValue}>
                <AnimatedStat value={stat.value} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
          {study.disclaimer && <p className={styles.disclaimer}>{study.disclaimer}</p>}
        </div>

        <div className={styles.heroImage}>
          <Image
            src={study.image}
            alt={study.client}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            style={{ objectFit: "cover", objectPosition: study.imagePosition || "center" }}
          />
        </div>

        <div className={styles.steps}>
          <div className={styles.step}>
            <span className={styles.stepNumber}>01</span>
            <div>
              <h3>The Challenge</h3>
              <p>{study.challenge}</p>
            </div>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>02</span>
            <div>
              <h3>The Solution</h3>
              <p>{study.solution}</p>
            </div>
          </div>
        </div>

        {study.exampleQuote && (
          <div className={styles.quoteBlock}>
            <span className={styles.quoteMark}>&ldquo;</span>
            <p className={styles.quoteText}>{study.exampleQuote.text}</p>
            <p className={styles.quoteAttribution}>{study.exampleQuote.attribution}</p>
          </div>
        )}

        {others.length > 0 && (
          <div className={styles.moreSection}>
            <h3>More Case Studies</h3>
            <div className={styles.moreGrid}>
              {others.map((cs) => (
                <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className={styles.moreCard}>
                  <div className={styles.moreThumb}>
                    <Image
                      src={cs.image}
                      alt={cs.client}
                      fill
                      sizes="64px"
                      style={{ objectFit: "cover", objectPosition: cs.imagePosition || "center" }}
                    />
                  </div>
                  <span className={styles.moreClient}>{cs.client}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className={styles.ctaBand}>
          <div>
            <h3>Ready to Build Something Like This?</h3>
            <p>Talk with an NForceOne technical lead to scope your next engagement.</p>
          </div>
          <Link href="/contact" className={styles.ctaButton}>
            Schedule Consultation →
          </Link>
        </div>
      </div>
    </main>
  );
}
