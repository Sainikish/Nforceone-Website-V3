import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import AnimatedHeading from "@/components/AnimatedHeading";
import { services } from "@/lib/services-data";
import styles from "../page.module.css";

const CATEGORIES: { name: string; slugs: string[] }[] = [
  {
    name: "Quality Assurance",
    slugs: [
      "quality-assurance",
      "manual-testing",
      "automation-testing",
      "consulting-testing",
      "outsourcing-testing",
      "ai-assurance",
      "ux-testing",
      "performance-testing",
      "functional-testing",
      "regression-testing",
      "integration-testing",
      "compatibility-testing",
      "pos-testing",
      "payment-testing",
      "iot-testing",
      "mobile-app-testing",
      "mobile-and-device-testing",
      "web-app-testing",
      "cloud-testing",
    ],
  },
  { name: "Software Development", slugs: ["software-development"] },
  { name: "Artificial Intelligence", slugs: ["artificial-intelligence"] },
  { name: "Pega", slugs: ["pega-development", "pega-testing"] },
  { name: "DevOps", slugs: ["devops"] },
  { name: "Data", slugs: ["database-management", "data-analytics", "big-data"] },
  {
    name: "Other Solutions",
    slugs: ["digital-app-development", "intelligent-rpa", "management-services"],
  },
];

export const metadata = {
  title: "Services & Solutions | NForceOne",
  description:
    "Explore NForceOne's end-to-end IT services across Quality Assurance, Software Development, AI, DevOps, Pega, and Data Management.",
};

export default function ServicesIndex() {
  const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));

  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Services & Solutions"
        subtitle="Comprehensive IT services for businesses, from QA and testing to software development, AI, and DevOps."
        image="/images/services-hero.jpg"
      />

      <section className={styles.section}>
        <div className={styles.splitLayout}>
          <FadeIn className={styles.splitImage}>
            <Image
              src="/images/dev-generic.jpg"
              alt="NForceOne engineers pair programming"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto", borderRadius: "var(--radius)" }}
            />
          </FadeIn>
          <div className={styles.splitContent}>
            <p className={styles.sectionEyebrow}>Why NForceOne</p>
            <AnimatedHeading as="h2" variant="style1" text="Built by Engineers, Not Account Managers" />
            <p style={{ color: "var(--muted)", fontSize: "1.05rem" }}>
              Every engagement is staffed with senior engineers who work directly in your
              codebase and pipelines, not routed through layers of account management. That
              means faster ramp-up, direct communication, and delivery that adapts as your
              priorities shift.
            </p>
          </div>
        </div>
      </section>

      {CATEGORIES.map((category, ci) => (
        <section key={category.name} className={styles.section}>
          <FadeIn>
            <AnimatedHeading
              as="h2"
              variant={(["style1", "style2", "style3"] as const)[ci % 3]}
              text={category.name}
            />
          </FadeIn>
          <div className={styles.grid}>
            {category.slugs.map((slug, i) => {
              const service = bySlug[slug];
              if (!service) return null;
              return (
                <FadeIn key={slug} delay={i * 0.04}>
                  <Link href={`/services/${slug}`} className={styles.solutionLink}>
                    <div className={styles.card}>
                      <h3>{service.title}</h3>
                      <p>{service.intro}</p>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
