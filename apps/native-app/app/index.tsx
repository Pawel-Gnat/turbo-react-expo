import { StyleSheet, Text, View } from 'react-native'
import { useConsoleLog } from '@repo/common/hooks/use-console-log'
import { useSimpleContext } from '@repo/common/hooks/use-context'

export default function Index() {
	useConsoleLog('Hello Native App from package')

	const { message } = useSimpleContext()
	console.log(message)

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Home screen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#25292e',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#fff',
	},
})
