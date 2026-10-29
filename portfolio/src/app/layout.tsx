import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prince-kofi-amissah.vercel.app"),
  title: {
    default: "Prince Kofi F. Amissah | Portfolio",
    template: "%s | Prince Kofi F. Amissah",
  },
  description:
    "Cybersecurity-focused engineer and founder & CEO of PayGuard, studying for an MSc in Cybersecurity at Academic City University. CCNA-trained, Information Systems graduate and full-stack developer based in Accra, Ghana.",
  openGraph: {
    title: "Prince Kofi F. Amissah | Portfolio",
    description:
      "Cybersecurity, network security and full-stack projects, and PayGuard: escrow-protected commerce for Ghana.",
    url: "/",
    siteName: "Prince Kofi F. Amissah",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Prince Kofi Frimpong Amissah portfolio preview",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Kofi F. Amissah | Portfolio",
    description:
      "Cybersecurity, network security and full-stack projects, and PayGuard.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport = {
  themeColor: "#17130f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
