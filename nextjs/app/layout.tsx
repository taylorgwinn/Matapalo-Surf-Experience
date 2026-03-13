import type { Metadata } from "next";
import { Bebas_Neue, Nunito } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito-var",
});

export const metadata: Metadata = {
  title: "Matapalo Surf Experience — Cabo Matapalo, Costa Rica",
  description:
    "Private surf lessons, guiding, retreats, and jungle adventures in one of the most remote and beautiful corners of Costa Rica — locally owned, expert-led.",
  openGraph: {
    title: "Matapalo Surf Experience — Cabo Matapalo, Costa Rica",
    description:
      "Private surf lessons, guiding, retreats, and jungle adventures in Cabo Matapalo on the Osa Peninsula.",
    siteName: "Matapalo Surf Experience",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${nunito.variable}`}>
      <body>
        <Nav />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
