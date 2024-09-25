'use client'

import Categories from '@/components/shared/categories'
import { Container } from '@/components/shared/container'
import Filtration from '@/components/shared/filtration'
import { ProductsGroupList } from '@/components/shared/product-group-list'
import { SortPopup } from '@/components/shared/sort-popup'
import { Title } from '@/components/shared/title'
import { useFilteredProducts } from '@/hooks/useProducts'

export default function Home() {
	const { data, isLoading } = useFilteredProducts()

	console.log(data)

	return (
		<>
			<Container className='mt-10 px-3.5'>
				<Title text='All pizzas' size='lg' className='font-extrabold' />
			</Container>

			<div className='sticky top-0 bg-white py-5 shadow-md z-20 p-3 shadow-black/5'>
				<Container className='flex items-center justify-between flex-wrap gap-2.5'>
					<Categories />
					<SortPopup />
				</Container>
			</div>

			<Container className='mt-10 mb-10 p-4'>
				<div className='flex gap-[60px]'>
					<div className='w-[250px]'>
						<Filtration />
					</div>
					<div className='flex flex-1 flex-col gap-20'>
						<ProductsGroupList
							categoryId={1}
							title='Pizzas'
							items={data?.category_1}
							loading={isLoading}
						/>
						<ProductsGroupList
							categoryId={2}
							title='Breakfast'
							items={data?.category_2}
							loading={isLoading}
						/>
						<ProductsGroupList
							categoryId={4}
							title='Cocktails'
							items={data?.category_4}
							loading={isLoading}
						/>
						<ProductsGroupList
							categoryId={3}
							title='Snacks'
							items={data?.category_3}
							loading={isLoading}
						/>
						<ProductsGroupList
							categoryId={5}
							title='Drinks'
							items={data?.category_5}
							loading={isLoading}
						/>
					</div>
				</div>
			</Container>
		</>
	)
}
