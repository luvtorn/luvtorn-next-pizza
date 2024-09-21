"use client";

import { cn } from "@/lib/utils";
import { Ingredient } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface Props {
  ingredient: Ingredient;
  isChoosen: boolean;
  onClick: () => void;
}

const IngredientItem: React.FC<Props> = ({ ingredient, isChoosen, onClick }) => {
  return (
    <div
      className={cn(
        "flex flex-col h-[220px] flex-shrink bg-white p-5 justify-center items-center rounded-lg border-[3px] border-transparent",
        {
          " border-primary": isChoosen,
        }
      )}
      onClick={onClick}
    >
      <Image
        src={ingredient.imageUrl}
        alt={ingredient.name}
        height={100}
        width={100}
      />

      <p className="text-center text-wrap">{ingredient.name}</p>
      <p className="text-center mt-5 font-bold">{ingredient.price} PLN</p>
    </div>
  );
};

export default IngredientItem;
