import { Ingredient, Product, ProductItem } from '@prisma/client'
import React from 'react'
import IngredientItem from './ingredient-item'

import { PizzaImage } from './pizza-image'

import { pizzaSizes, pizzaTypes } from '@/constants/pizza'
import { getPizzaDetails } from '@/lib/get-pizza-details'
import { getPizzaPrice } from '@/lib/get-pizza-price'
import { Button } from '../ui/button'
import { GroupVariants } from './group-variants'

interface Props {
	ingredients: Ingredient[]
	product: Product & { ingredients: Ingredient[]; items: ProductItem[] }
}

const ChoosePizzaForm: React.FC<Props> = ({ ingredients, product }) => {
	const [selectedType, setSelectedType] = React.useState<number>(0)
	const [selectedSize, setSelectedSize] = React.useState<number>(20)
	const [selectedIngredients, setSelectedIngredients] = React.useState<
		number[]
	>([])

	const { detailsText } = getPizzaDetails(selectedSize, selectedType)

	const handleClick = (id: number) => {
		setSelectedIngredients(prev =>
			prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
		)
	}

	return (
		<div className='flex flex-1 bg-[#F4F1EE]'>
			<PizzaImage imageUrl={product.imageUrl} size={selectedSize} />

			<div className='flex flex-col bg-[#f7f6f5] w-1/2 p-5'>
				<p className='text-2xl font-bold pb-2'>{product.name}</p>
				{ingredients.length > 0 && <p className='text-sm'>{detailsText}</p>}

				{ingredients.length > 0 && (
					<>
						<div className='flex flex-col gap-3 mt-4 max-w-full'>
							<GroupVariants
								items={pizzaSizes}
								onClick={setSelectedSize}
								value={selectedSize}
							/>

							<GroupVariants
								items={pizzaTypes}
								onClick={setSelectedType}
								value={selectedType}
							/>
						</div>

						<div className='mt-5'>
							<p className='w-full text-xl font-bold mb-3'>Also you can add</p>
							<div className='grid grid-cols-3 gap-2 overflow-auto pr-2 scrollbar-custom h-[300px]'>
								{ingredients?.map(ingredient => (
									<IngredientItem
										key={ingredient.id}
										ingredient={ingredient}
										isChoosen={selectedIngredients.includes(ingredient.id)}
										onClick={() => handleClick(ingredient.id)}
									/>
								))}
							</div>
						</div>
					</>
				)}

				<Button className='mt-6' variant={'default'} size={'lg'}>
					Add to cart for{' '}
					{getPizzaPrice(
						product.items[0].price,
						selectedSize,
						selectedIngredients,
						ingredients
					)}
					PLN
				</Button>
			</div>
		</div>
	)
}

export default ChoosePizzaForm
