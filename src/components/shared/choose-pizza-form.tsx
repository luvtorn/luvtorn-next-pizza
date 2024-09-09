import { Ingredient, Product, ProductItem } from "@prisma/client";
import React from "react";
import IngredientItem from "./ingredient-item";

import { PizzaImage } from "./pizza-iamge";

import { GroupVariants } from "./group-variants";
import { pizzaSizes, pizzaTypes } from "@/constants/pizza";
import { getPizzaDetails } from "@/lib/get-pizza-details";
import { Button } from "../ui/button";
import { getPizzaPrice } from "@/lib/get-pizza-price";

interface Props {
  ingredients: Ingredient[];
  product: Product & { ingredients: Ingredient[]; items: ProductItem[] };
}

const ChoosePizzaForm: React.FC<Props> = ({ ingredients, product }) => {
  const [selectedType, setSelectedType] = React.useState<0 | 1>(0);
  const [selectedSize, setSelectedSize] = React.useState<20 | 30 | 40>(20);
  const [selectedIngredients, setSelectedIngredients] = React.useState<
    number[]
  >([]);

  const { detailsText } = getPizzaDetails(selectedSize, selectedType);

  const handleClick = (id: number) => {
    setSelectedIngredients((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
    console.log(selectedIngredients);
  };

  return (
    <div className="flex flex-1 bg-[#F4F1EE]">
      <PizzaImage imageUrl={product.imageUrl} size={selectedSize} />

      <div className="flex flex-col bg-[#f7f6f5] w-[40%] p-5">
        <p className="text-2xl font-bold pb-2">{product.name}</p>
        <p className="text-sm">{detailsText}</p>

        <div className="flex flex-col gap-3 mt-4">
          <GroupVariants
            items={pizzaSizes}
            onClick={setSelectedSize}
            value={selectedSize}
          />
          <GroupVariants
            items={pizzaTypes}
            onClick={setSelectedType}
            value={selectedType}
          />
        </div>

        <div className="mt-5">
          <p className="w-full text-xl font-bold mb-3">Also you can add</p>
          <div className="flex flex-row gap-2 items-center justify-center">
            {ingredients?.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                ingredient={ingredient}
                isChoosen={selectedIngredients.includes(ingredient.id)}
                onClick={() => handleClick(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button className="mt-6" variant={"default"} size={"lg"}>
          Add to cart for{" "}
          {getPizzaPrice(
            product.items[0].price,
            selectedSize,
            selectedIngredients,
            ingredients
          )}{" "}
          PLN
        </Button>
      </div>
    </div>
  );
};

export default ChoosePizzaForm;
