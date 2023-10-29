"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

const routes = [
  { label: "Home Page", href: "/" },
  { label: "Language Price Offer", href: "/language-price-offer" },
  { label: "University Price Offer", href: "/university-price-offer" },
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
        "p-3 text-md font-semibold text-zinc-500",
        isActive &&
          "text-zinc-800 border-red-400 w-full bg-red-200/20 md:border-b-4 md:border-r-0 border-r-4 md:w-auto md:bg-transparent"
      )}
    >
      {label}
    </button>
  );
};

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="pt-10 flex flex-col items-start md:flex-row">
      {routes.map((route) => (
        <NavbarItem label={route.label} href={route.href} key={route.href} />
      ))}
    </div>
  );
};
