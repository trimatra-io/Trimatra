"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { FolderArchive } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Download from "yet-another-react-lightbox/plugins/download";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { getAssetPath } from "@/lib/utils-path";
import { get } from "http";

// Define the type for your presskit item based on your usage
type PresskitFile = {
  slug: string;
  title: string;
  image: { pic: string }[];
};

type PresskitClientProps = {
  file: PresskitFile;
};

const PresskitClient = ({ file }: PresskitClientProps) => {
  const [index, setIndex] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(file.image.length / itemsPerPage);
  const currentItems = file.image.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `/api/compress?slug=${file.slug}`;
    link.download = `${file.slug}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-white overflow-x-hidden container mx-auto">
      <div className="flex py-5 xl:py-12">
        <h1 className="text-3xl pb-5 font-bold">{file.title}</h1>
      </div>
      <Button onClick={handleDownload}>
        <FolderArchive className="w-5 h-5" />
      </Button>
      <div>
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-5 py-4 md:py-10 gap-4">
          {currentItems.map((image, idx) => (
            <div
              key={idx}
              className="mb-4 break-inside-avoid aspect-video place-content-center bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100"
            >
              <Image
                src={getAssetPath(image.pic)}
                alt="Trimatra Assets"
                width={500}
                height={500}
                className="cursor-pointer w-full object-cover rounded-lg"
                onClick={() => setIndex((currentPage - 1) * itemsPerPage + idx)}
                unoptimized
              />
            </div>
          ))}
        </div>

        <Pagination className="flex justify-center mt-4 text-white cursor-pointer">
          <PaginationPrevious
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            className={currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}
          >
            Previous
          </PaginationPrevious>
          <PaginationContent>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink onClick={() => handlePageChange(page)}>
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
          <PaginationNext
            onClick={() =>
              currentPage < totalPages && handlePageChange(currentPage + 1)
            }
            className={
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }
          >
            Next
          </PaginationNext>
        </Pagination>

        <Lightbox
          slides={file.image.map((image) => ({
            src: getAssetPath(image.pic),
          }))}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Download, Thumbnails]}
        />
      </div>
    </div>
  );
};

export default PresskitClient;
