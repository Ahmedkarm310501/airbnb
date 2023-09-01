import React from "react";
// import { FaUserCircle } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { BiSearch } from "react-icons/bi";
import { PiUserCircleLight } from "react-icons/pi";
type Props = {};

const MobileNav = (props: Props) => {
  return (
    <nav className="">
      <div className="flex sm:hidden justify-center items-center fixed bottom-0 left-0 right-0 h-20 border-t py-2">
        <a
          className="flex flex-col gap-1 items-center flex-1 max-w-[30%] cursor-pointer"
          href=""
        >
          <BiSearch className="text-2xl text-gray-500" />
          <span className="text-sm text-gray-500">Search</span>
        </a>
        <a
          className="flex flex-col gap-1 items-center flex-1 max-w-[30%] cursor-pointer"
          href=""
        >
          <GrFavorite className="text-2xl text-gray-500" />
          <span className="text-sm text-gray-500">Favourites</span>
        </a>
        <a
          className="flex flex-col gap-1 items-center flex-1 max-w-[30%] cursor-pointer"
          href=""
        >
          <PiUserCircleLight className="text-2xl text-gray-500" />
          <span className="text-sm text-gray-500">Login</span>
        </a>
      </div>
    </nav>
  );
};

export default MobileNav;
