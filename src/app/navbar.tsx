"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronLeft } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="absolute w-full top-0 left-0 right-0">
      <div
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-b border-white"
            : "bg-transparent"
        }`}
      >
        <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-0 md:py-2 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src={"/Images/newIcon2K.png"}
                  width={30}
                  height={30}
                  alt="logo"
                  className="bg-white rounded-full border-2 unoptimized"
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="rounded-xl border border-white/30 bg-white/15 p-2 text-white shadow-lg backdrop-blur-md outline-none transition hover:bg-white/25 focus:ring-2 focus:ring-white/40"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <ChevronLeft /> : <Menu />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center align-middle md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="mt-3 flex h-auto flex-col justify-center gap-1 rounded-2xl border border-white/20 bg-white/10 p-3 shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl md:mt-0 md:h-auto md:flex-row md:items-center md:gap-0 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0">
                <li className="rounded-lg border-b border-white/20 py-3 text-center text-base font-bold text-white transition hover:bg-white/15 md:rounded-none md:border-b-0 md:px-6 md:hover:bg-transparent md:hover:text-zinc-950">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="rounded-lg border-b border-white/20 py-3 text-center text-base font-bold text-white transition hover:bg-white/15 md:rounded-none md:border-b-0 md:px-6 md:hover:bg-transparent md:hover:text-zinc-950">
                  <Link
                    href="https://detainedsouls.trimatra.io"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Detained Souls
                  </Link>
                </li>

                <li className="rounded-lg border-b border-white/20 px-6 py-2 text-center text-base font-bold text-white transition hover:bg-white/15 md:rounded-none md:border-b-0 md:hover:bg-transparent md:hover:text-zinc-950">
                  <Link href="/project" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
                <li className="rounded-lg border-b border-white/20 px-6 py-2 text-center text-base font-bold text-white transition hover:bg-white/15 md:rounded-none md:border-b-0 md:hover:bg-transparent md:hover:text-zinc-950">
                  <Link href="/press-kit" onClick={() => setNavbar(!navbar)}>
                    Press-Kit
                  </Link>
                </li>
                <li className="rounded-lg border-b border-white/20 px-6 py-2 text-center text-base font-bold text-white transition hover:bg-white/15 md:rounded-none md:border-b-0 md:hover:bg-transparent md:hover:text-zinc-950">
                  <Link href="/community" onClick={() => setNavbar(!navbar)}>
                    Community
                  </Link>
                </li>

                <li className="rounded-lg px-6 py-2 text-center text-base font-bold text-white transition hover:bg-white/15 md:rounded-none md:hover:bg-transparent md:hover:text-zinc-950">
                  <Link href="/contact-us" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
