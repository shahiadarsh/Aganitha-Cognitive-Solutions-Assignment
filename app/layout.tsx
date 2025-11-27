import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorTrail from "@/components/CursorTrail";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TinyLink - Modern URL Shortener",
  description: "Create and manage short links with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}