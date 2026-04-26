"use client";

import Image from "next/image";
import React from "react";
import { Folder } from "lucide-react";
import Link from "next/link";
import { presskit } from "@/app/data/presskit";
import { getAssetPath } from "@/lib/utils-path";

const BestGame = () => {
  return (
    <div className="w-full h-full pb-12 text-white">
      <div className="mx-auto container">
        <h1 className="text-2xl xl:text-5xl text-center font-bold py-8 xl:py-20">
          {" "}
          Press Kit{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {presskit.map((file) => (
            <div key={file.slug} className="h-full w-full">
              <div className="group border-2 rounded-2xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-white hover:border-blue-400 transition-all duration-200">
                <Link href={`/press-kit/${file.slug}`}>
                  <Image
                    src={getAssetPath(file.icon)}
                    alt={file.title}
                    width={200}
                    height={200}
                    className="py-5 flex items-center justify-center mx-auto group-hover:text-blue-400 transition-all duration-200"
                  />
                  <p className="pb-3 text-center text-base group-hover:text-blue-400 transition-all duration-200">
                    {file.title}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestGame;
