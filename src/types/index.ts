import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Photo, User } from '../features/users'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { DrawerScreenProps as DefaultDrawerScreenProps } from '@react-navigation/drawer'
import { PressableStateCallbackType, StyleProp, ViewStyle } from 'react-native'

export type BottomTabParamList = {
	Home: undefined
	Favourites: undefined
}
export type DrawerParamList = {
	Discover: undefined
	Faq: undefined
}
export type RootStackParamList = {
	Main: undefined
	Portfolio: { user: User }
	PhotoPreview: { photo: Photo }
}
export type DrawerScreenProps<Screen extends keyof DrawerParamList> = DefaultDrawerScreenProps<DrawerParamList, Screen>
export type StackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
	RootStackParamList,
	Screen
>
export type TabsScreenProps<Screen extends keyof BottomTabParamList> = BottomTabScreenProps<BottomTabParamList, Screen>

export type PressableStyleCallback = (state: PressableStateCallbackType) => StyleProp<ViewStyle>
