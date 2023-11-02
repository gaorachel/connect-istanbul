"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/public/header/logo.png";

import { Footer } from "@/app/(home)/_components/footer";
import { MobileNavbar } from "@/app/(home)/_components/mobile-navbar";
import { Navbar } from "@/app/(home)/_components/navbar";

import type { ReactNode } from "react";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      src={logo}
      width={300}
      height={100}
      alt="Connect Logo"
      className="object-contain m-auto md:m-0 cursor-pointer"
      onClick={() => router.push("/")}
    />
  );
};

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header className="hidden md:flex justify-between">
        <Logo />
        <Navbar />
      </header>

      <header className="md:hidden items-center">
        <div className="p-2 pl-4">
          <MobileNavbar />
        </div>
        <Logo />
      </header>

      <main> {children} </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
