import { Button } from "@/components/button";
import { Facebook, Instagram, Languages } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col bg-zinc-800 justify-center">
      <div className="p-5 m-auto">
        <Button label="Contact us ->" href="contact-us" variant="light" type="button" />
      </div>
      <div className="p-2 flex flex-row justify-center space-x-8 bg-zinc-100">
        <Image src="/qr-code.png" width={150} height={150} alt="QR CODE" className="object-contain" />
        <Image src="/yedab.png" width={250} height={100} alt="YEDAB logo" className="object-contain" />
        <Image src="/ielts.png" width={250} height={100} alt="IELTS logo" className="object-contain" />
        <Image src="/pearson.png" width={250} height={100} alt="Pearson logo" className="object-contain" />
      </div>
      <div className="flex flex-row justify-end p-2 pr-20 space-x-5">
        <Link href="https://www.instagram.com/connect.istanbul">
          <Instagram size={50} color="white" className="p-2 hover:bg-[#CF2872] hover:rounded-full" />
        </Link>
        <Link href="https://www.facebook.com/connectistanbul/">
          <Facebook size={50} color="white" className="p-2 hover:bg-[#0966FF] hover:rounded-full" />
        </Link>
      </div>
      <p className="text-white p-4 m-auto"> © 2023 Connect Istanbul. All rights reserved. </p>
    </footer>
  );
};
