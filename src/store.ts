import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import usersReducer from './features/users/usersSlice'
import settingsReducer from './features/settings/settingsSlice'
import favouritesReducer from './features/favourites/favouritesSlice'

export const store = configureStore({
	reducer: {
		users: usersReducer,
		settings: settingsReducer,
		favourites: favouritesReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
