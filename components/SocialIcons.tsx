import styles from "./SocialIcons.module.css";

export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function SocialIcons() {
  return (
    <div className={styles.row}>
      <a
        href="https://www.linkedin.com/company/nforceone/"
        target="_blank"
        rel="noreferrer"
        aria-label="NForceOne on LinkedIn"
        className={styles.iconLink}
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://www.instagram.com/nforce_one/"
        target="_blank"
        rel="noreferrer"
        aria-label="NForceOne on Instagram"
        className={styles.iconLink}
      >
        <InstagramIcon />
      </a>
    </div>
  );
}
