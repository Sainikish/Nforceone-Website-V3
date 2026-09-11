export interface IndustryItem {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  solutions: { title: string; body: string }[];
  impact: { label: string; body: string }[];
  ctaLabel?: string;
  ctaHref?: string;
}

export const industries: IndustryItem[] = [
  {
    slug: "automotive",
    title: "Automotive",
    tagline: "Driving Innovation Across the Automotive Value Chain",
    intro:
      "As the industry shifts toward connected, autonomous, shared, and electric (CASE) vehicles, NForceOne helps OEMs, suppliers, and mobility providers embrace smart manufacturing and vehicle intelligence at every stage of the value chain.",
    solutions: [
      {
        title: "Connected Vehicle Platforms & Telematics",
        body: "IoT and cloud platforms that stream real-time sensor data for remote diagnostics, usage-based insurance, over-the-air updates, and fleet telematics.",
      },
      {
        title: "AI-Driven Predictive Maintenance",
        body: "Models that anticipate part failures before they happen, cutting warranty costs and unplanned downtime across vehicle fleets.",
      },
      {
        title: "Digital Twin & Smart Manufacturing",
        body: "Virtual replicas of production lines that support Industry 4.0 workflows and catch defects before they reach the line.",
      },
      {
        title: "Customer Experience Personalization",
        body: "Tailored infotainment, navigation, and roadside assistance experiences built around individual driver behavior.",
      },
    ],
    impact: [
      {
        label: "Fewer warranty claims",
        body: "Predictive maintenance models flag failing components before they trigger costly warranty returns and dealer comebacks.",
      },
      {
        label: "Faster time-to-line",
        body: "Digital twins let engineering teams validate production changes virtually, shortening the path from design change to shop-floor rollout.",
      },
      {
        label: "Higher connected-vehicle uptime",
        body: "OTA update pipelines and telematics monitoring keep fleets current and catch anomalies before they become roadside incidents.",
      },
    ],
  },
  {
    slug: "banking-and-financial",
    title: "Banking and Financial",
    tagline: "Empowering Secure, Scalable, and Intelligent Financial Services",
    intro:
      "NForceOne supports banks, fintechs, and financial institutions with intelligent, compliant, and scalable technology built for real-time transaction volumes and shifting regulatory demands.",
    solutions: [
      {
        title: "Core Banking Modernization",
        body: "Cloud-native, API-first platforms that replace rigid legacy cores with real-time processing and faster product launches.",
      },
      {
        title: "Fraud Detection & Risk Analytics",
        body: "AI-driven behavioral models that catch fraudulent activity earlier while cutting the false positives that frustrate good customers.",
      },
      {
        title: "Customer 360 & Personalization Engines",
        body: "Unified customer profiles that power targeted campaigns, proactive service, and conversational banking chatbots.",
      },
      {
        title: "Regulatory Compliance & Reporting Automation",
        body: "Automated audit trails and reporting workflows aligned to GDPR, PCI-DSS, and AML requirements.",
      },
    ],
    impact: [
      {
        label: "Faster product launches",
        body: "API-first core banking lets new accounts, cards, and lending products ship in weeks instead of the multi-quarter cycles legacy cores impose.",
      },
      {
        label: "Lower fraud losses, fewer false declines",
        body: "Behavioral risk models catch more genuine fraud while letting more legitimate transactions through without manual review.",
      },
      {
        label: "Audit-ready compliance",
        body: "Automated reporting and audit trails cut the manual effort behind AML, PCI-DSS, and regulator examinations.",
      },
    ],
  },
  {
    slug: "digital-media-and-advertising",
    title: "Digital Media and Advertising",
    tagline: "Unlocking Engagement, Reach, and ROI with Scalable AdTech",
    intro:
      "NForceOne builds the infrastructure, intelligence, and integrations behind impactful digital campaigns and audience-first content, so media and advertising teams can move at the speed of the market.",
    solutions: [
      {
        title: "AdTech Infrastructure & Data Pipelines",
        body: "Real-time bidding, campaign tracking, and DSP/DMP integrations built to handle high-volume ad traffic without dropping data.",
      },
      {
        title: "Audience Segmentation & Targeting",
        body: "Machine learning models that segment audiences by behavior and demographics for sharper, more efficient targeting.",
      },
      {
        title: "Cross-Platform Content Delivery",
        body: "CDN-optimized delivery across web, mobile, connected TV, and social so content loads fast everywhere audiences watch.",
      },
      {
        title: "Real-Time Campaign Analytics & Attribution",
        body: "Live dashboards, pixel tracking, and attribution modeling that show exactly which spend is driving results.",
      },
    ],
    impact: [
      {
        label: "Higher effective CPMs",
        body: "Sharper audience segmentation lets sales teams command premium rates by proving precision reach to advertisers.",
      },
      {
        label: "Faster campaign optimization cycles",
        body: "Real-time attribution surfaces underperforming placements within hours instead of waiting on end-of-campaign reports.",
      },
      {
        label: "Consistent playback under peak load",
        body: "CDN-optimized delivery holds up during high-traffic events, live drops, and viral spikes without buffering or downtime.",
      },
    ],
  },
  {
    slug: "education-and-edutech",
    title: "Education and EduTech",
    tagline: "Transforming Learning Through Intelligent Technology",
    intro:
      "NForceOne supports institutions and EduTech providers with scalable, secure, and engaging platforms that keep learners at the center, from K-12 classrooms to enterprise training programs.",
    solutions: [
      {
        title: "Virtual Classrooms & LMS Platforms",
        body: "Cloud-native learning environments that scale from a single classroom to enterprise-wide training deployments.",
      },
      {
        title: "Student Data & Performance Analytics",
        body: "Real-time analytics that surface at-risk learners early, enabling timely interventions before students fall behind.",
      },
      {
        title: "Secure Cloud Infrastructure for EduTech",
        body: "Identity and access management built around FERPA and COPPA compliance to keep student data protected.",
      },
      {
        title: "AI-Powered Tutoring & Content Generation",
        body: "Adaptive learning tools and generative content that personalize the pace and style of instruction for every student.",
      },
    ],
    impact: [
      {
        label: "Earlier at-risk interventions",
        body: "Performance analytics flag disengaged or struggling students weeks earlier, giving instructors time to act before grades slip.",
      },
      {
        label: "Higher course completion rates",
        body: "Adaptive tutoring adjusts pace and content to individual learners, keeping more students engaged through to completion.",
      },
      {
        label: "Uninterrupted access at enrollment peaks",
        body: "Cloud-native LMS infrastructure scales through registration surges and exam periods without service disruption.",
      },
    ],
  },
  {
    slug: "energy-and-utilities",
    title: "Energy and Utilities",
    tagline: "Accelerating the Smart Grid and Sustainable Energy Transformation",
    intro:
      "NForceOne helps utilities and energy providers adopt intelligent systems that improve reliability, sustainability, and agility as the grid becomes more distributed and data-driven.",
    solutions: [
      {
        title: "Smart Grid Management & IoT Integration",
        body: "Smart meter networks, load balancing, and outage detection that give operators a real-time view of the grid.",
      },
      {
        title: "Energy Trading & Forecasting Platforms",
        body: "AI-driven demand prediction and risk modeling that sharpen trading decisions in volatile energy markets.",
      },
      {
        title: "Customer Experience & Billing Modernization",
        body: "Modern CIS and billing platforms paired with self-service portals that cut call center volume and billing disputes.",
      },
      {
        title: "Sustainability & Carbon Tracking Dashboards",
        body: "Emissions and ESG dashboards that track progress toward decarbonization goals with auditable data.",
      },
    ],
    impact: [
      {
        label: "Faster outage detection and restoration",
        body: "IoT-integrated grid monitoring pinpoints faults in real time, cutting the time between an outage and its resolution.",
      },
      {
        label: "More accurate demand forecasting",
        body: "AI-driven trading and forecasting models reduce costly imbalances between predicted and actual energy demand.",
      },
      {
        label: "Auditable progress on ESG commitments",
        body: "Carbon tracking dashboards turn emissions data into reportable metrics regulators and investors can verify.",
      },
    ],
  },
  {
    slug: "finance-and-fintech",
    title: "Finance and FinTech",
    tagline: "Modernizing Financial Operations",
    intro:
      "NForceOne helps financial firms, from legacy banks to digital-first startups, navigate compliance, scale infrastructure, and transform customer experiences without slowing down the business.",
    solutions: [
      {
        title: "Core System Modernization",
        body: "Modular, cloud-native, microservices-based systems that replace rigid legacy platforms without disrupting operations.",
      },
      {
        title: "Digital Lending & KYC Automation",
        body: "Secure APIs, OCR, and AI-driven underwriting that speed up loan origination and identity verification.",
      },
      {
        title: "Real-Time Fraud Detection & Risk Analytics",
        body: "Anomaly detection tuned for AML and counter-terrorist-financing requirements that flags risk as it happens.",
      },
      {
        title: "Personalized Wealth Management Platforms",
        body: "Goal-based planning dashboards and robo-advisory tools that give clients a tailored view of their portfolios.",
      },
    ],
    impact: [
      {
        label: "Faster loan decisioning",
        body: "AI-driven underwriting and automated KYC checks cut origination time from days to minutes for most applicants.",
      },
      {
        label: "Lower cost of compliance",
        body: "Automated AML and CTF monitoring reduces the manual investigation hours behind every regulatory filing.",
      },
      {
        label: "Higher client engagement in wealth products",
        body: "Goal-based, personalized dashboards keep clients actively checking in on and adjusting their financial plans.",
      },
    ],
  },
  {
    slug: "insurance",
    title: "Insurance",
    tagline: "Digital-First Insurance Operations That Build Trust and Agility",
    intro:
      "NForceOne enables carriers, brokers, and insurtechs to transform claims, underwriting, and risk management into faster, more transparent processes that build policyholder trust.",
    solutions: [
      {
        title: "Automated Claims Processing",
        body: "Image recognition, NLP, and document parsing that speed up adjudication and cut manual claims handling.",
      },
      {
        title: "Underwriting & Risk Analytics",
        body: "ML-driven risk scoring built on historical data and IoT/telematics inputs for sharper, faster underwriting decisions.",
      },
      {
        title: "Policy Management System Modernization",
        body: "Modular, API-enabled platforms that support real-time policy endorsements instead of batch-processed changes.",
      },
      {
        title: "Fraud Detection & Prevention",
        body: "Anomaly detection and synthetic-identity tracing that catch fraudulent claims before payout.",
      },
    ],
    impact: [
      {
        label: "Faster claims resolution",
        body: "Automated document parsing and image recognition cut adjudication time from weeks to days for straightforward claims.",
      },
      {
        label: "More accurate risk pricing",
        body: "Telematics and ML-driven underwriting price policies closer to actual risk, improving loss ratios.",
      },
      {
        label: "Reduced fraudulent payouts",
        body: "Anomaly detection and synthetic-identity tracing flag suspicious claims before funds go out the door.",
      },
    ],
  },
  {
    slug: "isv",
    title: "ISV (Independent Software Vendors)",
    tagline: "Enabling Product-First Companies to Scale with Confidence",
    intro:
      "NForceOne acts as an engineering accelerator for independent software vendors, bringing modern DevOps, automated testing, and AI integrations to help product-first companies scale with confidence.",
    solutions: [
      {
        title: "Cloud-Native Application Development",
        body: "Microservices, containers, and serverless architectures built for products that need to scale unpredictably.",
      },
      {
        title: "Automated QA & Regression Testing",
        body: "CI/CD-integrated test frameworks that catch regressions before they ship, not after customers report them.",
      },
      {
        title: "Multi-Tenant SaaS Enablement",
        body: "Tenant isolation, billing, onboarding, and usage analytics built for multi-tenant SaaS from day one.",
      },
      {
        title: "API Management & Third-Party Integrations",
        body: "Authentication, rate limiting, and integrations with platforms like Stripe, Salesforce, Twilio, and Slack.",
      },
    ],
    impact: [
      {
        label: "Faster release cadence",
        body: "CI/CD-integrated automated testing lets product teams ship more frequently without a corresponding rise in production defects.",
      },
      {
        label: "Lower infrastructure cost per tenant",
        body: "Multi-tenant architecture and elastic cloud-native design keep hosting costs proportional to actual usage, not peak headroom.",
      },
      {
        label: "Faster time-to-integrate for customers",
        body: "Well-managed APIs and pre-built third-party connectors shorten the onboarding path for new customers and partners.",
      },
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    tagline: "Empowering Smart Factories and Supply Chain Resilience",
    intro:
      "NForceOne helps manufacturers modernize IT, optimize supply chains, and unlock real-time visibility across the shop floor and every tier of the supply network.",
    solutions: [
      {
        title: "Industrial IoT & Equipment Monitoring",
        body: "IIoT sensor networks and predictive maintenance that reduce unplanned equipment downtime on the line.",
      },
      {
        title: "MES & ERP Integrations",
        body: "Connected production planning, inventory, procurement, and quality control systems that eliminate data silos.",
      },
      {
        title: "Supply Chain Analytics & Forecasting",
        body: "Models that forecast supply and demand more precisely, reducing excess inventory and stockouts alike.",
      },
      {
        title: "Digital Twins & Simulation Models",
        body: "Simulated workflows that let teams test production changes virtually before committing capital on the floor.",
      },
    ],
    impact: [
      {
        label: "Less unplanned downtime",
        body: "IIoT monitoring and predictive maintenance catch equipment issues before they halt the production line.",
      },
      {
        label: "Leaner inventory, fewer stockouts",
        body: "Supply chain forecasting models balance demand against inventory more precisely, freeing up working capital.",
      },
      {
        label: "Lower cost of production changes",
        body: "Digital twin simulation lets engineering teams validate line changes virtually before touching physical equipment.",
      },
    ],
  },
  {
    slug: "retail",
    title: "Retail and eCommerce",
    tagline: "Delivering Frictionless Commerce",
    intro:
      "NForceOne supports omni-channel retailers and digital-first brands with scalable, secure, and intelligent solutions built to convert traffic into loyal customers.",
    solutions: [
      {
        title: "Intelligent Inventory & Supply Chain Management",
        body: "Predictive analytics and IoT-driven auto-reordering that keep shelves stocked without tying up excess capital.",
      },
      {
        title: "Headless Commerce & API-First Platforms",
        body: "Decoupled backend and frontend architecture that lets teams ship new storefront experiences without touching core commerce logic.",
      },
      {
        title: "Personalized Product Recommendations",
        body: "Recommendations built from behavior, search, and purchase data that drive upsells and cross-sells naturally.",
      },
      {
        title: "Unified Customer Data & Loyalty Systems",
        body: "Customer data platforms and loyalty APIs that raise customer lifetime value across every channel.",
      },
    ],
    impact: [
      {
        label: "Higher conversion rates",
        body: "Personalized recommendations built on real behavioral data turn more browsing sessions into completed purchases.",
      },
      {
        label: "Fewer stockouts and markdowns",
        body: "Predictive inventory management keeps popular SKUs in stock while trimming the excess that ends up discounted.",
      },
      {
        label: "Higher customer lifetime value",
        body: "Unified customer data and loyalty systems turn one-time buyers into repeat customers across every channel.",
      },
    ],
  },
  {
    slug: "telecom",
    title: "Telecommunication",
    tagline: "Empowering Connectivity, Innovation, and Customer Experience",
    intro:
      "NForceOne helps telecom providers modernize infrastructure, automate customer service, and turn network data into intelligence that improves both operations and the subscriber experience.",
    solutions: [
      {
        title: "OSS/BSS Transformation",
        body: "Modernization of order management, billing, provisioning, customer management, and service activation systems, unifying fragmented OSS/BSS stacks so orders flow from quote to activation without manual handoffs.",
      },
      {
        title: "Quality Engineering",
        body: "End-to-end telecom testing across OSS/BSS and network domains, including system integration testing, test automation, and performance and regression coverage that keeps releases stable as systems change underneath them.",
      },
      {
        title: "AI & Customer Experience",
        body: "AI virtual agents, Voice AI, and IVR modernization, extended with Agentic AI for customer-service automation and call validation, so subscribers resolve issues without waiting on a queue.",
      },
      {
        title: "Network & Field Operations",
        body: "Network operations support and field-service workflow automation that coordinate dispatch, technician scheduling, and truck rolls to raise operational efficiency across the network footprint.",
      },
      {
        title: "Data & Automation",
        body: "Telecom data engineering and analytics pipelines paired with intelligent automation that turn network and subscriber data into predictive operations instead of after-the-fact reporting.",
      },
    ],
    impact: [
      {
        label: "Faster order-to-activation cycles",
        body: "OSS/BSS transformation removes manual handoffs between order management, provisioning, and activation, shortening the path from a placed order to a working service.",
      },
      {
        label: "Higher first-contact resolution",
        body: "AI virtual agents and Voice AI resolve more subscriber issues on first contact, cutting escalations to human support and reducing IVR abandonment.",
      },
      {
        label: "Fewer field and network incidents reaching subscribers",
        body: "Predictive, data-driven network and field operations catch degradation and scheduling gaps earlier, reducing the incidents that turn into subscriber-facing outages or missed appointments.",
      },
    ],
    ctaLabel: "Discuss Your Telecom Transformation",
    ctaHref: "/contact",
  },
];
