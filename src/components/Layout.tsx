"use client";
import React from "react";
import NavBar from "./NavBar";
import RegisterModal from "./modals/RegisterModal";
import LoginModal from "./modals/LoginModal";
import RentModal from "./modals/RentModal";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const pathName = usePathname();
  let pClasses;
  if (pathName === "/") {
    pClasses = "mx-6 md:mx-8 lg:mx-10";
  } else {
    pClasses = "mx-12 md:mx-16 lg:mx-20";
  }
  return (
    <>
      <NavBar pClasses={pClasses} />
      <RegisterModal />
      <LoginModal />
      <RentModal />

      <div className={`${pClasses}`}>{children}</div>
      <MobileNav />
    </>
  );
};

export default Layout;
