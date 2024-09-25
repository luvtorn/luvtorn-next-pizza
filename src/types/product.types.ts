import { Ingredient, Product, ProductItem } from '@prisma/client'

export interface ProductWithDetails extends Product {
	items: ProductItem[]
	ingredients: Ingredient[]
}

export interface GroupedProducts {
	category_1: ProductWithDetails[]
	category_2: ProductWithDetails[]
	category_3: ProductWithDetails[]
	category_4: ProductWithDetails[]
	category_5: ProductWithDetails[]
}

export interface ProductFilters {
	priceFrom: number
	priceTo: number
	selectedIngredients: number[]
}
