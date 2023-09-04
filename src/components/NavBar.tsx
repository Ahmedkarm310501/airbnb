"use client";
import React from "react";
import Logo from "./Logo";
import SearchMenu from "./SearchMenu";
import UserMenu from "./UserMenu";
import CategoryList from "./CategoryList";

type Props = {
  pClasses: string;
};

const NavBar = ({ pClasses }: Props) => {
  return (
    <header className={`sticky top-0 z-10 bg-white  `}>
      <div className="md:border-b-[1px]">
        <nav
          className={`flex py-2 md:py-4 md:justify-between items-center ${pClasses}`}
        >
          <Logo />
          <SearchMenu />
          <UserMenu />
        </nav>
      </div>
      <CategoryList pClasses={pClasses} />
    </header>
  );
};

export default NavBar;
