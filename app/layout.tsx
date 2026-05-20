import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "JobSim AI | AI job simulation assessment",
  description:
    "Junior namizədləri real iş simulyasiyaları və AI-style skill scoring ilə qiymətləndirən MVP demo."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="az">
      <body>
        <div className="site-bg" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
