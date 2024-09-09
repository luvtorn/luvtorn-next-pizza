import { Ingredient, Product, ProductItem } from "@prisma/client";
import { axiosInstance } from "./instance";

export const getPizzas = async (): Promise<
  (Product & { items: ProductItem[]; ingredients: Ingredient[] })[]
> => {
  return (await axiosInstance.get("pizzas")).data;
};

export const getBreakfast = async (): Promise<
  (Product & { items: ProductItem[]; ingredients: Ingredient[] })[]
> => {
  return (await axiosInstance.get("breakfast")).data;
};

export const getSnacks = async (): Promise<
  (Product & { items: ProductItem[]; ingredients: Ingredient[] })[]
> => {
  return (await axiosInstance.get("snacks")).data;
};

export const getCocktails = async (): Promise<
  (Product & { items: ProductItem[]; ingredients: Ingredient[] })[]
> => {
  return (await axiosInstance.get("cocktails")).data;
};

export const getDrinks = async (): Promise<
  (Product & { items: ProductItem[]; ingredients: Ingredient[] })[]
> => {
  return (await axiosInstance.get("drinks")).data;
};
