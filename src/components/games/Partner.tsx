import { useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { getAssetPath } from "@/lib/utils-path";

const logos = [
  { id: 1, image: "/LogoPartner/Voodoo.png", link: "https://voodoo.io/" },
  {
    id: 2,
    image: "/LogoPartner/AkhirPekan.png",
    link: "https://akhirpekan.studio/",
  },
  {
    id: 3,
    image: "/LogoPartner/KajewDev.png",
    link: "https://play.google.com/store/apps/dev?id=8277681824777273511&hl=id",
  },
  { id: 4, image: "/LogoPartner/TazkanGames.png", link: "https://tazkan.com/" },
  { id: 5, image: "/LogoPartner/LemauDev.png", link: "https://lemau.net/" },
  { id: 6, image: "/LogoPartner/Rivrs.png", link: "https://www.rivrs.io/" },
  // NOTE: The duplication is still handled in the JSX below
];

const Partner = () => {
  // 1. useAnimation hook to control the animation imperatively
  const controls = useAnimation();

  // 2. Define the animation properties
  const scrollAnimation = useMemo(
    () => ({
      // We animate the x-axis to -50%. Because we have duplicated the logos,
      // moving by 50% of the total width brings the second set of logos
      // into the exact starting position of the first set, creating a seamless loop.
      x: "-50%",
      transition: {
        ease: "linear", // A linear ease ensures a constant speed
        duration: 18, // Adjust duration to control the speed of the scroll
        repeat: Infinity, // This makes the animation loop forever
      },
    }),
    [],
  );

  // 3. Start the animation when the component mounts
  useEffect(() => {
    controls.start(scrollAnimation);
  }, [controls, scrollAnimation]); // Dependency array ensures this runs only once

  // 4. Handlers to pause and resume the animation on hover
  const handleMouseEnter = () => {
    controls.stop(); // Stops the animation at its current position
  };

  const handleMouseLeave = () => {
    controls.start(scrollAnimation); // Resumes the animation
  };

  return (
    <section className="text-white py-8">
      <div className="text-center pb-8">
        <h1 className="text-3xl font-bold">Partners :</h1>
      </div>

      <div
        className="relative w-full overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,transparent_0,_white_128px,white_calc(100%-128px),transparent_100%)]"
        // 5. Attach the hover event handlers to the container
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* 6. Convert the scrolling div to a motion.div and connect controls */}
        <motion.div
          className="flex"
          animate={controls} // The animate prop is now controlled by our useAnimation instance
        >
          {/* Render the logos twice for the seamless scroll effect */}
          {[...logos, ...logos].map((logo, index) => (
            <Link
              key={index} // Using index is fine here as the list is static
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0" // Prevents logos from shrinking
            >
              <Image
                src={getAssetPath(logo.image)}
                alt={`Partner logo ${logo.id}`}
                width={200}
                height={200}
                className="mx-6 inline h-auto w-auto max-h-16 object-contain"
                loading="lazy"
              />
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partner;
