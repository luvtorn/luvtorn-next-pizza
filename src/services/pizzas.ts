import { Product } from "@prisma/client";
import { axiosInstance } from "./instance";

export const getPizzas = async (): Promise<Product[]> => {
  return (await axiosInstance.get("pizzas")).data;
};
