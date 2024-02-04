import React, { useEffect } from 'react'
import FontAwsomeIcon from '@expo/vector-icons/MaterialIcons'
import HomeScreen from '../screens/Home'
import FavouritesScreen from '../screens/Favourites'
import { navigationStyle } from '../styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabParamList } from '../types'
import DrawerNavigation from './DrawerNavitgation'
import { Button, Pressable } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import SettingsModal from '../features/settings/SettingsModal'
import { useDisclosure } from '../hooks/disclosure'

const Tabs = createBottomTabNavigator<BottomTabParamList>()

export const MainNavigation = () => {
	const navigation = useNavigation()
	const settingsDisclosure = useDisclosure()

	return (
		<>
			<SettingsModal disclosure={settingsDisclosure} />
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
					headerRight: (props) => (
						<FontAwsomeIcon
							name="settings"
							size={24}
							color="white"
							style={{ marginEnd: 20 }}
							onPress={settingsDisclosure.onOpen}
						/>
					),
					headerLeft: (props) => (
						<FontAwsomeIcon
							name="menu"
							size={24}
							style={{ marginLeft: 20,color:'white' }}
							onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
						/>
					),
				}}
			>
				<Tabs.Screen
					name="Home"
					component={HomeScreen}
					options={{ tabBarIcon: (props) => <FontAwsomeIcon name="home" {...props} /> }}
				/>
				<Tabs.Screen
					name="Favourites"
					component={FavouritesScreen}
					options={{ tabBarIcon: (props) => <FontAwsomeIcon name="favorite" {...props} /> }}
				/>
			</Tabs.Navigator>
		</>
	)
}
