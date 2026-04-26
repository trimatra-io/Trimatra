import { games } from "@/app/data/games";
import { notFound } from "next/navigation";
import { useRef } from "react";

import { motion, useInView } from "framer-motion"; // <-- Import useInView

type GameProp = {
  params: {
    slug: string;
  };
};

const SectionVideoSelect: React.FC<GameProp> = ({ params }) => {
  const game = games.find((game) => game.slug === params.slug);

  if (!game) {
    notFound();
  }

  const videoSectionRef = useRef(null);
  const videoSectionInView = useInView(videoSectionRef, {
    once: true,
    margin: "-100px 0px",
  });
  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div>
      <motion.div
        ref={videoSectionRef}
        variants={fadeInUp}
        initial="hidden"
        animate={videoSectionInView ? "visible" : "hidden"}
        className="overflow-hidden py-6 xl:py-24 relative grid place-items-center "
      >
        <motion.div
          variants={scaleUp}
          initial="hidden"
          animate={videoSectionInView ? "visible" : "hidden"}
          className="lg:w-3/5 w-3/4 aspect-video z-10 rounded-xl shadow-xl drop-shadow-2xl shadow-black/30"
        >
          <iframe
            className="w-full h-full aspect-video z-10 rounded-xl shadow-xl drop-shadow-2xl shadow-black/30"
            src={game.videoUrl}
          ></iframe>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionVideoSelect;
