"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { FilterCheckbox } from "./filter-checkbox";
import { Button } from "../ui/button";

interface Props {
  className?: string;
}

const defaultItems = [
  {
    text: "Cheese Sauce",
    value: "1",
  },
  {
    text: "Mozzarella",
    value: "2",
  },
  {
    text: "Garlic",
    value: "3",
  },
  {
    text: "Pickles",
    value: "4",
  },
];

const items = [
  {
    text: "Cheese Sauce",
    value: "1",
  },
  {
    text: "Mozzarella",
    value: "2",
  },
  {
    text: "Garlic",
    value: "3",
  },
  {
    text: "Pickles",
    value: "4",
  },
  {
    text: "Red Onion",
    value: "5",
  },
  {
    text: "Tomatoes",
    value: "6",
  },
];

const CheckboxFiltersGroup: React.FC<Props> = ({ className }) => {
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className={clsx("mt-7", className)}>
      <p className="font-bold text-lg mb-3">Ingredients</p>

      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={"Search..."}
            className="bg-gray-50 border-none"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}

      <div className="flex flex-col gap-4 border-b-neutral-100">
        {(showAll ? items : defaultItems)
          .filter((item) =>
            item.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <FilterCheckbox
              text={item.text}
              value={item.value}
              key={item.value}
            />
          ))}
      </div>

      <div className={showAll ? "mt-4" : "mt-4"}>
        <Button onClick={() => setShowAll(!showAll)} variant={"default"}>
          {showAll ? "Hide" : "+ Show all"}
        </Button>
      </div>
    </div>
  );
};

export default CheckboxFiltersGroup;
