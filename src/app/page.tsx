import Categories from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import Filtration from "@/components/shared/filtration";
import Header from "@/components/shared/header";
import { ProductsGroupList } from "@/components/shared/product-group-list";
import { ProductSkeleton } from "@/components/shared/product-skeleton";
import { SortPopup } from "@/components/shared/sort-popup";
import { Title } from "@/components/shared/title";

export default function Home() {
  return (
    <>
      <Header />

      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <div className="sticky top-0 bg-white py-5 shadow-md shadow-black/5">
        <Container className="flex items-center justify-between ">
          <Categories />
          <SortPopup />
        </Container>
      </div>

      <Container className="mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filtration />
          </div>
          <div className="flex-1">
            <ProductsGroupList
              title="Pizzas"
              items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
