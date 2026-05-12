"use client";

import { useEffect } from "react";
import Link from "next/link";
import SystemStatusLayout from "./components/system-status-layout";
import styles from "./components/system-status.module.css";

export default function Error({
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
    <SystemStatusLayout title="This page isn't working right now.">
      <p className={styles.subtitle}>
        You can try again, or return to the home page.
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
  );
}
