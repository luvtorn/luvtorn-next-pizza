import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface Props {
	className?: string
	imageUrl: string
	size: number
}

const getSize = (size: number) => {
	let width = 0
	let height = 0
	switch (size) {
		case 20:
			width = 300
			height = 300
			break
		case 30:
			width = 400
			height = 400
			break
		case 40:
			width = 490
			height = 490
			break
	}

	return { width, height }
}

export const PizzaImage: React.FC<Props> = ({ imageUrl, size, className }) => {
	const { height, width } = getSize(size)

	return (
		<div
			className={cn(
				'flex items-center justify-center flex-1 relative w-1/2',
				className
			)}
		>
			<Image
				src={imageUrl}
				alt='Logo'
				className={cn('relative left-2 top-2 transition-all z-10 duration-300')}
				width={width}
				height={height}
			/>

			<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-300 w-[450px] h-[450px]' />
			<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-300 w-[370px] h-[370px]' />
		</div>
	)
}
