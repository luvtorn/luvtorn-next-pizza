'use client'

import { setActiveCategory } from '@/redux/categorySlice'
import { ProductWithDetails } from '@/types/product.types'
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useIntersection } from 'react-use'
import { ProductCard } from './product-card'
import { ProductSkeleton } from './product-skeleton'
import { Title } from './title'

interface Props {
	title: string
	items: ProductWithDetails[] | undefined
	className?: string
	categoryId: number
	loading?: boolean
}

export const ProductsGroupList: React.FC<Props> = ({
	title,
	items,
	categoryId,
	className,
	loading,
}) => {
	const intersectionRef = useRef(null)
	const intersection = useIntersection(intersectionRef, { threshold: 0.4 })
	const dispatch = useDispatch()

	useEffect(() => {
		if (intersection && intersection.isIntersecting) {
			dispatch(setActiveCategory(title.toLowerCase()))
		}
	}, [intersection?.isIntersecting, categoryId, title])

	if (loading) {
		return (
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]'>
				{[...Array(3)].fill(0).map((_, index) => (
					<ProductSkeleton key={index} />
				))}
			</div>
		)
	}

	return (
		<div className={className} id={title.toLowerCase()} ref={intersectionRef}>
			{items && items?.length !== 0 && (
				<Title text={title} size='lg' className='font-extrabold mb-5' />
			)}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
				{items?.map(item => (
					<ProductCard
						key={item.id}
						name={item.name}
						imageUrl={item.imageUrl}
						price={item.items[0].price}
						ingredients={item.ingredients}
						id={item.id}
					/>
				))}
			</div>
		</div>
	)
}
