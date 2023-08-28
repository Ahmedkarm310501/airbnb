import React from "react";
import Logo from "./Logo";
import SearchMenu from "./SearchMenu";
import UserMenu from "./UserMenu";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="border-b-[1px] flex px-10 py-4 justify-between">
      <Logo />
      <SearchMenu />
      <UserMenu />
    </nav>
  );
};

export default NavBar;
