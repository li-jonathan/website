import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { Nav, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Jonathan Li",
  description: "Jonathan Li personal website v1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx(`${inter.className} scrollbar smooth-scroll`)}>
      <body
        className="bg-neutral-200 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-200 mx-auto min-h-screen max-w-screen-xl px-6 lg:px-24"
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}