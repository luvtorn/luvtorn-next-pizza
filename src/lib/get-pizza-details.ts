import { pizzaTypes } from '@/constants/pizza'

export const getPizzaDetails = (size: number, type: number) => {
	const calcWeight = (size: number) => {
		const weight: Record<number, number> = {
			20: 280,
			30: 450,
			40: 560,
		}

		if (Number(type) === 1) {
			const result = weight[size] - 70

			return result
		} else {
			return weight[size]
		}
	}

	const detailsText = `${size} cm, ${pizzaTypes[type].name}, ${calcWeight(
		size
	)} g`

	return {
		detailsText,
		calcWeight,
	}
}
