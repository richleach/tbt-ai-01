import Image from "next/image";

export default function notFound() {
  return (
    <div className="container px-10 mx-auto mb-8">
      <main className="flex flex-col items-center justify-between text-white bg-black border-2 rounded-lg p-6">
        <h4>
          Sorry, but we can&apos;t seem to find the page you&apos;re looking
          for.
        </h4>
        <div>
          You can try a different link, or just enjoy the monkey.
          <br />
          <br />
          <Image
            src="/images/bangingMonkey.gif"
            alt="monkey"
            height="323"
            width="417"
          />
        </div>
      </main>
    </div>
  );
}
