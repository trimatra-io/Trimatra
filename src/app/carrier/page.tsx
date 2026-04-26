"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const data = [
  {
    id: 1,
    position: "Junior Programmer",
    status: "Not Available",
    location: "Remote - Location",
    time: " - ",
    description: "has not received a vacancy",
  },
  {
    id: 2,
    position: "Level Designer Mobile",
    status: "Not Available",
    location: "Remote - Location",
    time: "-",
    description: "has not received a vacancy",
  },
  {
    id: 3,
    position: "Social Media Manager",
    status: "Not Available",
    location: "Remote - Location",
    time: " - ",
    description: "has not received a vacancy",
  },
];

const container = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export default function CarrierPage() {
  return (
    <div className="w-full h-[150vh]">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-white text-center m-7 text-[45px] xl:text-[120px] font-black pt-36"
      >
        {" "}
        <span className="transition-colors ease-in-out duration-300 hover:text-blue-400">
          JOIN
        </span>{" "}
        <span className="transition-colors ease-in-out duration-300 hover:text-blue-400">
          OUR
        </span>{" "}
        <span className="transition-colors ease-in-out duration-300 hover:text-blue-400">
          TEAM
        </span>{" "}
      </motion.h1>
      <div className="justify-center flex items-center flex-1 pt-3 xl:pt-12">
        {/* <Link href={"/#"}> */}
        <Button disabled className="font-bold cursor-not-allowed">
          Not Available yet{" "}
        </Button>
        {/* </Link> */}
      </div>
      {/* <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 2, ease: "easeInOut" }}
        className="w-full h-min p-10 xl:p-44 text-white"
      >
        {data.map((item, index) => (
          <Accordion type="single" collapsible key={index}>
            <AccordionItem value="item-{{item.id}}">
              <AccordionTrigger className="text-white text-lg xl:text-2xl font-bold">
                {item.position}
              </AccordionTrigger>
              <AccordionContent className="w-full h-max">
                <div className="text-white text-sm xl:text-lg grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-36">
                  <div>
                    <p className="text-justify">{item.description}</p>
                  </div>
                  <div className="justify-center items-center italic">
                    <p>{item.status}</p>
                    <p>{item.location}</p>
                    <p>{item.time}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </motion.div> */}
    </div>
  );
}
