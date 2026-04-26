"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { gamecard } from "@/app/data/gamecard";

const HomeGameView: React.FC = () => {
  return (
    <div className="w-full h-full text-white">
      <div className="mx-auto container">
        <motion.h1
          initial={{ opacity: 0, scale: 1, y: 200 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl xl:text-5xl text-center font-bold pb-10 xl:pb-16"
        >
          Featured Projects
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 1, y: 200 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid mx-20 grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-6 gap-5 xl:gap-20"
        >
          {gamecard.slice(0, 5).map((game) => (
            <div key={game.id} className="h-48 w-48 my-10 xl:my-0">
              <Link href={game.link} className="place-content-center">
                <Tilt
                  perspective={700}
                  glareEnable={true}
                  glareMaxOpacity={0.45}
                  scale={1.02}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(10px)",
                  }}
                  className="bg-white bg-clip-padding backdrop-filter transition-all duration-300 border backdrop-blur-md bg-opacity-20 rounded-3xl shadow-xl drop-shadow-2xl shadow-black/30"
                >
                  <div className="group">
                    <div className="scale-90">
                      <div
                        style={{
                          transformStyle: "preserve-3d",
                          transform: "translateZ(70px)",
                        }}
                      >
                        <Image
                          src={game.icongame}
                          alt="game"
                          width={200}
                          height={200}
                          className="rounded-3xl object-center m-auto scale-90 group-hover:scale-75 transition-all duration-300"
                        />
                      </div>

                      <h1 className="font-bold text-base text-center align-middle translate-y-0 transition-all duration-500 group-hover:-translate-y-3">
                        {game.namegame}
                      </h1>
                    </div>
                  </div>
                </Tilt>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomeGameView;
