import "./globals.css";
import { Inter, Open_Sans } from "next/font/google";
import Navbar from "./navbar";
import Footer from "./footer";
import { useState } from "react";
import { Open_Sans as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const disableNavbar = ["/admin/dashboard", "/login"];
const disableFooter = ["/admin/dashboard"];

const openSans = Open_Sans({ subsets: ["latin"] });

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [state, useState] = useState(0);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Trimatra Official</title>
      </head>
      <body
        className={cn(
          "md:overflow-x-hidden font-sans antialiased bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700",
          fontSans.variable,
        )}
      >
        {" "}
        {/* Bungkus di sini */}
        <Navbar />
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
