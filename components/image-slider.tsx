"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import { ChevronLeft, ChevronRight, Circle, Dot } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@react-hook/media-query";

interface ImageSliderProps {
  images: { src: StaticImageData }[];
  name: string;
}

export const ImageSlider = ({ images, name }: ImageSliderProps) => {
  const [shownImageIndex, setShownImageIndex] = useState(0);
  const isMediumDevice = useMediaQuery("only screen and (min-width: 768px)");

  const handleClickPrevImage = () => {
    const isFirstImage = shownImageIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : shownImageIndex - 1;

    setShownImageIndex(newIndex);
  };

  const handleClickNextImage = () => {
    const isLastImage = shownImageIndex === images.length - 1;
    const nextIndex = isLastImage ? 0 : shownImageIndex + 1;

    setShownImageIndex(nextIndex);
  };

  const goToImage = (imageIndex: number) => {
    setShownImageIndex(imageIndex);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row m-auto items-center space-y-2">
        <ChevronLeft
          onClick={handleClickPrevImage}
          className="bg-zinc-200 hover:bg-zinc-400/80 transition cursor-pointer rounded-full"
          size={45}
        />
        {images.map((image, index) => (
          <Image
            onClick={() => goToImage(index)}
            src={image.src}
            alt={`${name} - ${index}`}
            // width={isMediumDevice ? 500 : 300}
            // height={isMediumDevice ? 500 : 400}
            key={index}
            className={cn(
              index === shownImageIndex
                ? "m-auto object-contain w-[400px] h-[250px] md:w-[800px] md:h-[500px]"
                : "hidden"
            )}
            priority
          />
        ))}
        <ChevronRight
          onClick={handleClickNextImage}
          className="bg-zinc-200 hover:bg-zinc-400/80 transition cursor-pointer rounded-full"
          size={45}
        />
      </div>
      <div className="flex flex-row m-auto p-2 md:p-4">
        {images.map((_, index) => (
          <Dot
            color={index === shownImageIndex ? "#ef4444" : "#a1a1aa"}
            size={isMediumDevice ? 40 : 30}
            strokeWidth={3}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
