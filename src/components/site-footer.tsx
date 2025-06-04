import Link from "next/link";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-700 bg-white py-6">
      <div className="container mx-auto max-w-7xl flex flex-col items-center gap-4 px-4 sm:px-6 lg:px-8 md:flex-row md:justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="https://www.facebook.com/TheBeatenTrailLLC"
            className="text-[#2D2D2D] hover:text-[#8B2E1D]"
            target="_blank"
          >
            <Facebook className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCnIyytMWGt41WZAc6QocKcQ"
            className="text-[#2D2D2D] hover:text-[#8B2E1D]"
            target="_blank"
          >
            <Youtube className="h-6 w-6" />
          </Link>
          <Link
            href="https://x.com/thebeatentrail1"
            className="text-[#2D2D2D] hover:text-[#8B2E1D]"
            target="_blank"
          >
            <Twitter className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.instagram.com/thebeatentrail/"
            className="text-[#2D2D2D] hover:text-[#8B2E1D]"
            target="_blank"
          >
            <Instagram className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.tiktok.com/@thebeatentrail"
            className="text-[#2D2D2D] hover:text-[#8B2E1D]"
            target="_blank"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </Link>
        </div>

        <div className="flex items-center gap-4 text-sm text-[#2D2D2D]">
          <span>© {currentYear} All Rights Reserved</span>
          <Link href="/about" className="hover:text-[#8B2E1D]">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#8B2E1D]">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
