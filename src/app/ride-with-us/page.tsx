import React from "react";

export default function rideWithUs() {
  return (
    <div className="container px-10 mx-auto mb-8 mt-6 flex-1">
      <main className="flex flex-col items-center justify-between text-black bg-white border-2 rounded-lg p-6">
        <div className="pl-3">
          <h2 className="text-3xl mb-4">Ride With Us</h2>
          <div
            className="p-2 mb-4 mt-4 text-black bg-white border-2 rounded-lg md:col-span-2 md:row-span-2  md:mb-0 drop-shadow-xl"
            style={{
              backgroundImage: 'url("../images/groupShot01.png")',
              backgroundSize: "cover",
              height: "34rem",
            }}
          ></div>
          <div>
            <h3 className="font-bold mb-2 text-xl mt-6">Where Do We Ride?</h3>
            <p>
              All over the place! Sort of. Our &quot;usual&quot; ride spots are
              in Pennsylvania locations such as anthracite outdoor adventure
              area. But we&apos;ve been known to stray.... We&apos;ve ridden
              some of the best trails in California, Pennsylvania, Georgia, New
              York, New Jersey, and even Tennessee.
            </p>
            <h3 className="font-bold mb-2 text-xl mt-6">When Do We Ride?</h3>
            <p>
              All the time! Kinda. We&apos;ve ridden in all four seasons and
              have braved all of the elements.{" "}
            </p>
            <h3 className="font-bold mb-2 text-xl mt-6">
              Do We Want You to Join Us?
            </h3>
            <p>
              Absolutely! We&apos;re actually social creatures and we hang out
              alot on Facebook, Youtube, TikTok, Instagram (all of our links are
              in the footer of this page).
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
