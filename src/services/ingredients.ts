import { Ingredient } from "@prisma/client";
import { axiosInstance } from "./instance";

export const getIngredients = async (): Promise<Ingredient[]> => {
  return (await axiosInstance.get<Ingredient[]>("ingredients")).data;
};
