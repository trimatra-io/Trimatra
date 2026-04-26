import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoImagesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="flex transition-all duration-200 relative">
        <div className="origin-bottom -rotate-12 group-hover:-rotate-45 translate-x-8 sm:translate-x-16 md:translate-x-20 lg:translate-x-28 translate-y-4 sm:translate-y-6 md:translate-y-8 lg:translate-y-10 group-hover:translate-x-4 sm:group-hover:translate-x-12 md:group-hover:translate-x-16 lg:group-hover:translate-x-20 group-hover:translate-y-4 sm:group-hover:translate-y-12 md:group-hover:translate-y-16 lg:group-hover:translate-y-20 bg-gray-400 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-2 border-gray-100 transition-all duration-700 delay-100">
          <Image
            src="/home/asje.png"
            alt="logo"
            width={120}
            height={120}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-42 xl:h-42 rounded-3xl scale-90 unoptimized"
          />
        </div>
        <div className="z-40 bg-gray-400 rounded-3xl translate-y-2 sm:translate-y-4 md:translate-y-6 group-hover:-translate-y-1 sm:group-hover:-translate-y-3 md:group-hover:-translate-y-5 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-2 border-gray-100 transition-all duration-150">
          <Image
            src="/home/jf.png"
            alt="logo"
            width={120}
            height={120}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-42 xl:h-42 rounded-3xl scale-90 unoptimized"
          />
        </div>
        <div className="origin-bottom rotate-12 group-hover:rotate-45 -translate-x-8 sm:-translate-x-16 md:-translate-x-20 lg:-translate-x-28 translate-y-4 sm:translate-y-6 md:translate-y-8 lg:translate-y-10 group-hover:-translate-x-4 sm:group-hover:-translate-x-12 md:group-hover:-translate-x-16 lg:group-hover:-translate-x-20 group-hover:translate-y-4 sm:group-hover:translate-y-12 md:group-hover:translate-y-16 lg:group-hover:translate-y-20 bg-gray-400 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-2 border-gray-100 transition-all duration-700 delay-200">
          <Image
            src="/home/ASJA.png"
            alt="logo"
            width={120}
            height={120}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-42 xl:h-42 rounded-3xl scale-90 unoptimized"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LogoImagesPage;
