import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import { sharedFaq } from "@/lib/faq-data";
import styles from "../about/page.module.css";

export const metadata = {
  title: "FAQ | NForceOne",
  description: "Answers to common questions about working with NForceOne.",
};

export default function FaqPage() {
  return (
    <main>
      <PageHero eyebrow="FAQ" title="Frequently Asked Questions" />
      <section className={styles.section}>
        <FaqAccordion items={sharedFaq} />
      </section>
    </main>
  );
}
