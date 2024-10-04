import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const catalogFilterItemsSlice = createSlice({
	name: 'catalogFilterItems',
	initialState,
	reducers: {
		addItem: (state, action) => {
			state.push(action.payload);
		},
		removeItem: (state, action) => {
			return state.filter(item => item.id !== action.payload);
		},
		clearItems: () => {
			return [];
		},
	},
});

export const { addItem, removeItem, clearItems } =
	catalogFilterItemsSlice.actions;

export default catalogFilterItemsSlice.reducer;
