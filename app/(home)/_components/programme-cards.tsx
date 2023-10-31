import { ImageWithButtonCard } from "./image-with-button-card";

const programmes = [
  {
    label: "Summer Schools",
    code: "summer-schools",
  },
  {
    label: "Language Schools",
    code: "language-schools",
  },
  {
    label: "Undergraduate",
    code: "undergraduate",
  },
  {
    label: "Postgraduate",
    code: "Postgraduate",
  },
  {
    label: "High Schools",
    code: "high-schools",
  },
  {
    label: "CELTA",
    code: "celta",
  },
  {
    label: "50+ Programmes",
    code: "50plus-programmes",
  },
  {
    label: "Gallery",
    code: "gallery",
  },
];

export const ProgrammeCards = () => {
  return (
    <div>
      <p className="p-5 md:p-20 text-3xl text-center font-bold">
        We have various programmes for different aohfodhfihsdlkghlsdg.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-24 p-10 gap-10 rounded-lg">
        {programmes.map((programme) => (
          <ImageWithButtonCard label={programme.label} code={programme.code} key={programme.code} />
        ))}
      </div>
    </div>
  );
};
