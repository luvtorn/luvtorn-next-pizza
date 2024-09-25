'use client'

import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

import { queryClient } from '@/constants/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'

export default function ClientLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</Provider>
	)
}
