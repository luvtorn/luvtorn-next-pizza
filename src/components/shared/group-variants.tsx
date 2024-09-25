'use client'

import { cn } from '@/lib/utils'
import React from 'react'

export type Variant = {
	name: string
	value: number
}

interface Props {
	items: Variant[]
	onClick: (value: Variant['value']) => void
	value?: Variant['value']
	className?: string
}

export const GroupVariants: React.FC<Props> = ({
	items,
	onClick,
	className,
	value,
}) => {
	return (
		<div
			className={cn(
				className,
				'flex justify-between bg-[#e6dfdf] rounded-3xl p-1 select-none'
			)}
		>
			{items.map(item => (
				<button
					key={item.value}
					onClick={() => onClick(Number(item.value))}
					className={cn(
						'flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400',
						{
							'bg-white shadow': Number(item.value) === Number(value),
						}
					)}
				>
					{item.name}
				</button>
			))}
		</div>
	)
}
