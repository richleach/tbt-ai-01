"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import { StaggerGrid, StaggerItem } from "../components/StaggerGrid";
import styles from "./page.module.css";

const sponsors = [
  {
    id: "1",
    title: "Ride Royal Blue, TN",
    image: "/images/partners/rideRoyalBlueLogo.png",
    link: "http://rideroyalblue.com",
  },
  {
    id: "3",
    title: "Trailside Ranch",
    image: "/images/partners/trailsideRanch.png",
    link: "https://www.trailsideranch-ny.com",
  },
  {
    id: "12",
    title: "Potter County ATV & UTV Club",
    image: "/images/partners/potterCounty.png",
    link: "https://pcatvutvclub.com/",
  },
];

const partners = [
  {
    id: "2",
    title: "Black Rock Synthetics",
    image: "/images/partners/blackRockSynthetics.png",
    link: "http://blackrocksynthetics.com",
  },
  {
    id: "4",
    title: "Litt Industries",
    image: "/images/partners/littIndustries.png",
    link: "http://littindustries.com",
  },
  {
    id: "5",
    title: "PA Dirt Riders",
    image: "/images/partners/paDirtriders.png",
    link: "https://www.padirtriders.com/",
  },
  {
    id: "6",
    title: "Rowdy Life",
    image: "/images/partners/rowdyLife.png",
    link: "https://rowdylifedesigns.com/",
  },
  {
    id: "7",
    title: "Arizona Kid",
    image: "/images/partners/arizonaKid.png",
    link: "https://www.youtube.com/c/ArizonaKid/featured",
  },
  {
    id: "8",
    title: "Pine Grove Yamaha",
    image: "/images/partners/pgPowersports.png",
    link: "https://www.pgpowersports.com/",
  },
  {
    id: "9",
    title: "Knit Decor Gifts",
    image: "/images/partners/knitDecorGifts.png",
    link: "https://www.etsy.com/shop/KnitDecorGifts",
  },
  {
    id: "10",
    title: "DTF Powersports",
    image: "/images/partners/dtfPowerSports.png",
    link: "https://dtfpowersports.com/",
  },
  {
    id: "11",
    title: "Slawdog Off-road Shenanigans",
    image: "/images/partners/slawdog.png",
    link: "https://www.youtube.com/@slawdogshenanigans",
  },
  {
    id: "13",
    title: "Viking Bags",
    image: "/images/partners/vikingBags.png",
    link: "https://www.vikingbags.com/pages/adventure-touring-motorcycle-luggage-bags",
  },
];

export default function PartnersAndFriends() {
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
          <span className={styles.overline}>The Beaten Trail</span>
          <h1 className={styles.title}>Sponsors, Partners & Friends</h1>
        </motion.div>

        <div className={styles.content}>
          {/* Sponsors */}
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionOverline}>Proud Sponsors</span>
              <h2 className={styles.sectionTitle}>Sponsors</h2>
              <p className={styles.sectionDesc}>
                The Beaten Trail is proudly sponsored by the following vendors.
                Make sure to visit their sites, their sponsorships help keep this
                site free!
              </p>
            </div>
          </ScrollReveal>

          <StaggerGrid className={styles.grid}>
            {sponsors.map((s) => (
              <StaggerItem key={s.id}>
                <Link
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={s.image}
                      alt={s.title}
                      width={200}
                      height={200}
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{s.title}</h3>
                    <Image
                      src="/images/partners/sponsorFlag.png"
                      width={160}
                      height={40}
                      alt="Proud Sponsor of The Beaten Trail"
                      className={styles.sponsorBadge}
                    />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>

          {/* Accent line */}
          <div className={styles.accentLine} />

          {/* Partners & Friends */}
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionOverline}>Our Community</span>
              <h2 className={styles.sectionTitle}>Partners & Friends</h2>
              <p className={styles.sectionDesc}>
                Over the years we&apos;ve done lots of work with other people and
                companies, and this is our shout-out to them. Should you find
                yourself needing any of the products/services they offer, reach
                out to them first.
              </p>
            </div>
          </ScrollReveal>

          <StaggerGrid className={styles.grid}>
            {partners.map((p) => (
              <StaggerItem key={p.id}>
                <Link
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={200}
                      height={200}
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{p.title}</h3>
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
