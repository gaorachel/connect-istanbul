import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface TableOfContentProps {
  items: {
    label: string;
    code: string;
  }[];
  slug: string;
}

export const TableOfContent = ({ items, slug }: TableOfContentProps) => {
  const pathname = usePathname();

  const selectedItem = pathname.split("/").pop();

  return (
    <div className="p-10 text-lg space-y-5">
      {items.map((item) => (
        <Link
          className={cn(
            "flex flex-row cursor-pointer text-zinc-500 hover:text-zinc-800",
            selectedItem === item.code && "text-zinc-800 font-semibold translate-x-10 transition"
          )}
          key={item.code}
          href={`/${slug}/${item.code}`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};
