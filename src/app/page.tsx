"use client";
import PlaceBox from "@/components/PlaceBox";

export default function Home() {
  return (
    <main>
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <PlaceBox imageSrc="/images/1.webp" />
        <PlaceBox imageSrc="/images/2.webp" />
        <PlaceBox imageSrc="/images/3.webp" />
        <PlaceBox imageSrc="/images/4.webp" />
        <PlaceBox imageSrc="/images/5.webp" />
        <PlaceBox imageSrc="/images/6.webp" />
        <PlaceBox imageSrc="/images/2.webp" />
        <PlaceBox imageSrc="/images/4.webp" />
        <PlaceBox imageSrc="/images/3.webp" />
        <PlaceBox imageSrc="/images/2.webp" />
        <PlaceBox imageSrc="/images/1.webp" />
      </div>
    </main>
  );
}
