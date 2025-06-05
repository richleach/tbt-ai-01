import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trail Therapy: The Beaten Trail",
  description: "Check out our Youtube channel as well",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8X77K1XPB9"
        ></Script>
        <Script id="google-analytics">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T9C6JLV4');
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} bg-gradient-to-br from-blue-200 to-blue-400`}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          {children}
          <SiteFooter />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-T9C6JLV4"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        </div>
      </body>
    </html>
  );
}
