"use client";

import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./system-status.module.css";

type SystemStatusLayoutProps = {
  title: string;
  children?: ReactNode;
};

export default function SystemStatusLayout({
  title,
  children,
}: SystemStatusLayoutProps) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <span className={styles.overline}>The Beaten Trail</span>
          <h1 className={styles.statusTitle}>{title}</h1>
        </div>
        <div className={styles.content}>{children}</div>
      </main>
      <Footer />
    </>
  );
}
