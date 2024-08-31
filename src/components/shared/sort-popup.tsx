"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Props {
  className?: string;
}

const items: ("Popularity" | "Low price first" | "High price first")[] = [
  "Popularity",
  "Low price first",
  "High price first",
];

export const SortPopup: React.FC<Props> = ({ className }) => {
  const [activeItem, setActiveItem] = useState<
    "Popularity" | "Low price first" | "High price first"
  >("Popularity");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (
    item: "Popularity" | "Low price first" | "High price first"
  ) => {
    setActiveItem(item);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer",
            className
          )}
        >
          <ArrowUpDown className="w-4 h-4" />
          <b>Sort by: </b>
          <b className="text-primary">{activeItem}</b>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[240px]">
        <ul>
          {items.map((item, i) => (
            <li
              key={i}
              className={cn(
                "hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md",
                {
                  "bg-secondary text-primary": activeItem === item,
                }
              )}
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
