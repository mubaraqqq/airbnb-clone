import { filterArrayData } from "@/app/data/filterData";
import FilterItem from "./FilterItem";
import "@/styles/FilterContainer.scss";

const FilterContainer = () => {
  return (
    <div className="filter-container">
      <div className="flex gap-14">
        {filterArrayData.map((filter) => (
          <FilterItem key={filter.label} {...filter} />
        ))}
      </div>
    </div>
  );
};

export default FilterContainer;
