import Image from "next/image";

export default function moab2024() {
  return (
    <div className="container px-10 mx-auto mb-8 mt-6">
      <main className="flex flex-col items-center justify-between text-black bg-white border-2 rounded-lg p-6">
        <div className="pl-3 w-full">
          <h2 className="text-3xl mb-4">Moab 2024</h2>
          <div className="p-2 mb-4 mt-4 text-black  md:col-span-2 md:row-span-2  md:mb-0 drop-shadow-xl">
            <Image
              src="/images/moab2024.JPG"
              height={480}
              width={640}
              alt="Moab was awesome"
              className="mx-auto drop-shadow-xl rounded-lg align-middle mt-10"
            />
          </div>
          <div className="p-2 mb-4 mt-4 text-black  md:col-span-2 md:row-span-2  md:mb-0 drop-shadow-xl">
            <Image
              src="/images/moab2024-03.jpg"
              height={360}
              width={640}
              alt="Friends in Moab"
              className="mx-auto drop-shadow-xl rounded-lg align-middle mt-10"
            />
          </div>
          <div className="p-2 mb-4 mt-4 text-black  md:col-span-2 md:row-span-2  md:mb-0 drop-shadow-xl">
            <Image
              src="/images/moab2024-04.jpg"
              height={206}
              width={640}
              alt="Rocks and sand...."
              className="mx-auto drop-shadow-xl rounded-lg align-middle mt-10"
            />
          </div>
          <div className="p-2 mb-4 mt-4 text-black  md:col-span-2 md:row-span-2  md:mb-0 drop-shadow-xl">
            <Image
              src="/images/moab2024-05.JPG"
              height={640}
              width={480}
              alt="We found the BEST tour guides!"
              className="mx-auto drop-shadow-xl rounded-lg align-middle mt-10"
            />
          </div>
          <div className="p-2 mb-4 mt-4 text-black  md:col-span-2 md:row-span-2  md:mb-0 drop-shadow-xl">
            <Image
              src="/images/moab2024-06.png"
              height={609}
              width={474}
              alt="We found the BEST tour guides!"
              className="mx-auto drop-shadow-xl rounded-lg align-middle mt-10"
            />
          </div>
          <div className="p-2 mb-4 mt-4 text-black  md:col-span-2 md:row-span-2  md:mb-0 drop-shadow-xl">
            <Image
              src="/images/moab2024-07.jpg"
              height={640}
              width={528}
              alt="Trails EVERYWHERE"
              className="mx-auto drop-shadow-xl rounded-lg align-middle mt-10"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
