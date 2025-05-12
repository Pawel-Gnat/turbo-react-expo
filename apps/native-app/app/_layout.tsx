import { SimpleContextProvider } from '@repo/common/hooks/use-context'
import { Stack } from 'expo-router'

export default function RootLayout() {
	return (
		<SimpleContextProvider>
			<Stack />
		</SimpleContextProvider>
	)
}
