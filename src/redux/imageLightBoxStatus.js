import { createSlice } from '@reduxjs/toolkit'

const imageLightBoxStatusSlice = createSlice({
	name: 'imageLightBoxStatus',
	initialState: {
		status: false,
	},
	reducers: {
		updateStatus: (state, action) => {
			state.status = action.payload
		},
	},
})

export const { updateStatus } = imageLightBoxStatusSlice.actions
export default imageLightBoxStatusSlice.reducer
