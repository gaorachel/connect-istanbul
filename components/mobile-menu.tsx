import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

interface MobileTableOfContentProps {
  items: {
    label: string;
    code: string;
  }[];
  slug: string;
}

export const MobileMenu = ({ items, slug }: MobileTableOfContentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const selectedItem = pathname.split("/").pop();

  return (
    <div className="bg-zinc-50">
      <span className="flex flex-row gap-2 w-full border-y p-2 px-4 m-0 text-lg" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <ChevronDown /> : <ChevronRight />} Menu
      </span>

      <div className={cn(isOpen && "py-2 space-y-3 px-12 h-[200px] overflow-auto border-b border-zinc-200")}>
        {isOpen &&
          items.map((item) => (
            <Link
              href={`/${slug}/${item.code}`}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex flex-row cursor-pointer text-zinc-500 hover:text-zinc-800",
                selectedItem === item.code && "text-zinc-800 font-semibold transition"
              )}
              key={item.code}
            >
              {item.label}
            </Link>
          ))}
      </div>
    </div>
  );
};
