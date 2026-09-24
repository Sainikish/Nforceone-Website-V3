import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import AnimatedHeading from "@/components/AnimatedHeading";
import ModernHero from "@/components/ModernHero";
import FaqAccordion from "@/components/FaqAccordion";
import AboutBento from "@/components/ui/about-bento";
import EngagementCarousel from "@/components/EngagementCarousel";
import { sharedFaq } from "@/lib/faq-data";
import { caseStudies } from "@/lib/case-studies-data";
import {
  ShieldCheckIcon,
  CodeIcon,
  CpuIcon,
  GridIcon,
  CheckCircleIcon,
  LayersIcon,
  DatabaseIcon,
  ActivityIcon,
  BankIcon,
  CarIcon,
  ShoppingBagIcon,
  BroadcastIcon,
  SignalBarsIcon,
  SettingsIcon,
  CreditCardIcon,
  BoltIcon,
  GraduationCapIcon,
  CloudIcon,
  GlobeIcon,
  TerminalIcon,
  BoxIcon,
} from "@/components/icons";
import styles from "./page.module.css";

export const metadata = {
  title: "NForceOne | AI. Quality Engineering. Digital Transformation.",
  description:
    "NForceOne is an AI, Quality Engineering, and Digital Transformation partner with deep Telecom expertise, delivering at enterprise scale through onshore US and offshore India teams.",
};

const PARTNERS = [
  { name: "Amazon Web Services", icon: CloudIcon },
  { name: "Microsoft Azure", icon: LayersIcon },
  { name: "Google Cloud", icon: GlobeIcon },
  { name: "Selenium & Playwright", icon: TerminalIcon },
  { name: "Pegasystems", icon: GridIcon },
  { name: "Postman & Docker", icon: BoxIcon },
];

const COMPARISON_ROWS = [
  {
    category: "QA & Release Process",
    usual: "Manual regression cycles that stretch releases from days to weeks.",
    ours: "Automated, continuous quality built into every release pipeline.",
  },
  {
    category: "Engineering Delivery",
    usual: "Ticket-queue outsourcing with limited architectural context.",
    ours: "Senior engineers embedded directly in your architecture and roadmap.",
  },
  {
    category: "Scale & Support",
    usual: "Single-timezone teams with coverage gaps outside business hours.",
    ours: "24/7 coverage across onshore US and offshore India delivery teams.",
  },
];



const SOLUTIONS = [
  { title: "Quality Assurance", href: "/services/quality-assurance", icon: ShieldCheckIcon },
  { title: "Software Development", href: "/services/software-development", icon: CodeIcon },
  { title: "Artificial Intelligence", href: "/services/artificial-intelligence", icon: CpuIcon },
  { title: "Pega Development", href: "/services/pega-development", icon: GridIcon },
  { title: "Pega Testing", href: "/services/pega-testing", icon: CheckCircleIcon },
  { title: "Devops", href: "/services/devops", icon: LayersIcon },
  { title: "Database Management", href: "/services/database-management", icon: DatabaseIcon },
  { title: "Data Analytics", href: "/services/data-analytics", icon: ActivityIcon },
];

const ABOUT_BULLETS = [
  {
    title: "Client-centered, engineer-led",
    body: "Senior engineers work directly with your team, not through a ticket queue.",
  },
  {
    title: "Battle-tested architecture",
    body: "Proven engineering patterns and resilient architectures tailored for enterprise scale.",
  },
  {
    title: "Outcome-focused delivery",
    body: "Every engagement is measured against the business results it was meant to produce.",
  },
];

const FEATURED_TESTIMONIAL = {
  quote:
    "NForceOne transformed our release confidence. Integrating their automated QA suite cut our regression cycle from 4 days to under 45 minutes, letting us ship weekly features with zero critical production escapes.",
  name: "Rajesh Raman",
  role: "VP of Engineering",
  company: "Modozo Fashion Tech",
};

