"use client";

import Link from "next/link";
import { useMediaQuery } from "@react-hook/media-query";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { MobileNavMenu } from "./mobile-nav-menu";
import { NavMenu } from "./nav-menu";
import { programmes } from "./programme-cards";

import { cn } from "@/lib/utils";

import { Instagram, Facebook, ChevronDown, ChevronRight } from "lucide-react";

const programmeItems = programmes.map((programme) => {
  return { label: programme.label, code: programme.code };
});

const routes = [
  { label: "Home Page", href: "/" },
  { label: "Programmes", href: "/programmes", items: programmeItems },
  { label: "Countries", href: "/countries" },
  { label: "Gallery", href: "/gallery" },
  { label: "References", href: "/references" },
  { label: "About us", href: "/about-us" },
  { label: "Contact us", href: "/contact-us" },
];

interface NavbarItemProps {
  label: string;
  href: string;
  items?: {
    label: string;
    code: string;
  }[];
}

const NavbarItem = ({ label, href, items }: NavbarItemProps) => {
  const isMediumDevice = useMediaQuery("only screen and (min-width: 768px)");
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const isActive = (pathname === "/" && href === "/") || pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <div
      className="md:relative flex flex-col w-full md:w-auto"
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Link
        href={href}
        className={cn(
          "p-3 px-5 md:pb-2 text-md font-semibold text-zinc-500 hover:text-zinc-800 text-left",
          isActive &&
            "text-zinc-800 border-red-400 bg-red-200/20 md:border-b-4 md:border-r-0 border-r-4 md:w-auto md:bg-transparent"
        )}
      >
        <div className="flex flex-row justify-between md:gap-2">
          {label}
          {!!items && !isMediumDevice && (isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />)}
          {!!items && isMediumDevice && <ChevronDown size={20} />}
        </div>
      </Link>

      {isMediumDevice && items && isHovered && (
        <div className="md:absolute md:z-50 py-5">
          <NavMenu items={items!} href={href} />
        </div>
      )}

      {!isMediumDevice && items && isOpen && <MobileNavMenu items={items!} href={href} />}
    </div>
  );
};

export const Navbar = () => {
  return (
    <div className="flex flex-col md:mr-5">
      <div className="pt-10 md:pt-3 flex flex-col items-start md:flex-row md:gap-5">
        {routes.map((route) => (
          <NavbarItem {...route} key={route.href} />
        ))}
      </div>

      <div className="flex flex-row space-x-3 justify-center py-4 md:justify-end ">
        <Link href="https://www.instagram.com/connect.istanbul">
          <Instagram size={45} className="p-2 hover:bg-[#CF2872] hover:rounded-full" />
        </Link>
        <Link href="https://www.facebook.com/connectistanbul/">
          <Facebook size={45} className="p-2 hover:bg-[#0966FF] hover:rounded-full" />
        </Link>
      </div>
    </div>
  );
};
