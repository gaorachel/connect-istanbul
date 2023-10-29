import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import React, { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