const FEATURED_PRODUCTS = [
  {
    name: "Sync",
    tagline: "Event Streaming Middleware",
    desc: "Ultra-low latency event streaming fabric synchronizing data pipelines and microservices across hybrid clouds.",
    status: "Public",
    category: "Enterprise Cloud",
    href: "/innovation",
  },
  {
    name: "AIKTRA",
    tagline: "Multi-Agent Enterprise Orchestrator",
    desc: "Autonomous multi-agent framework coordinating complex operational tasks across SAP, Salesforce, and core backend APIs.",
    status: "Approval Pending",
    category: "Agentic AI",
    href: "/innovation",
  },
  {
    name: "Ask Navi",
    tagline: "Conversational AI Digital Concierge",
    desc: "Grounded conversational assistant built for customer discovery, automated triage, and intelligent enterprise lead capture.",
    status: "Public",
    category: "Conversational AI",
    href: "/innovation",
  },
];

const BLUE_CTA_TOPICS = [
  "Legacy Modernization",
  "AI Adoption",
  "Cloud Platforms",
  "Quality at Scale",
  "Security & Compliance",
];

const FEATURED_INDUSTRIES = [
  {
    slug: "telecom",
    title: "Telecommunications & 5G",
    tagline: "Empowering Connectivity, Edge Infrastructure & Subscriber Platforms",
    icon: SignalBarsIcon,
    impact: "Signature Domain Expertise",
    signature: true,
    capabilities: [
      "5G & Edge Infrastructure Modernization",
      "Predictive Network Telemetry & Anomaly QA",
      "AI Subscriber Agents & Real-Time Analytics",
    ],
  },
  {
    slug: "banking-and-financial",
    title: "Banking & Financial Services",
    tagline: "Secure, High-Frequency & Regulatory Compliant Platforms",
    icon: BankIcon,
    impact: "Regulatory-Grade Engineering",
    capabilities: [
      "Core Banking Modernization",
      "PCI-DSS / SOC2 Automation",
      "Real-Time Fraud & API Testing",
    ],
  },
  {
    slug: "automotive",
    title: "Automotive & Smart Mobility",
    tagline: "Connected Vehicle Intelligence & Predictive Telematics",
    icon: CarIcon,
    impact: "Safety-Critical Validation",
    capabilities: [
      "ISO 26262 Safety Validation",
      "OTA Firmware Pipelines",
      "Digital Twin Simulation",
    ],
  },
  {
    slug: "retail",
    title: "Retail & E-Commerce",
    tagline: "Omnichannel Scale & Peak Black Friday Resilience",
    icon: ShoppingBagIcon,
    impact: "Built for Peak-Season Scale",
    capabilities: [
      "High-Concurrency Load Testing",
      "Headless Checkout QA",
      "Real-Time Inventory Pipelines",
    ],
  },
  {
    slug: "insurance",
    title: "Insurance & InsurTech",
    tagline: "Regulated Claims Automation & Policyholder Platforms",
    icon: ShieldCheckIcon,
    impact: "Automated Claims Workflows",
    capabilities: [
      "Guidewire & Policy Migrations",
      "Automated Claims Adjudication",
      "Audit Trail & Compliance QA",
    ],
  },
  {
    slug: "digital-media-and-advertising",
    title: "Digital Media & AdTech",
    tagline: "Programmatic Ad Tech, Streaming & Low-Latency Engines",
    icon: BroadcastIcon,
    impact: "Low-Latency Engineering Focus",
    capabilities: [
      "High-Throughput RTB Pipelines",
      "Cross-Platform OTT & Mobile QA",
      "Ad Analytics Verification",
    ],
  },
];

const OTHER_INDUSTRIES = [
  { slug: "manufacturing", title: "Manufacturing & Industry 4.0", icon: SettingsIcon },
  { slug: "finance-and-fintech", title: "Finance & FinTech", icon: CreditCardIcon },
  { slug: "energy-and-utilities", title: "Energy & Utilities", icon: BoltIcon },
  { slug: "education-and-edutech", title: "Education & EduTech", icon: GraduationCapIcon },
  { slug: "isv", title: "ISV & Enterprise SaaS", icon: CloudIcon },
];

