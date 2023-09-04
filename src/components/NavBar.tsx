import React from "react";
import Logo from "./Logo";
import SearchMenu from "./SearchMenu";
import UserMenu from "./UserMenu";
import CategoryList from "./CategoryList";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <header className="sticky top-0 z-10 bg-white px-6 md:px-8 lg:px-10 ">
      <nav className="md:border-b-[1px] flex py-2 md:py-4 md:justify-between items-center ">
        <Logo />
        <SearchMenu />
        <UserMenu />
      </nav>
      <CategoryList />
    </header>
  );
};

export default NavBar;
