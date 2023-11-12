"use client";

import { sortedAllCountries } from "../_data/dummy";
import { usePathname } from "next/navigation";

export default function CountryPage() {
  const pathname = usePathname();

  const currentCountry = pathname.split("/").pop();

  const country = sortedAllCountries.find((country) => country.code === currentCountry);

  return (
    <div className="p-5 px-7 md:p-14">
      <h1 className="pb-2 md:py-8 text-xl md:text-4xl font-semibold">{country!.label.toUpperCase()}</h1>
      <p className="md:text-lg text-zinc-500 whitespace-pre-line"> {country!.desc} </p>
    </div>
  );
}
