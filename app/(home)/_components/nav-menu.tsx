import { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface NavMenuProps {
  items: {
    label: string;
    code: string;
  }[];
  href: string;
}

export const NavMenu = ({ items, href }: NavMenuProps) => {
  const router = useRouter();

  return (
    <div className="my-10 p-2 px-4 bg-zinc-100 w-[200px] space-y-2">
      {items.map((item) => (
        <div
          key={item.code}
          onClick={() => router.push(`${href}/${item.code}`)}
          className="text-zinc-500 hover:text-zinc-900 cursor-pointer transition"
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};
