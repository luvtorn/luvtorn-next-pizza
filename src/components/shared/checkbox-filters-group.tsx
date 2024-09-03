"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { FilterCheckbox } from "./filter-checkbox";
import { Button } from "../ui/button";
import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";

interface Props {
  className?: string;
}

const CheckboxFiltersGroup: React.FC<Props> = ({ className }) => {
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState<Ingredient[]>([]);

  useEffect(() => {
    Api.getIngredients().then((res) => {
      setItems(res);
    });
  }, []);

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
            <FilterCheckbox text={item.name} value={item.name} key={item.id} />
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
