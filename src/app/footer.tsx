import Link from "next/link";
import Image from "next/image";
import {
  RiFacebookCircleFill,
  RiTwitterXFill,
  RiDiscordFill,
  RiTiktokFill,
} from "react-icons/ri";
import { Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  // Since this is now static/server-side, we calculate the year once during build/render.
  // We do not need useEffect or useState.
  const year = new Date().getFullYear();

  return (
    <div className="text-white">
      <div className="bg-gradient-to-br from-gray-700 to-gray-500 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10 xl:p-20">
        {/* Brand and Socials */}
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-3xl pb-6">
              <span>Trimatra Studio</span>
            </p>
            <div className="flex gap-6 pb-5">
              <Link
                href="https://www.facebook.com/trimatra.io"
                target="_blank"
                aria-label="Facebook"
              >
                <RiFacebookCircleFill className="text-2xl cursor-pointer hover:text-blue-700 transition-colors duration-500" />
              </Link>
              <Link
                href="https://www.instagram.com/trimatra.io"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram className="text-2xl cursor-pointer hover:text-purple-600 transition-colors duration-500" />
              </Link>
              <Link
                href="https://twitter.com/Trimatra_io"
                target="_blank"
                aria-label="Twitter / X"
              >
                <RiTwitterXFill className="text-2xl cursor-pointer hover:text-cyan-400 transition-colors duration-500" />
              </Link>
              <Link
                href="https://www.youtube.com/@Trimatra_io"
                target="_blank"
                aria-label="YouTube"
              >
                <Youtube className="text-2xl cursor-pointer hover:text-red-600 transition-colors duration-500" />
              </Link>
              <Link
                href="https://www.tiktok.com/@trimatra.io"
                target="_blank"
                aria-label="TikTok"
              >
                <RiTiktokFill className="text-2xl cursor-pointer hover:text-red-400 transition-colors duration-500" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/trimatra-studio"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-2xl cursor-pointer hover:text-blue-400 transition-colors duration-500" />
              </Link>
              <Link
                href="https://discord.gg/trimatra-io"
                target="_blank"
                aria-label="Discord"
              >
                <RiDiscordFill className="text-2xl cursor-pointer hover:text-blue-500 transition-colors duration-500" />
              </Link>
            </div>

            {/* App Store Links */}
            <div className="flex gap-2 sm:gap-4 md:gap-6 pb-5 flex-wrap">
              <Link
                href="https://play.google.com/store/apps/dev?id=5165829129642037794&hl=en_US"
                target="_blank"
              >
                <Image
                  src={"/Images/Playstore.png"}
                  width={120}
                  height={90}
                  className="w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48"
                  alt="Download on Google Playstore"
                />
              </Link>
              <Link href="/" target="_blank">
                <Image
                  src={"/Images/Steam.png"}
                  width={120}
                  height={90}
                  className="w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48"
                  alt="Download on Steam"
                />
              </Link>
              <Link
                href="https://www.roblox.com/communities/414045135/Pesona-Nusantara/#!/about"
                target="_blank"
              >
                <Image
                  src="/Images/Roblox.png"
                  width={120}
                  height={90}
                  className="w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48"
                  alt="Play on Roblox"
                />
              </Link>
            </div>
          </ul>
        </div>

        {/* Studio Links */}
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-3xl pb-4">Studio</p>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-black cursor-pointer transition-colors">
              <Link href="/about">About</Link>
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-black cursor-pointer transition-colors">
              <Link href="/games">Our Games</Link>
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-black cursor-pointer transition-colors">
              <Link href="/belum-tersedia">News</Link>
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-black cursor-pointer transition-colors">
              <Link href="/carrier">Carrier</Link>
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-black cursor-pointer transition-colors">
              <Link href="/belum-tersedia">Services</Link>
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-black cursor-pointer transition-colors">
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Community Links */}
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-3xl pb-4">Community</p>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-black cursor-pointer transition-colors">
              <Link href="/community">Our Community</Link>
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-black cursor-pointer transition-colors">
              <Link href="/press-kit">Press Kit</Link>
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-black cursor-pointer transition-colors">
              <Link href="/fan-art">Fan Art&apos;s</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="flex flex-col justify-center items-center text-center p-5 bg-stone-950">
        <h1 className="text-white font-semibold">
          <p> © {year} Copyright | Trimatra Studio</p>
          <br />
          <Link
            href="/privacy-policy"
            className="hover:text-gray-400 font-semibold cursor-pointer transition-colors"
          >
            Privacy Policy
          </Link>
          <span> • </span>
          <Link
            href="/tos"
            className="hover:text-gray-400 font-semibold cursor-pointer transition-colors"
          >
            Term of Services
          </Link>
        </h1>
      </div>
    </div>
  );
}
