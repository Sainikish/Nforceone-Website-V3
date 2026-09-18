import PageHero from "./PageHero";
import ImpactBand from "./ImpactBand";
import FadeIn from "./FadeIn";
import AnimatedHeading from "./AnimatedHeading";
import FaqAccordion from "./FaqAccordion";
import { ServiceItem } from "@/lib/services-data";
import { sharedFaq } from "@/lib/faq-data";
import styles from "./ServiceDetail.module.css";

const DEV_CATEGORY_SLUGS = new Set([
  "software-development",
  "artificial-intelligence",
  "pega-development",
  "pega-testing",
  "devops",
  "database-management",
  "data-analytics",
  "big-data",
  "digital-app-development",
  "intelligent-rpa",
  "management-services",
]);

const SLUG_IMAGES: Record<string, string> = {
  "quality-assurance": "/images/Team9.png",
  "automation-testing": "/images/Team7.png",
  "ai-assurance": "/images/Team9.png",
  "software-development": "/images/Team12.png",
  "artificial-intelligence": "/images/Team6.png",
  "intelligent-rpa": "/images/Team7.png",
  "pega-development": "/images/Team4.png",
  "pega-testing": "/images/Team7.png",
  devops: "/images/Team8.png",
  "database-management": "/images/Team8.png",
  "data-analytics": "/images/Team11.png",
};

const SLUG_POSITIONS: Record<string, string> = {
  "software-development": "center 35%",
  "pega-development": "center 35%",
  "quality-assurance": "center 45%",
  "automation-testing": "center 38%",
  "ai-assurance": "center 45%",
  "devops": "center 40%",
  "data-analytics": "center 45%",
};

export default function ServiceDetail({ service }: { service: ServiceItem }) {
  const bannerImage =
    SLUG_IMAGES[service.slug] ??
    (DEV_CATEGORY_SLUGS.has(service.slug) ? "/images/Team12.png" : "/images/Team9.png");
  const bannerPosition = SLUG_POSITIONS[service.slug] ?? "center 40%";

  return (
    <main>
      <PageHero
        eyebrow="Services"
        title={service.title}
        subtitle={service.intro}
        image={bannerImage}
        imagePosition={bannerPosition}
      />

      <section className={styles.section}>
        <FadeIn>
          <AnimatedHeading as="h2" variant="style1" text={service.whyHeading} />
          <p className={styles.whyBody}>{service.whyBody}</p>
        </FadeIn>
        <div className={styles.grid}>
          {service.whyPoints.map((point, i) => (
            <FadeIn key={point} delay={i * 0.08}>
              <div className={styles.point}>{point}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <FadeIn>
          <AnimatedHeading as="h2" variant="style2" text="What We Cover" />
        </FadeIn>
        <div className={styles.grid}>
          {service.serviceTypes.map((type, i) => (
            <FadeIn key={type.title} delay={i * 0.08}>
              <div className={styles.card}>
                <h3>{type.title}</h3>
                <p>{type.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <FadeIn>
          <AnimatedHeading as="h2" variant="style1" text="Platforms We Test" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <ul className={styles.chipList}>
            {service.platforms.map((platform) => (
              <li key={platform}>{platform}</li>
            ))}
          </ul>
        </FadeIn>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <FadeIn>
          <AnimatedHeading as="h2" variant="style2" text="Tools & Technologies" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <ul className={styles.chipList}>
            {service.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </FadeIn>
      </section>

      <ImpactBand items={service.impact} />

      <section className={styles.section}>
        <FadeIn>
          <AnimatedHeading as="h2" variant="style3" text="Frequently Asked Questions" />
        </FadeIn>
        <FaqAccordion items={sharedFaq} />
      </section>
    </main>
  );
}
