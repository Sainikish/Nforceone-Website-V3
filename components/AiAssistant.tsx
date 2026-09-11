"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CpuIcon } from "@/components/icons";
import styles from "./AiAssistant.module.css";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  chips?: string[];
  link?: { href: string; label: string };
}

const KNOWLEDGE_BASE = [
  {
    keywords: ["capability", "capabilities", "services", "offerings", "what do you do"],
    text: "NForceOne delivers 4 strategic capability pillars: 1) AI & Agentic Solutions, 2) Quality Engineering & AI Assurance, 3) Digital Engineering, and 4) Data, Cloud & Enterprise Platforms.",
    chips: ["Explore AI & Agentic", "Quality Engineering", "Digital Platforms", "View Case Studies"],
    link: { href: "/services", label: "Browse All Capabilities" },
  },
  {
    keywords: ["ai", "agentic", "llm", "generative ai", "rag", "agents", "machine learning"],
    text: "Our AI & Agentic practice specializes in autonomous enterprise agents (AIKTRA), RAG pipelines, LLM hallucination and prompt regression testing, and production AI application development.",
    chips: ["AI Assurance", "Our AI Platforms", "Schedule Consultation"],
    link: { href: "/services/artificial-intelligence", label: "Explore AI Solutions" },
  },
  {
    keywords: ["telecom", "5g", "oss", "bss", "telecommunication", "network"],
    text: "Telecom is our signature domain expertise. We modernize legacy OSS/BSS, build Voice AI contact center bots, and automate 5G network telemetry and field operations.",
    chips: ["OSS/BSS Modernization", "Request Telecom Assessment", "Telecom Flow Architecture"],
    link: { href: "/industries/telecom", label: "View Telecom Practice" },
  },
  {
    keywords: ["products", "platforms", "qforce", "aiktra", "pulse", "sync", "onehr", "arena", "modozo"],
    text: "We design and operate 12 proprietary engineering platforms including QForce AI (autonomous QA), AIKTRA (multi-agent orchestration), Pulse (release observability), and Modozo (fashion-tech).",
    chips: ["View 12 Products", "Request a Demo", "Case Studies"],
    link: { href: "/innovation", label: "Explore Innovation & Products" },
  },
  {
    keywords: ["engagement", "delivery", "model", "onshore", "offshore", "hybrid", "cost", "pricing"],
    text: "We offer flexible delivery models: Onshore (US-based senior engineers), Offshore (scalable Hyderabad engineering center), Hybrid (US + India delivery), Managed SOW, and Staff Augmentation.",
    chips: ["Talk to an Expert", "US + India Model", "Contact Team"],
    link: { href: "/about", label: "Learn About Delivery Models" },
  },
  {
    keywords: ["case studies", "proof", "clients", "results", "portfolio"],
    text: "We have delivered high-concurrency platforms across Telecom, Fashion-Tech (Modozo cut its regression cycle from 4 days to under 45 minutes), and sports operations (NForce Arena).",
    chips: ["Read Case Studies", "Discuss Your Project"],
    link: { href: "/case-studies", label: "Explore Client Outcomes" },
  },
  {
    keywords: ["contact", "expert", "talk", "demo", "hire", "consultation", "email", "office"],
    text: "Our leadership and delivery centers are located in Plano, Texas and Hyderabad, India. Head to our contact page to schedule a capability discussion or request a platform demo.",
    chips: ["Visit Contact Page"],
    link: { href: "/contact", label: "Go to Contact Page" },
  },
];

const INITIAL_MESSAGE: Message = {
  id: "welcome",
  sender: "bot",
  text: "Hello! I'm Navi, NForceOne's AI Concierge. How can I help guide your digital transformation, quality engineering, or AI journey today?",
  chips: [
    "Explore Capabilities",
    "Telecom Expertise",
    "Proprietary Products",
    "Schedule Consultation",
  ],
};

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");

    // Process grounded response
    setTimeout(() => {
      const lower = text.toLowerCase();
      const match = KNOWLEDGE_BASE.find((k) =>
        k.keywords.some((kw) => lower.includes(kw))
      );

      if (match) {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: "bot",
            text: match.text,
            chips: match.chips,
            link: match.link,
          },
        ]);
      } else {
        // Human fallback
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: "bot",
            text: "I want to make sure you get the most accurate answer. You can connect directly with our engineering leadership or schedule a capability discussion.",
            chips: ["View Capabilities", "Open Contact Page"],
            link: { href: "/contact", label: "Talk to an NForce Expert" },
          },
        ]);
      }
    }, 450);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <button
        type="button"
        className={styles.launcher}
        onClick={() => setIsOpen(true)}
        aria-label="Open Ask Navi AI Website Assistant"
      >
        <span className={styles.pulseDot} aria-hidden="true" />
        <span className={styles.launcherIcon}>
          <CpuIcon size={18} />
        </span>
        <span>Ask Navi</span>
      </button>

      {/* Chat Window Modal */}
      {isOpen && (
        <div
          className={styles.modalOverlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <section className={styles.chatWindow} role="dialog" aria-modal="true" aria-label="Ask Navi AI Assistant">
            <header className={styles.chatHeader}>
              <div className={styles.headerInfo}>
                <div className={styles.avatar}>N1</div>
                <div className={styles.titleBox}>
                  <h3>Ask Navi · AI Concierge</h3>
                  <p>
                    <span className={styles.pulseDot} style={{ width: 6, height: 6 }} aria-hidden="true" />
                    Online · Grounded in NForce Knowledge
                  </p>
                </div>
              </div>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                ✕
              </button>
            </header>

            <div className={styles.messageArea}>
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`${styles.messageRow} ${
                    m.sender === "user" ? styles.messageRowUser : ""
                  }`}
                >
                  <div
                    className={`${styles.bubble} ${
                      m.sender === "user" ? styles.bubbleUser : styles.bubbleBot
                    }`}
                  >
                    <p style={{ margin: 0 }}>{m.text}</p>

                    {m.link && (
                      <div style={{ marginTop: "0.5rem" }}>
                        <Link
                          href={m.link.href}
                          style={{
                            color: m.sender === "user" ? "#ffffff" : "var(--accent)",
                            fontWeight: 700,
                            textDecoration: "underline",
                            fontSize: "0.8125rem",
                          }}
                          onClick={() => setIsOpen(false)}
                        >
                          {m.link.label} &rarr;
                        </Link>
                      </div>
                    )}

                    {m.chips && m.chips.length > 0 && (
                      <div className={styles.quickPrompts}>
                        {m.chips.map((chip) => (
                          <button
                            key={chip}
                            type="button"
                            className={styles.promptChip}
                            onClick={() => handleSend(chip)}
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <footer className={styles.chatFooter}>
              <input
                type="text"
                placeholder="Ask about AI, QA, Telecom, or Products..."
                className={styles.inputField}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
              />
              <button
                type="button"
                className={styles.sendBtn}
                onClick={() => handleSend()}
                aria-label="Send message"
              >
                &rarr;
              </button>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}
