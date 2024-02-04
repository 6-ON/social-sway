import { ActionCreator } from '@reduxjs/toolkit'
import { SettingsState, toggleAnimals, toggleCars, toggleTravel } from './settingsSlice'

type SettingsOptions = {
	[k in keyof SettingsState]: {
		label: string
		action: ActionCreator<any>
	}
}

type SettingsOptionsKeys = (keyof SettingsOptions)[]
export const settingsOptions: SettingsOptions = {
	animals: {
		label: 'Animals',
		action: toggleAnimals,
	},
	cars: {
		label: 'Cars',
		action: toggleCars,
	},
	travel: {
		label: 'Travel',
		action: toggleTravel,
	},
}
export const optionList = Object.keys(settingsOptions) as SettingsOptionsKeys
