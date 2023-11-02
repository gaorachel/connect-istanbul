import { ImageWithButtonCard } from "./image-with-button-card";

const programmes = [
  {
    label: "Summer Schools",
    code: "summer-schools",
    type: "Short term",
  },
  {
    label: "Language Schools",
    code: "language-schools",
    type: "Short term",
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
    label: "50+ Programmes",
    code: "50plus-programmes",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-24 p-10 gap-10 rounded-lg">
        {programmes.map((programme) => (
          <ImageWithButtonCard
            label={programme.label}
            code={programme.code}
            type={programme.type}
            key={programme.code}
          />
        ))}
      </div>
    </div>
  );
};
