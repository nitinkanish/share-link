import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Favicon from "../app/assets/img/favicon.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lit it Rewards",
  description: "Where Web 2.0 social media meets Web 3.0. Watch viral videos and always earn No money investment ever needed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href={Favicon} type="image/png" />

      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
