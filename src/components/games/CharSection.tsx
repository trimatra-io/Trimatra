import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { games } from "@/app/data/games";
import { notFound } from "next/navigation";

type GameProp = {
  params: {
    slug: string;
  };
};

const CharSection: React.FC<GameProp> = ({ params }) => {
  const game = games.find((game) => game.slug === params.slug);

  if (!game) {
    notFound();
  }

  return (
    <div className="py-6 xl:py-36">
      <h1 className="text-3xl pb-5 font-bold">{game.Title}</h1>
      <Carousel className="w-full max-w-full px-60">
        <CarouselContent>
          {game.character.map((char, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="grid grid-cols-1 xl:grid-cols-2 gap-3 xl:gap-7 justify-center pt-9">
                    <div className="justify-center items-center mx-6 xl:mx-12">
                      <Image
                        src={char.src}
                        alt={char.alt}
                        width={300}
                        height={300}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold">{char.nameChar}</h1>
                      <h3 className="text-xl italic py-3">Description</h3>
                      <p className="text-justify py-4">{char.descChar}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CharSection;
