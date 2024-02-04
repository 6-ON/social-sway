import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ProfileCard from '../components/ProfileCard'
import { useAppSelector } from '../hooks'
import { TabsScreenProps } from '../types'
import { User } from '../features/users'
import { SettingsState } from '../features/settings'
import { globalStyle } from '../styles'
const HomeScreen: React.FC<TabsScreenProps<'Home'>> = ({ navigation }) => {
	const { users } = useAppSelector((state) => state.users)
	const settings = useAppSelector((state) => state.settings)
	return (
		<>
			<ScrollView contentContainerStyle={globalStyle.scrollView}>
				{users
					.filter((user) => settings[user.category as keyof SettingsState])
					.map((user) => (
						<ProfileCard user={user} key={user.id} />
					))}
			</ScrollView>
		</>
	)
}

export default HomeScreen
