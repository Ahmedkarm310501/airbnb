"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import useClickOutside from "@/hooks/useClickOutside";

const UserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useClickOutside(() => setShowMenu(false));
  return (
    <div className="flex items-center">
      <div className="flex items-center font-semibold mr-3">
        <span className="rounded-full hover:bg-slate-50 px-2 py-3">
          Airbnb your home
        </span>
        <span className="mx-4 rounded-full hover:bg-slate-50 px-3 py-3">
          <TbWorld className="text-lg text-gray-700" />
        </span>
      </div>
      <div className="relative">
        <button
          className="flex items-center  border hover:shadow-md p-2 rounded-full"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FiMenu className="" />
          <FaUserCircle className="text-2xl text-gray-500 ml-3" />
        </button>
        {showMenu && (
          <div
            className="absolute min-w-[240px] right-0 top-12 bg-white"
            ref={ref}
          >
            <div className="felx flex-col  shadow-2xl rounded-2xl py-2">
              <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer ">
                login
              </p>
              <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                Signup
              </p>
              <span className="border-b-[1px] w-full inline-block"></span>
              <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </p>
              <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                Places
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
