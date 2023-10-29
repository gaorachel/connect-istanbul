import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Navbar } from "./navbar";

export const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger className="hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white w-[250px]">
        <Navbar />
      </SheetContent>
    </Sheet>
  );
};
