"use client";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { filterArrayData } from "@/app/data/filterData";
import FilterItem from "./FilterItem";
import "@/styles/FilterContainer.scss";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import prevArrow from "@/assets/prev-arrow.svg";
import nextArrow from "@/assets/next-arrow.svg";
import Image from "next/image";
import { Tune } from "@mui/icons-material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}

const FilterContainer = () => {
  const filterRowRef = useRef<HTMLDivElement>(null);
  const [lastFilterVisible, setLastFilterVisible] = useState(false);
  const [firstFilterVisible, setFirstFilterVisible] = useState(true);

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
  }, []);

  return (
    <div className="filter-container relative">
      <button
        onClick={scrollNext}
        className={`scroll absolute hidden sm:${
          lastFilterVisible ? "hidden" : "flex"
        } items-center justify-center top-[25%] right-[13%]`}
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
      <div className="filter-row flex gap-14" ref={filterRowRef}>
        {filterArrayData.map((filter) => (
          <FilterItem key={filter.label} {...filter} />
        ))}
      </div>
    </div>
  );
};

export default FilterContainer;
