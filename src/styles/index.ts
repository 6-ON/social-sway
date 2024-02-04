import { PressableProps, PressableStateCallbackType, StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { PressableStyleCallback } from '../types'
import { User } from '../features/users'

export const scrollViewStyle = StyleSheet.create({
	container: {
		gap: 20,
	},
})
export const pressableStyle: PressableStyleCallback = ({ pressed }) => ({
	backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
})

export const navigationStyle = StyleSheet.create({
	headerStyle: {
		backgroundColor: '#ff5f82',
	},
	headerTitleStyle: {
		fontWeight: 'bold',
		color: '#FFF',
	},
	tabBarIconStyle: {
		fontSize: 24,
		color: '#FFF',
	},
	tabBarStyle: {
		backgroundColor: '#ff5f82',
		height: 60,
	},

	tabBarLabelStyle: {
		fontSize: 14,
		marginBottom: 5,
		fontWeight: 'bold',
	},
})

export const modalStyles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modal: {
		backgroundColor: '#F5F5F5',
		padding: 20,
		borderRadius: 20,
		alignItems: 'center',
		maxWidth: '95%',
		gap: 30,
	},
	closeIcon: {
		alignSelf: 'flex-end',
	},
	modalTitle: {
		fontSize: 32,
		fontFamily: 'serif',
		marginHorizontal: 40,
	},
	modalDesc: {
		fontSize: 16,
		fontFamily: 'serif',
		alignSelf: 'flex-start',
	},
	options: {
		borderTopColor: 'black',
		borderTopWidth: 1,
	},
	option: {
		width: '100%',
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	optionLabel: {
		fontWeight: '700',
		fontSize: 18,
	},
})

export const profileCardStyle = StyleSheet.create({
	container: {
		paddingVertical: 20,
		width: '100%',
		borderRadius: 10,
		justifyContent: 'center',
		flexGrow: 1,
		alignItems: 'center',
	},
	bottom: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		paddingHorizontal: 50,
	},
	image: {
		width: '100%',
		height: 400,
		borderRadius: 5,
		marginBottom: 10,
	},
	textSm: {
		fontSize: 18,
	},
	textMd: {
		fontSize: 18,
	},
})

export const lowopOnpress: PressableStyleCallback = ({ pressed }) => ({
	opacity: pressed ? 0.5 : 1,
})

export const photoCardStyle = StyleSheet.create({
	container: {
		width: '100%',
		height: 400,
		borderRadius: 20,
	},
	titleContainer: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		width: '100%',
		height: '15%',
		marginTop: 'auto',
		justifyContent: 'center',
		paddingHorizontal: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: '700',
		color: 'white',
	},
})

export function topPortfolioStyle({ favColor }: User): StyleProp<ViewStyle> {
	return {
		paddingTop: 20,
		width: '100%',
		alignItems: 'center',
		backgroundColor: favColor,
		paddingHorizontal: 50,
	}
}

export const portfolioStyle = StyleSheet.create({
	avatar: {
		width: 150,
		height: 150,
		borderRadius: 150,
		marginHorizontal: 'auto',
		marginBottom: 10,
		borderColor: 'white',
		borderWidth: 5,
	},
	userName: { fontSize: 24, color: 'white', fontWeight: '500' },
	bioContainer: {
		flex: 1,
		width: '100%',
		paddingHorizontal: 20,
		paddingTop: 20,
		marginBottom: 50,
	},
	bioTitle: { fontSize: 30, fontWeight: '700' },
	bio: { fontSize: 20 },
	photosContainer: {
		gap: 20,
	},
})

export const globalStyle = StyleSheet.create({
	scrollView: {
		gap: 20,
	},
})
export const photoScreenStyle = StyleSheet.create({
	image: { width: '100%', height: 300 },
	title: { fontSize: 24, fontWeight: '700', padding: 20 },
	desc: { fontSize: 20, padding: 20 },
})
