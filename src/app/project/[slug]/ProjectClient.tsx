// components/games/GameClient.tsx
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  BiLogoPlayStore,
  BiLogoSteam,
  BiHdd,
  BiLogoApple,
} from "react-icons/bi";
import { SiRoblox } from "react-icons/si";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { games } from "@/app/data/games";
import { notFound } from "next/navigation";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import SectionVideoSelect from "@/components/games/SectionVideo";
import CharSection from "@/components/games/CharSection";
import BlankSection from "@/components/games/blank";
import { getAssetPath } from "@/lib/utils-path"; // Import the helper

interface GameClientProps {
  slug: string;
}

export default function GameClient({ slug }: GameClientProps) {
  const game = games.find((game) => game.slug === slug);

  // --- 1. HOOKS MUST COME FIRST (Before any return) ---

  const [index, setIndex] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);

  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });

  const titlegameY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const buttonY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px 0px" });

  const gameplayRef = useRef(null);
  const gameplayInView = useInView(gameplayRef, {
    once: true,
    margin: "-100px 0px",
  });

  const videoSectionRef = useRef(null);
  // unused variable removed or keep if needed later:
  // const videoSectionInView = useInView(videoSectionRef, { once: true, margin: "-100px 0px" });

  const partnershipRef = useRef(null);
  const partnershipInView = useInView(partnershipRef, {
    once: true,
    margin: "-100px 0px",
  });

  const estimatedTimeRef = useRef(null);
  const estimatedTimeInView = useInView(estimatedTimeRef, {
    once: true,
    margin: "-100px 0px",
  });

  const screenshotsRef = useRef(null);
  const screenshotsInView = useInView(screenshotsRef, {
    once: true,
    margin: "-100px 0px",
  });

  // --- 2. EARLY RETURN AFTER HOOKS ---

  if (!game) {
    notFound();
    return null;
  }

  // --- 3. CALCULATIONS DEPENDING ON 'game' (Must be after the check) ---

  const hasVideo = game.videoUrl !== "";
  const hasChar =
    game.character &&
    game.character.length > 0 &&
    game.character[0].nameChar !== "";

  const params = { slug };
  const itemsPerPage = 6;

  const totalPages = Math.ceil(game.screenshots.length / itemsPerPage);
  const currentItems = game.screenshots.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="text-white overflow-x-hidden">
      <div ref={headerRef} className="relative w-full h-full pb-28">
        <Image
          src={getAssetPath(game.headerImgs[0].src)}
          alt={game.headerImgs[0].alt}
          width={1920}
          height={500}
          className="absolute object-contain xl:object-cover z-[-5]"
        />

        <div className="place-content-center items-center justify-center grid grid-rows-2 w-full min-h-64 xl:min-h-screen">
          <motion.div style={{ y: titlegameY }}>
            {game.titleImgs &&
            game.titleImgs.length > 0 &&
            game.titleImgs[0].src ? (
              <Image
                src={getAssetPath(game.titleImgs[0].src)}
                alt={game.titleImgs[0].alt}
                width={500}
                height={500}
                className="object-contain mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-32 sm:h-40 md:h-48 lg:h-56 xl:h-auto"
              />
            ) : null}
          </motion.div>
          <div className="w-full mx-auto">
            <motion.div
              style={{ y: buttonY }}
              className="flex mx-auto h-auto justify-center space-x-4"
            >
              {game.playStoreUrl && (
                <Link
                  href={game.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-2xl py-7">
                    <BiLogoPlayStore className="text-3xl" /> Download Now
                  </Button>
                </Link>
              )}
              {game.appStoreUrl && (
                <Link
                  href={game.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-2xl py-7">
                    <BiLogoApple className="text-3xl" /> Download Now
                  </Button>
                </Link>
              )}
              {game.steamStoreUrl && (
                <Link
                  href={game.steamStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-2xl py-7">
                    <BiLogoSteam className="text-3xl" /> Download Now
                  </Button>
                </Link>
              )}
              {game.robloxStoreUrl && (
                <Link
                  href={game.robloxStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-2xl py-7">
                    <SiRoblox className="text-3xl" /> Play Now
                  </Button>
                </Link>
              )}
              {game.presskitUrl && (
                <Link
                  href={game.presskitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-2xl py-7">
                    <BiHdd className="text-3xl" /> Press Kit
                  </Button>
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container mx-auto h-full w-full py-5 xl:py-28">
        <motion.div
          ref={storyRef}
          variants={fadeInUp}
          initial="hidden"
          animate={storyInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 py-24"
        >
          <div className="justify-center items-center">
            <h1 className="text-3xl font-bold pb-6">Story</h1>
            <p className="text-justify px-5 whitespace-break-spaces">
              {game.descStory}
            </p>
          </div>
          <motion.div
            variants={scaleUp}
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
            className="p-10 grid items-center justify-center"
          >
            <div className="justify-center items-center flex aspect-video">
              {game.storyImgs && game.storyImgs.length > 0 ? (
                <Image
                  src={getAssetPath(game.storyImgs[0].src)}
                  alt={game.storyImgs[0].alt}
                  width={500}
                  height={500}
                />
              ) : (
                <Image
                  src={getAssetPath("./placeholder.png")}
                  alt="No image available"
                  width={500}
                  height={500}
                />
              )}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          ref={gameplayRef}
          variants={fadeInUp}
          initial="hidden"
          animate={gameplayInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 py-6"
        >
          <motion.div
            variants={scaleUp}
            initial="hidden"
            animate={gameplayInView ? "visible" : "hidden"}
            className="grid items-center justify-center xl:pb-0 pb-20"
          >
            <div className="justify-center items-center flex aspect-video">
              {game.gameplayImgs && game.gameplayImgs.length > 0 ? (
                <Image
                  src={getAssetPath(game.gameplayImgs[0].src)}
                  alt={game.gameplayImgs[0].alt}
                  width={500}
                  height={500}
                />
              ) : (
                <Image
                  src={getAssetPath("./placeholder.png")}
                  alt="No image available"
                  width={500}
                  height={500}
                />
              )}
            </div>
          </motion.div>
          <div>
            <h1 className="text-3xl pb-5 font-bold">Gameplay</h1>
            <p className="text-justify whitespace-break-spaces">
              {game.descGameplay}
            </p>
          </div>
        </motion.div>

        {hasVideo ? <SectionVideoSelect params={params} /> : null}

        <div>
          {hasChar ? <CharSection params={params} /> : <BlankSection />}
        </div>

        {game.estimatedTime && (
          <motion.div
            ref={estimatedTimeRef}
            variants={fadeInUp}
            initial="hidden"
            animate={estimatedTimeInView ? "visible" : "hidden"}
            className="bg-gray-300 opacity-25 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 py-12 text-center"
          >
            <h1 className="text-2xl pb-5 font-bold">
              Estimated Development Time
            </h1>
            <p className="text-5xl font-extrabold">{game.estimatedTime}</p>
          </motion.div>
        )}

        <motion.div
          ref={screenshotsRef}
          initial="hidden"
          animate={screenshotsInView ? "visible" : "hidden"}
          className="flex py-5 xl:py-12 flex-col"
        >
          <motion.h1 variants={fadeInUp} className="text-3xl pb-5 font-bold">
            Screenshots
          </motion.h1>
          <div>
            <div className="columns-1 md:columns-2 lg:columns-3  py-4 md:py-10 gap-4">
              {currentItems.map((screenshot, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={screenshotsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.05, duration: 0.6 }}
                  className="mb-4 break-inside-avoid"
                >
                  <Image
                    src={getAssetPath(screenshot.src)}
                    alt={screenshot.alt}
                    width={300}
                    height={300}
                    className="cursor-pointer w-full h-auto object-contain rounded-lg"
                    onClick={() =>
                      setIndex((currentPage - 1) * itemsPerPage + idx)
                    }
                  />
                </motion.div>
              ))}
            </div>

            <Pagination className="flex justify-center mt-4 text-white cursor-pointer">
              <PaginationPrevious
                onClick={() =>
                  currentPage > 1 && handlePageChange(currentPage - 1)
                }
                className={
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }
                size="default"
              >
                Previous
              </PaginationPrevious>
              <PaginationContent>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => handlePageChange(page)}
                        size="default"
                      >
                        {" "}
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ),
                )}
              </PaginationContent>
              <PaginationNext
                onClick={() =>
                  currentPage < totalPages && handlePageChange(currentPage + 1)
                }
                className={
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }
                size="default"
              >
                Next
              </PaginationNext>
            </Pagination>

            <Lightbox
              slides={game.screenshots.map((screenshot) => ({
                src: getAssetPath(screenshot.src),
                alt: screenshot.alt,
              }))}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
            />
          </div>
        </motion.div>

        <motion.div
          ref={partnershipRef}
          initial="hidden"
          animate={partnershipInView ? "visible" : "hidden"}
          className="my-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-8"
          >
            {game.partnership && game.partnership.length > 0
              ? "In Partnership With"
              : "Developed By"}
          </motion.h2>

          <div className="flex justify-center items-center gap-8 flex-wrap">
            {game.partnership && game.partnership.length > 0 ? (
              game.partnership.map((logo, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={partnershipInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="relative h-32 w-52 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={getAssetPath(logo.src)}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    title={logo.alt}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={partnershipInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="relative h-24 w-56 grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={getAssetPath("trimatra-logo.png")}
                  alt="Trimatra Studio Logo"
                  fill
                  className="object-contain"
                  title="Trimatra Studio"
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
