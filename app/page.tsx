import Image from "next/image";
import Navbar from "./components/Navbar";
import cardStyles from "./components/ArticleCard.module.css";
import HeroCarousel from "./components/HeroCarousel";
import ArticleCard from "./components/ArticleCard";
import SectionHeader from "./components/SectionHeader";
import ScrollReveal from "./components/ScrollReveal";
import { StaggerGrid, StaggerItem } from "./components/StaggerGrid";
import Footer from "./components/Footer";
import styles from "./page.module.css";

const LATEST_ARTICLES = [
  {
    href: "https://www.youtube.com/watch?v=76J2Ba9rAg4",
    tag: "Moab Spring 2026",
    tagVariant: "accent" as const,
    image: "/images/moabSpring2026/moab01.png",
    title: "CAN-AM Influencer Ride Day 1 - Morning",
    excerpt: "They let us loose in the desert and then the rains came....",
    readTime: "8 min read",
  },
  {
    href: "https://www.youtube.com/watch?v=9ng2DYxptJ0&",
    tag: "Moab Spring 2026",
    tagVariant: "accent" as const,
    image: "/images/moabSpring2026/moab03.png",
    title: "CAN-AM Influencer Ride Day 1 - Afternoon",
    excerpt: "I think the heavy wet stuff is passed us by now.",
    readTime: "12 min read",
  },
  {
    href: "https://www.youtube.com/watch?v=BiHrqVBPsxw",
    tag: "Moab Spring 2026",
    tagVariant: "accent" as const,
    image: "/images/moabSpring2026/moab02.png",
    title: "CAN-AM Influencer Ride Day 2",
    excerpt: "CAN-AM Maverick Rs' - Capable machines on a perfect Moab day",
    readTime: "6 min read",
  },
];

const STORE_ARTICLES = [
  {
    tag: "Sweatshirts",
    tagVariant: "accent" as const,
    image: "/images/storeImages/pinkHoodie.png",
    title: "Sweatshirts & T-Shirts",
    excerpt: "Wear our brand on your person. It'll feel naughty.",
  },
  {
    tag: "Coffee Mugs",
    tagVariant: "accent" as const,
    image: "/images/storeImages/coffeeMug.png",
    title: "Official Mugs & Stuff",
    excerpt: "...what you drink from it is your business.",
  },
  {
    tag: "Amazon List",
    tagVariant: "accent" as const,
    image: "/images/storeImages/workLight.png",
    title: "Trail Tested",
    excerpt: "Stuff we use to keep riding.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Animated accent line separator */}
        <div className={styles.accentLineFull} />

        {/* Latest Articles */}
        <section className={styles.section}>
          <ScrollReveal>
            <SectionHeader overline="Latest" title="From the Trail" />
          </ScrollReveal>
          <StaggerGrid className={styles.cardGrid}>
            {LATEST_ARTICLES.map(({ readTime: _readTime, ...article }) => (
              <StaggerItem key={article.title}>
                <ArticleCard {...article} />
              </StaggerItem>
            ))}
          </StaggerGrid>
          <ScrollReveal>
            <div className={`${styles.cardGrid} ${styles.featuredRow}`}>
              <div className={styles.featuredSpacer} aria-hidden="true" />
              <article className={`${cardStyles.card} ${styles.featuredSlot}`}>
                <div className={cardStyles.img}>
                  <Image
                    src="/images/moabSpring2026/canAmMoabThumbnail.png"
                    alt="CAN-AM Moab Spring 2026"
                    width={800}
                    height={450}
                    className={cardStyles.imgFill}
                  />
                </div>
              </article>
              <div className={styles.featuredSpacer} aria-hidden="true" />
            </div>
          </ScrollReveal>
        </section>

        {/* Animated accent line separator */}
        <div className={styles.accentLineFull} />
        
        {/* Store Section */}
        <section className={styles.section}>
          <ScrollReveal>
            <SectionHeader overline="Products/Review" title="Visit the Store" />
          </ScrollReveal>
          <StaggerGrid className={styles.cardGrid}>
            {STORE_ARTICLES.map((article) => (
              <StaggerItem key={article.title}>
                <ArticleCard {...article} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </section>
      </main>

      <Footer />
    </>
  );
}
