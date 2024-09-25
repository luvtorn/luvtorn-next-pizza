'use client'

import { Ingredient } from '@prisma/client'
import clsx from 'clsx'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Skeleton } from '../ui/skeleton'
import { FilterCheckbox } from './filter-checkbox'

interface Props {
	className?: string
	items: Ingredient[]
	loading?: boolean
	setIngredients: Dispatch<
		SetStateAction<{
			priceFrom: number
			priceTo: number
			selectedIngredients: number[]
		}>
	>
	ingredients: number[]
}

const CheckboxFiltersGroup: React.FC<Props> = ({
	className,
	items,
	loading,
	setIngredients,
	ingredients,
}) => {
	const [showAll, setShowAll] = useState(false)
	const [search, setSearch] = useState('')

	const onCheckedChange = (id: number) => {
		setIngredients(prev => ({
			...prev,
			selectedIngredients: prev.selectedIngredients.includes(id)
				? prev.selectedIngredients.filter(i => i !== id)
				: [...prev.selectedIngredients, id],
		}))
	}

	if (loading) {
		return (
			<div>
				<p className='font-bold text-lg mb-3'>Ingredients</p>
				{...Array(5)
					.fill(0)
					.map((_, i) => <Skeleton key={i} className='h-6 mb-4 rounded-md' />)}
			</div>
		)
	}

	return (
		<div className={clsx('mt-7', className)}>
			<p className='font-bold text-lg mb-3'>Ingredients</p>

			{showAll && (
				<div className='mb-5'>
					<Input
						placeholder={'Search...'}
						className='bg-gray-50 border-none'
						onChange={e => setSearch(e.target.value)}
					/>
				</div>
			)}

			<div className='flex flex-col gap-4 border-b-neutral-100'>
				{(showAll ? items : items.slice(0, 5))
					.filter(item =>
						item.name.toLowerCase().includes(search.toLowerCase())
					)
					.map(item => (
						<FilterCheckbox
							text={item.name}
							value={item.name}
							key={item.id}
							onCheckedChange={() => onCheckedChange(item.id)}
						/>
					))}
			</div>

			<div className='mt-4'>
				<Button onClick={() => setShowAll(!showAll)} variant={'default'}>
					{showAll ? 'Hide' : '+ Show all'}
				</Button>
			</div>
		</div>
	)
}

export default CheckboxFiltersGroup
