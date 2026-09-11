"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import {
  CpuIcon,
  ShieldCheckIcon,
  LayersIcon,
  GlobeIcon,
  DatabaseIcon,
  SignalBarsIcon,
  GridIcon,
  CheckCircleIcon,
  BoxIcon,
  TerminalIcon,
  SettingsIcon
} from "@/components/icons";
import styles from "./innovation.module.css";

interface Product {
  id: string;
  name: string;
  tagline: string;
  category: "ai" | "qa" | "enterprise" | "industry";
  status: "Public" | "Approval Pending" | "Internal Only" | "Client Restricted";
  description: string;
  features: string[];
  techStack: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  caseStudySlug?: string;
}

const PRODUCTS: Product[] = [
  {
    id: "qforce-ai",
    name: "QForce AI",
    tagline: "AI-Assisted Test Automation Engine",
    category: "qa",
    status: "Approval Pending",
    description: "An automation engine aimed at reducing the manual upkeep of test suites as applications change.",
    features: [
      "AI-assisted test authoring",
      "Automated repair of brittle selectors",
      "CI/CD pipeline integration"
    ],
    techStack: ["Playwright", "Python", "Docker"],
    icon: ShieldCheckIcon
  },
  {
    id: "aiktra",
    name: "AIKTRA",
    tagline: "Multi-Agent Enterprise Orchestrator",
    category: "ai",
    status: "Approval Pending",
    description: "A multi-agent platform for coordinating enterprise workflows across existing business systems.",
    features: [
      "Multi-agent task coordination",
      "Enterprise access controls",
      "Connectors for common enterprise systems"
    ],
    techStack: ["LangGraph", "TypeScript", "Redis"],
    icon: CpuIcon
  },
  {
    id: "ask-navi",
    name: "Ask Navi",
    tagline: "Conversational AI Concierge",
    category: "ai",
    status: "Public",
    description: "NForceOne's own AI concierge, grounded in our published capabilities, that helps visitors navigate the site and reach the right team.",
    features: [
      "Guided capability discovery",
      "Human hand-off for anything it can't answer",
      "No data retained beyond the browser session"
    ],
    techStack: ["Next.js", "React"],
    icon: GlobeIcon
  },
  {
    id: "sync",
    name: "Sync",
    tagline: "Event Streaming Middleware",
    category: "enterprise",
    status: "Approval Pending",
    description: "Middleware for synchronizing data and events across systems in hybrid-cloud environments.",
    features: [
      "Cross-system event distribution",
      "Schema conflict handling",
      "Encryption for sensitive fields"
    ],
    techStack: ["Rust", "Apache Kafka", "gRPC"],
    icon: LayersIcon
  },
  {
    id: "auraface",
    name: "AuraFace / NForce Identity",
    tagline: "Privacy-Preserving Identity Verification",
    category: "ai",
    status: "Internal Only",
    description: "An identity-verification platform built around edge processing rather than centralized storage of biometric data.",
    features: [
      "Liveness and anti-spoofing checks",
      "Edge-based verification",
      "Minimal retention of raw biometric data"
    ],
    techStack: ["PyTorch", "ONNX", "WebAssembly"],
    icon: CheckCircleIcon
  },
  {
    id: "onehr",
    name: "OneHR",
    tagline: "Global Workforce Platform",
    category: "enterprise",
    status: "Internal Only",
    description: "An internal platform for resource scheduling and talent deployment across our US and India delivery teams.",
    features: [
      "Skill-based staffing support",
      "US + India delivery coordination",
      "Resource capacity tracking"
    ],
    techStack: ["React", "Node.js", "PostgreSQL"],
    icon: GridIcon
  },
  {
    id: "nforce-arena",
    name: "NForce Arena (CricketHub)",
    tagline: "Sports Analytics & Tournament Platform",
    category: "industry",
    status: "Public",
    description: "A live sports analytics and tournament-management platform built for high-concurrency events.",
    features: [
      "Real-time score and stats tracking",
      "Multi-region event handling",
      "Tournament and fixture management"
    ],
    techStack: ["Next.js", "Redis", "Socket.io"],
    icon: SignalBarsIcon,
    caseStudySlug: "nforce-arena",
  },
  {
    id: "tracktion",
    name: "Tracktion",
    tagline: "Delivery Governance Dashboard",
    category: "enterprise",
    status: "Approval Pending",
    description: "An internal dashboard tracking delivery health across engagements: commit velocity, test coverage, and milestone status.",
    features: [
      "Cross-repository delivery metrics",
      "Sprint health alerts",
      "Milestone and budget tracking"
    ],
    techStack: ["TypeScript", "Next.js", "ClickHouse"],
    icon: DatabaseIcon
  },
  {
    id: "flightops",
    name: "FlightOps",
    tagline: "Aviation Operations Platform",
    category: "industry",
    status: "Client Restricted",
    description: "An operations platform supporting aircraft turnaround tracking, schedule validation, and crew dispatch for an aviation client.",
    features: [
      "Turnaround milestone tracking",
      "Compliance checklist automation",
      "Offline-capable field sync"
    ],
    techStack: ["React Native", "Spring Boot", "Azure"],
    icon: BoxIcon
  },
  {
    id: "modozo",
    name: "Modozo",
    tagline: "Fashion-Tech Retail Platform",
    category: "industry",
    status: "Public",
    description: "An omnichannel retail platform for a fashion-tech client, covering catalogue search and inventory at scale.",
    features: [
      "Omnichannel catalogue search",
      "Inventory and returns handling",
      "Automated regression testing pipeline"
    ],
    techStack: ["Next.js", "FastAPI", "Elasticsearch"],
    icon: SettingsIcon,
    caseStudySlug: "modozo",
  },
  {
    id: "retailops",
    name: "NForce RetailOps",
    tagline: "Store Operations Testing Platform",
    category: "industry",
    status: "Approval Pending",
    description: "A testing platform that simulates in-store hardware — barcode scanners, POS terminals, and inventory devices — for retail QA.",
    features: [
      "Automated POS simulation",
      "Inventory sync validation",
      "Store offline-resiliency testing"
    ],
    techStack: ["Electron", "Python", "MQTT"],
    icon: TerminalIcon
  }
];

