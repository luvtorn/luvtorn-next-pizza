export const mapPizzaSize = {
	20: 'Small',
	30: 'Medium',
	40: 'Large',
}

export const mapPizzaType = {
	0: 'Traditional',
	1: 'Thin',
}

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
	name,
	value: Number(value),
}))

export const pizzaTypes = Object.entries(mapPizzaType).map(([value, name]) => ({
	name,
	value: Number(value),
}))

export type PizzaSize = keyof typeof mapPizzaSize
export type PizzaType = keyof typeof mapPizzaType
