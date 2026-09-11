import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import AnimatedHeading from "@/components/AnimatedHeading";
import Link from "next/link";
import styles from "../about/page.module.css";

const OPEN_ROLES = [
  {
    title: "Senior QA Automation Engineer",
    department: "Quality Engineering",
    location: "Hyderabad, India / Hybrid",
    type: "Full-time",
    summary: "Lead enterprise automation frameworks using Playwright, Selenium, and CI/CD pipelines.",
  },
  {
    title: "Lead Performance & Stress Engineer",
    department: "Cloud & Reliability",
    location: "Plano, TX / Remote",
    type: "Full-time",
    summary: "Architect high-load stress testing architectures and P99 latency optimization.",
  },
  {
    title: "Associate Software Engineer",
    department: "Full-Stack Development",
    location: "Hyderabad, India",
    type: "Full-time",
    summary: "Develop scalable cloud applications, APIs, and modern front-end interfaces.",
  },
  {
    title: "Senior Pega Lead System Architect",
    department: "Enterprise Solutions",
    location: "Plano, TX / Hybrid",
    type: "Full-time",
    summary: "Deliver complex enterprise workflows and BPM architecture on Pega Infinity.",
  },
  {
    title: "DevOps & Cloud Automation Specialist",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    summary: "Manage Kubernetes clusters, Terraform IaC, and zero-downtime release pipelines.",
  },
  {
    title: "Quality Engineering Delivery Manager",
    department: "QA Operations",
    location: "Hyderabad, India",
    type: "Full-time",
    summary: "Oversee client engagements, test strategy execution, and senior engineering squads.",
  },
];

export const metadata = {
  title: "Careers | NForceOne",
  description: "Join NForceOne and build your career in Quality Engineering, Cloud, AI, and enterprise software.",
};

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title="Start Your Journey with NForceOne"
        subtitle="Grow your career as we scale. Join a high-caliber team transforming software quality and digital resilience for global enterprises."
        image="/images/careers-team.jpg"
      />

      <section className={styles.section}>
        <div className={styles.splitLayout}>
          <FadeIn className={styles.splitImage}>
            <Image
              src="/images/careers-culture.jpg"
              alt="NForceOne team culture and collaboration"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto", borderRadius: "var(--radius)" }}
            />
          </FadeIn>
          <FadeIn delay={0.1} className={styles.splitContent}>
            <AnimatedHeading as="h2" variant="style1" text="People First, Quality Driven" />
            <p>
              We put our people first. We champion continuous learning, engineering ownership,
              work-life harmony, and accelerated career paths across our India and US technology hubs.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <FadeIn>
          <AnimatedHeading as="h2" variant="style2" text="Current Opportunities" />
        </FadeIn>
        <div className={styles.grid}>
          {OPEN_ROLES.map((role, i) => (
            <FadeIn key={role.title} delay={i * 0.06}>
              <div className={styles.card} style={{ display: "flex", flexDirection: "column", height: "100%", background: "#fff" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {role.department}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--muted)", background: "var(--surface)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
                    {role.type}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>{role.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", marginBottom: "1rem", flexGrow: 1 }}>
                  {role.summary}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border)", paddingTop: "0.85rem", marginTop: "auto" }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>📍 {role.location}</span>
                  <Link
                    href={`/contact?role=${encodeURIComponent(role.title)}`}
                    style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--accent)", textDecoration: "none" }}
                  >
                    Apply Now →
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
            <AnimatedHeading as="h2" variant="style2" text="Hear From Our Team" />
            <p style={{ color: "var(--muted)", marginTop: "0.75rem" }}>
              We&apos;re building a collection of authentic stories from NForceOne team members, each
              published only with that person&apos;s consent. If you&apos;re part of the team and want to
              share yours, we&apos;d love to hear it.
            </p>
            <a
              href="mailto:admin@nforceone.com?subject=Employee%20Testimonial%20Submission"
              style={{
                display: "inline-flex",
                marginTop: "1.5rem",
                fontWeight: 700,
                color: "var(--accent)",
                textDecoration: "none",
              }}
            >
              Share your story →
            </a>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
