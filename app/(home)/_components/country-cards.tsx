import { ImageCard } from "./image-card";

const countries = [
  {
    label: "France",
    code: "france",
    type: "location",
  },
  {
    label: "England",
    code: "england",
    type: "location",
    tag: "popular",
  },
  {
    label: "Scotland",
    code: "scotland",
    type: "location",
  },
  {
    label: "Italy",
    code: "italy",
    type: "location",
  },
  {
    label: "The Netherland",
    code: "netherland",
    type: "location",
  },
  {
    label: "Germany",
    code: "germany",
    type: "location",
  },
  {
    label: "United States",
    code: "us",
    type: "location",
  },
  {
    label: "Canada",
    code: "canada",
    type: "location",
    tag: "popular",
  },
];

export const CountryCards = () => {
  return (
    <div>
      <p className="p-5 md:p-20 text-3xl text-center font-bold"> Education in many countries </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-24 p-10 gap-10 rounded-lg lg:w-[1400px] md:w-[800p] m-auto">
        {countries.map((country) => (
          <ImageCard {...country} key={country.code} />
        ))}
      </div>
    </div>
  );
};
