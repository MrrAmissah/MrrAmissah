import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prince-kofi-amissah.vercel.app"),
  title: {
    default: "Prince Kofi Amissah | Portfolio",
    template: "%s | Prince Kofi Amissah",
  },
  description:
    "Information Systems graduate, CCNA-trained network technician, and full-stack developer based in Accra, Ghana.",
  openGraph: {
    title: "Prince Kofi Amissah | Portfolio",
    description:
      "Information Systems, networking, IT infrastructure, and full-stack projects built for practical Ghanaian use cases.",
    url: "/",
    siteName: "Prince Kofi Amissah",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Prince Kofi Amissah portfolio preview",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Kofi Amissah | Portfolio",
    description:
      "Information Systems, networking, IT infrastructure, and full-stack projects.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
