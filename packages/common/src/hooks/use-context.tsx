'use client'

import React, { createContext, useContext, useMemo, useState } from 'react'

interface SimpleContextType {
	message: string
	setMessage: (message: string) => void
}

const SimpleContext = createContext<SimpleContextType | undefined>(undefined)

interface SimpleContextProviderProps {
	children: React.ReactNode
	initialMessage?: string
}

export function SimpleContextProvider({
	children,
	initialMessage = 'Hello from Context!',
}: SimpleContextProviderProps) {
	const [message, setMessage] = useState<string>(initialMessage)

	const contextValue = useMemo(
		() => ({
			message,
			setMessage,
		}),
		[message]
	)

	return <SimpleContext value={contextValue}>{children}</SimpleContext>
}

export function useSimpleContext() {
	const context = useContext(SimpleContext)
	if (context === undefined) {
		throw new Error('useSimpleContext must be used within a SimpleContextProvider')
	}
	return context
}
