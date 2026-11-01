import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PulseMarket — Smarter every day",
  description: "Har kuni ilhom beradigan texnologiyalar. Siz uchun sinchiklab tanlangan.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
