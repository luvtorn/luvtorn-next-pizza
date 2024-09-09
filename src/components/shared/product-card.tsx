"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { CountButton } from "./count-button";
import { Ingredient } from "@prisma/client";
import Link from "next/link";

interface Props {
  name: string;
  price: number;
  count?: number;
  imageUrl?: string;
  className?: string;
  ingredients: Ingredient[];
  id: number;
  onClick?: () => void;
}

export const ProductCard: React.FC<Props> = ({
  name,
  price,
  imageUrl,
  className,
  ingredients,
  onClick,
  id,
}) => {
  const [count, setCount] = useState(0);

  return (
    <div className={cn(className)} onClick={onClick}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt="Logo" />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          {ingredients.map((ingredient) => (
            <span key={ingredient.id} className="mr-1">
              {ingredient.name + ","}
            </span>
          ))}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            from <b>{price} PLN</b>
          </span>

          {count ? (
            <CountButton value={count} size="lg" setValue={setCount} />
          ) : (
            <Button variant="secondary" onClick={() => setCount(count + 1)}>
              <Plus className="w-4 h-4 mr-1" />
              Add
            </Button>
          )}
        </div>
      </Link>
    </div>
  );
};
