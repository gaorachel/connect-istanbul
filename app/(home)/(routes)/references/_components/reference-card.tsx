"use client";

import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";

interface ReferenceCardProps {
  src: string;
  name: string;
  review: string;
}

export const ReferenceCard = ({ src, review, name }: ReferenceCardProps) => {
  const isMediumDevice = useMediaQuery("only screen and (min-width: 768px)");

  return (
    <div className="flex flex-row md:max-w-[1200px] m-auto gap-2 md:gap-10 p-4 md:p-5 md:py-10">
      <Image
        src={src}
        alt={`Picture of student ${name}`}
        width={100}
        height={100}
        className="w-[100px] md:w-[250px] h-[100px] md:h-[250px]"
      />
      <div className="space-y-2 md:space-y-5 item">
        <div className="text-sm md:text-base text-zinc-600">
          <div className="px-5 md:px-10 text-justify whitespace-pre-line"> {review} </div>
        </div>
        <div className="pr-5 md:pr-10 md:text-lg text-zinc-600 text-right "> - {name} </div>
      </div>
    </div>
  );
};
