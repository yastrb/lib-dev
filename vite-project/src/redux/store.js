import { configureStore } from "@reduxjs/toolkit";
import { booksDataApi } from "./booksSlice";
// import {booksSlice }  from "./booksSlice";

export const store = configureStore({
    reducer: {
      [booksDataApi.reducerPath]: booksDataApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([booksDataApi.middleware]),
  });