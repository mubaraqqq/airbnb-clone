"use client";

import { filterArrayData } from "@/data/filterData";
import FilterItem from "./FilterItem";
import "@/styles/FilterContainer.scss";
import { useContext, useEffect, useRef, useState } from "react";
import prevArrow from "@/assets/prev-arrow.svg";
import nextArrow from "@/assets/next-arrow.svg";
import Image from "next/image";
import { Tune } from "@mui/icons-material";
import { SectionContext } from "@/app/SectionProvider";

const FilterContainer = () => {
  const filterRowRef = useRef<HTMLDivElement>(null);
  const [lastFilterVisible, setLastFilterVisible] = useState(false);
  const [firstFilterVisible, setFirstFilterVisible] = useState(true);

  const { updateSection, currentSectionIndex } = useContext(SectionContext);

  function scrollNext() {
    if (!filterRowRef.current) return;
    filterRowRef.current.scrollLeft +=
      0.9 * filterRowRef.current.getBoundingClientRect().width;
  }

  function scrollPrev() {
    if (!filterRowRef.current) return;
    filterRowRef.current.scrollLeft -=
      0.9 * filterRowRef.current.getBoundingClientRect().width;
  }

  useEffect(() => {
    if (!filterRowRef.current) return;
    // Get the target element you want to check visibility for
    const targetElement = filterRowRef.current.lastElementChild;

    if (!targetElement) return;

    // Create a new Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLastFilterVisible(true);
          // Perform actions when the element is in view
        } else {
          setLastFilterVisible(false);
          // Perform actions when the element is out of view
        }
      });
    });

    // Start observing the target element
    observer.observe(targetElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!filterRowRef.current) return;
    // Get the target element you want to check visibility for
    const targetElement = filterRowRef.current.firstElementChild;

    if (!targetElement) return;

    // Create a new Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFirstFilterVisible(true);
          // Perform actions when the element is in view
        } else {
          setFirstFilterVisible(false);
          // Perform actions when the element is out of view
        }
      });
    });

    // Start observing the target element
    observer.observe(targetElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="filter-container relative">
      <button
        onClick={scrollNext}
        className={`scroll absolute hidden sm:${
          lastFilterVisible ? "hidden" : "flex"
        } items-center justify-center top-[25%] lg:right-[14%] md:right-[19%]`}
      >
        <Image src={nextArrow} alt="next" />
      </button>
      <button
        onClick={scrollPrev}
        className={`scroll absolute hidden sm:${
          firstFilterVisible ? "hidden" : "flex"
        } items-center justify-center top-[25%] left-[2%]`}
      >
        <Image src={prevArrow} alt="previous" />
      </button>
      <button className="filter-button absolute hidden sm:flex top-[17%] sm:right-[40px] items-center gap-1 justify-evenly py-3 px-6 rounded-[12px]">
        <Tune sx={{ fontSize: "14px" }} />
        <p className="text-xs select-none">Filter</p>
      </button>
      <div
        className="filter-row flex gap-14 md:mr-[21%] ml-[3%] lg:mr-[15%]"
        ref={filterRowRef}
      >
        {filterArrayData.map((filter, index) => (
          <button
            key={filter.label}
            className={`filter-item-button ${
              currentSectionIndex === index ? "active" : ""
            }`}
            onClick={() => updateSection(index)}
          >
            <FilterItem {...filter} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterContainer;
