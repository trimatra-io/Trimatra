"use client";
import React, { useState } from "react"; // Import useState
import { Button } from "../ui/button";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { portlist } from "@/app/data/portfoliolist"; // Pastikan path ini benar
import { motion } from "framer-motion";
import Image from "next/image";

// Tentukan tipe untuk item gamecard
interface PortfoList {
  id: number;
  link: string;
  icongame: string;
  namegame: string;
  category: string; // Tambahkan properti category
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const PortfolioCard = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All"); // State untuk kategori aktif

  // Dapatkan semua kategori unik dari data gamecard
  const categories = [
    "All",
    ...Array.from(new Set(portlist.map((game) => game.category))),
  ];

  // Filter game berdasarkan kategori aktif
  const filteredGames = portlist.filter((game: PortfoList) =>
    activeCategory === "All" ? true : game.category === activeCategory
  );

  return (
    <div className="w-full">
      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Game Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-12"
      >
        {filteredGames.map((game: PortfoList) => (
          <motion.div variants={item} key={game.id} className="h-full w-full ">
            <Tilt
              perspective={700}
              glareEnable={true}
              glareMaxOpacity={0.45}
              scale={1.02}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(10px)",
              }}
            >
              <Link href={game.link}>
                <div className="bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-3xl">
                  <div className="relative">
                    <div>
                      {game.icongame && game.icongame.length > 0 ? (
                        <Image
                          src={game.icongame}
                          alt={game.namegame} // Gunakan namegame untuk alt
                          width={500}
                          height={500}
                          className="object-contain rounded-3xl scale-90"
                        />
                      ) : (
                        <Image
                          src={"/placeholder-title.png"}
                          alt="Icon Game In Progress" // Gunakan namegame untuk alt
                          width={500}
                          height={500}
                          className="object-contain rounded-3xl scale-90"
                        />
                      )}
                      <h1 className="p-3 font-bold text-base text-center content-center m-1">
                        {game.namegame}
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PortfolioCard;
