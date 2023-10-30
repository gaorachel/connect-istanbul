import Image from "next/image";
import hero1 from "@/public/home/hero1.jpg";
import hero2 from "@/public/home/hero2.jpg";

import { Button } from "@/components/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Image
          alt="graduation celebration"
          src={hero1}
          className="-z-50  w-full h-auto md:h-[400px] overflow-hidden object-cover"
          placeholder="blur"
        />
        <div className="absolute top-0 p-10 w-full h-full md:h-[200px] md:mt-24 text-center space-y-6 bg-zinc-200/80">
          <h1 className="font-semibold md:text-3xl text-2xl"> Your gateway to study overseas </h1>
          <Button label="About us ->" href="about-us" />
        </div>
      </div>

      <div className="h-[500px] bg-white"> place holder </div>

      <Separator />

      <div className="relative">
        <Image
          alt="London Big Ben & Westminster Palace"
          src={hero2}
          className="-z-50 w-full h-auto md:h-[400px] overflow-hidden object-cover"
          placeholder="blur"
        />
        <div className="absolute top-0 p-10 md:ml-10 md:w-[400px] h-full w-full text-center space-y-6 bg-zinc-800/60">
          <h1 className="font-semibold md:text-3xl text-2xl text-white">
            {" "}
            Today&apos; students, tomorrow&apos; leaders{" "}
          </h1>
          <Button label="Check our students ->" href="references" />
        </div>
      </div>

      <div className="h-[500px] bg-white"> place holder </div>
    </>
  );
}
