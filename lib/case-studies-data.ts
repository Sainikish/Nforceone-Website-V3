export interface CaseStudy {
  slug: string;
  client: string;
  snapshot: { label: string; value: string }[];
  challenge: string;
  solution: string;
  image: string;
  imagePosition?: string;
  stats: { value: string; label: string }[];
  disclaimer?: string;
  exampleQuote?: { text: string; attribution: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "modozo",
    client: "Modozo: Streamlining Fashion Production from Design to Delivery",
    snapshot: [
      { label: "Industry", value: "Fashion Production & Retail Tech" },
      { label: "Region", value: "India" },
      { label: "Platform Type", value: "B2B SaaS" },
    ],
    challenge:
      "Indian fashion brands often rely on disconnected tools like Excel, WhatsApp, and email to manage production, creating delays, communication gaps, and limited visibility across the supply chain.",
    solution:
      "Modozo brings the entire workflow into one platform, enabling brands to create and share techpacks, collaborate with stakeholders, connect with verified vendors, place orders, track production, and manage quality control in one streamlined process.",
    image: "/images/modozo_case_study.jpg",
    imagePosition: "center 15%",
    stats: [
      { value: "70%", label: "Reduction in Manual Processes*" },
      { value: "80%", label: "Improved Team Collaboration*" },
    ],
    disclaimer:
      "*Illustrative KPIs based on Modozo's stated platform goals; not independently measured.",
    exampleQuote: {
      text: "Working with NForceOne felt like adding an engineering team that already understood fashion production. Our brand, vendor, and QA teams finally work off the same source of truth.",
      attribution: "Draft quote, pending Modozo sign-off",
    },
  },
  {
    slug: "nforce-arena",
    client: "NForce Arena: End-to-End Cricket Tournament Management",
    snapshot: [
      { label: "Industry", value: "Sports & Tournament Management" },
      { label: "Platform Type", value: "Cloud-Native Platform" },
    ],
    challenge:
      "Managing tournaments across organizers, players, teams, grounds, and umpires required multiple disconnected workflows, resulting in scheduling conflicts, manual coordination, and limited visibility into tournament operations.",
    solution:
      "NForceOne delivered a scalable modular monolith with secure JWT authentication, multi-role access control, automated tournament workflows, fixture management, standings generation, transactional email notifications, and a cloud-native architecture ready for Azure deployment.",
    image: "/images/nforce_arena_cricket.jpg",
    stats: [
      { value: "80%", label: "Reduction in Manual Tournament Coordination*" },
      { value: "100%", label: "Centralized Tournament Lifecycle Management" },
    ],
    disclaimer: "*Illustrative KPI for marketing purposes; not measured in the PRD.",
    exampleQuote: {
      text: "NForceOne replaced a dozen spreadsheets and group chats with one platform our organizers and umpires actually trust on tournament day.",
      attribution: "Draft quote, pending NForce Arena sign-off",
    },
  },
];
