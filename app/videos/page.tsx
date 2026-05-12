import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideosClient from "./VideosClient";
import styles from "./page.module.css";

export const dynamic = "force-static";
export const revalidate = 3600;

interface YouTubePlaylistItem {
  id: string;
  snippet: {
    title: string;
    resourceId: {
      videoId: string;
    };
    thumbnails: {
      maxres?: {
        url: string;
      };
      high?: {
        url: string;
      };
      medium?: {
        url: string;
      };
    };
  };
}

interface YouTubeApiResponse {
  items: YouTubePlaylistItem[];
}

async function getData(): Promise<YouTubeApiResponse> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&type=short&playlistId=UUnIyytMWGt41WZAc6QocKcQ&key=${process.env.YOUTUBE_API_KEY}`,
      { signal: controller.signal }
    );

    clearTimeout(timeout);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch {
    clearTimeout(timeout);
    return { items: [] };
  }
}

export default async function VideosPage() {
  const data = await getData();

  const videos = data.items.map((item) => ({
    id: item.id,
    videoId: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    thumbnail:
      item.snippet.thumbnails.maxres?.url ??
      item.snippet.thumbnails.high?.url ??
      item.snippet.thumbnails.medium?.url ??
      "",
  }));

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <span className={styles.overline}>The Beaten Trail</span>
          <h1 className={styles.title}>YouTube Playlist</h1>
        </div>

        <div className={styles.content}>
          <p className={styles.intro}>
            Enjoy some of our most recent videos, recorded on the trail! Visit us on YouTube:{" "}
            <Link
              href="https://www.youtube.com/@TheBeatenTrail"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.introLink}
            >
              youtube.com/@TheBeatenTrail
            </Link>
          </p>

          <div className={styles.spacer} />

          <VideosClient videos={videos} />
        </div>
      </main>
      <Footer />
    </>
  );
}
