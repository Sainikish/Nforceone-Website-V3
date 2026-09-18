import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import AnimatedHeading from "@/components/AnimatedHeading";
import AnimatedStat from "@/components/AnimatedStat";
import { caseStudies } from "@/lib/case-studies-data";
import styles from "../about/page.module.css";

export const metadata = {
  title: "Case Studies | NForceOne",
  description:
    "Explore how NForceOne helps clients solve complex technical challenges with measurable impact.",
};

export default function CaseStudiesIndex() {
  return (
    <main>
      <PageHero
        eyebrow="Case Studies"
        title="Real Results, Measurable Impact"
        subtitle="Discover how NForceOne partners with enterprises and hyper-growth teams to engineer quality, streamline workflows, and accelerate software delivery."
        image="/images/Team11.png"
      />

      <section className={styles.section}>
        <div className={styles.grid}>
          {caseStudies.map((study, i) => (
            <FadeIn key={study.slug} delay={i * 0.08}>
              <Link href={`/case-studies/${study.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className={styles.card} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ position: "relative", width: "100%", height: "200px", borderRadius: "8px", overflow: "hidden", marginBottom: "1rem" }}>
                    <Image
                      src={study.image}
                      alt={study.client}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: study.imagePosition || "center" }}
                    />
                  </div>
                  <AnimatedHeading as="h3" variant="style1" text={study.client} />
                  <p style={{ margin: "0.75rem 0", color: "var(--muted)", flexGrow: 1 }}>
                    {study.challenge.split(".")[0]}.
                  </p>
                  <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border)" }}>
                    {study.stats.slice(0, 2).map((stat) => (
                      <div key={stat.label}>
                        <div style={{ fontWeight: 800, fontSize: "1.25rem", color: "var(--accent)" }}>
                          <AnimatedStat value={stat.value} />
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
