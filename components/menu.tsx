import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface MenuProps {
  items: {
    label: string;
    code: string;
  }[];
  slug: string;
}

export const Menu = ({ items, slug }: MenuProps) => {
  const pathname = usePathname();

  const selectedItem = pathname.split("/").pop();

  return (
    <div className="bg-zinc-50">
      <span className="flex flex-row gap-2 w-[250px] border-y p-2 px-4 m-0 text-xl font-semibold">
        <ChevronDown /> Menu
      </span>

      <div className="p-10 text-lg space-y-5 h-full overflow-y-scroll min-w-fit">
        {items.map((item) => (
          <Link
            className={cn(
              "flex flex-row cursor-pointer text-zinc-500 hover:text-zinc-800",
              selectedItem === item.code && "text-zinc-800 font-semibold translate-x-2 transition"
            )}
            key={item.code}
            href={`/${slug}/${item.code}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
