"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { cn } from "@/lib/utils";
import { Ingredient, Product, ProductItem } from "@prisma/client";
import ChoosePizzaForm from "./choose-pizza-form";

interface Props {
  product: Product & { ingredients: Ingredient[]; items: ProductItem[] };
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogTitle></DialogTitle>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <ChoosePizzaForm ingredients={product.ingredients} product={product} />
      </DialogContent>
    </Dialog>
  );
};
