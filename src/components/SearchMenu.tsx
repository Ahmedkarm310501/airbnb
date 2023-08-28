import React from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const SearchMenu = (props: Props) => {
  return (
    <div className="flex border-[1px] gap-4 rounded-full items-center shadow-md py-2 ml-28">
      <button className="font-semibold text-sm pl-7">AnyWhere</button>
      <span className="w-px h-6 bg-[#ddd]"></span>
      <button className="font-semibold text-sm">Any Week</button>
      <span className="w-px h-6 bg-[#ddd]"></span>
      <button className="flex items-center text-sm pr-2">
        <span className="font-light mr-2">Add Guests</span>
        <span className="bg-main p-2 rounded-full ml-2 ">
          <BiSearch className=" text-white  font-bold rounded-full" />
        </span>
      </button>
    </div>
  );
};

export default SearchMenu;
