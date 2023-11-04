import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

interface SidebarProps {
  items: {
    label: string;
    code: string;
  }[];
  slug: string;
}

export const Sidebar = ({ items, slug }: SidebarProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const selectedItem = pathname.split("/").pop();

  return (
    <div className="p-10 text-lg space-y-5">
      {items.map((item) => (
        <div
          className={cn(
            "flex flex-row cursor-pointer text-zinc-500 hover:text-zinc-800",
            selectedItem === item.code && "text-zinc-800 font-semibold translate-x-10 transition"
          )}
          key={item.code}
          onClick={() => router.push(`/${slug}/${item.code}`)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};
