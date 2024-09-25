import { ProductFilters } from '@/types/product.types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchFilteredProducts = async (filters?: ProductFilters) => {
	const response = await axios.get(
		'/api/products',
		filters ? { params: { ...filters } } : {}
	)
	return response.data
}

export const useFilteredProducts = (filters?: ProductFilters) => {
	return useQuery({
		queryKey: ['filtered-products'],
		queryFn: () => fetchFilteredProducts(filters),
	})
}
