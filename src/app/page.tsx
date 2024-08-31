import Categories from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import Filtration from "@/components/shared/filtration";
import Header from "@/components/shared/header";
import Pagination from "@/components/shared/pagination";
import { ProductsGroupList } from "@/components/shared/product-group-list";

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
          <div className="flex flex-1 flex-col gap-20">
            <ProductsGroupList
              categoryId={1}
              title="Pizzas"
              items={[1, 2, 3, 4, 5, 6]}
            />
            <ProductsGroupList
              categoryId={2}
              title="Kombos"
              items={[1, 2, 3, 4, 5, 6]}
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-16 mb-5">
          <Pagination pageCount={10} />
        </div>
      </Container>
    </>
  );
}
