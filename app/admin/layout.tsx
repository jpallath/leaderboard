import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DSA Running Club Leaderboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full flex flex-col">
      {" "}
      <Link href="/" className="z-50">
        <header className="w-full p-4 border-b-solid border-b-2 bg-surface border-surface-border shadow-2xl fixed">
          <h1 className="text-center text-2xl font-bold">
            <span className="text-accent">DSA</span> Running Club
          </h1>
        </header>
      </Link>
      <div className="mt-24">{children}</div>
    </div>
  );
}
