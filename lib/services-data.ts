export interface ServiceItem {
  slug: string;
  title: string;
  intro: string; // 1-2 sentence hero subheading
  whyHeading: string; // e.g. "Why Your Business Needs Automation Testing" - must reference this specific service, not a generic or mismatched one
  whyBody: string; // 1 paragraph, specific to this service
  whyPoints: string[]; // exactly 4 short bullet points, specific to this service
  serviceTypes: { title: string; body: string }[]; // exactly 3-4 items describing sub-areas/coverage of this specific service
  platforms: string[]; // 4-6 items, tailored to what's realistic for this service
  tools: string[]; // exactly 8 real, relevant, well-known tools/technologies for this specific service
  impact: { label: string; body: string }[]; // exactly 3 items, short outcome-focused statements specific to this service
}

export const services: ServiceItem[] = [
  {
    slug: "quality-assurance",
    title: "Quality Assurance",
    intro:
      "Comprehensive testing and QA services that ensure software reliability, performance, and security, so you can ship with confidence and win on user experience.",
    whyHeading: "Why Your Business Needs Quality Assurance",
    whyBody:
      "Quality assurance is the discipline that ties every stage of your software lifecycle together (requirements, builds, and releases) into one continuous check on reliability. Without a dedicated QA function, defects surface in production instead of in a sprint, customer trust erodes one bad release at a time, and every new feature adds risk instead of value. NForceOne builds full-cycle QA programs, spanning manual and automated testing across every platform you ship on, so quality becomes a built-in property of your software rather than an afterthought.",
    whyPoints: [
      "Fewer defects reach production",
      "Faster, safer release cycles",
      "Lower long-term cost of quality",
      "Confidence across every platform you ship",
    ],
    serviceTypes: [
      {
        title: "Full Cycle Services",
        body: "End-to-end QA embedded from requirements review through release sign-off, so quality is planned in rather than tested in at the last minute.",
      },
      {
        title: "Services By Type",
        body: "Specialist coverage across functional, automation, performance, security, and usability testing, matched to what each release actually needs.",
      },
      {
        title: "Services By Platform",
        body: "Consistent QA practices applied across web, mobile, API, and cloud so every surface of your product is held to the same standard.",
      },
      {
        title: "QA Process & Maturity Advisory",
        body: "Assessment of your current testing practices with a practical roadmap for closing coverage gaps and reducing escaped defects.",
      },
    ],
    platforms: ["Web", "Mobile", "API", "Cloud", "Desktop", "Enterprise Systems"],
    tools: ["Selenium", "Playwright", "Postman", "JMeter", "TestRail", "Jenkins", "BrowserStack", "Zephyr"],
    impact: [
      {
        label: "Fewer escaped defects",
        body: "Structured QA coverage catches issues before they reach customers, cutting post-release firefighting.",
      },
      {
        label: "Faster release cadence",
        body: "Well-defined test cycles remove the guesswork that slows down sign-off and shipping decisions.",
      },
      {
        label: "Lower cost of quality",
        body: "Catching defects earlier in the lifecycle costs a fraction of fixing them after launch.",
      },
    ],
  },
  {
    slug: "manual-testing",
    title: "Manual Testing",
    intro:
      "Deliver a seamless user experience, catch bugs before they become problems, and validate real-world behavior no script can fully replicate.",
    whyHeading: "Why Your Business Needs Manual Testing",
    whyBody:
      "Even in an automated world, manual testing remains essential for validating real-world user behavior, exploring edge cases, and applying human judgment that scripts simply cannot replicate. Skilled testers notice the awkward workflow, the confusing error message, and the visual glitch that a pass/fail assertion would never flag, all before your users do. NForceOne's manual testers pair structured test-case execution with exploratory sessions to surface the issues that matter most to real customers.",
    whyPoints: [
      "Human judgment catches what scripts miss",
      "Ideal for new or fast-changing features",
      "Uncovers usability and real-world edge cases",
      "Validates the gaps automation coverage leaves behind",
    ],
    serviceTypes: [
      {
        title: "Exploratory Testing",
        body: "Unscripted, hypothesis-driven testing sessions that probe your application the way a curious, determined user would.",
      },
      {
        title: "Ad Hoc & Edge-Case Testing",
        body: "Targeted investigation of unusual inputs, interruptions, and workflows that scripted test cases are unlikely to cover.",
      },
      {
        title: "Usability Walkthroughs",
        body: "Structured review of key user journeys to flag friction, confusing copy, and layout issues before launch.",
      },
      {
        title: "New Feature Validation",
        body: "First-pass verification of freshly built features, ahead of and alongside any automation that gets written for them.",
      },
    ],
    platforms: ["Web", "Mobile", "Desktop", "API", "Enterprise Systems"],
    tools: ["JIRA", "TestRail", "Zephyr", "Xray", "Postman", "Charles Proxy", "BrowserStack", "Confluence"],
    impact: [
      {
        label: "Fewer real-world defects",
        body: "Human testers catch usability and edge-case issues that automated assertions are not built to see.",
      },
      {
        label: "Faster feature turnaround",
        body: "New features get validated immediately, without waiting for automation scripts to be written.",
      },
      {
        label: "Higher customer satisfaction",
        body: "Products that feel polished and intuitive because real people tested them like real users.",
      },
    ],
  },
  {
    slug: "automation-testing",
    title: "Automation Testing",
    intro:
      "Accelerate your QA process with intelligent automation: custom test suites aligned to your software's core functionality, built to increase coverage and speed up releases.",
    whyHeading: "Why Your Business Needs Automation Testing",
    whyBody:
      "In fast-paced development environments, automation testing is critical for accelerating release cycles while maintaining product quality. Automated suites deliver rapid, repeatable validation of functionality, performance, and reliability on every single build, work that would take a manual team days to repeat by hand. NForceOne designs automation frameworks around your actual application architecture, wiring them directly into your CI/CD pipeline so every commit is verified before it ships.",
    whyPoints: [
      "Rapid, repeatable validation on every build",
      "Reduced manual testing effort and cost",
      "Faster time to market for new releases",
      "Consistent, objective results across every run",
    ],
    serviceTypes: [
      {
        title: "Test Automation Framework Design",
        body: "Custom, maintainable automation frameworks built around your application architecture and technology stack.",
      },
      {
        title: "CI/CD-Integrated Regression Suites",
        body: "Automated suites wired directly into your pipeline so every build is validated before it reaches staging or production.",
      },
      {
        title: "Cross-Browser & Cross-Device Automation",
        body: "Parallelized test execution across browsers, operating systems, and screen sizes to catch environment-specific failures fast.",
      },
      {
        title: "API & Data-Driven Automation",
        body: "Automated coverage of backend endpoints and data flows, feeding realistic datasets through every test scenario.",
      },
    ],
    platforms: ["Web", "Mobile", "API", "Cloud", "Desktop"],
    tools: ["Selenium", "Playwright", "Cypress", "Appium", "TestNG", "Jenkins", "GitHub Actions", "Postman"],
    impact: [
      {
        label: "Shorter release cycles",
        body: "Automated regression suites replace days of manual retesting with minutes of pipeline execution.",
      },
      {
        label: "Lower regression cost",
        body: "Reusable test scripts scale test coverage without scaling headcount release after release.",
      },
      {
        label: "Broader coverage per sprint",
        body: "Automation frees testers to focus on new features instead of re-verifying old ones.",
      },
    ],
  },
  {
    slug: "consulting-testing",
    title: "Consulting Testing",
    intro:
      "Leverage 15+ years of proven testing expertise to elevate your QA processes, reduce testing costs, and eliminate quality issues before they reach your customers.",
    whyHeading: "Why Your Business Needs QA Consulting",
    whyBody:
      "Not every quality problem is solved by hiring more testers; often the bottleneck is strategy, tooling, or process maturity. Our QA consultants assess where your current testing practices are falling short, benchmark them against what high-performing engineering teams do, and design a right-sized roadmap for your stack, team size, and release cadence. The result is a testing function that spends effort where it actually reduces risk, instead of testing everything equally and missing what matters.",
    whyPoints: [
      "Objective assessment of your current QA maturity",
      "A right-sized strategy and toolchain for your stack",
      "Avoid costly automation and tooling missteps",
      "A faster, clearer path to QA return on investment",
    ],
    serviceTypes: [
      {
        title: "QA Maturity Assessments",
        body: "A structured audit of your current testing coverage, tooling, and process against industry benchmarks.",
      },
      {
        title: "Test Strategy & Roadmap Design",
        body: "A phased plan for closing coverage gaps, prioritized by risk and business impact rather than guesswork.",
      },
      {
        title: "Tool & Framework Selection Advisory",
        body: "Vendor-neutral guidance on the automation frameworks, test management, and CI/CD tools that fit your stack.",
      },
      {
        title: "QA Team Structure & Process Consulting",
        body: "Recommendations on team composition, roles, and workflows to sustain quality as you scale.",
      },
    ],
    platforms: ["Web", "Mobile", "API", "Cloud", "Enterprise Systems"],
    tools: ["JIRA", "Confluence", "TestRail", "Azure DevOps", "Xray", "Miro", "Postman", "PractiTest"],
    impact: [
      {
        label: "A clear QA roadmap",
        body: "Leadership gets a prioritized, actionable plan instead of an open-ended list of testing gaps.",
      },
      {
        label: "Less tooling waste",
        body: "Right-sized recommendations prevent costly investment in automation or platforms you will not use fully.",
      },
      {
        label: "Faster ROI from testing",
        body: "Effort is directed at the highest-risk areas first, so quality gains show up sooner.",
      },
    ],
  },
  {
    slug: "outsourcing-testing",
    title: "Outsourcing Testing",
    intro:
      "Enhance your development process and boost product quality with outsourced QA: dedicated experts who integrate smoothly into your workflow at every stage of the software lifecycle.",
    whyHeading: "Why Your Business Should Outsource Testing",
    whyBody:
      "Building and retaining an in-house QA bench is expensive and slow, especially when testing needs fluctuate with your release schedule. Outsourcing gives you access to specialized expertise on demand, reduces operational overhead, and accelerates delivery timelines without compromising quality. NForceOne's dedicated testing teams plug directly into your existing tools and ceremonies, so outsourcing feels like an extension of your team rather than a hand-off.",
    whyPoints: [
      "Specialized expertise without the hiring overhead",
      "Elastic team size that scales with demand",
      "Dedicated QA engineers embedded in your workflow",
      "Internal teams stay focused on core development",
    ],
    serviceTypes: [
      {
        title: "Dedicated QA Teams",
        body: "Staff-augmentation engagements where our testers work as an extension of your team, inside your tools and sprints.",
      },
      {
        title: "Managed Testing Engagements",
        body: "A fully outsourced QA function with defined SLAs, so you own the outcomes without managing the day-to-day.",
      },
      {
        title: "Project-Based Testing Sprints",
        body: "Short-term, focused testing engagements for launches, migrations, or major releases with a hard deadline.",
      },
      {
        title: "Hybrid Co-Sourced Models",
        body: "A blended model where our engineers work alongside your in-house team, sharing ownership of test coverage.",
      },
    ],
    platforms: ["Web", "Mobile", "API", "Cloud", "Enterprise Systems"],
    tools: ["JIRA", "TestRail", "Selenium", "Postman", "BrowserStack", "Zephyr", "Microsoft Teams", "Git"],
    impact: [
      {
        label: "Lower cost per test cycle",
        body: "Outsourced teams eliminate the fixed cost of hiring and training an in-house QA bench.",
      },
      {
        label: "Faster capacity ramp-up",
        body: "Scale testing capacity up or down within days instead of a hiring cycle.",
      },
      {
        label: "Continuity of coverage",
        body: "Test coverage does not lapse when a single in-house tester is out or moves on.",
      },
    ],
  },
  {
    slug: "ai-assurance",
    title: "AI Assurance & Agentic Testing",
    intro:
      "Ensure your AI systems behave as intended: every prompt, output, and interaction. We test LLMs, chatbots, and voice agents across accuracy, safety, and scalability benchmarks.",
    whyHeading: "Why Your AI Systems Need Specialized Testing",
    whyBody:
      "Unlike traditional software, AI systems evolve: their outputs change with prompts, data drift, and model updates, and so do their risks. From hallucinations to bias to prompt injection, generative and agentic systems introduce failure modes that conventional pass/fail test cases were never designed to catch. NForceOne's AI-first testing approach combines automated evaluation frameworks with human review to eliminate blind spots and build trust into every model you ship.",
    whyPoints: [
      "Detects hallucinations and factual drift before users do",
      "Surfaces bias and fairness issues in model outputs",
      "Validates safety guardrails and prompt-injection resistance",
      "Benchmarks accuracy across model and prompt versions",
    ],
    serviceTypes: [
      {
        title: "Chatbots & Virtual Assistants",
        body: "Conversational quality, intent accuracy, and escalation-handling testing across web, mobile, and messaging channels.",
      },
      {
        title: "RAG & Search Agent Evaluation",
        body: "Testing retrieval accuracy, grounding, and citation reliability across vector stores and document pipelines.",
      },
      {
        title: "Fine-Tuned LLM Validation",
        body: "Benchmarking custom-trained models against baseline performance, safety, and domain-accuracy criteria.",
      },
      {
        title: "Multi-Agent & Voice AI Systems",
        body: "Testing reasoning, memory, and function-calling reliability across agent orchestration and speech-driven interfaces.",
      },
    ],
    platforms: ["Web", "Mobile", "Voice/IVR", "Slack/Teams", "API", "Cloud"],
    tools: ["LangSmith", "TruLens", "Ragas", "Promptfoo", "OpenAI Evals", "Weights & Biases", "Guardrails AI", "Postman"],
    impact: [
      {
        label: "Fewer hallucination incidents",
        body: "Systematic evaluation catches inaccurate or unsafe model outputs before they reach production.",
      },
      {
        label: "Safer model releases",
        body: "Automated evaluation pipelines let you ship model and prompt updates with confidence.",
      },
      {
        label: "Higher user trust",
        body: "Consistently accurate, well-guarded AI experiences build the trust adoption depends on.",
      },
    ],
  },
  {
    slug: "ux-testing",
    title: "UX Testing",
    intro:
      "We focus on how real users interact with your product, ensuring it is not just functional, but intuitive, accessible, and enjoyable to use.",
    whyHeading: "Why Your Software Needs UI/UX Testing",
    whyBody:
      "A product can be fully functional and still fail its users if it is confusing, inaccessible, or slow to learn. Usability testing uncovers friction points, design flaws, and accessibility gaps that affect satisfaction and engagement long before those issues show up as churn or support tickets. NForceOne evaluates real task flows across your platforms, so design decisions are backed by observed user behavior rather than assumptions.",
    whyPoints: [
      "Uncovers friction points before launch",
      "Improves accessibility and inclusivity",
      "Increases engagement and conversion",
      "Validates design decisions against real user behavior",
    ],
    serviceTypes: [
      {
        title: "Usability & Task-Flow Testing",
        body: "Observed sessions across key user journeys to identify where users hesitate, backtrack, or abandon a flow.",
      },
      {
        title: "Accessibility (WCAG) Testing",
        body: "Structured review against WCAG standards, covering screen readers, keyboard navigation, and color contrast.",
      },
      {
        title: "Visual & Cross-Device UI Testing",
        body: "Consistency checks across breakpoints, browsers, and devices so layout and interaction never break down.",
      },
      {
        title: "Kiosk & Touchscreen Interface Testing",
        body: "Evaluation of button sizing, gesture handling, and responsiveness for touch-first, real-world environments.",
      },
    ],
    platforms: ["Web", "Mobile", "Desktop", "SaaS", "Kiosk/Touchscreen", "Wearables"],
    tools: ["Figma", "Hotjar", "UserTesting", "Maze", "axe DevTools", "BrowserStack", "Lookback", "Optimal Workshop"],
    impact: [
      {
        label: "Higher task completion",
        body: "Removing friction from key flows measurably improves conversion and completion rates.",
      },
      {
        label: "Fewer usability tickets",
        body: "Catching design flaws before launch reduces the volume of confused-user support requests.",
      },
      {
        label: "Improved accessibility",
        body: "Structured accessibility testing widens your reach and reduces compliance risk.",
      },
    ],
  },
  {
    slug: "performance-testing",
    title: "Performance Testing",
    intro:
      "We ensure your software performs reliably under real-world conditions, detecting speed, stability, and scalability issues before your users experience them.",
    whyHeading: "Why Your Software Needs Performance Testing",
    whyBody:
      "Software that works in a demo can still collapse under real traffic. By simulating realistic load scenarios and monitoring system behavior under stress, performance testing identifies bottlenecks in code, infrastructure, and third-party dependencies before they become outages. NForceOne designs load, stress, and endurance tests around your actual traffic patterns, so you know exactly how your system behaves at scale, not just how it behaves at rest.",
    whyPoints: [
      "Identifies bottlenecks before peak traffic hits",
      "Validates scalability under real-world load",
      "Prevents downtime during critical business moments",
      "Optimizes response time and resource usage",
    ],
    serviceTypes: [
      {
        title: "Load & Stress Testing",
        body: "Simulated traffic at expected and beyond-expected volumes to find the point where performance degrades.",
      },
      {
        title: "Scalability & Capacity Testing",
        body: "Testing how well your system scales horizontally and vertically as demand grows over time.",
      },
      {
        title: "Endurance (Soak) Testing",
        body: "Sustained-load testing to surface memory leaks and degradation that only appear over extended runtime.",
      },
      {
        title: "Spike Testing",
        body: "Sudden traffic surge simulations to validate how your system handles flash sales, campaigns, or viral moments.",
      },
    ],
    platforms: ["Web", "Mobile", "Desktop", "Cloud"],
    tools: ["Apache JMeter", "LoadRunner", "Gatling", "Grafana", "Locust", "BlazeMeter", "NeoLoad", "Artillery"],
    impact: [
      {
        label: "Reduced peak-traffic downtime",
        body: "Bottlenecks are found and fixed in staging, not during your highest-traffic moments.",
      },
      {
        label: "Faster response times",
        body: "Targeted performance tuning driven by real load data, not guesswork.",
      },
      {
        label: "Lower infrastructure cost",
        body: "Right-sized scaling based on measured capacity instead of over-provisioning out of caution.",
      },
    ],
  },
  {
    slug: "functional-testing",
    title: "Functional Testing",
    intro:
      "Our expert QA team simulates real-world scenarios, identifying and resolving issues before they reach your users, minimizing risk and building confidence in every release.",
    whyHeading: "Why Your Software Needs Functional Testing",
    whyBody:
      "Functional testing validates every feature against the business requirements it was built to satisfy: not just whether the code runs, but whether it does what it is supposed to do. Without it, requirement mismatches surface late, often after a feature has already shipped to real users. NForceOne verifies workflows end-to-end across your platforms, from individual features to full business processes, so every release is measured against what the business actually needs.",
    whyPoints: [
      "Confirms every feature meets business requirements",
      "Minimizes regression risk before release",
      "Validates full workflows, not just isolated units",
      "Builds confidence across every release",
    ],
    serviceTypes: [
      {
        title: "Websites & Web Apps",
        body: "Functional and usability verification across browsers, devices, and operating systems.",
      },
      {
        title: "Enterprise Software",
        body: "ERP and CRM data integrity, workflow logic, integrations, and security-compliance verification.",
      },
      {
        title: "IoT Solutions",
        body: "Testing across software and hardware components, including data transmission and device interoperability.",
      },
      {
        title: "Big Data Systems",
        body: "Verifying accuracy, performance, and scalability of data processing at high volumes.",
      },
    ],
    platforms: ["Web", "Mobile", "Desktop", "Enterprise", "API", "Cloud"],
    tools: ["Selenium", "JUnit", "TestNG", "Cypress", "Postman", "BrowserStack", "Playwright", "SoapUI"],
    impact: [
      {
        label: "Fewer requirement mismatches",
        body: "Features are verified against actual business requirements, not just code correctness.",
      },
      {
        label: "Reduced UAT rework",
        body: "Catching functional gaps before UAT means fewer late-cycle surprises and delays.",
      },
      {
        label: "More predictable releases",
        body: "Consistent functional verification means release dates hold.",
      },
    ],
  },
  {
    slug: "regression-testing",
    title: "Regression Testing",
    intro:
      "We ensure new updates, enhancements, or bug fixes do not unintentionally break existing functionality, maintaining stability and user trust across every release.",
    whyHeading: "Why Your Software Needs Regression Testing",
    whyBody:
      "Every new feature or fix is also a risk to everything that already works. Regression testing systematically re-verifies existing functionality after each change, so a fix in one area does not quietly break another. NForceOne builds regression suites that scale with your codebase, giving your team the confidence to ship frequently without fear of what last week's release might have broken.",
    whyPoints: [
      "Prevents new releases from breaking existing features",
      "Maintains stability across frequent deployments",
      "Protects user trust release after release",
      "Enables safe, continuous delivery",
    ],
    serviceTypes: [
      {
        title: "Websites & Web Apps",
        body: "Post-deployment checks for broken links, script errors, form malfunctions, and layout regressions.",
      },
      {
        title: "Desktop Applications",
        body: "Verifying new features and patches do not interfere with legacy functionality, configs, or integrations.",
      },
      {
        title: "Cloud & SaaS Platforms",
        body: "Backward-compatibility testing across multi-tenant scenarios and user-specific configurations.",
      },
      {
        title: "APIs & Microservices",
        body: "Retesting endpoints and data flows after each change to keep service-to-service integrations intact.",
      },
    ],
    platforms: ["Web", "Mobile", "Desktop", "Cloud/SaaS", "API"],
    tools: ["Selenium", "JUnit", "TestNG", "Cypress", "Postman", "BrowserStack", "Appium", "Jenkins"],
    impact: [
      {
        label: "Fewer regressions in production",
        body: "Systematic re-testing catches breakage introduced by unrelated changes before release.",
      },
      {
        label: "Safe, continuous delivery",
        body: "Teams can release frequently without re-litigating whether last week's fix still holds.",
      },
      {
        label: "Less post-release firefighting",
        body: "Fewer surprise breakages means fewer emergency hotfixes after deployment.",
      },
    ],
  },
  {
    slug: "integration-testing",
    title: "Integration Testing",
    intro:
      "We validate how different modules, services, and systems interact. Individual components can work perfectly in isolation and still break the moment they are connected.",
    whyHeading: "Why Your Software Needs Integration Testing",
    whyBody:
      "Modern applications are built from many moving parts (internal modules, third-party APIs, message queues, and shared databases), and most production incidents happen at the seams between them, not inside any single component. Integration testing identifies data mismatches, interface contract violations, and communication failures early, before they cascade into user-facing outages. NForceOne tests the connections in your architecture as rigorously as the components themselves.",
    whyPoints: [
      "Catches data mismatches between systems early",
      "Validates API and interface contracts",
      "Ensures reliable communication across services",
      "Reduces production incidents caused by integration failures",
    ],
    serviceTypes: [
      {
        title: "Websites & Web Apps",
        body: "Verifying data flow between frontend, backend, APIs, and third-party tools.",
      },
      {
        title: "Enterprise Systems",
        body: "Testing finance, HR, and sales module integrations, including workflows, data syncs, and role-based access.",
      },
      {
        title: "Cloud & Microservices Architectures",
        body: "Verifying API and message-queue stability, data integrity, and error handling across distributed services.",
      },
      {
        title: "Third-Party & Vendor Integrations",
        body: "Validating payment, shipping, auth, and analytics integrations behave correctly under real conditions.",
      },
    ],
    platforms: ["Web", "Enterprise", "Cloud", "Microservices", "API"],
    tools: ["Selenium", "JUnit", "TestComplete", "Cypress", "Postman", "BrowserStack", "REST Assured", "TestNG"],
    impact: [
      {
        label: "Fewer interface defects",
        body: "Data-mismatch and contract-violation bugs are caught before they reach production.",
      },
      {
        label: "Reliable end-to-end data flow",
        body: "Confidence that data moves correctly across every system boundary.",
      },
      {
        label: "Less integration-related downtime",
        body: "Fewer outages traced back to a broken connection between services.",
      },
    ],
  },
  {
    slug: "compatibility-testing",
    title: "Compatibility Testing",
    intro:
      "We ensure your software performs consistently across different devices, browsers, operating systems, and network environments.",
    whyHeading: "Why Your Software Needs Compatibility Testing",
    whyBody:
      "Your users do not all share the same browser, device, operating system, or network, and software that only works in one configuration quietly excludes everyone else. Compatibility testing verifies consistent behavior across the real-world combinations your audience actually uses, catching environment-specific defects that a single-configuration test pass will never reveal. NForceOne tests across the browser, OS, and device matrix that matches your actual user base.",
    whyPoints: [
      "Consistent experience across browsers and operating systems",
      "Confidence across screen sizes and resolutions",
      "Fewer environment-specific defects",
      "A broader, more reachable audience",
    ],
    serviceTypes: [
      {
        title: "Websites & Web Apps",
        body: "Cross-browser verification across Chrome, Safari, Firefox, and Edge, and across device screen sizes.",
      },
      {
        title: "Desktop Applications",
        body: "Testing across different operating system versions and hardware configurations.",
      },
      {
        title: "Mobile Applications",
        body: "Verification across devices, screen resolutions, OS versions, and hardware configurations.",
      },
      {
        title: "Cloud-Based Platforms",
        body: "Confirming seamless access across browsers and devices in hybrid and multi-cloud environments.",
      },
    ],
    platforms: ["Web", "Desktop", "Mobile", "Cloud"],
    tools: ["Selenium", "BrowserStack", "Sauce Labs", "LambdaTest", "JUnit", "Fiddler", "VirtualBox", "CrossBrowserTesting"],
    impact: [
      {
        label: "Fewer environment-specific defects",
        body: "Issues tied to a specific browser, OS, or device are caught before launch, not after complaints roll in.",
      },
      {
        label: "Broader audience reach",
        body: "A consistent experience across environments means no segment of your audience is quietly underserved.",
      },
      {
        label: "Fewer environment-related tickets",
        body: "Support volume drops when the product behaves the same way everywhere it runs.",
      },
    ],
  },
  {
    slug: "pos-testing",
    title: "POS Testing",
    intro:
      "In retail and hospitality, every transaction matters. Our POS testing ensures system stability, seamless hardware integration, and secure checkout experiences.",
    whyHeading: "Why Your POS System Needs Software Testing",
    whyBody:
      "A point-of-sale system fails in the worst possible moment: mid-transaction, in front of a customer, during your busiest hour. POS testing validates the full stack behind every sale: the software logic, the hardware it talks to, and the network it depends on, so checkout stays reliable when it matters most. NForceOne tests POS systems the way they are actually used, across terminals, card readers, and network conditions found on a real retail floor.",
    whyPoints: [
      "Prevents transaction failures at checkout",
      "Validates hardware-software integration for scanners, printers, and card readers",
      "Ensures PCI-compliant, secure transactions",
      "Reduces downtime during peak retail hours",
    ],
    serviceTypes: [
      {
        title: "Retail POS",
        body: "Traditional checkout terminals and desktop point-of-sale systems used across storefronts.",
      },
      {
        title: "Mobile POS",
        body: "Tablet and smartphone-based POS systems built for on-the-go and line-busting sales.",
      },
      {
        title: "Omnichannel POS",
        body: "Unified systems that keep online and in-store inventory, pricing, and orders in sync.",
      },
      {
        title: "Restaurant & Self-Service Kiosk POS",
        body: "Table-side ordering, kitchen display integration, tip workflows, and touchscreen self-checkout.",
      },
    ],
    platforms: ["Retail Terminals", "Mobile/Tablet POS", "Self-Service Kiosks", "Cloud/Omnichannel", "Payment Hardware"],
    tools: ["Selenium", "Appium", "JMeter", "Postman", "Wireshark", "BrowserStack", "TestComplete", "Charles Proxy"],
    impact: [
      {
        label: "Fewer checkout failures",
        body: "Transaction and hardware failures are caught before they happen during peak retail hours.",
      },
      {
        label: "Reliable hardware integration",
        body: "Scanners, printers, and card readers work together consistently across terminals.",
      },
      {
        label: "Stronger transaction security",
        body: "PCI-aligned testing reduces compliance risk at every point of sale.",
      },
    ],
  },
  {
    slug: "payment-testing",
    title: "Payment Testing",
    intro:
      "Your payment system shapes user trust. Our testing ensures secure, seamless transactions across payment gateways, billing flows, and every channel you sell through.",
    whyHeading: "Why Your Payment System Needs Software Testing",
    whyBody:
      "Payments are the one part of your product users cannot afford to distrust: a failed, duplicated, or insecure transaction damages your relationship with a customer instantly. Payment testing verifies gateway integrations, mobile and in-app purchase flows, and recurring billing logic against real-world edge cases: declined cards, timeouts, retries, and refunds. NForceOne tests every step of the transaction lifecycle so payment failures never become the reason you lose a customer.",
    whyPoints: [
      "Prevents failed or duplicate transactions",
      "Validates PCI-DSS security and data handling",
      "Ensures reliable gateway and billing integrations",
      "Protects customer trust at the moment of payment",
    ],
    serviceTypes: [
      {
        title: "Payment Gateways",
        body: "Testing integrations with Stripe, PayPal, Razorpay, Adyen, and other leading payment processors.",
      },
      {
        title: "Mobile Payment Apps",
        body: "Verifying in-app purchases, digital wallets, and tap-to-pay flows across devices.",
      },
      {
        title: "POS Card-Present Transactions",
        body: "Testing card-present payment flows across retail, hospitality, and event environments.",
      },
      {
        title: "Subscriptions & Recurring Billing",
        body: "Validating auto-renewals, proration, invoicing, and account-management logic.",
      },
    ],
    platforms: ["Web", "Mobile", "POS", "Cloud", "API"],
    tools: ["Postman", "JMeter", "Stripe CLI", "PayPal Sandbox", "OWASP ZAP", "Fiddler", "BrowserStack", "Selenium"],
    impact: [
      {
        label: "Fewer failed transactions",
        body: "Edge cases like timeouts, retries, and declines are handled correctly before launch.",
      },
      {
        label: "Faster PCI-DSS readiness",
        body: "Security-focused testing shortens the path to compliance audits.",
      },
      {
        label: "Higher checkout conversion",
        body: "A reliable payment flow keeps customers from abandoning cart at the final step.",
      },
    ],
  },
  {
    slug: "iot-testing",
    title: "IoT Testing",
    intro:
      "The IoT bridges digital and physical realms, and users expect perfection. Our end-to-end testing ensures reliable performance across devices, networks, and platforms.",
    whyHeading: "Why Your IoT Application Needs Software Testing",
    whyBody:
      "Connected devices add layers of complexity traditional software does not have: unreliable networks, constrained hardware, firmware versions in the field, and data that has to survive the trip from sensor to cloud intact. IoT testing validates that entire chain, from device to gateway to backend, under the real conditions those devices operate in. NForceOne tests connectivity, protocol handling, and security across the full IoT stack, not just the app on top of it.",
    whyPoints: [
      "Validates device-to-cloud data integrity",
      "Tests performance under real network conditions",
      "Uncovers security gaps in connected devices",
      "Ensures interoperability across device ecosystems",
    ],
    serviceTypes: [
      {
        title: "Healthcare Devices & Wearables",
        body: "Testing wearables, monitoring tools, and biosensors for data accuracy and reliability.",
      },
      {
        title: "Smart Home & Energy Systems",
        body: "Testing connected lighting, security, appliance control, smart meters, and thermostats.",
      },
      {
        title: "Fleet & Asset Tracking",
        body: "Validating GPS devices, telematics, and tracking dashboards under real-world connectivity conditions.",
      },
      {
        title: "Industrial & Agricultural Monitoring",
        body: "Testing smart irrigation, soil sensors, and climate-control systems in field conditions.",
      },
    ],
    platforms: ["Connected Devices", "Edge/Gateway", "Cloud", "Mobile Companion Apps", "Network/Protocol"],
    tools: ["WireShark", "Tcpdump", "Shodan", "SOASTA", "Selenium", "Ranorex", "LoadRunner", "JMeter"],
    impact: [
      {
        label: "Fewer connectivity failures",
        body: "Device-to-cloud data pipelines are validated under real network conditions before deployment.",
      },
      {
        label: "Stronger device security",
        body: "Security testing across the IoT stack closes gaps that are easy to overlook in connected hardware.",
      },
      {
        label: "Reliable cross-protocol performance",
        body: "Consistent behavior across the networks and protocols your devices actually use in the field.",
      },
    ],
  },
  {
    slug: "mobile-app-testing",
    title: "Mobile App Testing",
    intro:
      "Exceptional mobile experiences are engineered. Our rigorous app testing ensures flawless performance across platforms, OS versions, and devices.",
    whyHeading: "Why Your Mobile Application Needs Software Testing",
    whyBody:
      "Modern users demand speed, security, and seamless compatibility from every app they install, and a single crash or slow launch is often enough to trigger an uninstall. End-to-end mobile testing safeguards your app from bugs, validates performance across OS versions, and prepares it for a smooth app-store review. NForceOne tests native, cross-platform, and hybrid apps across the release pipeline, from first build to store submission.",
    whyPoints: [
      "Flawless performance across iOS and Android",
      "Fewer crashes and negative app-store reviews",
      "Faster certification and store approval",
      "Consistent experience across OS versions",
    ],
    serviceTypes: [
      {
        title: "Native Mobile Apps",
        body: "Testing iOS and Android apps built directly against platform SDKs.",
      },
      {
        title: "Cross-Platform Apps",
        body: "Testing apps built with Flutter, React Native, and Xamarin for platform-specific inconsistencies.",
      },
      {
        title: "Mobile Web Apps",
        body: "Testing browser-based, responsive mobile experiences across devices.",
      },
      {
        title: "Hybrid Mobile Apps",
        body: "Testing apps that combine web technology with native containers for consistent behavior.",
      },
    ],
    platforms: ["iOS", "Android", "Tablets", "Mobile Web", "Cross-Platform Frameworks"],
    tools: ["Appium", "Selenium", "LoadRunner", "JMeter", "Jenkins", "Postman", "UI Automator", "TestLink"],
    impact: [
      {
        label: "Higher app-store ratings",
        body: "Fewer bugs reaching production means better reviews and stronger retention.",
      },
      {
        label: "Fewer post-release crashes",
        body: "Thorough pre-release testing catches instability before users find it.",
      },
      {
        label: "Faster release cycles",
        body: "Streamlined testing across OS versions gets builds to the store faster.",
      },
    ],
  },
  {
    slug: "mobile-and-device-testing",
    title: "Mobile & Device Testing",
    intro:
      "Comprehensive mobile and device testing covering manual and automation testing, network validation, hardware integrations, and distributed testing at scale.",
    whyHeading: "Why Device & Mobile Testing Matters",
    whyBody:
      "Mobile ecosystems are fragmented across devices, OS versions, screen sizes, networks, and hardware dependencies in a way desktop software never was. A feature that works flawlessly on a flagship phone can fail entirely on a mid-range device with a weak signal. NForceOne tests across real device farms and hardware integrations to give you confidence that your app performs consistently, not just on the handful of devices your team happens to own.",
    whyPoints: [
      "Confidence across hundreds of device and OS combinations",
      "Validates hardware integrations like camera, sensors, and scanners",
      "Tests real network conditions, not just office Wi-Fi",
      "Scales testing across real device farms",
    ],
    serviceTypes: [
      {
        title: "iOS & Android Device Coverage",
        body: "Testing across OS versions, OEM fragmentation, and App Store/Play Store readiness.",
      },
      {
        title: "Custom Device & Hardware Integrations",
        body: "Validating device-specific features, cameras, sensors, and scanners against enterprise APIs.",
      },
      {
        title: "Consumer & Enterprise Mobile Apps",
        body: "End-to-end validation of user flows, performance, and usability across app types.",
      },
      {
        title: "Cross-Platform Framework Validation",
        body: "Testing Flutter, React Native, and hybrid frameworks for platform-consistent behavior.",
      },
    ],
    platforms: ["iOS Devices", "Android Devices", "Wearables", "Enterprise Hardware", "Device Farms"],
    tools: ["Appium", "Selenium", "BrowserStack Device Farms", "Charles Proxy", "Postman", "JMeter", "Firebase Test Lab", "Xcode & Android Studio"],
    impact: [
      {
        label: "Fewer device-specific defects",
        body: "Real device-farm coverage catches issues that emulators and a single test phone will miss.",
      },
      {
        label: "Faster device-farm cycles",
        body: "Parallelized testing across devices shortens the path to release.",
      },
      {
        label: "Reliable performance under real networks",
        body: "Apps are validated under the network conditions users actually experience, not ideal ones.",
      },
    ],
  },
  {
    slug: "web-app-testing",
    title: "Web App Testing",
    intro:
      "Delivering a fast, secure, and intuitive web experience is no longer optional; even small issues can cost you traffic, reputation, and revenue.",
    whyHeading: "Why Your Website or Web Application Needs Software Testing",
    whyBody:
      "In a world full of polished digital experiences, users will not tolerate a slow, buggy, or unreliable website; they will simply leave, and often not come back. Web app testing covers everything from marketing sites to complex single-page applications, verifying functionality, performance, and security across the browsers and devices your audience actually uses. NForceOne tests the full spectrum of your web presence so it holds up under real traffic and real scrutiny.",
    whyPoints: [
      "Prevents lost traffic and revenue from bugs",
      "Validates performance under real user load",
      "Ensures security against common web vulnerabilities",
      "Delivers a consistent experience across browsers",
    ],
    serviceTypes: [
      {
        title: "Websites",
        body: "Testing marketing sites, e-commerce stores, and corporate portals for functionality and performance.",
      },
      {
        title: "Web Portals",
        body: "Testing login systems, admin panels, and multi-role access for security and reliability.",
      },
      {
        title: "Web Applications",
        body: "Testing single-page applications, dashboards, and complex frontend logic.",
      },
      {
        title: "SaaS Applications",
        body: "Testing scalable, multi-tenant platforms across configuration and permission scenarios.",
      },
    ],
    platforms: ["Web", "SaaS", "Portals", "API", "Cloud"],
    tools: ["Selenium", "Ranorex", "TestComplete", "BrowserStack", "SoapUI", "TestProject", "NetSparker", "Katalon Studio"],
    impact: [
      {
        label: "Fewer launch-day defects",
        body: "Thorough pre-launch testing catches issues before your first users do.",
      },
      {
        label: "Improved performance and SEO",
        body: "Faster, more reliable pages improve both user experience and search ranking.",
      },
      {
        label: "Higher conversion and retention",
        body: "A smooth, trustworthy web experience keeps visitors from bouncing to a competitor.",
      },
    ],
  },
  {
    slug: "cloud-testing",
    title: "Cloud Testing",
    intro:
      "Cloud apps demand peak performance, airtight security, and scalable reliability. Our testing simulates real-world conditions to validate resilience and meet your SLAs.",
    whyHeading: "Why Your Cloud Application Needs Software Testing",
    whyBody:
      "Cloud environments introduce variables that on-premise software never had to handle: elastic scaling, multi-tenant isolation, and dependency on infrastructure you do not fully control. Cloud testing validates that your application holds up under variable load, keeps tenant data properly isolated, and meets the SLAs you have promised customers. NForceOne tests SaaS, IaaS, PaaS, and NaaS workloads under conditions that mirror production, not a clean staging environment.",
    whyPoints: [
      "Validates resilience under variable load",
      "Confirms multi-tenant data isolation and security",
      "Ensures SLA and uptime commitments are met",
      "Tests failover and disaster-recovery scenarios",
    ],
    serviceTypes: [
      {
        title: "Software as a Service (SaaS)",
        body: "Testing multi-tenant applications through frequent updates and role-based workflows.",
      },
      {
        title: "Infrastructure as a Service (IaaS)",
        body: "Testing virtualized compute, storage, and networking under real provisioning scenarios.",
      },
      {
        title: "Platform as a Service (PaaS)",
        body: "Testing application deployment, API integrations, and DevOps pipeline reliability.",
      },
      {
        title: "Network as a Service (NaaS)",
        body: "Testing VPNs, firewalls, and bandwidth provisioning across hybrid environments.",
      },
    ],
    platforms: ["AWS", "Azure", "GCP", "SaaS", "Hybrid Cloud"],
    tools: ["Nessus", "LoadStorm", "Testsigma", "BlazeMeter", "WireShark", "SOASTA CloudTest", "AppPerfect", "Xamarin Test Cloud"],
    impact: [
      {
        label: "Consistent SLA compliance",
        body: "Uptime and performance commitments are validated before they are promised to customers.",
      },
      {
        label: "Fewer cloud security gaps",
        body: "Multi-tenant isolation and access controls are verified, not assumed.",
      },
      {
        label: "Reliable performance under load",
        body: "Elastic scaling is tested against real variable-demand scenarios.",
      },
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    intro:
      "Custom software that streamlines operations, enhances customer experiences, and drives long-term growth, built around your business, not a vendor's roadmap.",
    whyHeading: "Why Your Business Needs Professional Software Development",
    whyBody:
      "Off-the-shelf software forces your business to adapt to someone else's workflow. Custom development flips that: your processes, data model, and integrations shape the software, not the other way around. NForceOne builds enterprise-grade applications engineered for your actual scale and requirements, so the system you get is one you own, extend, and grow with for years, not one you outgrow in eighteen months.",
    whyPoints: [
      "Software built around your exact workflows",
      "Scales with your business, not against it",
      "Eliminates the licensing constraints of off-the-shelf tools",
      "Long-term ownership and maintainability of your codebase",
    ],
    serviceTypes: [
      {
        title: "Enterprise Applications",
        body: "Large-scale systems that support complex operations, internal workflows, and business processes.",
      },
      {
        title: "Self-Service Portals",
        body: "Customer and employee-facing portals that enable independent task completion at scale.",
      },
      {
        title: "Omnichannel Platforms",
        body: "Unified systems that deliver a consistent experience across web, mobile, and in-store touchpoints.",
      },
      {
        title: "Custom Product Development",
        body: "End-to-end product builds that take your vision from concept to production release.",
      },
    ],
    platforms: ["Web", "Enterprise Systems", "Cloud", "API", "On-Prem"],
    tools: ["Visual Studio Code", "IntelliJ IDEA", "Git & GitHub", "Docker", "Kubernetes", "Postman", "Jenkins", "AWS/Azure/GCP"],
    impact: [
      {
        label: "Faster time-to-market",
        body: "New capabilities ship faster when the software is built around your actual workflows.",
      },
      {
        label: "Lower long-term costs",
        body: "Owning your codebase eliminates recurring licensing fees tied to off-the-shelf constraints.",
      },
      {
        label: "Software that scales with you",
        body: "Architecture designed for your growth trajectory, not a generic use case.",
      },
    ],
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    intro:
      "We design and deploy AI-powered solutions that automate processes, unlock data-driven insights, and enhance decision-making across your business.",
    whyHeading: "Why Your Business Needs Artificial Intelligence Solutions",
    whyBody:
      "AI has moved from experimental to expected; customers anticipate personalized recommendations, instant support, and systems that get smarter over time. Businesses that build AI into their core processes gain a durable edge in speed, cost, and customer experience over those that do not. NForceOne designs and deploys machine learning and generative AI solutions matched to your actual data and business problems, not generic off-the-shelf models.",
    whyPoints: [
      "Automates repetitive, high-volume decisions",
      "Unlocks predictive insight from data you already have",
      "Personalizes customer experiences at scale",
      "Builds a durable competitive advantage",
    ],
    serviceTypes: [
      {
        title: "Predictive Analytics Platforms",
        body: "Models that forecast outcomes and trends from your historical data.",
      },
      {
        title: "Intelligent Virtual Assistants & Chatbots",
        body: "Conversational AI that automates support and engagement across channels.",
      },
      {
        title: "Computer Vision Applications",
        body: "Object detection, facial recognition, and automated quality-inspection systems.",
      },
      {
        title: "Custom AI/ML Models",
        body: "Purpose-built models trained on your data to solve domain-specific business challenges.",
      },
    ],
    platforms: ["Web", "Mobile", "Cloud", "On-Prem", "Edge"],
    tools: ["TensorFlow", "PyTorch", "Scikit-Learn", "LangChain & OpenAI APIs", "Apache Spark/MLlib", "Amazon SageMaker", "Azure Cognitive Services", "MLflow"],
    impact: [
      {
        label: "Faster, data-driven decisions",
        body: "Predictive models turn historical data into forward-looking business insight.",
      },
      {
        label: "Reduced manual workload",
        body: "Automation of routine decisions frees teams for higher-value work.",
      },
      {
        label: "Personalized experiences at scale",
        body: "AI-driven personalization improves engagement and retention across your customer base.",
      },
    ],
  },
  {
    slug: "pega-development",
    title: "PEGA Development",
    intro:
      "Our PEGA-certified experts design, build, and optimize enterprise-grade BPM and CRM solutions, streamlining workflows with intelligent automation.",
    whyHeading: "Why Your Business Needs PEGA Development",
    whyBody:
      "Complex, rules-driven business processes are exactly what Pega's low-code platform was built to automate, but only when it is architected correctly by people who understand its case-management model deeply. NForceOne's certified Pega developers build scalable applications that automate complex processes, unify case handling across departments, and deliver a genuinely better end-user experience than the legacy systems they replace.",
    whyPoints: [
      "Low-code speed without sacrificing enterprise scale",
      "Unified case management across departments",
      "Faster automation of complex business rules",
      "Seamless integration with legacy systems",
    ],
    serviceTypes: [
      {
        title: "Customer Service Applications",
        body: "Omni-channel service portals and case-management applications for support teams.",
      },
      {
        title: "Workflow Automation Solutions",
        body: "Replacing manual, multi-step processes with rules-driven automated workflows.",
      },
      {
        title: "BPM Applications",
        body: "End-to-end business process management applications built on Pega's decisioning engine.",
      },
      {
        title: "Legacy Modernization with PEGA",
        body: "Migrating aging legacy systems onto Pega's modern, low-code architecture.",
      },
    ],
    platforms: ["Web", "Mobile", "Cloud", "On-Prem", "Enterprise Systems"],
    tools: ["App Studio", "Dev Studio", "PEGA Deployment Manager", "PegaUnit", "Pega API Explorer", "Pega Mobile Builder", "Pega Predictive Diagnostic Cloud", "Pega App Factory"],
    impact: [
      {
        label: "Faster case resolution",
        body: "Automated case routing and decisioning cut resolution times significantly.",
      },
      {
        label: "Reduced manual process overhead",
        body: "Rules-driven automation replaces error-prone manual handoffs.",
      },
      {
        label: "Accelerated delivery through reuse",
        body: "Low-code components and App Factory patterns speed up every new build.",
      },
    ],
  },
  {
    slug: "pega-testing",
    title: "Pega Testing",
    intro:
      "Robust testing solutions for Pega applications, validating stable performance, complete functionality, and a consistent experience across every case-management workflow.",
    whyHeading: "Why Your Pega Applications Need Specialized Testing",
    whyBody:
      "Pega's rules-driven, case-management architecture behaves differently from conventional web applications, and it deserves testing tuned to that architecture rather than a generic web QA checklist. Business rules, decisioning strategies, and case-lifecycle transitions all need dedicated verification, since a single misconfigured rule can silently affect thousands of cases. NForceOne combines Pega-specific test tooling with broader QA practice to validate applications built on App Studio and App Factory alike.",
    whyPoints: [
      "Validates complex case-management workflows and rules",
      "Confirms stable performance under enterprise load",
      "Ensures cross-platform compatibility of Pega-built apps",
      "Protects sensitive case data and access controls",
    ],
    serviceTypes: [
      {
        title: "Case Management & Workflow Testing",
        body: "Verifying case-lifecycle transitions, routing, and SLAs behave correctly end-to-end.",
      },
      {
        title: "Business Rules & Decisioning Validation",
        body: "Testing decisioning strategies and rule configurations against expected business logic.",
      },
      {
        title: "Integration Testing",
        body: "Validating Pega's connections to legacy systems, APIs, and third-party services.",
      },
      {
        title: "Security & Data Protection Testing",
        body: "Verifying access controls and sensitive case data are protected across roles and channels.",
      },
    ],
    platforms: ["Web", "Mobile", "Cloud", "On-Prem", "Enterprise Systems"],
    tools: ["PegaUnit", "Selenium", "Postman", "SoapUI", "JMeter", "BrowserStack", "JUnit", "Pega Deployment Manager"],
    impact: [
      {
        label: "Fewer case-management defects",
        body: "Rules and workflows are validated before they affect live cases.",
      },
      {
        label: "Faster release certification",
        body: "Structured testing shortens the path to production for Pega releases.",
      },
      {
        label: "Reduced automation risk",
        body: "Rules-driven automation is verified before it runs at enterprise scale.",
      },
    ],
  },
  {
    slug: "devops",
    title: "DevOps",
    intro:
      "We help businesses adopt modern DevOps practices, transforming software delivery into a fast, repeatable, and reliable process from commit to production.",
    whyHeading: "Why Your Business Needs DevOps",
    whyBody:
      "Speed and stability are usually treated as trade-offs: ship faster and something breaks, or protect stability and releases slow to a crawl. DevOps removes that trade-off by automating the path from code to production: continuous integration, infrastructure as code, and continuous monitoring working together so releases are both frequent and safe. NForceOne builds DevOps pipelines and cloud infrastructure that let your team ship confidently, every day if needed.",
    whyPoints: [
      "Faster, more frequent releases with less risk",
      "Automated infrastructure that scales on demand",
      "Continuous monitoring catches issues before users do",
      "Reduced deployment failures and faster rollback",
    ],
    serviceTypes: [
      {
        title: "CI/CD Pipeline Design & Automation",
        body: "Automated build, test, and deployment pipelines that turn every commit into a releasable artifact.",
      },
      {
        title: "Infrastructure as Code & Cloud Provisioning",
        body: "Version-controlled, repeatable infrastructure that eliminates manual environment drift.",
      },
      {
        title: "Containerization & Orchestration",
        body: "Packaging and orchestrating workloads with Docker and Kubernetes for portability and scale.",
      },
      {
        title: "Monitoring, Logging & Incident Response",
        body: "Real-time observability and alerting so issues are caught and resolved before they become outages.",
      },
    ],
    platforms: ["AWS", "Azure", "GCP", "On-Prem", "Kubernetes"],
    tools: ["Jenkins", "GitLab CI", "Terraform", "Docker", "Kubernetes", "Ansible", "Prometheus", "Grafana"],
    impact: [
      {
        label: "Faster, more frequent releases",
        body: "Automated pipelines turn deployment from a weekly event into a routine one.",
      },
      {
        label: "Fewer deployment failures",
        body: "Infrastructure as code and automated testing catch problems before they reach production.",
      },
      {
        label: "Lower infrastructure costs",
        body: "Automated scaling and provisioning eliminate waste from manually managed environments.",
      },
    ],
  },
  {
    slug: "database-management",
    title: "Database Management",
    intro:
      "A poorly maintained database creates risk, hinders scalability, and can cost you customers. NForceOne's database management services deliver peace of mind and peak performance.",
    whyHeading: "Why Your Business Needs Professional Database Management",
    whyBody:
      "Your database is the foundation everything else in your application depends on, and neglecting it does not show up immediately, it shows up as an outage or a data-loss incident months later. Professional database management means proactive tuning, backup verification, and security hardening before problems surface, not reactive firefighting after they do. NForceOne manages relational, NoSQL, and cloud-managed databases with the same discipline your production application deserves.",
    whyPoints: [
      "Prevents costly downtime and data loss",
      "Optimizes query performance at scale",
      "Strengthens security and compliance posture",
      "Frees your team from routine database administration",
    ],
    serviceTypes: [
      {
        title: "Relational Databases (RDBMS)",
        body: "Management of MySQL, PostgreSQL, and SQL Server for transactional applications.",
      },
      {
        title: "NoSQL Databases",
        body: "Management of MongoDB, Redis, and similar systems for unstructured or rapidly changing data.",
      },
      {
        title: "Cloud-Managed Databases",
        body: "Administration of Amazon RDS, Azure SQL, and Firebase-managed database services.",
      },
      {
        title: "Distributed & In-Memory Databases",
        body: "Management of Cassandra, CockroachDB, and Redis for high availability and real-time performance.",
      },
    ],
    platforms: ["AWS", "Azure", "GCP", "On-Prem", "Hybrid"],
    tools: ["MySQL Workbench", "pgAdmin", "MongoDB Compass", "phpMyAdmin", "DBeaver", "AWS RDS Console", "RedisInsight", "Azure Data Studio"],
    impact: [
      {
        label: "Reduced downtime risk",
        body: "Proactive monitoring and backup verification prevent costly outages and data loss.",
      },
      {
        label: "Faster query performance",
        body: "Ongoing tuning keeps performance steady as data volume grows.",
      },
      {
        label: "Lower total cost of ownership",
        body: "Right-sized infrastructure and proactive maintenance reduce unplanned spend.",
      },
    ],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    intro:
      "Smarter decisions start with clearer data. Our analytics frameworks transform information into action, from rapid dashboards to predictive modeling pipelines.",
    whyHeading: "Why Your Business Needs Data Analytics",
    whyBody:
      "Most businesses generate more data than they actually use. It sits scattered across systems, updated on inconsistent schedules, interpreted differently by every team that touches it. Data analytics turns that raw information into decision-ready insight: real-time dashboards instead of static reports, and predictive models that anticipate trends instead of just describing the past. NForceOne builds analytics pipelines that unify your data sources into a single source of truth your teams can actually act on.",
    whyPoints: [
      "Turns raw data into decision-ready insight",
      "Real-time dashboards replace static, outdated reports",
      "Predictive models anticipate trends before competitors do",
      "Unifies data from disparate sources into one view",
    ],
    serviceTypes: [
      {
        title: "BI Dashboards & Reporting",
        body: "Real-time dashboards that give teams a live view of the metrics that matter to them.",
      },
      {
        title: "Predictive & Prescriptive Modeling",
        body: "Statistical and machine-learning models that forecast outcomes and recommend actions.",
      },
      {
        title: "Data Visualization & Self-Service Analytics",
        body: "Tools that let business users explore data themselves without waiting on a report queue.",
      },
      {
        title: "Data Warehousing & Pipeline Integration",
        body: "Consolidating data from multiple sources into a governed, queryable warehouse.",
      },
    ],
    platforms: ["AWS", "Azure", "GCP", "On-Prem", "Cloud Data Warehouses"],
    tools: ["Power BI", "Tableau", "Looker", "Python (Pandas/NumPy)", "Apache Airflow", "Snowflake", "dbt", "SQL"],
    impact: [
      {
        label: "Faster, data-backed decisions",
        body: "Teams act on live dashboards instead of waiting on static reports.",
      },
      {
        label: "Shorter reporting turnaround",
        body: "Automated pipelines cut the manual effort behind every recurring report.",
      },
      {
        label: "Higher forecast accuracy",
        body: "Predictive models improve planning across sales, operations, and finance.",
      },
    ],
  },
  {
    slug: "big-data",
    title: "Big Data",
    intro:
      "Distributed data engineering built for scale, turning massive, high-velocity data volumes into pipelines you can trust, in batch and in real time.",
    whyHeading: "Why Your Business Needs Big Data Engineering",
    whyBody:
      "As data volume, velocity, and variety outgrow what traditional databases and single-server pipelines can handle, you need distributed architectures purpose-built to ingest, process, and store data reliably at scale. Big data engineering is what makes real-time analytics, machine learning, and enterprise reporting possible on datasets too large or too fast-moving for conventional tools. NForceOne designs data lakes, streaming pipelines, and distributed processing systems that scale with your data, not against it.",
    whyPoints: [
      "Processes massive, high-velocity data volumes reliably",
      "Powers real-time analytics and streaming use cases",
      "Scales horizontally as data volume grows",
      "Reduces cost through efficient distributed storage",
    ],
    serviceTypes: [
      {
        title: "Data Lake & Warehouse Architecture",
        body: "Designing scalable storage architectures that keep raw and structured data accessible and governed.",
      },
      {
        title: "Batch & Real-Time ETL Pipelines",
        body: "Building pipelines that move and transform data reliably, whether on a schedule or in real time.",
      },
      {
        title: "Distributed Processing & Streaming",
        body: "Processing high-volume datasets and event streams across distributed compute clusters.",
      },
      {
        title: "Data Governance & Quality at Scale",
        body: "Implementing validation, lineage, and quality checks that hold up at massive data volume.",
      },
    ],
    platforms: ["AWS", "Azure", "GCP", "On-Prem", "Hadoop/Spark Clusters"],
    tools: ["Apache Hadoop", "Apache Spark", "Apache Kafka", "Apache Airflow", "Snowflake", "Databricks", "AWS EMR", "Apache NiFi"],
    impact: [
      {
        label: "Reliable processing at scale",
        body: "Distributed architectures handle data volumes that would overwhelm conventional pipelines.",
      },
      {
        label: "Real-time insight from streaming data",
        body: "Event-driven pipelines surface insight the moment data arrives, not hours later.",
      },
      {
        label: "Lower cost per terabyte processed",
        body: "Efficient distributed storage and compute reduce the cost of processing data at scale.",
      },
    ],
  },
  {
    slug: "digital-app-development",
    title: "Digital App Development",
    intro:
      "We design and develop intuitive, high-performing web and mobile applications that deliver seamless customer experiences and accelerate digital transformation.",
    whyHeading: "Why Your Business Needs Digital App Development",
    whyBody:
      "Customers now expect every interaction with your brand to feel as polished as the best apps they use daily; anything less and they quietly go looking for an alternative. Digital app development builds the customer-facing web and mobile products that carry your brand into that expectation: fast, intuitive, and designed around real user journeys rather than internal org charts. NForceOne pairs UX-led design with modern web and mobile engineering to ship digital products people actually want to use.",
    whyPoints: [
      "Seamless experiences across web and mobile touchpoints",
      "Faster digital transformation without legacy drag",
      "Higher engagement through user-centered design",
      "Built to integrate with your existing systems",
    ],
    serviceTypes: [
      {
        title: "Customer-Facing Web Applications",
        body: "Fast, responsive web products designed around real customer journeys, not internal workflows.",
      },
      {
        title: "Native & Cross-Platform Mobile Apps",
        body: "Mobile experiences built for iOS and Android, whether native or cross-platform.",
      },
      {
        title: "Progressive Web Apps (PWAs)",
        body: "App-like experiences delivered through the browser, with offline support and installability.",
      },
      {
        title: "UX-Led Digital Product Design",
        body: "Design work grounded in real user research, not assumptions about what customers want.",
      },
    ],
    platforms: ["Web", "iOS", "Android", "PWA", "Cloud"],
    tools: ["React & Next.js", "React Native", "Flutter", "Figma", "Node.js", "GraphQL", "Firebase", "AWS/Azure/GCP"],
    impact: [
      {
        label: "Faster digital product launches",
        body: "Modern frameworks and reusable components shorten time from concept to release.",
      },
      {
        label: "Higher customer engagement",
        body: "User-centered design increases time-in-app and repeat usage.",
      },
      {
        label: "Less technical debt from day one",
        body: "Modern architecture avoids the shortcuts that slow teams down later.",
      },
    ],
  },
  {
    slug: "intelligent-rpa",
    title: "Intelligent RPA",
    intro:
      "We implement AI-powered robotic process automation that streamlines repetitive tasks, boosts accuracy, and enhances productivity across your enterprise operations.",
    whyHeading: "Why Your Business Needs Intelligent RPA",
    whyBody:
      "Repetitive, rule-based work (data entry, invoice processing, reconciliations) drains staff time and is exactly where human error creeps in from fatigue and monotony, not lack of skill. Intelligent RPA automates those processes with software bots that run around the clock, and augments them with AI for tasks that require judgment, like reading unstructured documents. NForceOne implements RPA that integrates directly with your existing ERP, CRM, and line-of-business systems, so automation slots into how your business already runs.",
    whyPoints: [
      "Eliminates repetitive manual work at scale",
      "Reduces human error in rule-based processes",
      "Runs continuously without added headcount",
      "Adds AI for judgment-based, cognitive automation",
    ],
    serviceTypes: [
      {
        title: "Process Discovery & Automation Assessment",
        body: "Identifying which processes deliver the highest ROI when automated, before any bots are built.",
      },
      {
        title: "Attended & Unattended Bot Development",
        body: "Building bots that either assist employees in real time or run fully autonomously in the background.",
      },
      {
        title: "Intelligent Document Processing",
        body: "Combining OCR and AI to extract and validate data from unstructured documents and forms.",
      },
      {
        title: "RPA + AI/ML Integration",
        body: "Layering machine learning onto RPA workflows to handle exceptions that pure rule-based bots cannot.",
      },
    ],
    platforms: ["Web", "Desktop", "Cloud", "On-Prem", "Enterprise Systems (ERP/CRM)"],
    tools: ["UiPath", "Automation Anywhere", "Blue Prism", "Microsoft Power Automate", "Python", "Azure Form Recognizer", "SAP/Salesforce Connectors", "Git"],
    impact: [
      {
        label: "Faster process turnaround",
        body: "Bots complete repetitive tasks in a fraction of the time manual processing takes.",
      },
      {
        label: "Fewer data-entry errors",
        body: "Rule-based automation eliminates the fatigue-driven mistakes common in manual entry.",
      },
      {
        label: "Lower cost per process automated",
        body: "Bots scale operational capacity without a proportional increase in headcount.",
      },
    ],
  },
  {
    slug: "management-services",
    title: "Management Services",
    intro:
      "Ongoing application and infrastructure management that keeps your systems reliable, secure, and cost-efficient long after go-live.",
    whyHeading: "Why Your Business Needs Managed IT Services",
    whyBody:
      "Launching software is only half the job; what happens after go-live determines whether it stays fast, secure, and available. Without dedicated ongoing management, monitoring gaps go unnoticed, patches fall behind, and small issues turn into outages before anyone catches them. NForceOne's management services give you a dedicated team proactively watching, maintaining, and supporting your applications and infrastructure, so your internal team can focus on what is next instead of what is breaking.",
    whyPoints: [
      "Proactive monitoring catches issues before outages",
      "Predictable costs instead of reactive firefighting",
      "Faster incident response and resolution SLAs",
      "Frees internal teams to focus on new development",
    ],
    serviceTypes: [
      {
        title: "Application Support & Maintenance",
        body: "Ongoing bug fixes, updates, and enhancements that keep applications running smoothly.",
      },
      {
        title: "Infrastructure & Cloud Management",
        body: "Day-to-day management of cloud and on-prem infrastructure, including scaling and cost optimization.",
      },
      {
        title: "Helpdesk & Incident Response",
        body: "First- and second-line support with defined SLAs for response and resolution times.",
      },
      {
        title: "Patch, Upgrade & Compliance Management",
        body: "Scheduled patching and upgrades that keep systems secure and audit-ready.",
      },
    ],
    platforms: ["Web", "Cloud", "On-Prem", "Enterprise Systems", "Hybrid"],
    tools: ["ServiceNow", "Datadog", "PagerDuty", "Jira Service Management", "Zabbix", "AWS/Azure/GCP Consoles", "Splunk", "Confluence"],
    impact: [
      {
        label: "Reduced unplanned downtime",
        body: "Proactive monitoring catches issues before they become customer-facing outages.",
      },
      {
        label: "Faster incident resolution",
        body: "Defined SLAs and dedicated support shorten the time from alert to fix.",
      },
      {
        label: "Lower cost of IT operations",
        body: "Predictable managed-services pricing replaces the unpredictable cost of reactive fixes.",
      },
    ],
  },
];
