"use client";

import { useMediaQuery } from "@react-hook/media-query";

import { sortedAllCountries } from "./_data/dummy";
import { MobileMenu } from "@/components/mobile-menu";
import { Menu } from "@/components/menu";

import type { ReactNode } from "react";

const ProgrammesLayout = ({ children }: { children: ReactNode }) => {
  const isMediumDevice = useMediaQuery("only screen and (min-width: 768px)");

  return (
    <div className="flex flex-col md:flex-row md:w-[1200px] m-auto">
      {!isMediumDevice && <MobileMenu items={sortedAllCountries} slug="countries" />}
      {isMediumDevice && <Menu items={sortedAllCountries} slug="countries" />}
      <main> {children} </main>
    </div>
  );
};

export default ProgrammesLayout;
