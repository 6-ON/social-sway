import React from 'react'
import DrawerNavigation from './navigation/DrawerNavitgation'
import { NavigationContainer } from '@react-navigation/native'
import { MainNavigation } from './navigation/MainNavigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StackNavigation from './navigation/StackNavigation'
const Stack = createNativeStackNavigator()
export const App = () => {
	return (
		<NavigationContainer>
			<StackNavigation />
		</NavigationContainer>
	)
}
