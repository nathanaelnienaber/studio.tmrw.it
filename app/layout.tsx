import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studio.tmrw.it"),
  title: "tmrw.it",
  description:
    "tmrw.it — independent studio building digital things for tomorrow. Projects, apps, platforms and experiments from TMRW LLC.",
  icons: {
    icon: "/favicon-dark.png"
  },
  openGraph: {
    title: "tmrw.it",
    description:
      "Independent studio building digital products for tomorrow with precision, clarity and calm confidence.",
    url: "https://studio.tmrw.it",
    siteName: "tmrw.it",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "tmrw.it",
    description:
      "Independent studio building digital products for tomorrow with precision, clarity and calm confidence."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`}>
      <body className="bg-graphite text-slate-100">
        {children}
      </body>
    </html>
  );
}
