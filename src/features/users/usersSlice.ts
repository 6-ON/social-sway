import { createSlice } from '@reduxjs/toolkit'
import { DATA } from '../../usersData'

export type User = typeof DATA[number]
export type Photo = User['photos'][number]

interface UsersState {
    users: User[]
    status: 'idle' | 'loading' | 'failed'
}
const initialState: UsersState = {
    users: DATA,
    status: 'idle',

}
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        // 	state.value += action.payload
        // },
    },
})
export default usersSlice.reducer