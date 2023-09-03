import CategoryList from "@/components/CategoryList";
import PlaceBox from "@/components/PlaceBox";

export default function Home() {
  return (
    <main>
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <PlaceBox />
        <PlaceBox />
        <PlaceBox />
        <PlaceBox />
        <PlaceBox />
      </div>
    </main>
  );
}
