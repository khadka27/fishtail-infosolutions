

import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Header } from "@/Components/Header";
import { Footer } from "@/Components/footer";
import PageWrapper from "./page-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fishtail InfoSolutions",
  description:
    "Fishtail InfoSolutions is a leading digital marketing agency specializing in SEO, PPC, and web development.",
  keywords: "SEO, PPC, web development, digital marketing, agency",
  authors: [{ name: "Fishtail InfoSolutions" }],
  creator: "Fishtail InfoSolutions",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageWrapper>
          <Header />
          {children}
          <Footer />
          <Toaster position="bottom-right" />
        </PageWrapper>
      </body>
    </html>
  );
}
