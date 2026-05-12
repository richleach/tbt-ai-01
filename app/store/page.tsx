"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import { StaggerGrid, StaggerItem } from "../components/StaggerGrid";
import styles from "./page.module.css";

const storeItems = [
  {
    id: "1",
    title: "Trail Therapy: Today's a great day.... Quad racer t-shirt.",
    image:
      "https://vangogh.teespring.com/v3/image/NOOMSXIpDz0mlN9curICFs3WqJg/800/800.jpg",
    description:
      "Today's a great day for Trail Therapy t-shirt, quad racer design. Many colors and sizes from tiny-small to fattie-huge.",
    link: "https://my-store-f43ddb.creator-spring.com/listing/today-s-a-great-day?product=46",
  },
  {
    id: "2",
    title: "Trail Therapy: My doctor said.... Coffee mug",
    image:
      "https://vangogh.teespring.com/v3/image/mwM4JxDS_1D5i3egetyD_PjV_RU/800/800.jpg",
    description:
      "The Beaten Trail - My doctor said.... Coffee mug. Or - yeah, fill it up with whatever you want, we won't judge you.",
    link: "https://my-store-f43ddb.creator-spring.com/listing/get-doctor-said?product=1565",
  },
  {
    id: "3",
    title: "Trail Therapy: My doctor said.... MX racer long sleeve shirt",
    image:
      "https://vangogh.teespring.com/v3/image/5Qcz-eHRybakXkv_eAqpo_leurQ/800/800.jpg",
    description:
      "The Beaten Trail - My doctor said.... MX racer long sleeve shirt. Awesome colors and sizes from tiny-small to fattie-huge.",
    link: "https://my-store-f43ddb.creator-spring.com/listing/doctor-said-motocross?product=11",
  },
  {
    id: "4",
    title: "Trail Therapy: My doctor said.... SXS racer hoodie",
    image:
      "https://vangogh.teespring.com/v3/image/2ylk4-XJjdMYoi-94w8C76pqg70/800/800.jpg",
    description:
      "The Beaten Trail - My doctor said.... SXS trail racer long sleeve hoodie. Check out the colors and sizes from tiny-small to fattie-huge.",
    link: "https://my-store-f43ddb.creator-spring.com/listing/get-doctor-said?product=212&variation=5840&size=1167",
  },
  {
    id: "5",
    title: "The Beaten Trail OG logo t-shirt.",
    image:
      "https://vangogh.teespring.com/v3/image/VPSvXO1_Q4gzb2l-AWzkz60QQqM/800/800.jpg",
    description:
      "The Beaten Trail OG logo t-shirt, white ink with Youtube logo. Many colors (as long as you like black shirts) and sizes from tiny-small to fattie-huge.",
    link: "https://my-store-f43ddb.creator-spring.com/listing/the-beaten-trail-og-logo?product=46",
  },
  {
    id: "6",
    title: "New Designs & Products In the Works!",
    image:
      "https://vangogh.teespring.com/v3/image/YNq5K6ye7FJqRGfrYX9ES56z6tY/800/800.jpg",
    description:
      "We have an entire dungeon of artists, copy writers and screen printers cranking out new designs all the time - check back often!",
    link: "https://my-store-f43ddb.creator-spring.com/",
  },
] as const;

export default function StorePage() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
        >
          <span className={styles.overline}>The Beaten Trail</span>
          <h1 className={styles.title}>Shop Our Store</h1>
        </motion.div>

        <div className={styles.content}>
          <ScrollReveal>
            <div className={styles.introBlock}>
              <p className={styles.intro}>
                By popular request, our award winning apparel line. T-shirts,
                short sleeves, long sleeves, hoodies, pants — oh, and ask us about
                the coffee mugs. Go ahead! Ask!
              </p>
              <p className={styles.quote}>
                &quot;Do you have any Beaten Trail coffee mugs?!&quot;
              </p>
              <p className={styles.shout}>Yes we do!</p>
            </div>
          </ScrollReveal>

          <div className={styles.spacer} />

          <StaggerGrid className={styles.grid}>
            {storeItems.map((item) => (
              <StaggerItem key={item.id}>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={400}
                      className={styles.cardImage}
                      unoptimized
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.description}</p>
                    <div className={styles.cardAction}>
                      <span className={styles.viewBtn}>Shop this item</span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </main>

      <Footer />
    </>
  );
}
