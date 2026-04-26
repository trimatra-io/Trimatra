"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import "./team.css";
import Tilt from "react-parallax-tilt";
import { easeInOut, motion } from "framer-motion";
import { getAssetPath } from "@/lib/utils-path";

const founder = [
  {
    name: "Aldi Rusdi",
    link: "https://aldigamedev.com/",
    image: "/team/Aldi.png",
    position: "Co-Founder",
    socials: [
      {
        name: "Instagram",
        icon: <FiInstagram />,
        link: "https://www.instagram.com/aldirsd_/",
      },
      {
        name: "Linkedin",
        icon: <FiLinkedin />,
        link: "https://www.linkedin.com/in/aldrsd/",
      },
      {
        name: "Email",
        icon: <FiMail />,
        link: "mailto:aldi@trimatra.io",
      },
    ],
  },
  {
    name: "Ardi Rudini",
    link: "https://ardi.trimatra.io",
    image: "/team/Ardi.png",
    position: "Founder",
    socials: [
      {
        name: "Instagram",
        icon: <FiInstagram />,
        link: "https://www.instagram.com/ardigamedev/",
      },
      {
        name: "Linkedin",
        icon: <FiLinkedin />,
        link: "https://www.linkedin.com/in/ardirdn/",
      },
      {
        name: "Email",
        icon: <FiMail />,
        link: "mailto:ardi@trimatra.io",
      },
    ],
  },
];

