"use client";
import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { PiUserCircleLight } from "react-icons/pi";
import { GrFavorite } from "react-icons/gr";
const MobileNav = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollingUp = prevScrollPos > currentScrollPos;

      // Determine whether to show or hide the navigation based on scroll direction
      setIsNavVisible(scrollingUp || currentScrollPos < 10); // Show when scrolling up or near the top

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`z-30 `}>
      <div
        className={`${
          isNavVisible ? "" : "-m-20"
        } transition-all duration-300 bg-white flex sm:hidden justify-center items-center fixed bottom-0 left-0 right-0 h-20 border-t py-2`}
      >
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
