"use client";
import React from "react";
import { motion } from "framer-motion";
import AndroidCard from "./AndroidCard"; // Pastikan path benar

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
const BestGame = () => {
  return (
    <div className="w-full h-full">
      <div className="mx-auto container">
        <h1 className="text-2xl xl:text-5xl text-center font-bold py-8 xl:py-20">
          {" "}
          Projects{" "}
        </h1>
        <div className="pb-20">
          {" "}
          {/* Tambahkan padding bawah agar tidak terlalu mepet */}
          <AndroidCard />
        </div>
      </div>
    </div>
  );
};
export default BestGame;
