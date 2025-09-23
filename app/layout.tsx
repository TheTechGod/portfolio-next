import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrity Programming – Portfolio",
  description: "Geoff Metzger – Developer Portfolio for Integrity Programming",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          defer
        />
      </body>
    </html>
  );
}
