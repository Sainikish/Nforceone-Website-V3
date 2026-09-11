import Image from "next/image";
import Link from "next/link";
import { ConsultationForm } from "./ConsultationForm";
import SocialIcons from "./SocialIcons";
import AnimatedHeading from "./AnimatedHeading";
import styles from "./Footer.module.css";

const OFFICES = [
  {
    tag: "Hyderabad",
    address: "4th Floor, Sanali Spazio, Inorbit Mall Rd, Madhapur, Hyderabad, Telangana 500081, India",
  },
  {
    tag: "Texas",
    address: "5700 Tennyson Parkway, Suite 300, Plano, Texas, 75024",
  },
];

const CAPABILITIES = [
  "Custom Software Development",
  "API & Microservices Architecture",
  "UI/UX Design Systems",
  "DevOps & Infrastructure Automation",
  "Scalable QA & Test Automation",
  "Cloud & API Integrations",
  "Analytics & AI Enablement",
  "Ongoing Maintenance & Support",
];

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

const EXPLORE_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/innovation", label: "Innovation & Products" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <section className={styles.ctaBlock}>
        <div className={styles.ctaBg}>
          <Image
            src="/images/footer-cta.jpg"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "left center" }}
          />
        </div>
        <div className={styles.ctaOverlay} />
        <div className={styles.ctaInner}>
          <div className={styles.ctaText}>
            <AnimatedHeading as="h2" variant="style3" text="Partner with Us to Build and Scale with Confidence" />
            <ul className={styles.capabilities}>
              {CAPABILITIES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.ctaForm}>
            <ConsultationForm />
          </div>
        </div>
      </section>

      <div className={styles.bottomWrap}>
        <div className={styles.footerNav}>
          <div className={styles.footerBrand}>
            <Image
              src="/images/nforceone-logo-hd.png"
              alt="NForceOne"
              width={140}
              height={78}
              className={styles.footerLogo}
              unoptimized
            />
            <p className={styles.tagline}>
              AI. Quality Engineering. Digital Transformation. Built to Scale at Speed.
            </p>
            <SocialIcons />
          </div>

          <div className={styles.footerCol}>
            <h4>Company</h4>
            {COMPANY_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.footerCol}>
            <h4>Explore</h4>
            {EXPLORE_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.footerCol}>
            <h4>Locations</h4>
            <div className={styles.officeList}>
              {OFFICES.map((loc) => (
                <div key={loc.tag} className={styles.officeBlock}>
                  <p className={styles.officeCity}>{loc.tag}</p>
                  <address className={styles.officeAddress}>{loc.address}</address>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.copyrightBar}>
          <p>© {year} NForceOne. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
