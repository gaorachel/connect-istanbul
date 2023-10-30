"use client";

import { Facebook, Instagram } from "lucide-react";

import Image from "next/image";
import qrCode from "@/public/footer/qr-code.png";
import yedab from "@/public/footer/yedab.png";
import ielts from "@/public/footer/ielts.png";
import pearson from "@/public/footer/pearson.png";
import Link from "next/link";

import { Button } from "@/components/button";

export const Footer = () => {
  return (
    <footer className="flex flex-col bg-zinc-800 justify-center ">
      <div className="p-5 m-auto">
        <Button label="Contact us ->" href="contact-us" variant="light" type="button" />
      </div>
      <div className="p-2 flex flex-col md:flex-row space-0  md:space-x-8 justify-center items-center bg-zinc-100 md:h-[200px]">
        <Image src={qrCode} alt="QR CODE" className="h-[100px] md:h-[150px] w-auto" />
        <Image src={yedab} alt="YEDAB logo" className="h-[100px] md:h-[200px] w-auto" />
        <Image src={ielts} alt="IELTS logo" className="h-[100px] md:h-[200px] w-auto" />
        <Image src={pearson} alt="Pearson logo" className="h-[100px] md:h-[200px] w-auto" />
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
