import Image from "next/image";

export default function HomePage() {
  return (
    <main
      className="flex min-h-screen flex-col gap-6 py-6 bg-transparent"
      style={{
        backgroundImage: "url(/images/background1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6 bg-transparent">
        {/* Welcome Section */}
        <div className="relative h-[30vh] sm:h-[40vh] md:h-[80vh] overflow-visible">
          {/* Main Background Image Container */}
          <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/images/main-trail-bg.png"
                alt="Trail background with Welcome text"
                fill
                className="object-cover md:object-contain object-center rounded-xl"
                priority
              />
            </div>
          </div>

          {/* Right Side Images Stack */}
          <div className="absolute right-0 translate-x-1/4 h-full hidden md:flex flex-col justify-between py-8">
            <div className="relative">
              <Image
                src="/images/side-image1.png"
                alt="Trail experience 1"
                width={400}
                height={300}
                className="rounded-lg shadow-xl border-3 border-black"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/side-image2.png"
                alt="Trail experience 2"
                width={400}
                height={300}
                className="rounded-lg shadow-xl border-3 border-black"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/side-image3.png"
                alt="Trail experience 3"
                width={400}
                height={300}
                className="rounded-lg shadow-xl border-3 border-black"
              />
            </div>
          </div>
        </div>

        {/* Mobile-only side images */}
        <div className="flex flex-col gap-4 md:hidden">
          <Image
            src="/images/side-image1.jpg"
            alt="Trail experience 1"
            width={400}
            height={300}
            className="rounded-lg shadow-xl border-4 border-black w-full"
          />
          <Image
            src="/images/side-image2.jpg"
            alt="Trail experience 2"
            width={400}
            height={300}
            className="rounded-lg shadow-xl border-4 border-black w-full"
          />
          <Image
            src="/images/side-image3.jpg"
            alt="Trail experience 3"
            width={400}
            height={300}
            className="rounded-lg shadow-xl border-4 border-black w-full"
          />
        </div>

        {/* YouTube Section */}
        <div className="flex justify-center items-center mt-6">
          <Image
            src="/images/as-seen-on-youtube.png"
            alt="As Seen on YouTube"
            width={400}
            height={300}
            className="w-auto h-auto"
            priority
          />
        </div>

        {/* Store Section */}
        <div className="flex justify-center items-center mt-6">
          <Image
            src="/images/the-store.png"
            alt="The Store"
            width={400}
            height={300}
            className="w-auto h-auto"
            priority
          />
        </div>
      </div>
    </main>
  );
}
