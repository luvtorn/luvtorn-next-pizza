import { Ingredient } from "@prisma/client";
import { axiosInstance } from "./instance";

export const getIngredients = async (): Promise<Ingredient[]> => {
  try {
    const response = await axiosInstance.get<Ingredient[]>("/api/ingredients");
    return response.data;
  } catch (error) {
    console.error("Error fetching ingredients from the API:", error);
    throw new Error("Failed to fetch ingredients");
  }
};
