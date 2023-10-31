"use client";

import { cn } from "@/lib/utils";
import { Instagram, Facebook, Calculator } from "lucide-react";
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

const modals = [
  { label: "Language Price Offer", href: "/language-price-offer" },
  { label: "University Price Offer", href: "/university-price-offer" },
];

interface ItemProps {
  label: string;
  href: string;
}

const NavbarItem = ({ label, href }: ItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (pathname === "/" && href === "/") || pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <button
      type="button"
      onClick={() => router.push(href)}
      className={cn(
        "p-3 md:pb-2 md:mb-1 md:mr-2 text-md font-semibold text-zinc-500 hover:text-zinc-800",
        isActive &&
          "text-zinc-800 border-red-400 w-full bg-red-200/20 md:border-b-4 md:border-r-0 border-r-4 md:w-auto md:bg-transparent"
      )}
    >
      {label}
    </button>
  );
};

const ModalItem = ({ label, href }: ItemProps) => {
  <button type="button">
    {label} {/* TODO: create modals */}
  </button>;
};

export const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="pt-10 md:pt-3 flex flex-col items-start md:flex-row">
        {routes.map((route) => (
          <NavbarItem label={route.label} href={route.href} key={route.href} />
        ))}
      </div>

      <div className="flex flex-col md:flex-row p-2 justify-between">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-3 cursor-pointer">
          {modals.map((modal) => (
            <div
              key={modal.href}
              className="py-4 md:p-2 gap-2 flex flex-row md:rounded-full text-zinc-500 md:border-2 md:border-zinc-400 hover:text-zinc-700 hover:border-zinc-700 hover:border-3"
            >
              {<Calculator color="#71717a" className="hover:text-zinc-700" />} {modal.label}
            </div>
          ))}
        </div>

        <div className="flex flex-row space-x-3 py-4 ml-5 md:p-0 md:m-0">
          <Link href="https://www.instagram.com/connect.istanbul">
            <Instagram size={45} className="p-2 hover:bg-[#CF2872] hover:rounded-full" />
          </Link>
          <Link href="https://www.facebook.com/connectistanbul/">
            <Facebook size={45} className="p-2 hover:bg-[#0966FF] hover:rounded-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};
