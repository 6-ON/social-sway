import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FavoritesState {
	favourites: string[]
}

const initialState: FavoritesState = {
	favourites: [],
}

const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	reducers: {
		toggleFavourites(state, { payload: id }: PayloadAction<string>) {
			const { favourites } = state
			state.favourites = favourites.includes(id) ? favourites.filter((f) => f !== id) : [...favourites,id]
		},
	},
})
export const { toggleFavourites } = favouritesSlice.actions
export default favouritesSlice.reducer
