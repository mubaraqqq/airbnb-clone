"use client";

import ListingCard from "@/components/ListingCard";
import { useContext } from "react";
import { SectionContext } from "@/app/SectionProvider";

export default function ListingCardsContainer() {
  const { currentSectionIndex, listingData } = useContext(SectionContext);

  const isSectionEven = currentSectionIndex % 2 === 0;

  return (
    <main className="flex flex-wrap justify-evenly px-[24px] sm:px-[40px] gap-y-9 mt-[30px]">
      {listingData
        .filter((_, index) =>
          isSectionEven ? index % 2 === 0 : index % 2 === 1
        )
        .map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
    </main>
  );
}
