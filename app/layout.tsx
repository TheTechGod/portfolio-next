import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import type { ReactNode } from "react";
import SiteNavbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
