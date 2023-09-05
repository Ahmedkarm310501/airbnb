"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import useClickOutside from "@/hooks/useClickOutside";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import useRentModal from "@/hooks/useRentModal";
import Link from "next/link";

const UserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useClickOutside(() => setShowMenu(false));
  const { onOpen: openRegisterModel } = useRegisterModal();
  const { onOpen: openLoginModel } = useLoginModal();
  const { onOpen: openRentModel } = useRentModal();
  return (
    <div className="hidden md:flex items-center z-50 bg-white ">
      <div className="flex items-center font-semibold md:justify-end">
        <span
          className="rounded-full hover:bg-slate-50 px-2 py-3 sm:text-xs md:text-base hidden sm:block cursor-pointer"
          onClick={openRentModel}
        >
          Airbnb your home
        </span>
        <span className="mx-2 rounded-full hover:bg-slate-50 px-3 py-3 sm:px-2">
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
            className="absolute min-w-[240px] right-0 top-12 bg-white rounded-2xl"
            ref={ref}
          >
            <div className="felx flex-col  shadow-2xl rounded-2xl py-2">
              <p
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer "
                onClick={() => {
                  openLoginModel();
                  setShowMenu(false);
                }}
              >
                login
              </p>
              <p
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  openRegisterModel();
                  setShowMenu(false);
                }}
              >
                Signup
              </p>
              <span className="border-b-[1px] w-full inline-block"></span>
              <p
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setShowMenu(false)}
              >
                <Link href="/favorites">Favorites</Link>
              </p>
              <p
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setShowMenu(false)}
              >
                <Link href="/bookings">Bookings</Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