export default function Home() {
  return (
    <main>
      <ModernHero />

      {/* Technology partner strip */}
      <FadeIn>
        <div className={styles.partnerStrip}>
          <span className={styles.partnerStripLabel}>Built On</span>
          <div className={styles.partnerStripRow}>
            {PARTNERS.map((partner) => (
              <span key={partner.name} className={styles.partnerStripItem}>
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Usual way vs NForceOne way */}
      <section id="impact-stats" className={styles.section}>
        <FadeIn>
          <div className={styles.sectionHead}>
            <p className={styles.sectionEyebrow}>The Difference</p>
            <AnimatedHeading
              as="h2"
              variant="style1"
              text="Eliminate Bottlenecks. Accelerate Delivery."
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className={styles.comparisonToggleWrap}>
            <div className={styles.comparisonToggle}>
              <span className={styles.comparisonToggleInactive}>The Usual Way</span>
              <span className={styles.comparisonToggleActive}>The NForceOne Way</span>
            </div>
          </div>
        </FadeIn>
        <div className={styles.comparisonRows}>
          {COMPARISON_ROWS.map((row, i) => (
            <FadeIn key={row.category} delay={0.15 + i * 0.08}>
              <div className={styles.comparisonRow}>
                <span className={styles.comparisonCategory}>{row.category}</span>
                <span className={styles.comparisonArrow} aria-hidden="true">→</span>
                <span className={styles.comparisonValue}>{row.ours}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Enterprise Impact Bento Grid */}
      <AboutBento />



      {/* Solutions quick links */}
      <section className={styles.section}>
        <FadeIn>
          <div className={styles.sectionHead}>
            <p className={styles.sectionEyebrow}>Solutions</p>
            <AnimatedHeading as="h2" variant="style1" text="End-to-End Services for Every Stage" />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className={styles.solutionPillRow}>
            {SOLUTIONS.map((item) => {
              const SolutionIcon = item.icon;
              return (
                <Link key={item.title} href={item.href} className={styles.solutionPill}>
                  <SolutionIcon size={16} />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>
        </FadeIn>
      </section>

      {/* About / engineering excellence */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.splitLayout}>
          <FadeIn className={styles.splitCollage}>
            <div className={styles.collageGrid}>
              <div className={styles.collageMain}>
                <Image
                  src="/images/team-1.png"
                  alt="NForceOne engineering team in Hyderabad"
                  width={800}
                  height={368}
                  className={styles.collageImg}
                  priority
                />
              </div>

              <div className={styles.collageSubRow}>
                <div className={styles.collageSubItem}>
                  <Image
                    src="/images/team-2.png"
                    alt="NForceOne team collaboration"
                    width={400}
                    height={184}
                    className={styles.collageImg}
                  />
                </div>
                <div className={styles.collageSubItem}>
                  <Image
                    src="/images/team-3.png"
                    alt="NForceOne engineering summit"
                    width={400}
                    height={184}
                    className={styles.collageImg}
                  />
                </div>
              </div>
            </div>
          </FadeIn>
          <div className={styles.splitContent}>
            <FadeIn>
              <Link href="/about" className={styles.aboutTopButton}>
                About Us
              </Link>
              <p className={styles.sectionEyebrow}>About NForceOne</p>
              <AnimatedHeading as="h2" variant="style2" text="Engineering Excellence Meets Human-Centered Delivery" />
              <p className={styles.sectionSubcopy} style={{ margin: "1rem 0 1.75rem", textAlign: "left" }}>
                We design, build, and operate quality-engineered software for enterprise teams, pairing senior talent with automation so nothing ships without confidence behind it.
              </p>
            </FadeIn>
            <div className={styles.aboutBulletList}>
              {ABOUT_BULLETS.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.05}>
                  <div className={styles.aboutBullet}>
                    <span className={styles.aboutBulletDot} aria-hidden="true" />
                    <div>
                      <p className={styles.aboutBulletTitle}>{item.title}</p>
                      <p className={styles.aboutBulletBody}>{item.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className={styles.section}>
        <FadeIn>
          <div className={styles.sectionHead}>
            <p className={styles.sectionEyebrow}>How We Engage</p>
            <AnimatedHeading as="h2" variant="style1" text="Flexible Delivery, Built Around Your Roadmap" />
            <p className={styles.sectionSubcopy}>
              Every engagement is different. We shape delivery around your timeline, budget, and risk tolerance, not a one-size-fits-all contract.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <EngagementCarousel />
        </FadeIn>
      </section>

      {/* Case studies - static grid */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <FadeIn>
          <div className={styles.sectionHead}>
            <p className={styles.sectionEyebrow}>Case Studies</p>
            <AnimatedHeading as="h2" variant="style1" text="Work That Drives Growth" />
          </div>
        </FadeIn>
        <div className={styles.caseGrid}>
          {caseStudies.map((cs, i) => (
            <FadeIn key={cs.slug} delay={i * 0.08}>
              <Link href={`/case-studies/${cs.slug}`} className={styles.caseCard}>
                <div className={styles.caseImageFrame}>
                  <Image
                    src={cs.image}
                    alt={cs.client}
                    fill
                    sizes="(max-width: 860px) 100vw, 30vw"
                    style={{ objectFit: "cover", objectPosition: cs.imagePosition || "center" }}
                  />
                </div>
                <div className={styles.caseCardBody}>
                  <p className={styles.caseCardEyebrow}>{cs.snapshot[0]?.value}</p>
                  <h3 className={styles.caseCardTitle}>{cs.client.split(":")[0]}</h3>
                  <div className={styles.caseStatBadge}>{cs.stats[0]?.value}</div>
                  <p className={styles.caseStatLabel}>{cs.stats[0]?.label}</p>
                  <p className={styles.caseCardText}>{cs.solution.split(".")[0]}.</p>
                  <span className={styles.caseCardLink}>
                    Read Case Study
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Innovation & Proprietary Platforms Section (PRD Section 7 HOME-007) */}
      <section className={styles.section}>
        <FadeIn>
          <div className={styles.sectionHead}>
            <p className={styles.sectionEyebrow}>Innovation &amp; IP</p>
            <AnimatedHeading as="h2" variant="style1" text="Platforms Built to Accelerate" />
            <p className={styles.sectionSubcopy}>
              Autonomous AI accelerators designed to eliminate release friction and scale delivery.
            </p>
          </div>
        </FadeIn>
        <div className={styles.innovationGrid}>
          {FEATURED_PRODUCTS.map((prod, i) => (
            <FadeIn key={prod.name} delay={i * 0.07}>
              <Link href={prod.href} className={styles.solutionLink}>
                <div className={styles.homeProductCard}>
                  <div className={styles.homeProductTop}>
                    <span className={styles.homeProductCategory}>{prod.category}</span>
                    <span
                      className={
                        prod.status === "Public"
                          ? styles.homeProductStatus
                          : `${styles.homeProductStatus} ${styles.homeProductStatusPending}`
                      }
                    >
                      {prod.status}
                    </span>
                  </div>
                  <h3 className={styles.homeProductTitle}>{prod.name}</h3>
                  <p className={styles.homeProductTagline}>{prod.tagline}</p>
                  <p className={styles.homeProductDesc}>{prod.desc}</p>
                  <span className={styles.homeProductLink}>
                    Explore Platform Specs &rarr;
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.25}>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/innovation" className={styles.homeProductViewAll}>
              <span>View All Proprietary Platforms</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Testimonial spotlight */}
      <section className={styles.testimonialSpotlight}>
        <div className={styles.spotlightGrid}>
          <FadeIn>
            <div className={styles.spotlightStars}>★★★★★</div>
            <blockquote className={styles.spotlightQuote}>
              &ldquo;{FEATURED_TESTIMONIAL.quote}&rdquo;
            </blockquote>
            <p className={styles.spotlightAuthor}>
              {FEATURED_TESTIMONIAL.name} · {FEATURED_TESTIMONIAL.role}, {FEATURED_TESTIMONIAL.company}
            </p>
            <p className={styles.spotlightDisclaimer}>
              *Representative feedback reflecting reported engagement outcomes.
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className={styles.spotlightImageFrame}>
            <Image
              src="/images/team-engineering-collab.png"
              alt="NForceOne engineering team collaborating at their desks"
              fill
              sizes="(max-width: 860px) 100vw, 40vw"
              style={{ objectFit: "contain", objectPosition: "center center" }}
            />
            <div className={styles.spotlightTeamBadge}>
              <span className={styles.spotlightTeamDot} />
              <span>NForceOne Engineering Team</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Industries */}
      <section className={styles.section}>
        <FadeIn>
          <div className={styles.sectionHead}>
            <p className={styles.sectionEyebrow}>Domain Expertise & Compliance</p>
            <AnimatedHeading
              as="h2"
              variant="style3"
              text="Architected for Your Industry’s Toughest Standards"
            />
            <p className={styles.sectionSubcopy}>
              Compliance requirements, legacy architectures, and customer SLAs vary drastically across sectors. We pair senior domain engineers with automated test suites built for your specific regulatory and transaction demands.
            </p>
          </div>
        </FadeIn>

        <div className={styles.industryGrid}>
          {FEATURED_INDUSTRIES.map((ind, i) => {
            const IndustryIcon = ind.icon;
            return (
            <FadeIn key={ind.slug} delay={i * 0.05}>
              <Link href={`/industries/${ind.slug}`} className={styles.industryCardLink}>
                <div
                  className={
                    ind.signature
                      ? `${styles.industryCard} ${styles.industryCardSignature}`
                      : styles.industryCard
                  }
                >
                  {ind.signature && (
                    <span className={styles.industrySignatureTag}>Signature Expertise</span>
                  )}
                  <div className={styles.industryCardTop}>
                    <div className={styles.industryIcon}>
                      <IndustryIcon size={22} />
                    </div>
                    <span className={styles.industryImpactBadge}>{ind.impact}</span>
                  </div>

                  <h3 className={styles.industryTitle}>{ind.title}</h3>
                  <p className={styles.industryTagline}>{ind.tagline}</p>

                  <div className={styles.industryCapabilities}>
                    {ind.capabilities.map((cap) => (
                      <span key={cap} className={styles.industryCapTag}>
                        {cap}
                      </span>
                    ))}
                  </div>

                  <div className={styles.industryCardFooter}>
                    <span className={styles.industryCtaText}>Explore Sector Architecture</span>
                    <span className={styles.industryArrow} aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.25}>
          <div className={styles.industryQuickNav}>
            <div className={styles.quickNavLeft}>
              <span className={styles.quickNavLabel}>Also Specialized In:</span>
              <div className={styles.quickNavPills}>
                {OTHER_INDUSTRIES.map((other) => {
                  const OtherIcon = other.icon;
                  return (
                    <Link
                      key={other.slug}
                      href={`/industries/${other.slug}`}
                      className={styles.quickNavPill}
                    >
                      <span className={styles.quickNavIcon}>
                        <OtherIcon size={15} />
                      </span>
                      <span>{other.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
            <Link href="/industries" className={styles.quickNavViewAll}>
              <span>View All 11 Industries</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Strategic CTA band */}
      <section className={styles.blueCta}>
        <FadeIn className={styles.blueCtaInner}>
          <h2 className={styles.blueCtaHeadline}>What&apos;s blocking your delivery?</h2>
          <div className={styles.blueCtaPills}>
            {BLUE_CTA_TOPICS.map((topic) => (
              <span key={topic} className={styles.blueCtaPill}>
                {topic}
              </span>
            ))}
          </div>
          <Link href="/contact" className={styles.blueCtaButton}>
            Talk to Us About Your Roadmap
          </Link>
        </FadeIn>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <FadeIn>
          <div className={styles.sectionHead}>
            <p className={styles.sectionEyebrow}>Common Questions</p>
            <AnimatedHeading as="h2" variant="style2" text="Answers Before You Reach Out" />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <FaqAccordion items={sharedFaq} />
        </FadeIn>
      </section>
    </main>
  );
}
