"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import SystemStatusLayout from "./components/system-status-layout";
import styles from "./components/system-status.module.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
  }, [error]);

  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body>
        <SystemStatusLayout title="This page isn't working right now.">
          <p className={styles.subtitle}>
            Please try again. If it keeps happening, start from the home page.
          </p>
          <div className={styles.actions}>
            <button type="button" className={styles.primaryBtn} onClick={reset}>
              Try again
            </button>
            <Link href="/" className={styles.secondaryLink}>
              Back to home
            </Link>
          </div>
        </SystemStatusLayout>
      </body>
    </html>
  );
}
