import * as d3 from "d3";

import { type FeatureCollection } from "geojson";
import { type ConnectionType } from "../_data/connectionData";

type MapProps = {
  width: number;
  height: number;
  mapGenerationData: FeatureCollection;
  connectionData: ConnectionType[];
  className: string;
  viewBox: string;
};

export const Map = ({ width, height, mapGenerationData, connectionData, className, viewBox }: MapProps) => {
  const projection = d3
    .geoMercator()
    .scale(width / 2 / Math.PI - 40)
    .center([10, 35]);

  const geoPathGenerator = d3.geoPath().projection(projection);

  const backgroundMapSvgElements = mapGenerationData.features
    .filter((shape) => shape.id !== "ATA")
    .map((shape) => {
      return (
        <path
          key={shape.id}
          d={geoPathGenerator(shape) || undefined}
          stroke="lightGrey"
          strokeWidth={0.5}
          fill={shape!.properties!.name === "Turkey" ? "red" : "grey"}
          fillOpacity={0.7}
        />
      );
    });

  const connectionSvgElements = connectionData.map((connection, i) => {
    const path = geoPathGenerator({
      type: "LineString",
      coordinates: [
        [connection.start[0], connection.start[1]],
        [connection.end[0], connection.end[1]],
      ],
    });

    return <path key={i} d={path ?? undefined} stroke="#FE5058" strokeWidth={2} fill="none" />;
  });

  return (
    <div className={className}>
      <svg width={width} height={height} viewBox={viewBox}>
        {backgroundMapSvgElements}
        {connectionSvgElements}
      </svg>
    </div>
  );
};
