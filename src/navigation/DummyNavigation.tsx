import React from 'react'
import FontAwsomeIcon from '@expo/vector-icons/MaterialIcons'
import HomeScreen from '../screens/Home'
import FavouritesScreen from '../screens/Favourites'
import { navigationStyle } from '../styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabParamList } from '../types'
import DrawerNavigation from './DrawerNavitgation'
import { Button, Pressable } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import FaqScreen from '../screens/Faq'

const Tabs = createBottomTabNavigator<BottomTabParamList>()

export const DummyNavigation = () => {
	const navigation = useNavigation()
	return (
		<Tabs.Navigator
			screenOptions={{
				headerStyle: navigationStyle.headerStyle,
				headerTitleStyle: navigationStyle.headerTitleStyle,
				tabBarIconStyle: navigationStyle.tabBarIconStyle,
				tabBarStyle: navigationStyle.tabBarStyle,
				tabBarLabelStyle: navigationStyle.tabBarLabelStyle,
				tabBarAllowFontScaling: true,
				tabBarActiveBackgroundColor: '#ff90a8',
				tabBarActiveTintColor: '#FFF',
				tabBarInactiveTintColor: '#FFF',
				headerShown: false,
				headerRight: (props) => (
					<FontAwsomeIcon name="settings" size={24} color="white" style={{ marginRight: 20 }} />
				),
				headerLeft: (props) => (
					<FontAwsomeIcon
						name="menu"
						size={24}
						color="white"
						style={{ marginLeft: 20 }}
						onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
					/>
				),
			}}
		>
			<Tabs.Screen
				name="Home"
				component={FaqScreen}
				options={{ tabBarIcon: (props) => <FontAwsomeIcon name="home" {...props} /> }}
			/>
			<Tabs.Screen
				name="Favourites"
				component={FaqScreen}
				options={{ tabBarIcon: (props) => <FontAwsomeIcon name="favorite" {...props} /> }}
			/>
		</Tabs.Navigator>
	)
}
