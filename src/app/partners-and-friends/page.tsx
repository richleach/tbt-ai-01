import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const amazonData = {
  amazon: [
    {
      id: "2",
      title: "Black Rock Synthetics",
      image: "/images/partners/blackRockSynthetics.png",
      description:
        "Insta360 X3 - Get Set Kit Waterproof 360 Action Camera with 1/2&quot;  48MP Sensors, 5.7K 360 Active HDR Video, 72MP 360 Photo, 4K Single-Lens, 60fps Me Mode, Stabilization, 2.29&quot;  Touchscreen, AI Editing",
      link: "http://blackrocksynthetics.com",
    },

    {
      id: "4",
      title: "Litt Industries",
      image: "/images/partners/littIndustries.png",
      description:
        "GoPro HERO8 Black E-Commerce Packaging - Waterproof Digital Action Camera with Touch Screen 4K HD Video 12MP Photos Live Streaming Stabilization",
      link: "http://littindustries.com",
    },
    {
      id: "5",
      title: "PA Dirt Riders",
      image: "/images/partners/paDirtriders.png",
      description:
        "Taisioner Super Clamp Mount Double Ball Head Adapter Compatible with GoPro AKASO DJI Action or DSLR Digital Camera Monitor / LED Lights / Ronin-M/Ronin MX / Freefly MOVI Accessories",
      link: "https://www.padirtriders.com/",
    },
    {
      id: "6",
      title: "Rowdy Life",
      image: "/images/partners/rowdyLife.png",
      description:
        "RAM Mounts RAP-B-404U Tough-Claw Medium Clamp Base with B Size 1' Ball for Rails 1' to 1.875' in Diameter",
      link: "https://rowdylifedesigns.com/",
    },
    {
      id: "7",
      title: "Arizona Kid",
      image: "/images/partners/arizonaKid.png",
      description:
        "USAMS ISAIBELL Multi Charging Cable 2Pack 4FT 4 in 1 Nylon Braided Multiple USB Fast Charging Cord Adapter Type C Micro USB Port Connectors Compatible Cell Phones Tablets and More",
      link: "https://www.youtube.com/c/ArizonaKid/featured",
    },
    {
      id: "8",
      title: "Pine Grove Yamaha",
      image: "/images/partners/pgPowersports.png",
      description:
        "The Original MuffPot Exhaust Food Warmer for Motorsports Vehicles. Snowmobile, ATV, UTV, and Motorcycles",
      link: "https://www.pgpowersports.com/",
    },
    {
      id: "9",
      title: "Knit Decor Gifts",
      image: "/images/partners/knitDecorGifts.png",
      description:
        "LED Work Light Rechargeable, 2 COB 2500LM Folding Portable Flood Light with Magnetic Base and 360° Rotation Stand, Waterproof Spotlights for Camping Car Repairing Emergency Job Site Lighting (2, Red)",
      link: "https://www.etsy.com/shop/KnitDecorGifts",
    },
    {
      id: "10",
      title: "DTF Powersports",
      image: "/images/partners/dtfPowerSports.png",
      description:
        "LED Work Light Rechargeable, 2 COB 2500LM Folding Portable Flood Light with Magnetic Base and 360° Rotation Stand, Waterproof Spotlights for Camping Car Repairing Emergency Job Site Lighting (2, Red)",
      link: "https://dtfpowersports.com/",
    },
    {
      id: "11",
      title: "Slawdog Off-road Shenanigans",
      image: "/images/partners/slawdog.png",
      description:
        "LED Work Light Rechargeable, 2 COB 2500LM Folding Portable Flood Light with Magnetic Base and 360° Rotation Stand, Waterproof Spotlights for Camping Car Repairing Emergency Job Site Lighting (2, Red)",
      link: "https://www.youtube.com/@slawdogshenanigans",
    },
  ],
};

const sponsorData = {
  sponsor: [
    {
      id: "1",
      title: "Ride Royal Blue, TN",
      image: "/images/partners/rideRoyalBlueLogo.png",
      description:
        "RAM Mounts RAP-401U Tough-Claw Large Clamp Ball Base with C Size 1.5' Ball for Rails 1' to 2.25' in Diameter",
      link: "http://rideroyalblue.com",
    },
    {
      id: "3",
      title: "Trailside Ranch",
      image: "/images/partners/trailsideRanch.png",
      description: "Let us help you get ready for your get away!",
      link: "https://www.trailsideranch-ny.com",
    },
    {
      id: "12",
      title: "Potter County ATV & UTV Club",
      image: "/images/partners/potterCounty.png",
      description:
        "GoPro HERO8 Black E-Commerce Packaging - Waterproof Digital Action Camera with Touch Screen 4K HD Video 12MP Photos Live Streaming Stabilization",
      link: "https://pcatvutvclub.com/",
    },
  ],
};

export default function partnersAndFriends() {
  return (
    <div className="container px-10 mx-auto mb-8 mt-6 flex-1">
      <main className="flex flex-col items-center justify-between text-black bg-white border-2 rounded-lg p-6 pl-9">
        <div className="w-full">
          <h2 className="text-3xl mb-4">
            Meet Our Sponsors, Partners & Friends
          </h2>
          <div>
            <h3 className="font-bold mb-2 text-xl mt-6">Sponsors</h3>
            <p>
              The Beaten Trail is proudly sponsored by the following vendors.
              Make sure to visit their sites, their sponsorships help keep this
              site free!
            </p>
            <br />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {sponsorData.sponsor.map((a) => (
              <Card key={a.id} className="flex flex-col justify-between">
                <CardHeader className="flex-row gap-4 items-center">
                  <div className="w-full">
                    <CardTitle className="border-b border-orange-600">
                      <center>{a.title}</center>
                    </CardTitle>
                    <CardContent className="pt-4 items-center align-middle">
                      <center>
                        <Link href={a.link} target="_blank">
                          <Image
                            src={a.image}
                            alt={a.title}
                            width={200}
                            height={200}
                            className="rounded-lg drop-shadow-lg border-2 border-slate-600"
                          />
                        </Link>

                        <Image
                          src="/images/partners/sponsorFlag.png"
                          width={200}
                          height={200}
                          alt="Proud Sponsor of The Beaten Trail"
                        />
                      </center>
                    </CardContent>
                    <CardDescription className="w-full">&nbsp;</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <h3 className="font-bold mb-2 text-xl mt-9">
            Partners &amp; Friends
          </h3>

          <div>
            <p>
              Over the years we&apos;ve done lots of work with other people and
              companies, and this is our shout-out to them.
              <br /> Should you find yourself needing any of the
              products/services they offer reach out to them first.
            </p>
            <br />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {amazonData.amazon.map((a) => (
              <Card key={a.id} className="flex flex-col justify-between">
                <CardHeader className="flex-row gap-4 items-center">
                  <div className="w-full">
                    <CardTitle className="border-b border-orange-600">
                      <center>{a.title}</center>
                    </CardTitle>
                    <CardContent className="pt-4 items-center align-middle">
                      <center>
                        <Link href={a.link} target="_blank">
                          <Image
                            src={a.image}
                            alt={a.title}
                            width={200}
                            height={200}
                            className="rounded-lg drop-shadow-lg border-2 border-slate-600"
                          />
                        </Link>
                      </center>
                    </CardContent>
                    <CardDescription className="w-full">&nbsp;</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
