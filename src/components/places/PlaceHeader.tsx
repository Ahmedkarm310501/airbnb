import React from "react";
import Heading from "../Heading";
import Image from "next/image";

type Props = {};

const PlaceHeader = (props: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <Heading
        title={"Waterfront with extraordinar"}
        subtitle={`Entire apartment in Rio de Janeiro, Brazil `}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:min-h-[50vh] w-full mb-2 overflow-hidden  rounded-xl relative">
        <Image
          src="/images/place1.1.webp"
          alt=""
          className="w-full h-full object-cover col-span-2 row-span-2"
          width={500}
          height={500}
        />
        <Image
          src="/images/place1.2.webp"
          alt=""
          className="w-full h-full object-cover"
          width={500}
          height={500}
        />
        <Image
          src="/images/place1.3.webp"
          alt=""
          className="w-full h-full object-cover"
          width={500}
          height={500}
        />
        <Image
          src="/images/place1.4.webp"
          alt=""
          className="w-full h-full object-cover"
          width={500}
          height={500}
        />
        <Image
          src="/images/place1.5.webp"
          alt=""
          className="w-full h-full object-cover"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default PlaceHeader;
