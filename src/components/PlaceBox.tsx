import React from "react";
import Image from "next/image";
import { AiFillStar, AiFillHeart } from "react-icons/ai";

type Props = {};

const PlaceBox = (props: Props) => {
  return (
    <div className="flex flex-col gap-3 cursor-pointer">
      <div className="flex justify-between items-center h-full w-full relative">
        <img
          src="/images/1.webp"
          alt=""
          className="rounded-xl object-cover aspect-square"
        />
        <div className="absolute top-3 right-3 cursor-pointer">
          <AiFillHeart
            className="text-2xl fill-gray-600 stroke-white stroke-[40]"
            stroke
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 leading-tight">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">El Gouna, Egypt</h3>
          <div className="flex gap-1 items-center">
            <AiFillStar className="" />
            <span className="">4.95</span>
          </div>
        </div>
        <p className="text-gray-500">376 kilometers away</p>
        <p className="text-gray-500">sep 23-28</p>
        <p className="mt-1">
          <span className="font-semibold">$243</span> night
        </p>
      </div>
    </div>
  );
};

export default PlaceBox;
