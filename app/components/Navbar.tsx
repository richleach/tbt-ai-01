"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Shop Our Store", href: "/store" },
  { label: "YouTube Channel", href: "/videos" },
  { label: "Trail Tested", href: "/amazon-favorites" },
  { label: "Ride With Us", href: "/ride-with-us" },
  { label: "Partners & Friends", href: "/partners-and-friends" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/theBeatenTrailHeaderLogo.png"
            alt="The Beaten Trail"
            width={150}
            height={48}
            priority
            className={styles.logoImg}
          />
        </Link>

        <div className={styles.links}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`${styles.overlay} ${drawerOpen ? styles.overlayVisible : ""}`}
        onClick={() => setDrawerOpen(false)}
      />
      <div
        className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}
      >
        <button
          className={styles.drawerClose}
          onClick={() => setDrawerOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <div className={styles.drawerLinks}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.drawerLink}
              onClick={() => setDrawerOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
