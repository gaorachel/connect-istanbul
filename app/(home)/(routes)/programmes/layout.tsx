"use client";

import { programmes } from "../../_components/programme-cards";
import { TableOfContent } from "../../../../components/table-of-content";

import type { ReactNode } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { MobileTableOfContent } from "@/components/mobile-table-of-content";

const ProgrammesLayout = ({ children }: { children: ReactNode }) => {
  const isMediumDevice = useMediaQuery("only screen and (min-width: 768px)");

  return (
    <div className="flex flex-col md:flex-row md:w-[1200px] m-auto">
      {!isMediumDevice && <MobileTableOfContent items={programmes} slug="programmes" />}
      {isMediumDevice && <TableOfContent items={programmes} slug="programmes" />}

      <main> {children} </main>
    </div>
  );
};

export default ProgrammesLayout;
