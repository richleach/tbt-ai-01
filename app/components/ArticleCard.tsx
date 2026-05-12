import Image from "next/image";
import styles from "./ArticleCard.module.css";

interface ArticleCardProps {
  tag: string;
  tagVariant?: "accent" | "muted";
  date?: string;
  image?: string;
  title: string;
  excerpt: string;
  href?: string;
}

export default function ArticleCard({
  tag,
  tagVariant = "accent",
  date,
  image,
  title,
  excerpt,
  href,
}: ArticleCardProps) {
  const body = (
    <>
      <div className={styles.img}>
        {image ? (
          <Image
            src={image}
            alt={title}
            width={800}
            height={450}
            className={styles.imgFill}
          />
        ) : (
          <div className={styles.imgPlaceholder}>
            hero image
            <br />
            16:9 &middot; 800&times;450px
          </div>
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span
            className={`${styles.tag} ${tagVariant === "accent" ? styles.tagAccent : styles.tagMuted}`}
          >
            {tag}
          </span>
          {date && <span className={styles.date}>{date}</span>}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={styles.cardLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <article className={styles.card}>{body}</article>
      </a>
    );
  }

  return <article className={styles.card}>{body}</article>;
}
