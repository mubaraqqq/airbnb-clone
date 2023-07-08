import FilterContainer from "@/components/FilterContainer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <FilterContainer />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
