import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '/node_modules/axios'

export const fetchSearchResults = createAsyncThunk(
	'books/search',
	async ({ title, author }) => {
		const response = await axios.get('https://biblioteka-backend-btd3.onrender.com/api/books/search', 
			{ params: { title, author } })
		return { books: response.data.content, title, author };
	}
)

const searchBarSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state, action) => {
        const { title, author } = action.meta.arg;
        state[`${title}_${author}`] = {
          status: 'loading',
          results: [],
          error: null,
        };
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        const { title, author } = action.payload;
        state[`${title}_${author}`] = {
          status: 'succeeded',
          results: action.payload.books,
          error: null,
        };
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        const { title, author } = action.meta.arg;
        state[`${title}_${author}`] = {
          status: 'failed',
          results: [],
          error: action.error.message,
        };
      });
  },
});

export default searchBarSlice.reducer
