"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import PortoGame from "@/components/games/PortoGame";

const gameheader = [
  {
    id: 1,
    title: "Detained Souls",
    image: "/home/Carousel/DetainedSouls1.png",
    link: "https://detainedsouls.trimatra.io",
    description: "Description",
  },
  {
    id: 2,
    title: "Detained Souls",
    image: "/home/Carousel/Detained Souls2.png",
    link: "https://detainedsouls.trimatra.io",
    description: "Description",
  },
];

export default function PortfolioGames() {
  return (
    <div className="text-white text-3xl font-bold">
      <div className="w-full h-full">
        <div className="mx-auto container">
          <div className="py-10 xl:py-14 pb-0 xl:pb-40">
            <PortoGame />
          </div>
        </div>
      </div>
    </div>
  );
}
