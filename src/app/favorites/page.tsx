import Heading from "@/components/Heading";
import PlaceBox from "@/components/PlaceBox";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="mt-3">
      <Heading title="Favorites" />
      <p className="text-sm text-gray-500 font-medium">
        List of places you marked as favorite
      </p>
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <PlaceBox imageSrc="/images/1.webp" />
        <PlaceBox imageSrc="/images/2.webp" />
        <PlaceBox imageSrc="/images/3.webp" />
        <PlaceBox imageSrc="/images/4.webp" />
        <PlaceBox imageSrc="/images/5.webp" />
      </div>
    </div>
  );
};

export default page;
