"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";

const cats = ["All", "Meat", "Spicy", "Sweet", "Vegetarian", "With Chicken"];

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="inline-flex items-center bg-gray-50 rounded-2xl p-1 gap-2">
      {cats.map((cat, i) => (
        <Link
          key={cat}
          href={""}
          onClick={() => setActiveIndex(i)}
          className={cn(
            "flex items-center font-bold h-11 rounded-xl px-3",
            activeIndex === i &&
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
