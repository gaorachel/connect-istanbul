import { ImageCard } from "./image-card";

import { programmes } from "../(routes)/programmes/_data/programmeInfo";

const gallery = {
  label: "Gallery",
  code: "gallery",
  type: "References",
};

export const ProgrammeCards = () => {
  return (
    <div>
      <p className="p-5 md:p-20 text-3xl text-center font-bold">
        We have various programmes for different aohfodhfihsdlkghlsdg.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-24 p-10 gap-10 rounded-lg lg:w-[1400px] md:w-[800p] m-auto">
        {programmes.map((programme) => (
          <ImageCard {...programme} key={programme.code} slug="programmes" />
        ))}

        <ImageCard {...gallery} slug="gallery" />
      </div>
    </div>
  );
};
