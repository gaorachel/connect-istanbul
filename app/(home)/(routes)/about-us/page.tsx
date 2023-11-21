import { Dot } from "lucide-react";
import Image from "next/image";
import founder from "/public/about-us/founder.jpg";

const info = {
  intro: `CONNECT OVERSEAS EDUCATION CONSULTANCY company aims to ensure that individuals of all ages, from seven to seventy, who want to continue their education abroad, learn new languages ​​and improve themselves, participate in the world's most exclusive language schools, summer schools, summer camps, undergraduate, graduate and certificate programs of universities.

  CONNECT provides education consultancy services in Language, Certificate, Exchange, Undergraduate and Postgraduate programs, with the awareness that learning new languages ​​and studying abroad contributes to an individual's career by opening new horizons in their world.
  
  As CONNECT, one of our goals is to ensure that our participants experience the cultural richness of different countries without compromising the seriousness of the educational service provided.
  
  CONNECT Founders and consultants take care to provide services by constantly renewing themselves and taking into account the changing and developing conditions of today's schools, families and students, not only with their twenty-five years of education sector experience.`,
  services: [
    {
      service: "Determining the needs of the student, parent and school;",
    },
    {
      service: "Determining the institution that is suitable for the student and the school;",
    },
    {
      service:
        "Informing the student about the institution, accommodation, transportation, food, visa and presenting options;",
    },
    {
      service: "Collection of visa documents;",
    },
    {
      service: "Making a consulate visa appointment;",
    },
    {
      service: "Making the necessary correspondence;",
    },
    {
      service: "Providing flight tickets;",
    },
    {
      service: "Travel and health insurance;",
    },
    {
      service: "Providing a companion who will support you at all times from the beginning to the end of the training;",
    },
    {
      service:
        "Preparation of various travel programs to get to know the country's culture, strengthen international friendships and practice throughout the education.",
    },
  ],
};

export default function AboutUs() {
  return (
    <div className="max-w-[1200px] m-auto p-5 md:p-10">
      <div className="flex flex-col md:flex-row md:gap-10 text-justify">
        <div>
          <h1 className="text-xl md:text-4xl font-semibold">The first step to brand new worlds is with us.</h1>
          <div>
            <div className="py-2 md:py-10 whitespace-pre-line md:w-[800px] text-sm md:text-base">{info.intro}</div>
          </div>
        </div>

        <Image src={founder} width={450} className="py-2" alt={"Picture of Connect Founder Aynur Elvan Özcan"} />
      </div>
      <div className="py-5 md:py-10">
        <h3 className="text-lg md:text-2xl font-semibold py-1 md:py-2"> The scope of our consultancy services: </h3>
        {info.services.map((item, index) => (
          <div className="flex flex-row text-base md:text-lg" key={index}>
            <Dot size={40} className="h-[30px]" /> {item.service}
          </div>
        ))}
      </div>
    </div>
  );
}
