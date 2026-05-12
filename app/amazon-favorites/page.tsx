"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import { StaggerGrid, StaggerItem } from "../components/StaggerGrid";
import styles from "./page.module.css";

const amazonItems = [
  {
    id: "1",
    title: "GoPro HERO 10",
    image: "https://m.media-amazon.com/images/I/51mcDVUBaxL._AC_SX679_.jpg",
    description:
      "GoPro HERO10 Black - Waterproof Action Camera with Front LCD and Touch Rear Screens, 5.3K60 Ultra HD Video, 23MP Photos, 1080p Live Streaming, Webcam, Stabilization",
    link: "https://www.amazon.com/dp/B09QD75B95/ref=cm_sw_r_as_gl_api_gl_i_83HWK4QDF5MTTTP9E53E?linkCode=ml1&tag=thebeatentr0d-20&th=1",
  },
  {
    id: "2",
    title: "Insta360 X3 Get Set Kit",
    image: "https://m.media-amazon.com/images/I/71U7NML1TLL._AC_SX679_.jpg",
    description:
      'Insta360 X3 - Get Set Kit Waterproof 360 Action Camera with 1/2" 48MP Sensors, 5.7K 360 Active HDR Video, 72MP 360 Photo, 4K Single-Lens, 60fps Me Mode, Stabilization, 2.29" Touchscreen, AI Editing',
    link: "https://www.amazon.com/dp/B0BBKYJ13R/ref=cm_sw_r_as_gl_api_gl_i_424DF206ETJEZHEM2GAM?linkCode=ml1&tag=thebeatentr0d-20",
  },
  {
    id: "3",
    title: "GoPro Wired Case",
    image: "https://m.media-amazon.com/images/I/714GCgH-vkS._AC_SX679_.jpg",
    description:
      "X~PWR H8 All-Weather External Power Kit for GoPro HERO8 with 66'' Cable",
    link: "https://www.amazon.com/dp/B0971WBB4C/ref=cm_sw_r_as_gl_api_gl_i_85C4YJMC3T1P7RSK7GQG?linkCode=ml1&tag=thebeatentr0d-20",
  },
  {
    id: "4",
    title: "RAM Mounts RAP-401U Tough-Claw",
    image: "https://m.media-amazon.com/images/I/41dfUAwvvtL._AC_SX679_.jpg",
    description:
      "RAM Mounts RAP-401U Tough-Claw Large Clamp Ball Base with C Size 1.5' Ball for Rails 1' to 2.25' in Diameter",
    link: "https://www.amazon.com/dp/B00KOENV30/ref=cm_sw_r_as_gl_api_gl_i_X84A8MZBSV0952S11VRX?linkCode=ml1&tag=thebeatentr0d-20&th=1",
  },
  {
    id: "5",
    title: "Small Mount Kit",
    image: "https://m.media-amazon.com/images/I/61ixQiTfI3L._AC_SX679_.jpg",
    description:
      "Taisioner Super Clamp Mount Double Ball Head Adapter Compatible with GoPro AKASO DJI Action or DSLR Digital Camera Monitor / LED Lights / Ronin-M/Ronin MX / Freefly MOVI Accessories",
    link: "https://www.amazon.com/dp/B08RDGDZJG/ref=cm_sw_r_as_gl_api_gl_i_1S8BM9F24KXJBP90WNEH?_encoding=UTF8&psc=1&linkCode=ml1&tag=thebeatentr0d-20",
  },
  {
    id: "6",
    title: "Medium Mount Kit",
    image: "https://m.media-amazon.com/images/I/61ixQiTfI3L._AC_SX679_.jpg",
    description:
      "RAM Mounts RAP-B-404U Tough-Claw Medium Clamp Base with B Size 1' Ball for Rails 1' to 1.875' in Diameter",
    link: "https://www.amazon.com/dp/B00KOEQXDU/ref=cm_sw_r_as_gl_api_gl_i_WNT9MM8H3CWKDJSFJ4F0?linkCode=ml1&tag=thebeatentr0d-20&th=1",
  },
  {
    id: "7",
    title: "2 Pack Charging Cables",
    image: "https://m.media-amazon.com/images/I/71sxLejXf9L._SX522_.jpg",
    description:
      "USAMS ISAIBELL Multi Charging Cable 2Pack 4FT 4 in 1 Nylon Braided Multiple USB Fast Charging Cord Adapter Type C Micro USB Port Connectors Compatible Cell Phones Tablets and More",
    link: "https://www.amazon.com/dp/B07QXVCFD1/ref=cm_sw_r_as_gl_api_gl_i_YP5AS8ENN1K10HE7AB2T?_encoding=UTF8&psc=1&linkCode=ml1&tag=thebeatentr0d-20",
  },
  {
    id: "8",
    title: "MuffPot Food Warmer",
    image: "https://m.media-amazon.com/images/I/61Z0Oq7-IKL._AC_SX679_.jpg",
    description:
      "The Original MuffPot Exhaust Food Warmer for Motorsports Vehicles. Snowmobile, ATV, UTV, and Motorcycles",
    link: "https://www.amazon.com/dp/B003CJ7568/ref=cm_sw_r_as_gl_api_gl_i_X9YDF250ZFR55T4C394Q?_encoding=UTF8&psc=1&linkCode=ml1&tag=thebeatentr0d-20",
  },
  {
    id: "9",
    title: "LED Rechargeable Work Light",
    image: "https://m.media-amazon.com/images/I/71BHagROfAL._AC_SX679_.jpg",
    description:
      "LED Work Light Rechargeable, 2 COB 2500LM Folding Portable Flood Light with Magnetic Base and 360° Rotation Stand, Waterproof Spotlights for Camping Car Repairing Emergency Job Site Lighting (2, Red)",
    link: "https://www.amazon.com/dp/B0948RTTDW/ref=cm_sw_r_as_gl_api_gl_i_3441E9QFCWR0CWGPAS0F?linkCode=ml1&tag=thebeatentr0d-20&th=1",
  },
];

export default function AmazonFavorites() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <span className={styles.overline}>Trail Tested</span>
          <h1 className={styles.title}>Amazon Favorites</h1>
        </motion.div>

        <div className={styles.content}>
          <ScrollReveal>
            <p className={styles.intro}>
              We get asked often about the equipment and accessories we use while filming out on the trail. Here are a few links to our most reliable and favorite products. Support our channel when you follow these links to the Amazon website as we get the referral credit from Amazon. Got questions? Drop us a line!
            </p>
          </ScrollReveal>

          <div className={styles.spacer} />

          <StaggerGrid className={styles.grid}>
            {amazonItems.map((item) => (
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
                      width={200}
                      height={200}
                      className={styles.cardImage}
                      unoptimized
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.description}</p>
                    <div className={styles.cardAction}>
                      <span className={styles.viewBtn}>View on Amazon</span>
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
