import { pizzaTypes } from "@/constants/pizza";
import React from "react";

export const getPizzaDetails = (size: number, type: 0 | 1) => {
  const calcWeight = (size: number) => {
    const weight: Record<number, number> = {
      20: 280,
      30: 450,
      40: 560,
    };

    if (Number(type) === 1) {
      const result = weight[size] - 70;
      console.log(result);

      return result;
    } else {
      return weight[size];
    }
  };

  const detailsText = `${size} cm, ${pizzaTypes[type].name}, ${calcWeight(
    size
  )} g`;

  return {
    detailsText,
    calcWeight,
  };
};
