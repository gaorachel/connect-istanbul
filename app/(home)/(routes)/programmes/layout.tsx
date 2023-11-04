"use client";

import { programmes } from "../../_components/programme-cards";
import { Sidebar } from "../../../../components/sidebar";

import type { ReactNode } from "react";

const ProgrammesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-row w-[1200px] m-auto">
      <aside>
        <Sidebar items={programmes} slug="programmes" />
      </aside>
      <main> {children} </main>
    </div>
  );
};

export default ProgrammesLayout;
