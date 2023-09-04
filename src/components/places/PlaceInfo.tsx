import React from "react";
import Avatar from "../Avatar";
import PlaceCategory from "./PlaceCategory";
import dynamic from "next/dynamic";

import { categories } from "@/components/CategoryList";

type Props = {};

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

function PlaceInfo({}: Props) {
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex flex-row items-centergap-2">
          <h3 className="mr-2">Hosted by Ahmed Karam</h3>
          <Avatar />
        </div>
        <div className="flex flex-row items-center gap-4 font-lighttext-neutral-500">
          <div>3 guests</div>
          <div>2 rooms</div>
          <div>2 bathrooms</div>
        </div>
      </div>
      <hr />

      <PlaceCategory
        icon={categories[0].icon}
        label={categories[0]?.label}
        description={categories[0]?.description}
      />

      <hr />
      <div
        className="
      text-lg font-light text-neutral-500"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur
        explicabo nulla fugit
      </div>
      <hr />
      <div className="h-full">
        <Map center={[30, 31]} />
      </div>
    </div>
  );
}

export default PlaceInfo;
