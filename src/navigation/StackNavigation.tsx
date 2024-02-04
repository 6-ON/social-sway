import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import PortfolioScreen from '../screens/Portfolio'
import DrawerNavigation from './DrawerNavitgation'
import { RootStackParamList } from '../types'
import PhotoScreen from '../screens/Photo'
import Icons from '@expo/vector-icons/Ionicons'
import { useAppDispatch, useAppSelector } from '../hooks'
import { toggleFavourites } from '../features/favourites'
const Stack = createNativeStackNavigator<RootStackParamList>()
const StackNavigation = () => {
	const { favourites } = useAppSelector((state) => state.favourites)
	const dispatch = useAppDispatch()
	return (
		<Stack.Navigator>
			<Stack.Screen name="Main" component={DrawerNavigation} options={{ headerShown: false }} />
			<Stack.Screen
				name="Portfolio"
				component={PortfolioScreen}
				options={({ route: { params } }) => ({
					title: `Portfolio de ${params.user.name}`,
					headerShadowVisible: false,
					headerTintColor: 'white',
					headerStyle: {
						backgroundColor: params.user.favColor,
					},
					headerRight: ({ tintColor }) => (
						<Icons
							name={favourites.includes(params.user.id) ? 'heart' : 'heart-outline'}
							size={24}
							onPress={() => dispatch(toggleFavourites(params.user.id))}
							color={tintColor}
						/>
					),
				})}
			/>
			<Stack.Screen
				name="PhotoPreview"
				component={PhotoScreen}
				options={({ route }) => ({
					title: `${route.params.photo.title}`,
				})}
			/>
		</Stack.Navigator>
	)
}

export default StackNavigation
