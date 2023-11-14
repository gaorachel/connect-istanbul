"use client";

import { useMediaQuery } from "@react-hook/media-query";

import { ImageSlider } from "@/components/image-slider";
import londonSummerSchool202301 from "@/public/gallery/london-summer-school-2023-1.jpg";
import londonSummerSchool202302 from "@/public/gallery/london-summer-school-2023-2.jpg";
import londonSummerSchool202303 from "@/public/gallery/london-summer-school-2023-3.jpg";
import londonSummerSchool202304 from "@/public/gallery/london-summer-school-2023-4.jpg";
import londonSummerSchool202305 from "@/public/gallery/london-summer-school-2023-5.jpg";
import londonSummerSchool202306 from "@/public/gallery/london-summer-school-2023-6.jpg";
import londonSummerSchool202307 from "@/public/gallery/london-summer-school-2023-7.jpg";
import londonSummerSchool202308 from "@/public/gallery/london-summer-school-2023-8.jpg";
import londonSummerSchool202309 from "@/public/gallery/london-summer-school-2023-9.jpg";
import londonSummerSchool202310 from "@/public/gallery/london-summer-school-2023-10.jpg";
import londonSummerSchool202311 from "@/public/gallery/london-summer-school-2023-11.jpg";
import torontoSummerSchool202301 from "@/public/gallery/toronto-summer-school-2023-1.jpg";
import torontoSummerSchool202302 from "@/public/gallery/toronto-summer-school-2023-2.jpg";
import torontoSummerSchool202303 from "@/public/gallery/toronto-summer-school-2023-3.jpg";
import torontoSummerSchool202304 from "@/public/gallery/toronto-summer-school-2023-4.jpg";
import torontoSummerSchool202305 from "@/public/gallery/toronto-summer-school-2023-5.jpg";
import torontoSummerSchool202306 from "@/public/gallery/toronto-summer-school-2023-6.jpg";
import torontoSummerSchool202307 from "@/public/gallery/toronto-summer-school-2023-7.jpg";
import torontoSummerSchool202308 from "@/public/gallery/toronto-summer-school-2023-8.jpg";
import torontoSummerSchool202309 from "@/public/gallery/toronto-summer-school-2023-9.jpg";

import { Calendar, MapPin } from "lucide-react";

export default function GalleryPage() {
  const isMediumDevice = useMediaQuery("only screen and (min-width: 768px)");

  const trips = [
    {
      name: "London, England - Summer School",
      code: "london-summer-school-2023",
      date: "June 2023 - July 2023",
      images: [
        {
          src: londonSummerSchool202301,
        },
        {
          src: londonSummerSchool202302,
        },
        {
          src: londonSummerSchool202303,
        },
        {
          src: londonSummerSchool202304,
        },
        {
          src: londonSummerSchool202305,
        },
        {
          src: londonSummerSchool202306,
        },
        {
          src: londonSummerSchool202307,
        },
        {
          src: londonSummerSchool202308,
        },
        {
          src: londonSummerSchool202309,
        },
        {
          src: londonSummerSchool202310,
        },
        {
          src: londonSummerSchool202311,
        },
      ],
    },
    {
      name: "Toronto, Canada - Summer School",
      code: "toronto-summer-school-2023",
      date: "June 2023 - July 2023",
      images: [
        {
          src: torontoSummerSchool202301,
        },
        {
          src: torontoSummerSchool202302,
        },
        {
          src: torontoSummerSchool202303,
        },
        {
          src: torontoSummerSchool202304,
        },
        {
          src: torontoSummerSchool202305,
        },
        {
          src: torontoSummerSchool202306,
        },
        {
          src: torontoSummerSchool202307,
        },
        {
          src: torontoSummerSchool202308,
        },
        {
          src: torontoSummerSchool202309,
        },
      ],
    },
  ];

  return (
    <div className="m-auto w-[500px] md:w-[1200px]">
      {trips.map((trip, index) => (
        <div key={index} className="p-5 md:p-10 md:px-20 flex flex-col space-y-1 md:space-y-3 ">
          <div className="flex flex-row items-baseline gap-2 md:pl-16">
            <MapPin size={isMediumDevice ? 30 : 20} />
            <h1 className="text-2xl md:text-3xl font-semibold">{trip.name}</h1>
          </div>
          <div className="flex flex-row items-baseline gap-2 md:pl-20">
            <Calendar size={isMediumDevice ? 20 : 15} color="#71717a" />
            <h2 className="md:text-lg text-zinc-500"> {trip.date} </h2>
          </div>

          <ImageSlider images={trip.images} name={trip.name} />
        </div>
      ))}
    </div>
  );
}
