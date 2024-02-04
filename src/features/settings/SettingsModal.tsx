import React from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'
// import { toggleAnimals } from './settingsSlice'
import Icons from '@expo/vector-icons/Ionicons'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { DisclosureReturn } from '../../hooks/disclosure'
import { modalStyles } from '../../styles'
import { optionList, settingsOptions } from './options'
import { toggleCars } from './settingsSlice'
import { SettingOption } from './SettingOption'
type ModalProps = {
	disclosure: DisclosureReturn
}

const SettingsModal: React.FC<ModalProps> = ({ disclosure }) => {
	const settings = useAppSelector((state) => state.settings)
	const dispatch = useAppDispatch()
	return (
		<Modal animationType="slide" visible={disclosure.isOpen} onRequestClose={disclosure.onClose}>
			<View style={modalStyles.root}>
				<View style={modalStyles.modal}>
					<Icons name="close" size={32} style={modalStyles.closeIcon} onPress={disclosure.onClose} />
					<Text style={modalStyles.modalTitle}>Settings</Text>
					<Text style={modalStyles.modalDesc}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum praesentium, iure assumenda eum
						rem ducimus maxime sed soluta sint magnam.
					</Text>

					<View style={modalStyles.options}>
						{optionList.map((option) => (
							<SettingOption
								key={option}
								label={settingsOptions[option].label}
								value={settings[option]}
								onToggle={() => dispatch(settingsOptions[option].action())}
							/>
						))}
						<Button title="Validate settings" />
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default SettingsModal
