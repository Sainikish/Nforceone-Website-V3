"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

interface SubLink {
  href: string;
  label: string;
}

interface CapabilityGroup {
  title: string;
  items: SubLink[];
}

interface NavLink {
  href: string;
  label: string;
  dropdown?: SubLink[];
  groups?: CapabilityGroup[];
  viewAllLabel?: string;
}

const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    title: "AI & Agentic Solutions",
    items: [
      { href: "/services/artificial-intelligence", label: "Artificial Intelligence" },
      { href: "/services/intelligent-rpa", label: "Intelligent Automation" },
    ],
  },
  {
    title: "Quality Engineering & AI Assurance",
    items: [
      { href: "/services/quality-assurance", label: "Quality Assurance" },
      { href: "/services/automation-testing", label: "Automation Testing" },
      { href: "/services/ai-assurance", label: "AI Assurance & Agentic Testing" },
    ],
  },
  {
    title: "Digital Engineering",
    items: [
      { href: "/services/software-development", label: "Software Development" },
      { href: "/services/pega-development", label: "Pega Development" },
    ],
  },
  {
    title: "Data, Cloud & Enterprise Platforms",
    items: [
      { href: "/services/devops", label: "DevOps" },
      { href: "/services/data-analytics", label: "Data Analytics" },
      { href: "/services/database-management", label: "Database Management" },
    ],
  },
];

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Solutions",
    viewAllLabel: "View All Solutions",
    groups: CAPABILITY_GROUPS,
    dropdown: CAPABILITY_GROUPS.flatMap((group) => group.items),
  },
  {
    href: "/industries",
    label: "Industries",
    viewAllLabel: "View All Industries",
    dropdown: [
      { href: "/industries/telecom", label: "Telecommunications & 5G" },
      { href: "/industries/banking-and-financial", label: "Banking & Financial Services" },
      { href: "/industries/automotive", label: "Automotive & Smart Mobility" },
      { href: "/industries/retail", label: "Retail & E-Commerce" },
      { href: "/industries/insurance", label: "Insurance & InsurTech" },
      { href: "/industries/digital-media-and-advertising", label: "Digital Media & AdTech" },
    ],
  },
  { href: "/careers", label: "Careers" },
];

function isActiveLink(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const [scrolledPastHero, setScrolledPastHero] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setScrolledPastHero(true);
      return;
    }

    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > 450);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const showLogo = !isHome || scrolledPastHero;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          href="/"
          className={`${styles.logo} ${showLogo ? styles.logoVisible : styles.logoHidden}`}
          aria-label="NForceOne Home"
          tabIndex={showLogo ? 0 : -1}
        >
          <Image
            src="/images/nforceone-logo-clean.png"
            alt="NForceOne"
            width={140}
            height={46}
            priority
            className={styles.logoImage}
          />
        </Link>
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => {
            const active = isActiveLink(pathname, link.href);
            if (!link.dropdown) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={active ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            }
            const dropdownOpen = openDropdown === link.href;
            return (
              <div
                key={link.href}
                className={styles.navItem}
                onMouseEnter={() => setOpenDropdown(link.href)}
                onMouseLeave={() => setOpenDropdown(null)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOpenDropdown(null);
                  }
                }}
              >
                <Link
                  href={link.href}
                  className={active ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}
                  aria-current={active ? "page" : undefined}
                  aria-expanded={dropdownOpen}
                  onFocus={() => setOpenDropdown(link.href)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setOpenDropdown(null);
                  }}
                >
                  {link.label}
                  <span className={styles.navChevron} aria-hidden="true" />
                </Link>
                {dropdownOpen && link.groups && (
                  <div className={styles.navMegaMenu} role="menu">
                    {link.groups.map((group) => (
                      <div key={group.title} className={styles.megaGroup}>
                        <p className={styles.megaGroupTitle}>{group.title}</p>
                        {group.items.map((sub) => (
                          <Link key={sub.href} href={sub.href} className={styles.navDropdownLink} role="menuitem">
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                    <Link href={link.href} className={styles.navMegaMenuViewAll} role="menuitem">
                      {link.viewAllLabel} →
                    </Link>
                  </div>
                )}
                {dropdownOpen && !link.groups && (
                  <div className={styles.navDropdown} role="menu">
                    {link.dropdown.map((sub) => (
                      <Link key={sub.href} href={sub.href} className={styles.navDropdownLink} role="menuitem">
                        {sub.label}
                      </Link>
                    ))}
                    <Link href={link.href} className={styles.navDropdownViewAll} role="menuitem">
                      {link.viewAllLabel} →
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <Link href="/contact" className={styles.supportButton}>
          Contact Us
        </Link>
        <button
          type="button"
          className={styles.menuButton}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className={styles.menuIcon} data-open={isOpen} />
        </button>
      </div>

      {isOpen && (
        <nav className={styles.mobileNav}>
          {NAV_LINKS.map((link) => {
            const active = isActiveLink(pathname, link.href);
            if (!link.dropdown) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    active
                      ? `${styles.mobileNavLink} ${styles.mobileNavLinkActive}`
                      : styles.mobileNavLink
                  }
                  aria-current={active ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            }
            const expanded = expandedMobile === link.href;
            return (
              <div key={link.href} className={styles.mobileNavGroup}>
                <div className={styles.mobileNavGroupRow}>
                  <Link
                    href={link.href}
                    className={
                      active
                        ? `${styles.mobileNavLink} ${styles.mobileNavLinkActive}`
                        : styles.mobileNavLink
                    }
                    aria-current={active ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                  <button
                    type="button"
                    className={styles.mobileNavExpandButton}
                    aria-expanded={expanded}
                    aria-label={expanded ? `Collapse ${link.label}` : `Expand ${link.label}`}
                    onClick={() => setExpandedMobile(expanded ? null : link.href)}
                  >
                    <span className={styles.mobileNavChevron} data-open={expanded} />
                  </button>
                </div>
                {expanded && link.groups && (
                  <div className={styles.mobileNavSubList}>
                    {link.groups.map((group) => (
                      <div key={group.title} className={styles.mobileNavSubGroup}>
                        <p className={styles.mobileNavSubGroupTitle}>{group.title}</p>
                        {group.items.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={styles.mobileNavSubLink}
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
                {expanded && !link.groups && (
                  <div className={styles.mobileNavSubList}>
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={styles.mobileNavSubLink}
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Link
            href="/contact"
            className={styles.mobileSupportButton}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
