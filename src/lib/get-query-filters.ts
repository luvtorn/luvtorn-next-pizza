export const getQueryFilters = (filters: {
	priceFrom: number
	priceTo: number
	pizzaType: number
	selectedIngredients: number[]
}) => {
	const params = new URLSearchParams()

	if (filters.priceFrom) params.append('priceFrom', String(filters.priceFrom))
	if (filters.priceTo) params.append('priceTo', String(filters.priceTo))

	if (filters.pizzaType) params.append('pizzaType', String(filters.pizzaType))

	if (filters.selectedIngredients.length > 0) {
		params.append('ingredients', filters.selectedIngredients.join(','))
	}

	return params.toString()
}
