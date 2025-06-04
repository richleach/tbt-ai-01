import Image from "next/image";
import Link from "next/link";

interface YouTubePlaylistItem {
  id: string;
  snippet: {
    title: string;
    resourceId: {
      videoId: string;
    };
    thumbnails: {
      maxres: {
        url: string;
      };
    };
  };
}

interface YouTubeApiResponse {
  items: YouTubePlaylistItem[];
}

async function getData(): Promise<YouTubeApiResponse> {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&type=short&playlistId=UUnIyytMWGt41WZAc6QocKcQ&key=${process.env.YOUTUBE_API_KEY}`
  );

  //playlistId=UUnIyytMWGt41WZAc6QocKcQ
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PlaylistPage() {
  const data = await getData();
  //console.log(data.items.snippet)
  return (
    <div className="container px-10 mx-auto mb-8  mt-6">
      <main className="flex flex-col items-center justify-between text-black bg-white border-2 rounded-lg p-6 ">
        <div className="pl-3 w-full">
          <h2 className="text-3xl mb-4">YouTube Playlist</h2>
          <h4 className="text-center">
            <Link
              href="https://www.youtube.com/@TheBeatenTrail"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enjoy some of our most recent videos, recorded on the trail! Visit
              us on Youtube: https://www.youtube.com/@TheBeatenTrail
            </Link>
          </h4>

          <br />
          <div
            className="bg-white flex flex-row justify-center"
            style={{ paddingBottom: "30px" }}
          >
            {" "}
            <br />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "calc(var(--base) / 2) var(--base)",
              }}
            >
              {data.items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    width: "320px",
                    border: "thin solid purple",
                    borderRadius: "20px",
                    overflow: "hidden",
                    textDecoration: "none",
                    marginBottom: "20px",
                  }}
                >
                  <a
                    href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={item.snippet.thumbnails.maxres.url}
                      height={200}
                      width={390}
                      alt={item.snippet.title}
                      style={{ borderBottom: "thin solid #ea580c" }}
                    />
                    <div style={{ backgroundColor: "#CBD5E1" }}>
                      &nbsp; {item.snippet.title.slice(0, 33)}
                      {item.snippet.title.length > 33 && "..."}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
