import { Ingredient } from "@prisma/client";
import { axiosInstance } from "./instance";

export const getIngredients = async (): Promise<Ingredient[]> => {
  const response = await axiosInstance.get<Ingredient[]>("/ingredients");
  return response.data;
};
