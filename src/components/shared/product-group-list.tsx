"use client";

import React, { useEffect, useRef } from "react";
import { Title } from "./title";
import { ProductCard } from "./product-card";
import { useIntersection } from "react-use";
import { useDispatch } from "react-redux";
import { setActiveCategory } from "@/redux/categorySlice";
import { Ingredient, Product, ProductItem } from "@prisma/client";
import { ProductSkeleton } from "./product-skeleton";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  items: (Product & { items: ProductItem[]; ingredients: Ingredient[] })[];
  className?: string;
  categoryId: number;
  loading?: boolean;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  className,
  loading,
}) => {
  const router = useRouter();
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, { threshold: 0.4 });
  const dispatch = useDispatch();

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      dispatch(setActiveCategory(title));
    }
  }, [intersection?.isIntersecting, categoryId, title]);

  if (loading) {
    return (
      <div className="">
        <Title text={title} size="lg" className="font-extrabold mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {[...Array(3)].fill(0).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={className} id={title.toLowerCase()} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {items?.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.items[0].price}
            ingredients={item.ingredients}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};
