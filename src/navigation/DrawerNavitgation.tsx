import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import HomeScreen from '../screens/Home'
import FaqScreen from '../screens/Faq'
import { MainNavigation } from './MainNavigation'
import { DrawerParamList } from '../types'
const Drawer = createDrawerNavigator<DrawerParamList>()
import FontAwsomeIcon from '@expo/vector-icons/MaterialIcons'
import { navigationStyle } from '../styles'
import { DummyNavigation } from './DummyNavigation'
const DrawerNavigation = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: navigationStyle.headerStyle,
				headerTitleStyle: navigationStyle.headerTitleStyle,
				headerTintColor: '#FFF',
			}}
			initialRouteName="Discover"
		>
			<Drawer.Screen
				name="Discover"
				component={MainNavigation}
				options={{
					drawerIcon: (props) => <FontAwsomeIcon name="navigation" {...props} />,
					headerShown: false,
				}}
			/>
			<Drawer.Screen
				name="Faq"
				component={DummyNavigation}
				options={{
					drawerIcon: (props) => <FontAwsomeIcon name="question-answer" {...props} />,
				}}
			/>
		</Drawer.Navigator>
	)
}

export default DrawerNavigation
