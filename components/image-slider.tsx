"use client";

import { useState } from "react";
import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageSliderProps {
  images: { src: string }[];
  name: string;
}

export const ImageSlider = ({ images, name }: ImageSliderProps) => {
  const [shownImageIndex, setShownImageIndex] = useState(0);

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
    <div className="flex flex-row">
      <ChevronLeft onClick={handleClickPrevImage} />
      {images.map((image, index) => (
        <Image
          onClick={() => goToImage(index)}
          src={image.src}
          alt={`${name} - ${index}`}
          width={500}
          height={500}
          key={index}
          className={cn(index === shownImageIndex ? "" : "hidden")}
        />
      ))}
      <ChevronRight onClick={handleClickNextImage} />
    </div>
  );
};
