"use client";
import React, { useRef } from "react";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CategoryBox from "./CategoryBox";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

type Props = {};

const CategoryList = (props: Props) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollLeft -= 100; // Adjust the scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollLeft += 100; // Adjust the scroll amount as needed
    }
  };

  return (
    <div className="flex items-center">
      <MdKeyboardArrowLeft
        className=" cursor-pointer flex-shrink-0 border border-black rounded-full"
        size={30}
        onClick={scrollLeft}
      />
      <div
        className="flex gap-2 p-3 justify-between mt-4 overflow-x-scroll no-scrollbar drop-shadow-2xl flex-grow scroll-smooth"
        ref={listRef}
      >
        {categories.map((category) => {
          return (
            <CategoryBox
              key={category.label}
              label={category.label}
              icon={category.icon}
            />
          );
        })}
      </div>
      <MdKeyboardArrowRight
        className="cursor-pointer flex-shrink-0 border border-black rounded-full"
        size={30}
        onClick={scrollRight}
      />
    </div>
  );
};

export default CategoryList;
