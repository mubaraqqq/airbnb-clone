"use client";

import { mockListingArray } from "@/data/mockListingData";
import { ListingItem } from "@/types";
import { ReactNode, createContext, useState } from "react";

type SectionProviderValueType = {
  currentSectionIndex: number;
  updateSection: (index: number) => void;
  listingData: ListingItem[];
  toggleListingFavourite: (listingId: string) => void;
};

export const SectionContext = createContext<SectionProviderValueType>({
  currentSectionIndex: 0,
  updateSection: (_index) => {},
  listingData: mockListingArray,
  toggleListingFavourite: (_listingId: string) => {},
});

const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [listingData, setListingData] = useState(mockListingArray);

  function updateSection(index: number) {
    setCurrentSectionIndex(index);
  }

  function toggleListingFavourite(listingId: string) {
    const listingIndex = listingData.findIndex(
      (listing) => listing.id === listingId
    );
    const listing = listingData[listingIndex];
    console.log(listingIndex, listing);

    let listingFavourite = listing.favourite;
    console.log(listingFavourite);

    listingFavourite = !listingFavourite;
    listing.favourite = listingFavourite;
    let newListingData = [...listingData];
    newListingData[listingIndex] = listing;
    setListingData(newListingData);

    console.log({ listing, newListingData });
  }

  return (
    <SectionContext.Provider
      value={{
        currentSectionIndex,
        updateSection,
        listingData,
        toggleListingFavourite,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export default SectionProvider;
