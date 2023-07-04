import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { Nav } from "@/components";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Jonathan Li",
  description: "Personal website for Jonathan Li",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx(`${inter.className} scrollbar smooth-scroll`)}>
      <body
        className="bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-200 mx-auto min-h-screen max-w-screen-xl px-6 py-12 lg:px-24 lg:py-10"
      >
        <Nav />
        {children}
        <div className="pt-20 pb-20 flex justify-center tracking-wide"><a href="mailto:hello@jonathancli.com" rel="noreferrer" target="_blank" className="text-lg font-semibold text-neutral-400 underline dark:underline-dark transition duration-800 ease-in-out">hello@jonathancli.com</a></div>
      </body>
    </html>
  );
}