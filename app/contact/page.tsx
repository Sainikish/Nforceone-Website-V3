import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import AnimatedHeading from "@/components/AnimatedHeading";
import styles from "./page.module.css";

const LOCATIONS = [
  {
    name: "NForce One",
    tag: "Texas (Associate Brand Office)",
    address: "5700 Tennyson Parkway, Suite 300, Plano, Texas, 75024",
  },
  {
    name: "NForce One",
    tag: "Hyderabad",
    address: "4th Floor, Sanali Spazio, Inorbit Mall Rd, Madhapur, Hyderabad, Telangana 500081, India",
  },
];

export const metadata = {
  title: "Contact | NForceOne",
  description: "Get in touch with NForceOne for a free consultation on QA, AI, CI/CD, cloud migration, or security automation.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="We're Here to Help"
        subtitle="Questions about QA, AI, CI/CD, cloud migration, or security automation? Reach out and we'll connect you with a solutions expert."
        image="/images/contact-hero.jpg"
      />

      <section className={styles.section}>
        <FadeIn>
          <p className={styles.centeredBody}>
            Email us at{" "}
            <a href="mailto:admin@nforceone.com" style={{ color: "var(--accent)" }}>
              admin@nforceone.com
            </a>{" "}
            or fill out the consultation form below and we&apos;ll be in touch.
          </p>
        </FadeIn>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <FadeIn>
          <AnimatedHeading as="h2" variant="style1" text="Our Locations" />
        </FadeIn>
        <div className={styles.locations}>
          {LOCATIONS.map((location, i) => (
            <FadeIn key={location.tag} delay={i * 0.1} className={styles.locationWrapper}>
              <div className={styles.location}>
                <h3>{location.name}</h3>
                <p className={styles.locationTag}>{location.tag}</p>
                <address>{location.address}</address>
                <a href="mailto:admin@nforceone.com">admin@nforceone.com</a>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
