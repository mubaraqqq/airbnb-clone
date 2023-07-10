import "@/styles/FilterItem.scss";
import trending from "@/assets/trending.jpg";
import Image from "next/image";
import { FilterItem } from "@/types";

const FilterItem = ({ icon, label }: FilterItem) => {
  return (
    <div className="filter-item flex flex-col items-center gap-2">
      <Image src={icon} alt={label} loading="lazy" width="24" height="24" />
      <p className="text-xs text-[#717171] font-semibold">{label}</p>
    </div>
  );
};

export default FilterItem;
