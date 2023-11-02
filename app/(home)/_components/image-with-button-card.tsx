import Image from "next/image";

import { Button } from "@/components/button";
import { DivideSquare, ExternalLink, Link, Link2 } from "lucide-react";

interface ImageWithButtonCardProps {
  label: string;
  code: string;
  type: string;
}

export const ImageWithButtonCard = ({ label, code, type }: ImageWithButtonCardProps) => {
  return (
    <div className="rounded-xl flex flex-col shadow-xl h-[350px] w-[300px] cursor-pointer hover:-translate-y-5 transition-all">
      <Image src={`/home/${code}.jpg`} alt={label} height={300} width={300} className="rounded-t-xl h-[220px] w-auto" />
      <p className="p-4 py-4 text-sm text-red-400 font-semibold"> {type.toUpperCase()} </p>
      <h2 className="pl-4 px-auto text-xl font-semibold flex flex-row gap-2">{label}</h2>
      <p></p>
    </div>
  );
};
