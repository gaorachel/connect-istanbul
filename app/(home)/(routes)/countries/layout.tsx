"use client";

import { countries } from "../../_components/country-cards";
import { Sidebar } from "../../../../components/sidebar";

import type { ReactNode } from "react";

const CountriesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-row w-[1200px] m-auto">
      <aside>
        <Sidebar items={countries} slug="countries" />
      </aside>
      <main> {children} </main>
    </div>
  );
};

export default CountriesLayout;
