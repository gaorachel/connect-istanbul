"use client";

import { countries } from "../../_components/country-cards";
import { TableOfContent } from "../../../../components/table-of-content";

import type { ReactNode } from "react";

const CountriesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-row w-[1200px] m-auto">
      <aside>
        <TableOfContent items={countries} slug="countries" />
      </aside>
      <main> {children} </main>
    </div>
  );
};

export default CountriesLayout;