const teams = [
  {
    name: "Melisa",
    link: "https://melisa.trimatra.io",
    image: "/team/Melisa.png",
    position: "CFO",
    socials: [
      {
        name: "Instagram",
        icon: <FiInstagram />,
        link: "https://www.instagram.com/melisakshrwt_/",
      },
      {
        name: "Linkedin",
        icon: <FiLinkedin />,
        link: "#",
      },
      {
        name: "Email",
        icon: <FiMail />,
        link: "mailto:melisa@trimatra.io",
      },
    ],
  },
  {
    name: "Jaelani",
    link: "https://jael.trimatra.io",
    image: "/team/Jael.png",
    position: "Lead 3D Artist",
    socials: [
      {
        name: "Instagram",
        icon: <FiInstagram />,
        link: "https://www.instagram.com/z.ell1/",
      },
      {
        name: "Linkedin",
        icon: <FiLinkedin />,
        link: "https://www.linkedin.com/in/#",
      },
      {
        name: "Email",
        icon: <FiMail />,
        link: "mailto:jael@trimatra.io",
      },
    ],
  },
  {
    name: "Ichsan Ridho F",
    link: "https://ichsan.trimatra.io",
    image: "/team/Ichsan.png",
    position: "3D Artist",
    socials: [
      {
        name: "Instagram",
        icon: <FiInstagram />,
        link: "https://www.instagram.com/ichsan_ridho22/",
      },
      {
        name: "Linkedin",
        icon: <FiLinkedin />,
        link: "https://www.linkedin.com/in/ichsan-ridho-98238016a/",
      },
      {
        name: "Email",
        icon: <FiMail />,
        link: "mailto:ichsan@trimatra.io",
      },
    ],
  },
  {
    name: "Firman Asyiraz",
    link: "https://firman.trimatra.io",
    image: "/team/Firman.png",
    position: "3D Artist",
    socials: [
      {
        name: "Instagram",
        icon: <FiInstagram />,
        link: "https://www.instagram.com/firman_asyiraz/",
      },
      {
        name: "Linkedin",
        icon: <FiLinkedin />,
        link: "https://www.linkedin.com/in/#/",
      },
      {
        name: "Email",
        icon: <FiMail />,
        link: "mailto:syiraz@trimatra.io",
      },
    ],
  },
  {
    name: "Maula Ibnu H",
    link: "https://maula.trimatra.io",
    image: "/team/Maula.png",
    position: "2D Artist",
    socials: [
      {
        name: "Instagram",
        icon: <FiInstagram />,
        link: "https://www.instagram.com/maulaibnu22/",
      },
      {
        name: "Linkedin",
        icon: <FiLinkedin />,
        link: "https://www.linkedin.com/in/#/",
      },
      {
        name: "Email",
        icon: <FiMail />,
        link: "mailto:maula@trimatra.io",
      },
    ],
  },
  {
    name: "RAFSANDI",
    link: "https://rafly.trimatra.io",
    image: "/team/Rafly.png",
    position: "Community Manager",
    socials: [
      {
        name: "Instagram",
        icon: <FiInstagram />,
        link: "https://www.instagram.com/rafsandi.id/",
      },
      {
        name: "Linkedin",
        icon: <FiLinkedin />,
        link: "https://www.linkedin.com/in/rafsandi/",
      },
      {
        name: "Email",
        icon: <FiMail />,
        link: "mailto:rafsandi@trimatra.io",
      },
    ],
  },
  {
    name: "Reno",
    link: "https://reno.trimatra.io",
    image: "/team/Reno.png",
    position: "Illustrator",
    socials: [
      {
        name: "Instagram",
        icon: <FiInstagram />,
        link: "https://www.instagram.com/xenn.ooo/",
      },
      {
        name: "Linkedin",
        icon: <FiLinkedin />,
        link: "https://www.linkedin.com/in/#/",
      },
      {
        name: "Email",
        icon: <FiMail />,
        link: "mailto:xeno@trimatra.io",
      },
    ],
  },
];

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
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
const TeamCard = () => {
  return (
    <div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <div className="grid mx-4 sm:mx-8 md:mx-16 lg:mx-32 grid-cols-1 lg:grid-cols-2 items-center place-items-center">
          {founder.map((founder, idx) => (
            <Tilt
              perspective={700}
              glareEnable={true}
              glareMaxOpacity={0.45}
              scale={1.02}
              key={idx}
              className="flex justify-center items-center m-2 sm:m-4 bg-gray-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-25 border-2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 shadow-xl drop-shadow-2xl shadow-black/30"
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(10px)",
              }}
            >
              <motion.div
                variants={item}
                className="xl:p-8 group/item transition-all ease-in-out duration-200 hover:-translate-y-3 gap-3 translate-z-60"
              >
                <Image
                  src={getAssetPath(founder.image)}
                  alt="team"
                  width={150}
                  height={150}
                  className="object-contain scale-90"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(70px)",
                  }}
                />
                <h1 className="text-lg font-bold group-hover/item:hidden group-hover/item:-translate-y-3 py-2">
                  {founder.position}
                </h1>
                <h3 className="text-base text-gray-300 font-semibold italic group-hover/item:not-italic group-hover/item:font-bold group-hover/item:text-xl">
                  <Link href={founder.link} target="_blank">
                    {founder.name}
                  </Link>
                </h3>
                <ul
                  role="list"
                  className="py-6 items-center justify-center flex gap-4"
                >
                  {founder.socials.map((social, idx) => (
                    <li
                      key={idx}
                      className="text-lg invisible group-hover/item:visible group-hover/item:-translate-y-3 hover:text-blue-400"
                    >
                      <Link href={social.link} target="_blank">
                        {social.icon}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Tilt>
          ))}
          <div className="absolute pb-16 invisible md:invisible xl:visible">
            <Image
              src="/presskit/trimatra/Circle.png"
              alt="team"
              width={300}
              height={300}
              className="object-contain scale-50 "
            />
          </div>
        </div>
        <div className="relative pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-center place-items-center m-4 gap-3">
          {teams.map((team, idx) => (
            <Tilt
              perspective={700}
              glareEnable={true}
              glareMaxOpacity={0.45}
              scale={1.02}
              key={idx}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(10px)",
              }}
              className="flex justify-center items-center m-2 bg-gray-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-25 border-2 w-48 h-48 preserve-3d shadow-xl drop-shadow-2xl shadow-black/30"
            >
              <motion.div
                variants={item}
                className=" group/item transition-all ease-in-out duration-200 hover:-translate-y-3 gap-3 translate-z-60"
              >
                <Image
                  src={getAssetPath(team.image)}
                  alt="team"
                  width={120}
                  height={120}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(70px)",
                  }}
                  className="object-contain scale-75 object-center m-auto"
                />
                <h1
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(70px)",
                  }}
                  className="text-lg font-bold group-hover/item:hidden group-hover/item:-translate-y-3 py-2"
                >
                  {team.position}
                </h1>
                <h3
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(70px)",
                  }}
                  className="text-base text-gray-300 font-semibold italic group-hover/item:not-italic group-hover/item:font-bold group-hover/item:text-lg"
                >
                  <Link href={team.link}>{team.name}</Link>
                </h3>
                <ul
                  role="list"
                  className="py-6 items-center justify-center flex gap-4"
                >
                  {team.socials.map((social, idx) => (
                    <li
                      key={idx}
                      className="text-lg invisible group-hover/item:visible group-hover/item:-translate-y-3 hover:text-blue-400"
                    >
                      <Link href={social.link} target="_blank">
                        {social.icon}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TeamCard;
