import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASAN muraciet Vision AI | Vizual muraciet analizi ve dogrulama demo",
  description:
    "ASAN muraciet informasiya sistemi ucun vizual analiz, avtomatik kateqoriyalashdirma, prioritetlesdirme ve icra netijelerinin dogrulanmasi uzre demo platforma."
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
