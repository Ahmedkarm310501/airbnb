"use client";
import PlaceHeader from "@/components/places/PlaceHeader";
import PlaceInfo from "@/components/places/PlaceInfo";
import PlaceReservation from "@/components/places/PlaceReservation";
import React, { useState } from "react";
import { Range } from "react-date-range";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

type Props = {};

const Page = (props: Props) => {
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [isLoading, setIsLoading] = useState(false);

  const disabledDates = [
    new Date("2021-09-01"),
    new Date("2021-09-02"),
    new Date("2021-09-03"),
    new Date("2021-09-04"),
    new Date("2021-09-05"),
  ];

  const onCreateReservation = () => {
    console.log("onCreateReservation");
  };

  return (
    <div className="my-6">
      <PlaceHeader />
      <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
        <PlaceInfo />
        <div className="order-first mb-10 md:order-last md:col-span-3">
          <PlaceReservation
            price={22}
            totalPrice={34}
            onChangeDate={(value) => setDateRange(value)}
            dateRange={dateRange}
            onSubmit={onCreateReservation}
            disabled={isLoading}
            disabledDates={disabledDates}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
