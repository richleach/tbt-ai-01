"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import styles from "./page.module.css";

export default function RideWithUsContent() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.overline}>The Beaten Trail</span>
          <h1 className={styles.title}>Ride With Us</h1>
        </motion.div>

        <div className={styles.content}>
          <ScrollReveal>
            <figure className={styles.photoCard}>
              <div className={styles.photoImageWrap}>
                <Image
                  src="/images/come-ride-with-us-thebeatentrailllc.png"
                  alt="Come ride with The Beaten Trail"
                  width={720}
                  height={480}
                  sizes="(max-width: 720px) 100vw, 720px"
                  className={styles.image}
                  priority
                />
              </div>
              <figcaption className={styles.photoCaption}>
                Another fun ride with friends (old and new) in Tennessee
              </figcaption>
            </figure>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <figure className={styles.photoCard}>
              <div className={styles.photoImageWrap}>
                <Image
                  src="/images/friends-on-the-trail.png"
                  alt="Friends on the trail with The Beaten Trail in Pennsylvania"
                  width={720}
                  height={480}
                  sizes="(max-width: 720px) 100vw, 720px"
                  className={styles.image}
                />
              </div>
              <figcaption className={styles.photoCaption}>
                We ride a lot of different trails in PA, hit us up and find out
                where our next ride will be
              </figcaption>
            </figure>
          </ScrollReveal>

          <ScrollReveal delay={0.12} className={styles.firstSection}>
            <h2 className={styles.heading}>Where Do We Ride?</h2>
            <p className={styles.body}>
              All over the place! Sort of. Our &quot;usual&quot; ride spots are in
              Pennsylvania locations such as anthracite outdoor adventure area.
              But we&apos;ve been known to stray.... We&apos;ve ridden some of the
              best trails in California, Pennsylvania, Georgia, New York, New
              Jersey, and even Tennessee.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <h2 className={styles.heading}>When Do We Ride?</h2>
            <p className={styles.body}>
              All the time! Kinda. We&apos;ve ridden in all four seasons and have
              braved all of the elements.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.24}>
            <h2 className={styles.heading}>Do We Want You to Join Us?</h2>
            <p className={styles.body}>
              Absolutely! We&apos;re actually social creatures and we hang out
              alot on Facebook, Youtube, TikTok, Instagram (all of our links are
              in the footer of this page).
            </p>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
