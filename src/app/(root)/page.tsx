"use client";

import Categories from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import Filtration from "@/components/shared/filtration";
import { ProductsGroupList } from "@/components/shared/product-group-list";
import { SortPopup } from "@/components/shared/sort-popup";
import { Title } from "@/components/shared/title";
import { usePizzas } from "@/hooks";

export default function Home() {
  const { loading, pizzas, breakfast, cocktails, drinks, snacks } = usePizzas();

  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <div className="sticky top-0 bg-white py-5 shadow-md shadow-black/5">
        <Container className="flex items-center justify-between ">
          <Categories />
          <SortPopup />
        </Container>
      </div>

      <Container className="mt-10 mb-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filtration />
          </div>
          <div className="flex flex-1 flex-col gap-20">
            <ProductsGroupList
              categoryId={1}
              title="Pizzas"
              items={pizzas}
              loading={loading}
            />
            <ProductsGroupList
              categoryId={2}
              title="Breakfast"
              items={breakfast}
              loading={loading}
            />
            <ProductsGroupList
              categoryId={2}
              title="Cocktails"
              items={cocktails}
              loading={loading}
            />
            <ProductsGroupList
              categoryId={2}
              title="Snacks"
              items={snacks}
              loading={loading}
            />
            <ProductsGroupList
              categoryId={2}
              title="Drinks"
              items={drinks}
              loading={loading}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
