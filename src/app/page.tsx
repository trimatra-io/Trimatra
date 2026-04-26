"use client";

import React from "react";
import { motion } from "motion/react";

// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HomeGameView from "@/components/home/ourbest-game";
import PortfolioHomePage from "@/components/home/porfolio";
import LogoImages from "@/components/home/logo";
import { FlipWords } from "@/components/ui/flip-words";
import Video from "@/components/home/video";
import Partner from "@/components/games/Partner";

export default function Home() {
  const words = [
    "Game Development",
    "Level Design",
    "Programming Assistant",
    "Roblox",
    "Unity",
    "Unreal Engine",
  ];

  return (
    <main>
      <div className="container mx-auto grid w-full min-h-screen grid-cols-1 items-center gap-10 px-4 py-10 sm:px-8 md:px-12 md:py-16 lg:grid-cols-2 lg:py-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="col-span-1 whitespace-pre-line text-center lg:text-left"
        >
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-5xl">
            A Passionate <br />
            Indie Game Developer
          </h1>
          <span className="flex justify-center py-5 text-xl font-bold text-white md:text-3xl lg:justify-start lg:text-3xl">
            <FlipWords words={words} /> <br />
          </span>
          <h2 className="text-xl text-white">Since 2016</h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-5"
          >
            <Button className="w-fit">
              <Link href="/project">See Our Portfolio</Link>
            </Button>
          </motion.div>
        </motion.div>
        <div className="order-1 col-span-1 flex justify-center lg:order-none">
          <div className="hidden md:block md:-translate-y-6 lg:-translate-y-10">
            <LogoImages />
          </div>
        </div>
      </div>

      <div className="xl:h-4/5">
        <section>
          <div className="relative isolate overflow-hidden px-3 py-14 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <h1 className="text-3xl font-bold tracking-tight text-blue-400 sm:text-4xl">
                    Main Project
                  </h1>
                  <motion.div
                    className="lg:max-w-3xl lg:text-left"
                    initial={{ opacity: 0, scale: 1, y: 200 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl pt-5 pb-8">
                      Detained Souls
                    </h1>
                    <p className="text-base leading-7 text-white sm:text-lg sm:leading-8 lg:text-xl lg:leading-10">
                      The seemingly tranquil village harbors an unexpected
                      darkness. The villagers, who initially appear kind and
                      welcoming, conceal sinister secrets behind their smiles.
                      People mysteriously vanish, leaving behind soulless
                      bodies. These lifeless husks wander aimlessly, devoid of
                      consciousness. It quickly becomes clear that a malevolent
                      force is at work in the village. Every corner hides clues
                      leading to a horrifying truth.
                    </p>
                  </motion.div>
                </div>
              </div>
              <motion.div
                className="mt-6 px-2 sm:px-4 lg:sticky lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:mt-0 lg:overflow-hidden"
                initial={{ opacity: 0, scale: 1, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0 }}
              >
                <Image
                  className="mx-auto w-full max-w-md rounded-xl shadow-xl sm:max-w-xl lg:max-w-2xl"
                  src="/home/DetainedSoul.png"
                  width={500}
                  height={500}
                  alt=""
                />
              </motion.div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div className="lg:pr-4">
                  <motion.div
                    className="lg:max-w-3xl lg:text-left pt-10"
                    initial={{ opacity: 0, scale: 1, y: 200 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <Link
                      className="mt-6"
                      href="https://detainedsouls.trimatra.io"
                    >
                      <Button>See More</Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="py-8 text-white xl:py-32">
        <div className="grid grid-cols-1 gap-8 px-5 lg:grid-cols-2 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/home/about.gif"
              alt="about"
              width={350}
              height={350}
              className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md"
              unoptimized
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="m-auto px-2 sm:px-6 xl:px-16"
          >
            <h1 className="pb-5 text-3xl font-bold">About Us</h1>
            <p className="pb-2 italic font-bold">Why Are We Different ?</p>
            <p className="text-justify">
              We are an indie game developer established in 2016, with extensive
              experience in creating games across various genres such as
              realistic games, hypercasual, simulators, and RPGs. Our goal is to
              continue developing new and exciting games that captivate and
              entertain our players. Over the years, we have honed our skills
              and built a dedicated team capable of handling all aspects of game
              development, from coding to design. With each project, we strive
              to innovate and push the boundaries of what our games can offer.
            </p>
            <div className="pt-10">
              <Button asChild>
                <Link href="/about">Read More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="py-5 xl:py-20 justify-center items-center">
        <HomeGameView />
      </div>
      <div className="py-5 xl:py-20 justify-center items-center">
        <Video />
      </div>
      {/* <div className="py-10 xl:py-20 justify-center items-center">
        <OurTeams />
      </div> */}

      <div className="py-10 xl:py-24">
        <Partner />
      </div>

      <div className="w-full text-white">
        <div className="container mx-auto">
          <h1 className="pb-10 text-center text-3xl font-bold sm:text-4xl">
            Join Our Community
          </h1>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-2">
            <div className="w-full">
              <iframe
                src="https://discord.com/widget?id=720952817094885397&theme=dark"
                title="Trimatra Discord"
                className="w-full rounded-lg"
                height="500"
              ></iframe>
            </div>
            <div className="w-full">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftrimatra.io&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                title="Trimatra Facebook"
                className="w-full rounded-lg"
                height="500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5 xl:py-20 justify-center items-center">
        <PortfolioHomePage />
      </div>
    </main>
  );
}
