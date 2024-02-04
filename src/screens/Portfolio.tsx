import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { StackScreenProps } from '../types'
import { PhotoCard } from '../components/PhotoCard'
import { portfolioStyle, topPortfolioStyle } from '../styles'

const PortfolioScreen = ({ route, navigation }: StackScreenProps<'Portfolio'>) => {
	const { user } = route.params
	return (
		<ScrollView>
			<View style={topPortfolioStyle(user)}>
				<Image source={{ uri: user.img }} style={portfolioStyle.avatar} />
				<Text style={portfolioStyle.userName}>{user.name}</Text>
			</View>
			<View style={portfolioStyle.bioContainer}>
				<Text style={portfolioStyle.bioTitle}>Bio :</Text>
				<Text style={portfolioStyle.bio}>{user.desc}</Text>
			</View>
			<View style={portfolioStyle.photosContainer}>
				{user.photos.map((photo) => (
					<PhotoCard photo={photo} key={photo.id} />
				))}
			</View>
		</ScrollView>
	)
}

export default PortfolioScreen
