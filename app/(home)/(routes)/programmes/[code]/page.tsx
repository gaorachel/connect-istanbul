"use client";

import { usePathname } from "next/navigation";
import { programmes } from "../_data/programmeInfo";
import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query";

export default function ProgrammePage() {
  const isMediumDevice = useMediaQuery("only screen and (min-width: 768px)");
  const pathname = usePathname();

  const currentProgramme = pathname.split("/").pop();

  const programme = programmes.find((programme) => programme.code === currentProgramme);

  return (
    <div className="p-5 px-7 md:p-14">
      <h1 className="pb-2 md:py-8 text-xl md:text-4xl font-semibold">{programme!.label.toUpperCase()}</h1>
      <Image
        alt={programme!.label}
        src={`/programmes/${programme?.code}-1.jpg`}
        width={isMediumDevice ? 900 : 600}
        height={isMediumDevice ? 500 : 400}
        priority
        className="py-5 md:pb-10"
      />
      <p className="md:text-lg text-zinc-500 whitespace-pre-line"> {programme!.desc} </p>
    </div>
  );
}
