import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AURA Genesis Command Center™",
  description: "SentientOS™ executive operating dashboard for finance, sales, marketing, operations, HR, and agent orchestration."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
