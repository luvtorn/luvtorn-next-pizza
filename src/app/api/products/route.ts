import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../prisma/prisma-client'

export async function GET(req: NextRequest) {
	const filters = req.nextUrl.searchParams

	const priceFrom = Number(filters.get('priceFrom'))
	const priceTo = Number(filters.get('priceTo'))
	const selectedIngredients = filters.getAll('selectedIngredients[]')

	const whereClause: any = {
		AND: {
			items: {
				some: {
					price: { gte: priceFrom, lte: priceTo },
				},
			},
		},
	}

	if (selectedIngredients.length > 0) {
		whereClause.ingredients = {
			some: {
				id: {
					in: selectedIngredients.map(Number),
				},
			},
		}
	}

	const products = await prisma.product.findMany({
		where: whereClause,
		include: {
			items: true,
			ingredients: true,
		},
		orderBy: {
			categoryId: 'asc',
		},
	})

	const groupedProducts = products.reduce((acc, product) => {
		const category = `category_${product.categoryId}`
		if (!acc[category]) {
			acc[category] = []
		}
		acc[category].push(product)
		return acc
	}, {} as Record<string, typeof products>)

	return NextResponse.json(groupedProducts)
}
