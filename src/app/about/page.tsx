"use client";
import React from "react";
import OurTeams from "../../components/about/ourteams";
import Image from "next/image";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <section className="container mx-auto xl:py-20">
      <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2 overflow-hidden h-full text-justify md:justify-center py-10 px-4 sm:px-8 md:px-12 text-sm sm:text-base order-1">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-md">
            <Image
              src="/home/about.gif"
              alt="aboutus"
              width={400}
              height={400}
              unoptimized
              className="w-full h-auto m-auto scale-90"
            />
          </div>
        </div>
        <div className="text-white sm:w-full md:1/2 md:px-unit-xl sm:px-unit-3xl">
          <h1 className="font-bold text-4xl py-12">About Us</h1>
          <span className="indent-8">
            We are an indie game developer established in 2016, with extensive
            experience in creating games across various genres such as realistic
            games, hypercasual, simulators, and RPGs. Our goal is to continue
            developing new and exciting games that captivate and entertain our
            players. Over the years, we have honed our skills and built a
            dedicated team capable of handling all aspects of game development,
            from coding to design. With each project, we strive to innovate and
            push the boundaries of what our games can offer.
          </span>
        </div>
        <div className="text-white sm:w-full md:1/2 md:px-unit-xl sm:px-unit-3xl">
          <h1 className="font-bold text-4xl py-12">
            Trimatra Studio&rsquo;s Philosophy
          </h1>
          <h2 className="font-bold italic text-xl py-12">
            “Exploring the Dimensions of Creativity.”
          </h2>
          <span>
            The name “Trimatra” comes from the word “Tri” which means three and
            “Matra” which means dimension or aspect. Our philosophy is inspired
            by the idea that creativity and innovation can be explored through
            three main dimensions:
          </span>
          <ul className="list-disc py-2 ml-8">
            <li>
              The Dimension of Imagination: We believe that every game we
              develop starts from a limitless imagination. In this dimension, we
              explore new ideas, design fantastic worlds, and create enthralling
              experiences.
            </li>
            <li className="list-disc py-2">
              {" "}
              The Technology Dimension: Technology is the tool that enables us
              to realize our vision. In this dimension, we utilize the latest
              technology to deliver seamless, interactive and breathtaking game
              experiences.
            </li>
            <li className="list-disc py-2">
              Emotional Connection Dimension: We understand that the most
              memorable games are those that are able to build an emotional
              connection with the player. In this dimension, we focus on
              developing strong stories, deep characters, and heartfelt moments.
            </li>
          </ul>
          <span>
            Trimatra Studio is a space where the three dimensions of creativity
            meet and collaborate to create unforgettable game experiences. We
            are committed to exploring and developing each of these dimensions
            with full dedication, delivering games that not only entertain but
            also inspire and touch the heart.
          </span>
        </div>
        <div className="flex space-x-10 items-end">
          <div className="sticky top-10 lg:overflow-hidden end-0">
            <Image
              src="/home/vector2.png"
              alt="about"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
      <div></div>
      <div className="pt-10">
        <OurTeams />
      </div>
    </section>
  );
}
