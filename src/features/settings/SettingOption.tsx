import React from 'react';
import { Switch, Text, View } from 'react-native';
import { modalStyles } from '../../styles';

export function SettingOption({ label, value, onToggle }: any) {
	return (
		<View style={modalStyles.option}>
			<Text style={modalStyles.optionLabel}>{label}</Text>
			<Switch
				trackColor={{ false: '#767577', true: '#81b0ff' }}
				thumbColor={value ? 'pink' : '#f8f8f8'}
				ios_backgroundColor="#3e3e3e"
				onValueChange={onToggle}
				value={value} />
		</View>
	);
}
