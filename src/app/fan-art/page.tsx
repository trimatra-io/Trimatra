"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "yet-another-react-lightbox/styles.css";
import { FaInstagram } from "react-icons/fa";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { fanart } from "../data/fanart";

const itemsPerPage = 12;

export default function FanArtPage() {
  const hasNoContent =
    fanart.length === 0 || (fanart.length === 1 && fanart[0].src === "");

  const [index, setIndex] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(fanart.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentImages = fanart.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl pb-6 pt-24 lg:text-5xl text-white text-center font-bold">
        Fan Art&apos;s
      </h1>
      <div>
        {hasNoContent ? (
          <div
            className="text-white text-center text-xl font-bold my-[35vh]
          "
          >
            No fan art available yet. Check back soon!
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 py-4 md:py-10 gap-4">
            {currentImages.map((image, idx) => (
              <div key={idx} className="mb-4 break-inside-avoid">
                <Link href={image.link[0]}>
                  <Image
                    src={image.src[0]}
                    alt={image.alt[0]}
                    width={500}
                    height={500}
                    className="cursor-pointer w-full object-cover rounded-lg"
                    onClick={() =>
                      setIndex((currentPage - 1) * itemsPerPage + idx)
                    }
                  />
                </Link>
              </div>
            ))}
          </div>
        )}

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
      </div>
    </div>
  );
}
