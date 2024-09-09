"use client";

import { Api } from "@/services/api-client";
import { Ingredient, Product, ProductItem } from "@prisma/client";
import React from "react";

export const usePizzas = () => {
  const [pizzas, setPizzas] = React.useState<
    | (Product & { items: ProductItem[]; ingredients: Ingredient[] })[]
    | undefined
  >(undefined);
  const [breakfast, setBreakfast] = React.useState<
    | (Product & { items: ProductItem[]; ingredients: Ingredient[] })[]
    | undefined
  >(undefined);
  const [snacks, setSnacks] = React.useState<
    | (Product & { items: ProductItem[]; ingredients: Ingredient[] })[]
    | undefined
  >(undefined);
  const [cocktails, setCocktails] = React.useState<
    | (Product & { items: ProductItem[]; ingredients: Ingredient[] })[]
    | undefined
  >(undefined);
  const [drinks, setDrinks] = React.useState<
    | (Product & { items: ProductItem[]; ingredients: Ingredient[] })[]
    | undefined
  >(undefined);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchPizzas() {
      try {
        setLoading(true);
        const pizzas = await Api.getPizzas();
        setPizzas(pizzas);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    async function fetchBreakfast() {
      try {
        setLoading(true);
        const breakfast = await Api.getBreakfast();
        setBreakfast(breakfast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    async function fetchSnacks() {
      try {
        setLoading(true);
        const snacks = await Api.getSnacks();
        setSnacks(snacks);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    async function fetchCocktails() {
      try {
        setLoading(true);
        const cocktails = await Api.getCocktails();
        setCocktails(cocktails);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    async function fetchDrinks() {
      try {
        setLoading(true);
        const drinks = await Api.getDrinks();
        setDrinks(drinks);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPizzas();
    fetchBreakfast();
    fetchCocktails();
    fetchSnacks();
    fetchDrinks();
  }, []);

  return {
    pizzas,
    breakfast,
    snacks,
    cocktails,
    drinks,
    loading,
  };
};
