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
  title: {
    default: "Sysdyncate - Komunitas & Konsultan System Dynamics Indonesia",
    template: "%s | Sysdyncate"
  },
  description: "Sysdyncate adalah komunitas dan konsultan System Dynamics (Dinamika Sistem) terdepan di Indonesia. Kami menyediakan layanan simulasi sistem dinamik, riset kebijakan publik, dan pelatihan pemodelan sistem kompleks (sisdin).",
  keywords: [
    "sysdyn",
    "system dynamics",
    "dinamika sistem",
    "sisdin",
    "sistem dinamis",
    "sistem dinamik",
    "pemodelan sistem",
    "simulasi kebijakan",
    "berpikir sistem",
    "systems thinking Indonesia"
  ],
  authors: [{ name: "Sysdyncate Team" }],
  creator: "Sysdyncate",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://sysdyncate.com",
    title: "Sysdyncate - Navigasi Kompleksitas dengan System Dynamics",
    description: "Membangun model simulasi untuk penelitian, kebijakan publik, dan optimasi sistem industri menggunakan pendekatan Dinamika Sistem.",
    siteName: "Sysdyncate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sysdyncate - Komunitas System Dynamics Indonesia",
    description: "Solusi pemodelan dan simulasi sistem dinamik untuk pengambilan keputusan berbasis data.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
