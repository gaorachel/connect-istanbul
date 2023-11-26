"use client";

import { useMediaQuery } from "@react-hook/media-query";
import { Map } from "./_components/map";

import { mapGenerationData } from "./_data/mapGenerationData";
import { connectionData } from "./_data/connectionData";

export default function CountriesPage() {
  const isMediumDevice = useMediaQuery("only screen and (min-width: 768px)");

  return (
    <>
      {isMediumDevice && (
        <div className="w-full">
          <h1 className="text-4xl font-semibold text-center"> You can study in many countries! </h1>
          <div className="m-auto h-full"></div>
          <div className="py-20">
            <Map
              width={2000}
              height={600}
              mapGenerationData={mapGenerationData}
              connectionData={connectionData}
              className="overflow-hidden w-[1000px]"
              viewBox="450 -150 600 550"
            />
          </div>
        </div>
      )}

      {!isMediumDevice}
    </>
  );
}
