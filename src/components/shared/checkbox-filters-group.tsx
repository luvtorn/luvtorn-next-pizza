"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { FilterCheckbox } from "./filter-checkbox";
import { Button } from "../ui/button";
import { Ingredient } from "@prisma/client";
import { Skeleton } from "../ui/skeleton";

interface Props {
  className?: string;
  items: Ingredient[];
  loading?: boolean;
}

const CheckboxFiltersGroup: React.FC<Props> = ({
  className,
  items,
  loading,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");

  if (loading) {
    return (
      <div>
        <p className="font-bold text-lg mb-3">Ingredients</p>
        {...Array(5)
          .fill(0)
          .map((_, i) => <Skeleton key={i} className="h-6 mb-4 rounded-md" />)}
      </div>
    );
  }

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
        {(showAll ? items : items.slice(0, 5))
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <FilterCheckbox
              text={item.name}
              value={item.name}
              key={item.id}
              onCheckedChange={() => console.log(item.id)}
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
