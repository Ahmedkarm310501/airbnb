import React from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const SearchMenu = (props: Props) => {
  return (
    <div className="flex justify-between border-[1px] sm:gap-3 rounded-full items-center shadow-md py-2 grow md:grow-0 ml-4">
      <button className="font-semibold text-sm pl-7 sm:grow md:grow-0">
        AnyWhere
      </button>
      <span className="hidden sm:block w-px h-6 bg-[#ddd]"></span>
      <button className="hidden sm:block font-semibold text-sm grow md:grow-0">
        Any Week
      </button>
      <span className="hidden sm:block w-px h-6 bg-[#ddd]"></span>
      <button className=" items-center text-sm pr-2 grow md:grow-0 hidden sm:flex">
        <span className="hidden sm:block font-light mr-2 grow md:grow-0">
          Add Guests
        </span>
        <span className="bg-main p-2 rounded-full ml-2 ">
          <BiSearch className=" text-white  font-bold rounded-full" />
        </span>
      </button>
      <button className="sm:hidden text-xl mr-3">
        <EditIcon />
      </button>
    </div>
  );
};

export default SearchMenu;

const EditIcon = () => {
  return (
    <div className="p-2 border rounded-full flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        className="w-4 h-4 text-white"
      >
        <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
      </svg>
    </div>
  );
};
