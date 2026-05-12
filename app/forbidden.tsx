import type { Metadata } from "next";
import Link from "next/link";
import SystemStatusLayout from "./components/system-status-layout";
import styles from "./components/system-status.module.css";

export const metadata: Metadata = {
  title: "The Beaten Trail",
  description:
    "ATV, UTV, and side-by-side reviews, trails, builds, and videos.",
};

export default function Forbidden() {
  return (
    <SystemStatusLayout title="This page isn't available right now.">
      <Link href="/" className={styles.homeLink}>
        Back to home
      </Link>
    </SystemStatusLayout>
  );
}
