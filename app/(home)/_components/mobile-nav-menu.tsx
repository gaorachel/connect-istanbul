import Link from "next/link";

interface MobileNavMenuProps {
  items: {
    label: string;
    code: string;
  }[];
  href: string;
}

export const MobileNavMenu = ({ items, href }: MobileNavMenuProps) => {
  return (
    <div className="p-2 px-4 space-y-2 flex flex-col text-zinc-500 border-l-2 ml-6 border-zinc-200 text-sm">
      {items.map((item) => (
        <Link href={`${href}/${item.code}`} className="" key={item.code}>
          {item.label}
        </Link>
      ))}
    </div>
  );
};
