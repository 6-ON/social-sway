import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { User } from '../features/users'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../types'
import { pressableStyle, profileCardStyle } from '../styles'
type Props = {
	user: User
}
const ProfileCard: React.FC<Props> = ({ user }) => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>()

	return (
		<Pressable
			style={(state) => [pressableStyle(state), profileCardStyle.container]}
			onPress={() => navigation.navigate('Portfolio', { user })}
		>
			<Text style={profileCardStyle.textSm}>{user.name}</Text>
			<Image source={{ uri: user.img }} style={profileCardStyle.image} />
			<View style={profileCardStyle.bottom}>
				<Text style={profileCardStyle.textSm}>{user.country}</Text>
				<Text style={profileCardStyle.textSm}>{user.photos.length}</Text>
			</View>
		</Pressable>
	)
}

export default ProfileCard
