import { ImageCard } from "./image-card";

export const programmes = [
  {
    label: "Summer Schools",
    code: "summer-schools",
    type: "Short term",
    tag: "popular",
  },
  {
    label: "Language Schools",
    code: "language-schools",
    type: "Short term",
    tag: "popular",
  },
  {
    label: "Undergraduate",
    code: "undergraduate",
    type: "Long term",
  },
  {
    label: "Postgraduate",
    code: "postgraduate",
    type: "Long term",
  },
  {
    label: "High Schools",
    code: "high-schools",
    type: "Long term",
  },
  {
    label: "CELTA",
    code: "celta",
    type: "Short term",
  },
  {
    label: "Elderly Programmes",
    code: "elderly-programmes",
    type: "Short term",
  },
  {
    label: "Gallery",
    code: "gallery",
    type: "References",
  },
];

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
      </div>
    </div>
  );
};
