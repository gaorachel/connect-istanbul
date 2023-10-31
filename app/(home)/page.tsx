"use client";

import Image from "next/image";
import hero1 from "@/public/home/hero1.jpg";
import hero2 from "@/public/home/hero2.jpg";

import { Button } from "@/components/button";
import { Separator } from "@/components/ui/separator";
import { Calculator } from "lucide-react";
import { ProgrammeCards } from "./_components/programme-cards";

const modals = [
  { label: "Check Language Course Fees ", href: "/language-price-Check" },
  { label: "Check University Tuition Fees", href: "/university-price-Check" },
];

interface ModalItemProps {
  label: string;
}

const ModalItem = ({ label }: ModalItemProps) => {
  return (
    <div className="flex flex-row p-2 px-4 w-[300px] rounded-full gap-2 text-zinc-700 border-2 bg-zinc-200 border-zinc-700 hover:text-zinc-500 hover:border-zinc-500 hover:border-3 hover:bg-zinc-100/80 transition">
      {<Calculator color="#3f3f46" />}
      <button onClick={() => {}}>{label}</button>
      {/* TODO: create modals */}
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div className="relative">
        <Image
          alt="graduation celebration"
          src={hero1}
          className="-z-50  w-full h-auto md:h-[400px] overflow-hidden object-cover"
          // placeholder="blur"
        />
        <div className="absolute top-0 p-10 space-x-3 w-full h-full md:h-[200px] md:mt-24 bg-zinc-200/80">
          <h1 className="font-semibold md:text-3xl text-2xl text-center"> Your gateway to study overseas </h1>
          <div className="p-8 md:p-10 flex flex-col md:flex-row cursor-pointer space-y-5 md:space-y-0 items-center md:justify-center md:gap-5">
            {modals.map((modal) => (
              <ModalItem key={modal.label} label={modal.label} />
            ))}
          </div>
        </div>
      </div>

      <div className="py-10">
        <ProgrammeCards />
      </div>

      <Separator />

      <div className="relative">
        <Image
          alt="London Big Ben & Westminster Palace"
          src={hero2}
          className="-z-50 w-full h-auto md:h-[400px] overflow-hidden object-cover"
          // placeholder="blur"
        />
        <div className="absolute top-0 p-10 md:ml-10 md:w-[400px] h-full w-full text-center space-y-6 bg-zinc-800/60">
          <h1 className="font-semibold md:text-3xl text-2xl text-white">
            Today&apos;s students, tomorrow&apos;s leaders
          </h1>
          <Button label="Check our students ->" href="references" />
        </div>
      </div>

      <div className="h-[500px] bg-white"> place holder </div>
    </>
  );
}
