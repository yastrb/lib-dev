import { configureStore } from "@reduxjs/toolkit";
import { booksDataApi } from "./booksSlice";
// import {booksSlice }  from "./booksSlice";
import cartReducer from "./cartSlice";


export const store = configureStore({
    reducer: {
      [booksDataApi.reducerPath]: booksDataApi.reducer,
      cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([booksDataApi.middleware]),
  });