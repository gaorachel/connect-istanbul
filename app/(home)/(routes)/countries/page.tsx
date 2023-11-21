"use client";

import { Map } from "./_components/map";

import { data } from "./_data/mapGenerationData";
import { connectionData } from "./_data/connectionData";

export default function CountriesPage() {
  return (
    <div className="w-[900px]">
      You can study in many countries!
      <div className="m-auto h-full"></div>
      <Map width={1000} height={800} data={data} connectionData={connectionData} />
    </div>
  );
}
