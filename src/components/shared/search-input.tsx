import { Search } from 'lucide-react'
import React from 'react'

const SearchInput = () => {
	return (
		<div className='flex rounded-2xl justify-between relative h-11'>
			<Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400' />

			<input
				type='text'
				placeholder='Find pizza'
				className='bg-gray-100 rounded-xl outline-none w-full pl-11'
			/>
		</div>
	)
}

export default SearchInput
