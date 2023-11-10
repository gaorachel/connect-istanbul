"use client";

import { useMediaQuery } from "@react-hook/media-query";

import { allCountries } from "./[code]/page";
import { MobileTableOfContent } from "@/components/mobile-table-of-content";
import { TableOfContent } from "@/components/table-of-content";

import type { ReactNode } from "react";

const ProgrammesLayout = ({ children }: { children: ReactNode }) => {
  const isMediumDevice = useMediaQuery("only screen and (min-width: 768px)");

  return (
    <div className="flex flex-col md:flex-row md:w-[1200px] m-auto">
      {!isMediumDevice && <MobileTableOfContent items={allCountries} slug="countries" />}
      {isMediumDevice && <TableOfContent items={allCountries} slug="countries" />}

      <main> {children} </main>
    </div>
  );
};

export default ProgrammesLayout;
