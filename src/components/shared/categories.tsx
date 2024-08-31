"use client";

import { cn } from "@/lib/utils";
import { setActiveCategory } from "@/redux/categorySlice";

import Link from "next/link";
import React from "react";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

const cats = ["Pizzas", "Kombos", "Sweet", "Vegetarian", "With Chicken"];

const Categories = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(
    (state: RootState) => state.category.activeCategory
  );

  const handleClick = (cat: string) => {
    dispatch(setActiveCategory(cat));
  };

  return (
    <div className="inline-flex items-center bg-gray-50 rounded-2xl p-1 gap-2">
      {cats.map((cat) => (
        <Link
          key={cat}
          href={`/#${cat.toLowerCase()}`}
          onClick={() => handleClick(cat)}
          className={cn(
            "flex items-center font-bold h-11 rounded-xl px-3",
            activeCategory === cat &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
        >
          {cat}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
