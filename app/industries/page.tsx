import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import AnimatedHeading from "@/components/AnimatedHeading";
import { industries } from "@/lib/industries-data";
import styles from "../page.module.css";

export const metadata = {
  title: "Industry Expertise | NForceOne",
  description:
    "Tailored IT solutions and quality engineering for Banking, Healthcare, Automotive, Manufacturing, FinTech, Retail, and more.",
};

export default function IndustriesIndex() {
  return (
    <main>
      <PageHero
        eyebrow="Industries"
        title="Industry Expertise"
        subtitle="Over 10 years of experience serving IT needs across industries, understanding sector specifics and building matching IT strategies."
        image="/images/industries-hero.jpg"
      />

      <section className={styles.section}>
        <div className={`${styles.splitLayout} ${styles.splitReverse}`}>
          <FadeIn className={styles.splitImage}>
            <Image
              src="/images/team-meeting.jpg"
              alt="NForceOne team planning an industry-specific engagement"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto", borderRadius: "var(--radius)" }}
            />
          </FadeIn>
          <div className={styles.splitContent}>
            <p className={styles.sectionEyebrow}>Why Industry Expertise Matters</p>
            <AnimatedHeading as="h2" variant="style2" text="Sector-Specific Strategy, Not Generic IT" />
            <p style={{ color: "var(--muted)", fontSize: "1.05rem" }}>
              Compliance requirements, legacy systems, and customer expectations look completely
              different across industries. We build IT strategy around what your sector actually
              needs, not a one-size-fits-all playbook.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.grid}>
          {industries.map((industry, i) => (
            <FadeIn key={industry.slug} delay={i * 0.05}>
              <Link href={`/industries/${industry.slug}`} className={styles.solutionLink}>
                <div className={styles.card}>
                  <h3>{industry.title}</h3>
                  <p>{industry.tagline}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
