import { configureStore } from '@reduxjs/toolkit'
import { booksDataApi } from './booksSlice'
import cartReducer from './cartSlice'
import imageLightBoxStatusReducer from './imageLightBoxStatus'
import { productPageSlice } from './productPageSlice'
export const store = configureStore({
	reducer: {
		[booksDataApi.reducerPath]: booksDataApi.reducer,
		[productPageSlice.reducerPath]: productPageSlice.reducer,
		cart: cartReducer,
		imageLightBoxStatus: imageLightBoxStatusReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			booksDataApi.middleware,
			productPageSlice.middleware
		),
})
