"use client";
import NavBar from "@/components/NavBar";
import "./globals.css";
import MobileNav from "@/components/MobileNav";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";
import RentModal from "@/components/modals/RentModal";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  let pClasses;
  if (pathName === "/") {
    pClasses = "mx-6 md:mx-8 lg:mx-10";
  } else {
    pClasses = "mx-12 md:mx-16 lg:mx-20";
  }
  return (
    <html lang="en">
      <body>
        <NavBar pClasses={pClasses} />
        <RegisterModal />
        <LoginModal />
        <RentModal />

        <div className={`${pClasses}`}>{children}</div>
        <MobileNav />
      </body>
    </html>
  );
}
