import { Ingredient } from "@prisma/client";
import { ingredients } from "../../prisma/constants";

export const getPizzaPrice = (
  startPrice: number,
  size: number,
  choosenIngredients: number[],
  ingredients: Ingredient[]
) => {
  const price = calculateBySize(size, startPrice);

  const ingredientsPrice = ingredients
    .filter((ingredient) => choosenIngredients?.includes(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return price + ingredientsPrice;
};

const calculateBySize = (size: number, startPrice: number) => {
  if (size === 20) {
    return startPrice;
  } else if (size === 30) {
    return startPrice + 10;
  } else if (size === 40) {
    return startPrice + 15;
  }

  return startPrice;
};
