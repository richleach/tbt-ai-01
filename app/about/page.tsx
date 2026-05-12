"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import styles from "./page.module.css";

export default function About() {
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
          <h1 className={styles.title}>About Us</h1>
        </motion.div>

        <div className={styles.content}>
          <ScrollReveal>
            <div className={styles.imageWrap}>
              <Image
                src="/images/MHhelmet.png"
                height={480}
                width={650}
                alt="Michael Herrmann"
                className={styles.image}
                priority
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className={styles.name}>
              Michael Herrmann — Head Honcho
            </h2>
            <div className={styles.accentLine} />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h3 className={styles.heading}>Getting Started</h3>
            <p className={styles.body}>
              Michael started out in the pandemic, joining the motorsports riding
              arena once again with a small razor trail 50 inch side-by-side,
              which started many park reviews and accessory episodes. Since
              growing the riding group he has reviewed dozens of regional parks as
              well as ridden trails in California, Pennsylvania, Georgia, New
              York, New Jersey, and Tennessee for unique riding areas for the ATV
              and UTV enthusiast.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h3 className={styles.heading}>Way Back In The Day</h3>
            <p className={styles.body}>
              Having grown up in NJ, a younger-aged Michael used to ride Yamaha YZ
              80 Honda, CT 70s and other various dirt bikes, homemade go karts and
              pit bikes. Fast forward and the current ride is a Grizzly 700 XTR as
              well as a Honda Talon 1000R side-by-side. The team rides include
              several Can-Am, Kawasaki, CFMoto, Polaris and many others brands and
              takes great efforts to ride a wide variety of vehicles on just as
              many trails.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h3 className={styles.heading}>
              A Pilot, Video Editor and Author oh my!
            </h3>
            <p className={styles.body}>
              Michael is a part 107 drone certified pilot. Should you need any
              additional footage for your real estate or video channel he is
              available for hire as well as video editing and assistance with
              setting up your own YouTube channel. Please contact{" "}
              <a href="mailto:TheBeatentrailllc@gmail.com" className={styles.link}>
                TheBeatentrailllc@gmail.com
              </a>
              .
            </p>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
