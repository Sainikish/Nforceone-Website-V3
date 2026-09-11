"use client";

import { useState } from "react";
import { FaqItem } from "@/lib/faq-data";
import styles from "./FaqAccordion.module.css";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.accordion}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const answerId = `faq-answer-${i}`;
        return (
          <div key={item.question} className={styles.item}>
            <button
              type="button"
              className={styles.question}
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              {item.question}
              <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <p id={answerId} className={styles.answer}>
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
