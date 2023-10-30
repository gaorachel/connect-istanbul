"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

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
        "p-3 text-md font-semibold text-zinc-500",
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
      <div className="pt-10 flex flex-col items-start md:flex-row">
        {routes.map((route) => (
          <NavbarItem label={route.label} href={route.href} key={route.href} />
        ))}
      </div>
      <div className="flex flex-row space-x-3 justify-end">
        {modals.map((modal) => (
          <div key={modal.href}> {modal.label} </div>
        ))}
      </div>
    </div>
  );
};
