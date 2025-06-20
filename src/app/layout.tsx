import type { Metadata } from "next";
import { Aboreto, New_Rocker, Rubik_Dirt, Inter } from "next/font/google";
import "./globals.css";
import SubHeader from "@/components/SubHeader";
import Footer from "@/components/Footer";
const aboreto = Aboreto({
  variable: "--font-aboreto",
  subsets: ["latin"],
  weight: "400",
});

const newRocker = New_Rocker({
  variable: "--font-newrocker",
  subsets: ["latin"],
  weight: "400"
});

const rubikDirt = Rubik_Dirt({
  variable: "--font-rubikdirt",
  subsets: ["latin"],
  weight: "400"
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Viscerate",
  description: "Viscerate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${aboreto.variable} ${newRocker.variable} ${rubikDirt.variable} ${inter.variable}`}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
