'use client'

import { useEffect } from 'react'

export function useConsoleLog(value: string) {
	useEffect(() => {
		console.log(value)
	}, [value])
}
