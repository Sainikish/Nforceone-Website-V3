"use client";

import { useState, FormEvent } from "react";
import styles from "./ConsultationForm.module.css";

export function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return <p className={styles.success}>Thanks! We&apos;ll be in touch shortly.</p>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <input name="firstName" placeholder="First name" aria-label="First name" required />
        <input name="lastName" placeholder="Last name" aria-label="Last name" required />
      </div>
      <input name="company" placeholder="Company/Organization" aria-label="Company or organization" required />
      <input name="companyEmail" type="email" placeholder="Company email" aria-label="Company email" required />
      <input name="phone" type="tel" placeholder="Phone" aria-label="Phone number" />
      <textarea name="message" placeholder="Message" aria-label="Message" rows={4} />
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return <p className={styles.success}>You&apos;re subscribed.</p>;
  }

  return (
    <form className={styles.newsletter} onSubmit={handleSubmit}>
      <div>
        <input name="email" type="email" placeholder="Enter your email" aria-label="Email address" required />
        {error && <p className={styles.error}>{error}</p>}
      </div>
      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
