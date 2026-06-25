import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

// Fallback / pairing font that stands in for Neue Machina until the
// self-hosted .woff2 files are present in /public/fonts.
const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omkarmishradev.vercel.app"),
  title: "Omkar Mishra — Full-Stack Web Engineer",
  description:
    "Omkar Mishra is a full-stack web engineer building scalable systems, fast interfaces, and reliable web applications.",
  openGraph: {
    title: "Omkar Mishra — Full-Stack Web Engineer",
    description:
      "Full-stack web engineer focused on scalable systems, performance, and polished user experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${grotesk.variable} antialiased`}>
      <body className="bg-bg text-fg">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
