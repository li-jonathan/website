import { Inter, Open_Sans, Geologica, Overpass_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });
const overpassMono = Overpass_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Jonathan Li",
  description: "Personal website v2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${overpassMono.className} leading-normal antialiased scroll-smooth grid grid-cols-[1fr_min(70ch,100%)_1fr] bg-gray-800 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
