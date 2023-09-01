import React from "react";
import Logo from "./Logo";
import SearchMenu from "./SearchMenu";
import UserMenu from "./UserMenu";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="border-b-[1px] flex px-6 md:px-8 lg:px-10 py-4 md:justify-between items-center">
      <Logo />
      <SearchMenu />
      <UserMenu />
    </nav>
  );
};

export default NavBar;
