"use client";

import React, { useEffect, useRef } from "react";
import { Title } from "./title";
import { ProductCard } from "./product-card";
import { useIntersection } from "react-use";
import { useDispatch } from "react-redux";
import { setActiveCategory } from "@/redux/categorySlice";
import { Product } from "@prisma/client";
import { Api } from "@/services/api-client";

interface Props {
  title: string;
  items: any[];
  className?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  className,
}) => {
  const [pizzas, setPizzas] = React.useState<Product[]>([]);

  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, { threshold: 0.4 });

  const dispatch = useDispatch();

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      dispatch(setActiveCategory(title));
    }
  }, [intersection?.isIntersecting, categoryId, title]);

  useEffect(() => {
    Api.getPizzas().then((res) => {
      setPizzas(res);
    });
  }, []);

  return (
    <div className={className} id={title.toLowerCase()} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className="grid grid-cols-3 gap-[50px]">
        {pizzas.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={390}
          />
        ))}
      </div>
    </div>
  );
};
