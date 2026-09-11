export interface FaqItem {
  question: string;
  answer: string;
}

export const sharedFaq: FaqItem[] = [
  {
    question: "What makes NForce different from other IT service providers?",
    answer:
      "We pair hands-on senior engineers with every engagement instead of routing you through account layers, and we scope work around your actual release cadence rather than a fixed statement of work. That means faster ramp-up, direct access to the people doing the work, and delivery that adapts as your priorities shift.",
  },
  {
    question: "Can I start small and scale services as my business grows?",
    answer:
      "Yes. Most engagements start with a single service, such as a QA audit or a focused automation sprint, and expand from there. We size the team to the work in front of us, so you're never paying for capacity you don't need yet.",
  },
  {
    question: "Do you support one-time projects as well as long-term engagements?",
    answer:
      "Both. We take on fixed-scope projects, such as a security audit or a migration, as well as ongoing retained engagements where our team functions as an extension of yours. There's no minimum commitment to get started.",
  },
  {
    question: "How do you ensure the security and quality of your solutions?",
    answer:
      "Every engagement follows a shift-left testing approach, with automated checks, code review, and compliance validation built into the pipeline rather than bolted on at the end. For regulated industries we align to the relevant frameworks, such as HIPAA, PCI-DSS, or SOC 2, as part of the delivery process.",
  },
  {
    question: "Can I choose the tools, tech stack, or cloud provider we use?",
    answer:
      "Yes. We work within your existing stack and cloud provider by default, and we'll recommend changes only when there's a clear case for it. You keep ownership of the tooling decisions.",
  },
];
