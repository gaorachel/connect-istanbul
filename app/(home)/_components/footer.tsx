"use client";

import { useMediaQuery } from "usehooks-ts";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/button";

export const Footer = () => {
  const isWebSize = useMediaQuery("(min-width: 768px)");

  return (
    <footer className="flex flex-col bg-zinc-800 justify-center">
      <div className="p-5 m-auto">
        <Button label="Contact us ->" href="contact-us" variant="light" type="button" />
      </div>
      <div className="p-2 flex flex-col md:flex-row space-0  md:space-x-8 justify-center items-center bg-zinc-100">
        <Image
          src="/qr-code.png"
          width={isWebSize ? 150 : 75}
          height={isWebSize ? 150 : 75}
          alt="QR CODE"
          className="object-contain"
        />
        <Image
          src="/yedab.png"
          width={isWebSize ? 250 : 150}
          height={isWebSize ? 100 : 75}
          alt="YEDAB logo"
          className="object-contain"
        />
        <Image
          src="/ielts.png"
          width={isWebSize ? 250 : 150}
          height={isWebSize ? 100 : 75}
          alt="IELTS logo"
          className="object-contain"
        />
        <Image
          src="/pearson.png"
          width={isWebSize ? 250 : 150}
          height={isWebSize ? 100 : 75}
          alt="Pearson logo"
          className="object-contain"
        />
      </div>
      <div className="flex flex-row justify-end p-2 pr-20 space-x-5">
        <Link href="https://www.instagram.com/connect.istanbul">
          <Instagram size={50} color="white" className="p-2 hover:bg-[#CF2872] hover:rounded-full" />
        </Link>
        <Link href="https://www.facebook.com/connectistanbul/">
          <Facebook size={50} color="white" className="p-2 hover:bg-[#0966FF] hover:rounded-full" />
        </Link>
      </div>
      <p className="text-white p-4 m-auto text-sm md:text-base"> © 2023 Connect Istanbul. All rights reserved. </p>
    </footer>
  );
};
