"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./HeroCarousel.module.css";

export default function HeroCarousel() {
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/images/theBeatenTrailLogo.png"
          alt="The Beaten Trail"
          width={1000}
          height={300}
          priority
          className={styles.logo}
        />
      </motion.div>
    </section>
  );
}
