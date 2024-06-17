import "./globals.css";

import { Metadata } from "next";

import { getServerSession } from "next-auth";

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s | ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   keywords: [],
//   authors: [
//     {
//       name: "Tapan Rai",
//       url: "https://twitter.com/asyncninja",
//     },
//   ],
//   creator: "Tapan Rai",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: siteConfig.url,
//     title: siteConfig.name,
//     description: siteConfig.description,
//     siteName: siteConfig.name,
//   },
//   twitter: {
//     card: "summary",
//     title: siteConfig.name,
//     description: siteConfig.description,
//     // images: [`${siteConfig.url}/og.jpg`],
//     creator: "@asyncninja",
//   },
//   icons: {
//     icon: "/favicons/favicon.ico",
//     shortcut: "/favicons/favicon-16x16.png",
//     apple: "/favicons/apple-touch-icon.png",
//   },
//   manifest: `${siteConfig.url}/favicons/site.webmanifest`,
// };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head />
      {/* Body */}
      <body className=" font-sans text-slate-12">
          {children}
      </body>
    </html>
  );
}
