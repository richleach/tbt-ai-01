"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

interface Video {
  id: string;
  videoId: string;
  title: string;
  thumbnail: string;
}

export default function VideosClient({ videos }: { videos: Video[] }) {
  return (
    <div className={styles.grid}>
      {videos.map((v) => (
        <Link
          key={v.id}
          href={`https://www.youtube.com/watch?v=${v.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <Image
            src={v.thumbnail}
            alt={v.title}
            width={480}
            height={270}
            className={styles.cardThumb}
            unoptimized
            loading="lazy"
          />
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>{v.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
