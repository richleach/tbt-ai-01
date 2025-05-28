import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="w-full border-b border-gray-700 bg-white">
      <div className="container mx-auto max-w-7xl flex min-h-16 md:h-16 items-center justify-center px-4 sm:px-6 lg:px-8 py-4 md:py-0">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 items-center w-full">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/theBeatenTrailLogo.png"
              alt="The Beaten Trail Logo"
              width={75}
              height={20}
              className="h-auto w-auto rounded-lg"
              priority
            />
          </Link>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 
            border-2 border-[#5C452B] 
            text-[#1F1F1F] font-semibold 
            bg-white rounded-lg shadow-md 
            hover:bg-gray-50 
            focus:outline-none focus:ring-2 focus:ring-[#5C452B] focus:ring-opacity-50 
            transition-colors duration-150 ease-in-out group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="w-5 h-5 mr-2 fill-[#FF6B35]"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
              Shop Our Store
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 
            border-2 border-[#5C452B] 
            text-[#1F1F1F] font-semibold 
            bg-white rounded-lg shadow-md 
            hover:bg-gray-50 
            focus:outline-none focus:ring-2 focus:ring-[#5C452B] focus:ring-opacity-50 
            transition-colors duration-150 ease-in-out group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="w-5 h-5 mr-2 fill-[#FF6B35]"
              >
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6C16 165.9 16 288 16 288s0 122.1 10.3 163.9c6.3 23.7 24.8 42.3 48.3 48.6C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.9 48.3-48.6C560 410.1 560 288 560 288s0-122.1-10.3-163.9zM224 373.1V138.9L394.8 256 224 373.1z" />
              </svg>
              YouTube Channel
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 
            border-2 border-[#5C452B] 
            text-[#1F1F1F] font-semibold 
            bg-white rounded-lg shadow-md 
            hover:bg-gray-50 
            focus:outline-none focus:ring-2 focus:ring-[#5C452B] focus:ring-opacity-50 
            transition-colors duration-150 ease-in-out group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 mr-2 fill-[#FF6B35]"
              >
                <path d="M224 307.3c-30.6 0-59.4-11.9-81.3-33.9S108.8 233 108.8 202.4c0-30.6 11.9-59.4 33.9-81.3s49.7-33.9 81.3-33.9c30.6 0 59.4 11.9 81.3 33.9s33.9 49.7 33.9 81.3c0 30.6-11.9 59.4-33.9 81.3S254.6 307.3 224 307.3zM448 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s240 111 240 248zM224 432c63.1 0 114.7-44.2 125.5-102.7-11.1 3.4-22.9 5.2-35.3 5.2-30.6 0-59.4-11.9-81.3-33.9S108.8 260.1 108.8 229.5c0-30.6 11.9-59.4 33.9-81.3s49.7-33.9 81.3-33.9c12.4 0 24.2 1.8 35.3 5.2C269.3 60.2 217.7 16 154.6 16c-101.7 0-184 82.3-184 184s82.3 184 184 184c23.9 0 46.7-4.6 67.2-12.8C273.2 410.6 250.2 432 224 432z" />
              </svg>
              Trail Tested
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 
                    border-2 border-[#5C452B] 
                    text-[#1F1F1F] font-semibold 
                    bg-white rounded-lg shadow-md 
                    hover:bg-gray-50 
                    focus:outline-none focus:ring-2 focus:ring-[#5C452B] focus:ring-opacity-50 
                    transition-colors duration-150 ease-in-out group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="w-5 h-5 mr-2 fill-[#FF6B35]"
              >
                <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64v32c0 8.8 7.2 16 16 16H560c8.8 0 16-7.2 16-16V128H576V96h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H576V48c0-26.5-21.5-48-48-48H112zM96 224H64V384c0 35.3 28.7 64 64 64H192c35.3 0 64-28.7 64-64V224H96zm384 0H320V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224H480zM256 336a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm160-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
              </svg>
              Come Ride!
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 
                    border-2 border-[#5C452B] 
                    text-[#1F1F1F] font-semibold 
                    bg-white rounded-lg shadow-md 
                    hover:bg-gray-50 
                    focus:outline-none focus:ring-2 focus:ring-[#5C452B] focus:ring-opacity-50 
                    transition-colors duration-150 ease-in-out group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="w-5 h-5 mr-2 fill-[#FF6B35]"
              >
                <path d="M480 288c8.8 0 16-7.2 16-16V240c0-44.2-35.8-80-80-80H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c26.5 0 48 21.5 48 48v32c0 8.8 7.2 16 16 16zm-112 0c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16s7.2 16 16 16H368zm0 64H160c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16s-7.2-16-16-16zm64-64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448c-8.8 0-16 7.2-16 16zM272 64C165.9 64 80 149.9 80 256s85.9 192 192 192s192-85.9 192-192S378.1 64 272 64zm0 320c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128zM576 160H528c0-35.3-28.7-64-64-64H416c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c17.7 0 32 14.3 32 32V224c0 8.8 7.2 16 16 16s16-7.2 16-16V160zM576 352c-8.8 0-16 7.2-16 16v64c0 17.7-14.3 32-32 32H480c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c35.3 0 64-28.7 64-64V368c0-8.8-7.2-16-16-16z" />
              </svg>
              Partners & Friends
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
