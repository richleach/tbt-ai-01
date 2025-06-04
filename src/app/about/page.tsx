import Image from "next/image";

export default function Home() {
  return (
    <div className="container px-10 mx-auto mb-8 mt-6 flex-1">
      <main className="flex flex-col items-center justify-between text-black bg-white border-2 rounded-lg p-6">
        <div className="pl-3">
          <h2 className="text-3xl mb-4">About Us</h2>
          <Image
            src="/images/MHhelmet.png"
            height={480}
            width={650}
            alt="da man...."
            className="drop-shadow-lg rounded-xl m-4"
          />
          <p className="font-bold underline text-2xl mb-4">
            Michael Herrmann - Head Honcho
          </p>
          <h3 className="font-bold mb-2 text-xl">Getting Started</h3>
          <p>
            Michael started out in the pandemic, joining the motorsports riding
            arena once again with a small razor trail 50 inch side-by-side,
            which started many park reviews and accessory episodes. Since
            growing the riding group he has reviewed dozens of regional parks as
            well as ridden trails in California, Pennsylvania, Georgia, New
            York, New Jersey, and Tennessee for unique riding areas for the ATV
            and UTV enthusiast.
          </p>
          <h3 className="font-bold mb-2 mt-4 text-xl">Way Back In The Day</h3>
          <p>
            Having grown up in NJ, a younger-aged Michael used to ride Yamaha YZ
            80 Honda, CT 70s and other various dirt bikes, homemade go karts and
            pit bikes. Fast forward and the current ride is a Grizzly 700 XTR as
            well as a Honda Talon 1000R side-by-side. The team rides include
            several Can-Am, Kawasaki, CFMoto, Polaris and many others brands and
            takes great efforts to ride a wide variety of vehicles on just as
            many trails.
          </p>
          <h3 className="font-bold mb-2 mt-4 text-xl">
            A Pilot, Video Editor and Author oh my!
          </h3>
          <p>
            Michael is a part 107 drone certified pilot. Should you need any
            additional footage for your real estate or video channel he is
            available for hire as well as video editing and assistance with
            setting up your own YouTube channel. Please contact
            TheBeatentrailllc@gmail.com.
          </p>
        </div>
      </main>
    </div>
  );
}
