import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jonathan Li",
  description: "Jonathan Li's personal website. Frontend Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} antialiased bg-slate-800 text-slate-100`}>
          <div className="grid grid-cols-[1fr_min(100%,70ch)_1fr]">
            {children}
          </div>
      </body>
    </html>
  );
}
