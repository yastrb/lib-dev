import { configureStore } from '@reduxjs/toolkit';
import { booksDataApi } from './booksSlice';
import cartReducer from './cartSlice';
import { catalogFiltersApi } from './catalogFiltersSlice';
import imageLightBoxStatusReducer from './imageLightBoxStatus';
import { productPageSlice } from './productPageSlice';
import searchReducer from './searchBarSlice';

export const store = configureStore({
  reducer: {
    [booksDataApi.reducerPath]: booksDataApi.reducer,
    [productPageSlice.reducerPath]: productPageSlice.reducer,
    cart: cartReducer,
    imageLightBoxStatus: imageLightBoxStatusReducer,
    [catalogFiltersApi.reducerPath]: catalogFiltersApi.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat([
        booksDataApi.middleware,
        productPageSlice.middleware,
        catalogFiltersApi.middleware,
      ]),
});
