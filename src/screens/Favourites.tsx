import React from 'react'
import { ScrollView } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BottomTabParamList } from '../types'
import { useAppSelector } from '../hooks'
import { PhotoCard } from '../components/PhotoCard'
import { scrollViewStyle } from '../styles'

type FavProps = NativeStackScreenProps<BottomTabParamList, 'Favourites'>

const FavouritesScreen: React.FC<FavProps> = ({ navigation }) => {
	const { users } = useAppSelector((state) => state.users)
	const { favourites } = useAppSelector((state) => state.favourites)
	return (
		<ScrollView contentContainerStyle={scrollViewStyle.container}>
			{users
				.filter((user) => favourites.includes(user.id))
				.map(({ photos }) => photos.map((photo) => <PhotoCard photo={photo} key={photo.id} />))}
		</ScrollView>
	)
}

export default FavouritesScreen
