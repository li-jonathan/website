import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { Nav, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Jonathan Li",
  description: "Personal website v1",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(`${inter.className} scrollbar smooth-scroll`)}
    >
      <body className="mx-auto min-h-screen max-w-screen-xl bg-slate-900 px-6 text-neutral-200 lg:px-24">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
