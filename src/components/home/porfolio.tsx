import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { getAssetPath } from "@/lib/utils-path";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface SlideImage {
  src: string;
  alt: string;
}

const images: SlideImage[] = [
  { src: "/portfolio/Danu.png", alt: "Characters" },
  { src: "/portfolio/ds/ds1.png", alt: "Games" },
  { src: "/portfolio/ds/ds2.png", alt: "Games" },
  { src: "/portfolio/ds/ds3.png", alt: "Games" },
  { src: "/portfolio/KinantiBanner.png", alt: "Characters" },
  { src: "/portfolio/ds/ds4.png", alt: "Games" },
  { src: "/portfolio/ds/ds5.png", alt: "Games" },
  { src: "/portfolio/ds/ds6.png", alt: "Games" },
  { src: "/portfolio/ds/ds7.png", alt: "Games" },
  { src: "/portfolio/DPSS8.png", alt: "Level Design" },
  { src: "/portfolio/DPSS9.png", alt: "Level Design" },
  { src: "/portfolio/DPSS1.png", alt: "Games" },
  { src: "/portfolio/DPSS6.png", alt: "Games" },
  { src: "/portfolio/DPSS3.png", alt: "Games" },
  { src: "/portfolio/NirwnaSS1.png", alt: "Level Design" },
  { src: "/portfolio/NirwnaSS2.png", alt: "Level Design" },
  { src: "/portfolio/NirwnaSS3.png", alt: "Level Design" },
  { src: "/portfolio/Renjana1.png", alt: "Level Design" },
  { src: "/portfolio/Renjana2.png", alt: "Level Design" },
  { src: "/portfolio/Renjana3.png", alt: "Level Design" },
  { src: "/portfolio/Renjana4.png", alt: "Level Design" },
  { src: "/portfolio/Renjana5.png", alt: "Level Design" },
  { src: "/portfolio/Renjana6.png", alt: "Level Design" },
];

const categories = ["all", "Characters", "3D Assets", "Level Design", "Games"];
const itemsPerPage = 8;

export default function PortfolioHomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [index, setIndex] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.alt.includes(selectedCategory));

  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  // Calculate the starting index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  // Slice the images to display only those for the current page
  const currentImages = filteredImages.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Prepare slides for Lightbox: it needs an array of objects with a 'src' property
  // and optionally 'alt' or 'title'.
  const lightboxSlides = filteredImages.map((image) => ({
    src: getAssetPath(image.src),
    alt: image.alt, // Lightbox might use this for accessibility or captions
  }));

  const handleImageClick = (idx: number) => {
    // When an image is clicked, we need to find its global index in `filteredImages`
    // because `currentImages` is a subset.
    const globalIndex = startIndex + idx;
    setIndex(globalIndex);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl pb-6 lg:text-5xl text-white text-center font-bold">
        Gallery
      </h1>
      <div>
        <div className="w-full mb-4 p-2 md:p-5 xl:p-10 text-xs xl:text-base font-normal xl:font-semibold flex flex-1 justify-center items-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`mr-2 px2 xl:px-4 py-2 rounded ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-zinc-950 border border-blue-500 text-white"
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1); // Reset to first page on category change
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 py-4 md:py-10 gap-4">
          {currentImages.map((image, idx) => (
            <div key={idx} className="mb-4 break-inside-avoid">
              <Image
                src={getAssetPath(image.src)}
                alt={image.alt}
                width={500}
                height={500}
                className="cursor-pointer w-full object-cover rounded-xl shadow-xl drop-shadow-2xl shadow-black/30"
                // Pass the index of the clicked image within the `currentImages` array
                onClick={() => handleImageClick(idx)}
              />
            </div>
          ))}
        </div>

        <Lightbox
          // Lightbox needs all filtered images, not just the current page's images,
          // to allow navigation through all of them.
          slides={lightboxSlides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // You might want to add other Lightbox props here, e.g., plugins
          // plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Zoom]}
        />

        <Pagination className="flex justify-center mt-4 text-white cursor-pointer">
          <PaginationPrevious
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            // Use 'aria-disabled' for better accessibility when button is functionally disabled
            aria-disabled={currentPage === 1}
            className={currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}
          >
            Previous
          </PaginationPrevious>
          <PaginationContent>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => handlePageChange(page)}
                  // Add a visual indicator for the active page
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
          <PaginationNext
            onClick={() =>
              currentPage < totalPages && handlePageChange(currentPage + 1)
            }
            aria-disabled={currentPage === totalPages}
            className={
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }
          >
            Next
          </PaginationNext>
        </Pagination>
      </div>
    </div>
  );
}
