import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '/node_modules/axios'

export const fetchSearchResults = createAsyncThunk(
	'search/fetchSearchResults',
	async ({ id, url, params }) => {
		const response = await axios.get(url, { params })
		return { id, data: response.data }
	}
)

const searchBarSlice = createSlice({
	name: 'search',
	initialState: {},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchSearchResults.pending, (state, action) => {
				state[action.meta.arg.id] = {
					status: 'loading',
					results: [],
					error: null,
				}
			})
			.addCase(fetchSearchResults.fulfilled, (state, action) => {
				state[action.payload.id] = {
					status: 'succeeded',
					results: action.payload.data,
					error: null,
				}
			})
			.addCase(fetchSearchResults.rejected, (state, action) => {
				state[action.meta.arg.id] = {
					status: 'failed',
					results: [],
					error: action.error.message,
				}
			})
	},
})

export default searchBarSlice.reducer
