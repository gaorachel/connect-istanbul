import Image from "next/image";

import { Button } from "@/components/button";
import { DivideSquare, ExternalLink, Link, Link2 } from "lucide-react";

interface ImageWithButtonCardProps {
  label: string;
  code: string;
}

export const ImageWithButtonCard = ({ label, code }: ImageWithButtonCardProps) => {
  return (
    <div className="rounded-md flex flex-col shadow-xl h-[350px] w-[300px] cursor-pointer">
      <Image src={`/home/${code}.jpg`} alt={label} height={300} width={300} className="rounded-t-lg h-[220px] w-auto" />
      <p className="text-lg font-semibold p-2 py-10 flex flex-row gap-2 m-auto">
        {label} <ExternalLink size={20} />
      </p>
    </div>
  );
};
