import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const storeData = {
  store: [
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
        "The Beaten Trail OG logo t-shirt, white ink with Youtube logo. Many colors (as long as you like black shirts) and sizes from tiny-small to fattie-huge. ",
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
  ],
};
export default function store() {
  return (
    <div className="container px-10 mx-auto mb-6 mt-6">
      <main className="flex flex-col items-center justify-between text-black bg-white border-2 rounded-lg p-6">
        <div className="pl-3 w-full">
          <h2 className="text-3xl mb-4">The Store</h2>
          <h4 className="text-center" style={{ paddingBottom: "20px" }}>
            By popular request, our award winning apparel line. T-shirts, short
            sleeves, long sleeves, hoodies, pants, oh and ask us about the
            coffee mugs, go ahead! ASK! <br />
            <br />
            &quot;Do you have any Beaten Trail coffee mugs?!&quot; <br />
            <br />
            <p className="font-bold text-2xl">YES WE DO!</p>
            <br />
            <br />
          </h4>
          <div className="grid md:grid-cols-3 gap-8">
            {storeData.store.map((a) => (
              <Link href={a.link} target="_blank" key={a.id}>
                <Card className="flex flex-col justify-between drop-shadow-lg">
                  <CardHeader className="flex-row gap-4 items-center">
                    <div>
                      <CardTitle className="leading-5">{a.title}</CardTitle>
                      <CardContent className="pt-4">
                        <Image
                          src={a.image}
                          alt={a.title}
                          width={200}
                          height={200}
                          className="mx-auto rounded-lg drop-shadow-md mb-4"
                        ></Image>
                      </CardContent>
                      <CardDescription>{a.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex justify-between pl-3">
                    {/* code that floats left/right */}
                    <div className="w-full content-end">
                      <button className="px-4 py-1 text-sm text-black-600 font-semibold rounded-full border border-black-600 hover:text-white hover:bg-orange-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 w-full">
                        Buy Now! Or shop... or browse....
                      </button>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
