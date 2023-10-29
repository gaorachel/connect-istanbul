import { Footer } from "@/app/(home)/_components/footer";
import { MobileNavbar } from "@/app/(home)/_components/mobile-navbar";
import { Navbar } from "@/app/(home)/_components/navbar";
import Image from "next/image";
import React, { ReactNode } from "react";

const Logo = () => {
  return <Image src="/logo.png" width={300} height={100} alt="Connect Logo" className="object-contain pl-5 m-auto" />;
};

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header className="hidden md:flex justify-between">
        <Logo />
        <Navbar />
      </header>

      <header className="md:hidden">
        <div className="p-4">
          <MobileNavbar />
        </div>
        <Logo />
      </header>

      {children}

      <Footer />
    </div>
  );
};

export default AppLayout;
