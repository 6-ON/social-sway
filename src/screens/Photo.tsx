import React from 'react'
import { StackScreenProps } from '../types'

import { Image, StyleSheet, Text, View } from 'react-native'
import { photoScreenStyle } from '../styles'

const PhotoScreen = ({ route, navigation }: StackScreenProps<'PhotoPreview'>) => {
	const { photo } = route.params
	return (
		<View>
			<Image source={{ uri: photo.url }} style={photoScreenStyle.image} />
			<Text style={photoScreenStyle.title}>{photo.title}</Text>
			<Text style={photoScreenStyle.desc}>{photo.photoDesc}</Text>
		</View>
	)
}



export default PhotoScreen
