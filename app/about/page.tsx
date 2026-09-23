import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import AnimatedHeading from "@/components/AnimatedHeading";
import styles from "./page.module.css";

const CASE_STUDIES = [
  { year: "2024", name: "Atomic", body: "AI-driven outreach platform." },
  { year: "2024", name: "Intripid", body: "AI travel planner." },
  { year: "2025", name: "Consolidated Communication", body: "End-to-end QA engagement." },
];

const VALUES = ["User Focused", "Quality Focused", "Agility Focused", "Innovation Focused"];

export const metadata = {
  title: "About | NForceOne",
  description:
    "NForceOne is a team of digital changemakers helping enterprises transform and scale with confidence.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="Building a Better Tomorrow"
        subtitle="We're digital changemakers here to disrupt old ideas, blaze new trails, and help enterprises transform and scale at unparalleled speed."
        image="/images/Team6.png"
        imagePosition="center 65%"
      />

      <section className={styles.section}>
        <FadeIn>
          <AnimatedHeading as="h2" variant="style2" text="Why Us" />
          <p className={styles.centeredBody}>
            We understand that business can be chaotic. That&apos;s where we come in. We forge
            real partnerships with our clients: a team that understands your pain points and your
            goals.
          </p>
        </FadeIn>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <FadeIn>
          <AnimatedHeading as="h2" variant="style1" text="What Sets Us Apart" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <ul className={styles.valueChips}>
            {VALUES.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </FadeIn>
      </section>

      <section className={styles.section}>
        <div className={styles.splitLayout}>
          <FadeIn className={styles.splitImage}>
            <Image
              src="/images/Team10.png"
              alt="NForceOne senior leadership and engineering team"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto", borderRadius: "var(--radius)" }}
            />
          </FadeIn>
          <FadeIn delay={0.1} className={styles.splitContent}>
            <AnimatedHeading as="h2" variant="style3" text="A Team Built on Experience" />
            <p>
              We&apos;re expanding across India and the US, uniting a team of over 100
              professionals with deep expertise in service delivery and technical excellence.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <FadeIn>
          <AnimatedHeading as="h2" variant="style2" text="Recent Work" />
        </FadeIn>
        <div className={styles.grid}>
          {CASE_STUDIES.map((study, i) => (
            <FadeIn key={study.name} delay={i * 0.08}>
              <div className={styles.card}>
                <h3>
                  {study.name} <span style={{ color: "var(--muted)", fontWeight: 400 }}>· {study.year}</span>
                </h3>
                <p>{study.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
