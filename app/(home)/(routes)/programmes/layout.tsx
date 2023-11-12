"use client";

import { programmes } from "../../_components/programme-cards";
import { Menu } from "../../../../components/menu";

import type { ReactNode } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { MobileMenu } from "@/components/mobile-menu";

const ProgrammesLayout = ({ children }: { children: ReactNode }) => {
  const isMediumDevice = useMediaQuery("only screen and (min-width: 768px)");

  return (
    <div className="flex flex-col md:flex-row md:w-[1200px] m-auto">
      {!isMediumDevice && <MobileMenu items={programmes} slug="programmes" />}
      {isMediumDevice && <Menu items={programmes} slug="programmes" />}

      <main> {children} </main>
    </div>
  );
};

export default ProgrammesLayout;
