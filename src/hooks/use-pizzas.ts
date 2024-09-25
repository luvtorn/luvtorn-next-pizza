'use client'

import { Api } from '@/services/api-client'
import { Ingredient, Product, ProductItem } from '@prisma/client'
import React from 'react'

export const usePizzas = () => {
	const [pizzas, setPizzas] = React.useState<
		| (Product & { items: ProductItem[]; ingredients: Ingredient[] })[]
		| undefined
	>(undefined)
	const [breakfast, setBreakfast] = React.useState<
		| (Product & { items: ProductItem[]; ingredients: Ingredient[] })[]
		| undefined
	>(undefined)
	const [snacks, setSnacks] = React.useState<
		| (Product & { items: ProductItem[]; ingredients: Ingredient[] })[]
		| undefined
	>(undefined)
	const [cocktails, setCocktails] = React.useState<
		| (Product & { items: ProductItem[]; ingredients: Ingredient[] })[]
		| undefined
	>(undefined)
	const [drinks, setDrinks] = React.useState<
		| (Product & { items: ProductItem[]; ingredients: Ingredient[] })[]
		| undefined
	>(undefined)

	const [loading, setLoading] = React.useState(false)

	const fetchData = async (type: string) => {
		try {
			setLoading(true)
			switch (type) {
				case 'pizzas':
					if (!pizzas) {
						const fetchedPizzas = await Api.getPizzas()
						setPizzas(fetchedPizzas)
					}
					break
				case 'breakfast':
					if (!breakfast) {
						const fetchedBreakfast = await Api.getBreakfast()
						setBreakfast(fetchedBreakfast)
					}
					break
				case 'snacks':
					if (!snacks) {
						const fetchedSnacks = await Api.getSnacks()
						setSnacks(fetchedSnacks)
					}
					break
				case 'cocktails':
					if (!cocktails) {
						const fetchedCocktails = await Api.getCocktails()
						setCocktails(fetchedCocktails)
					}
					break
				case 'drinks':
					if (!drinks) {
						const fetchedDrinks = await Api.getDrinks()
						setDrinks(fetchedDrinks)
					}
					break
				default:
					break
			}
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	return {
		pizzas,
		breakfast,
		snacks,
		cocktails,
		drinks,
		loading,
		fetchData, // Return fetch function to be called on scroll
	}
}
