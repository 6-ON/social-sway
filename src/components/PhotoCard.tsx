import React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import { Photo } from '../features/users'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../types'
import { lowopOnpress, photoCardStyle } from '../styles'

export function PhotoCard({ photo }: { photo: Photo }) {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>()
	return (
		<Pressable onPress={() => navigation.navigate('PhotoPreview', { photo })}>
			{(state) => (
				<ImageBackground source={{ uri: photo.url }} style={[lowopOnpress(state), photoCardStyle.container]}>
					<View style={photoCardStyle.titleContainer}>
						<Text style={photoCardStyle.title}>{photo.title}</Text>
					</View>
				</ImageBackground>
			)}
		</Pressable>
	)
}