const CASE_STUDY_LABELS: Record<string, string> = {
  modozo: "See the Modozo case study",
  "nforce-arena": "See the NForce Arena case study",
};

export default function InnovationGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered = activeFilter === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeFilter);

  const getStatusClass = (status: Product["status"]) => {
    switch (status) {
      case "Public":
        return styles.statusPublic;
      case "Approval Pending":
        return styles.statusPending;
      case "Internal Only":
        return styles.statusInternal;
      case "Client Restricted":
        return styles.statusRestricted;
      default:
        return "";
    }
  };

  return (
    <>
      <div className={styles.container}>
        <FadeIn>
          <nav className={styles.filterBar} aria-label="Product categories">
            <button
              type="button"
              className={`${styles.filterBtn} ${activeFilter === "all" ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All Platforms ({PRODUCTS.length})
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${activeFilter === "ai" ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter("ai")}
            >
              AI &amp; Agentic
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${activeFilter === "qa" ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter("qa")}
            >
              Quality Engineering
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${activeFilter === "enterprise" ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter("enterprise")}
            >
              Enterprise Platforms
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${activeFilter === "industry" ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter("industry")}
            >
              Domain Specific
            </button>
          </nav>
        </FadeIn>

        <section className={styles.grid}>
          {filtered.map((prod, idx) => {
            const Icon = prod.icon;
            return (
              <FadeIn key={prod.id} delay={0.05 * (idx % 6)} className={styles.cardWrapper}>
                <article className={styles.card}>
                  <div className={styles.cardTop}>
                    <div className={styles.cardIconWrap}>
                      <Icon size={24} />
                    </div>
                    <span className={`${styles.statusPill} ${getStatusClass(prod.status)}`}>
                      {prod.status}
                    </span>
                  </div>

                  <h2 className={styles.cardTitle}>{prod.name}</h2>
                  <p className={styles.cardTagline}>{prod.tagline}</p>
                  <p className={styles.cardDesc}>{prod.description}</p>

                  <ul className={styles.featureList}>
                    {prod.features.map((feat) => (
                      <li key={feat} className={styles.featureItem}>
                        <span className={styles.checkDot} aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.techPills}>
                    {prod.techStack.map((tech) => (
                      <span key={tech} className={styles.techPill}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={styles.cardFooter}>
                    <Link href={`/contact?subject=Demo%20Request%20-%20${encodeURIComponent(prod.name)}`} className={styles.ctaBtn}>
                      <span>Request Demo</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                    {prod.caseStudySlug && (
                      <Link href={`/case-studies/${prod.caseStudySlug}`} className={styles.caseStudyLink}>
                        {CASE_STUDY_LABELS[prod.caseStudySlug]}
                      </Link>
                    )}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </section>

        <FadeIn delay={0.2}>
          <section className={styles.bottomBanner}>
            <h2 className={styles.bottomBannerTitle}>Need a Tailored Accelerator for Your Enterprise?</h2>
            <p className={styles.bottomBannerDesc}>
              Whether adapting one of our platforms or engineering a dedicated proprietary AI workflow, our hybrid US + India teams deliver production-grade results at scale.
            </p>
            <div className={styles.bannerActions}>
              <Link href="/contact" className={styles.bannerPrimaryBtn}>
                Schedule Technical Consultation
              </Link>
              <Link href="/case-studies" className={styles.bannerSecondaryBtn}>
                Explore Client Case Studies
              </Link>
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
