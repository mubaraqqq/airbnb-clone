"use client";

import { ReactNode, createContext, useState } from "react";

type SectionProviderValueType = {
  currentSectionIndex: number;
  updateSection: (index: number) => void;
};

export const SectionContext = createContext<SectionProviderValueType>({
  currentSectionIndex: 0,
  updateSection: (_index) => {},
});

const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  function updateSection(index: number) {
    setCurrentSectionIndex(index);
  }

  return (
    <SectionContext.Provider value={{ currentSectionIndex, updateSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export default SectionProvider;
