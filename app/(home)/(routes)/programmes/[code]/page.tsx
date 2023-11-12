"use client";

import { usePathname } from "next/navigation";
import { programmes } from "../_data/programmeInfo";

export default function ProgrammePage() {
  const pathname = usePathname();

  const currentProgramme = pathname.split("/").pop();

  const programme = programmes.find((programme) => programme.code === currentProgramme);

  return (
    <div className="p-5 px-7 md:p-14">
      <h1 className="pb-2 md:py-8 text-xl md:text-4xl font-semibold">{programme!.label.toUpperCase()}</h1>
      <p className="md:text-lg text-zinc-500 whitespace-pre-line"> {programme!.desc} </p>
    </div>
  );
}
