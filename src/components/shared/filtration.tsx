import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { RangeSlider } from "../ui/range-slider";
import CheckboxFiltersGroup from "./checkbox-filters-group";
import { Button } from "../ui/button";

const Filtration = () => {
  return (
    <div>
      <Title text="Filtration" size="sm" className="font-bold mb-7" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="New products" value="1" />
        <FilterCheckbox text="New products" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from to: </p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30000}
            defaultValue={0}
          />
          <Input type="number" min={10} max={1000} placeholder="1000" />
        </div>
        <RangeSlider min={10} max={1000} step={5} />
      </div>

      <CheckboxFiltersGroup className="mt-7" />

      <div className="mt-7">
        <p className="font-bold mb-3">Type of dough</p>

        <div className="flex flex-col gap-3">
          <FilterCheckbox text="Traditional" value="1" />
          <FilterCheckbox text="Thin" value="2" />
        </div>
      </div>

      <Button className="w-full mt-8 text-base">Apply</Button>
    </div>
  );
};

export default Filtration;
