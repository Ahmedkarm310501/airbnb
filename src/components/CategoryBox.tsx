import React from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  label: string;
  selected?: boolean;
};

const CategoryBox = ({ icon: Icon, label, selected }: Props) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center text-gray-500 hover:text-black cursor-pointer border-b-2 border-b-transparent hover:border-b-2 hover:border-b-gray-500 transition pb-3 duration-300 min-w-[50px]">
      <Icon className="text-3xl" />
      <span className="text-center text-xs">{label}</span>
    </div>
  );
};

export default CategoryBox;
