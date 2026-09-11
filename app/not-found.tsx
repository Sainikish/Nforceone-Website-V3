import Link from "next/link";
import PageHero from "@/components/PageHero";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main>
      <PageHero eyebrow="404" title="Page Not Found" subtitle="The page you're looking for doesn't exist or may have moved." />
      <div className={styles.actions}>
        <Link href="/" className={styles.primaryButton}>
          Back to Home
        </Link>
        <Link href="/contact" className={styles.secondaryButton}>
          Contact Us
        </Link>
      </div>
    </main>
  );
}
