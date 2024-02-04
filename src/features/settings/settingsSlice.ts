import { createSlice } from '@reduxjs/toolkit'

export interface SettingsState {
	animals: boolean
	cars: boolean
	travel: boolean
}
const initialState: SettingsState = {
	animals: true,
	cars: true,
	travel: true,
}
const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		toggleAnimals: (state) => {
			state.animals = !state.animals
		},
		toggleCars: (state) => {
			state.cars = !state.cars
		},
		toggleTravel: (state) => {
			state.travel = !state.travel
		},
	},
})

export const { toggleAnimals, toggleCars, toggleTravel } = settingsSlice.actions



export default settingsSlice.reducer