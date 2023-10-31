"use client";

import { cn } from "@/lib/utils";
import { Instagram, Facebook } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const routes = [
  { label: "Home Page", href: "/" },
  { label: "Programmes", href: "/programmes" },
  { label: "Countries", href: "/countries" },
  { label: "Gallery", href: "/gallery" },
  { label: "References", href: "/references" },
  { label: "About us", href: "/about-us" },
  { label: "Contact us", href: "/contact-us" },
];

interface NavbarItemProps {
  label: string;
  href: string;
}

const NavbarItem = ({ label, href }: NavbarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (pathname === "/" && href === "/") || pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <button
      type="button"
      onClick={() => router.push(href)}
      className={cn(
        "p-3 md:pb-2 text-md font-semibold text-zinc-500 hover:text-zinc-800",
        isActive &&
          "text-zinc-800 border-red-400 w-full bg-red-200/20 md:border-b-4 md:border-r-0 border-r-4 md:w-auto md:bg-transparent"
      )}
    >
      {label}
    </button>
  );
};

export const Navbar = () => {
  return (
    <div className="flex flex-col md:mr-5">
      <div className="pt-10 md:pt-3 flex flex-col items-start md:flex-row">
        {routes.map((route) => (
          <NavbarItem label={route.label} href={route.href} key={route.href} />
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
