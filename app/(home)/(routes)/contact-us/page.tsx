"use client";

import Link from "next/link";

import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";

export default function ContactUs() {
  const isMediumDevice = useMediaQuery("only screen and (min-width: 768px)");

  return (
    <div className="flex flex-col md:flex-row p-5 md:p-10 md:pb-20 m-auto md:w-[1200px] w-[500px] md:space-x-10 min-h-full">
      <h1 className="text-2xl md:text-4xl font-semibold pb-5"> Our Office </h1>
      {/* <Image
          src="/contact-us/office.jpg"
          alt="Picture of office"
          placeholder="empty"
          width={200}
          height={200}
          className="rounded-2xl"
        /> */}
      <p className="flex flex-col">
        <span className="text-lg md:text-xl p-2 text-zinc-500"> İstanbul, TR </span>
        <p className="flex flex-row gap-x-2 p-2 text-sm md:text-md">
          <MapPin size={50} />
          <Link href="https://maps.app.goo.gl/ofRvaBMj6LocE2V88" className="hover:text-blue-600">
            Flat 184, Floor 10, B Block, Metropol İstanbul Sitesi, Atatürk District, Ertuğrul Gazi Street,
            Ataşehir/İstanbul, Turkey
          </Link>
        </p>
      </p>

      <h1 className="text-2xl md:text-4xl font-semibold py-5 md:pt-10"> Contact Us </h1>
      <p className="flex flex-row gap-x-2 p-2 text-sm md:text-md">
        <Phone size={25} /> Phone:
        <Link href="tel:+90 216 688 64 46" className="hover:text-blue-600">
          +90 216 688 64 46
        </Link>
      </p>
      <p className="flex flex-row gap-x-2 p-2 text-sm md:text-md">
        <Mail size={25} /> Email:
        <Link href="mailto: info@connectistanbul.com" className="hover:text-blue-600">
          info@connectistanbul.com
        </Link>
      </p>
      <p className="flex flex-row gap-x-2 p-2 text-sm md:text-md">
        <Facebook size={25} /> Facebook:
        <Link href="https://www.facebook.com/connectistanbul/" className="hover:text-blue-600">
          Connect Yurt Dışı Eğitim Danışmanlığı
        </Link>
      </p>
      <p className="flex flex-row gap-x-2 p-2 text-sm md:text-md">
        <Instagram size={25} /> Instagram:
        <Link href="https://www.instagram.com/aynurelvanozcan" className="hover:text-blue-600">
          @aynurelvanozcan
        </Link>
      </p>

      <div className="py-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.429350921581!2d29.12010087736654!3d40.993974871352734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf5516ef0a05%3A0x157b6a54b6638981!2sMetropol%20Istanbul!5e0!3m2!1sen!2suk!4v1699384340165!5m2!1sen!2suk"
          width={isMediumDevice ? 600 : 450}
          height={isMediumDevice ? 450 : 300}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
