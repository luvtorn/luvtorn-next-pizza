'use client'

import { useIngredients } from '@/hooks'
import { useFilteredProducts } from '@/hooks/useProducts'
import { ProductFilters } from '@/types/product.types'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import CheckboxFiltersGroup from './checkbox-filters-group'
import { Title } from './title'

const Filtration = () => {
	const { ingredients, loading } = useIngredients()

	const [selectedFilters, setSelectedFilters] = useState<ProductFilters>({
		priceFrom: 0,
		priceTo: 1000,
		selectedIngredients: [],
	})

	const { refetch } = useFilteredProducts(selectedFilters)

	return (
		<div>
			<Title text='Filtration' size='sm' className='font-bold' />

			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7 z-0'>
				<p className='font-bold mb-3'>Price from to: </p>
				<div className='flex gap-3'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={1000}
						defaultValue={0}
						onChange={e =>
							setSelectedFilters(prev => ({
								...prev,
								priceFrom: Number(e.target.value),
							}))
						}
					/>
					<Input
						type='number'
						min={0}
						max={1000}
						placeholder='1000'
						onChange={e =>
							setSelectedFilters(prev => ({
								...prev,
								priceTo: Number(e.target.value),
							}))
						}
					/>
				</div>
			</div>

			<CheckboxFiltersGroup
				className='mt-7'
				items={ingredients}
				loading={loading}
				setIngredients={setSelectedFilters}
				ingredients={selectedFilters.selectedIngredients}
			/>

			<Button className='text-base w-full mt-8' onClick={() => refetch()}>
				Apply
			</Button>
		</div>
	)
}

export default Filtration
