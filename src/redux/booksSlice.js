import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksDataApi = createApi({
  reducerPath: "booksDataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://biblioteka-backend-btd3.onrender.com",
  }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
      transformResponse: (response) =>
        response.map((book) => ({
          ...book,
          title: book.title || "Unknown Title",
          coverImageLink: book.images?.length > 0 ? [book.images[0].url] : [],
          price: book.price || 0,
          author: book.author || "Unknown Author",
          summary: book.description || "No summary available",
        })),

      getNewBooks: builder.query({
        query: () => "/new",
        transformResponse: (response) =>
          response.map((book) => ({
            ...book,
            title: book.title || "Unknown Title",
            coverImageLink: book.images?.length > 0 ? [book.images[0].url] : [],
            price: book.price || 0,
            author: book.author || "Unknown Author",
            summary: book.description || "No summary available",
          })),
      }),

      getBestsellers: builder.query({
        query: () => "/bestseller",

        transformResponse: (response) =>
          response.map((book) => ({
            ...book,
            title: book.title || "Unknown Title",
            coverImageLink: book.images?.length > 0 ? [book.images[0].url] : [],
            price: book.price || 0,
            author: book.author || "Unknown Author",
            summary: book.description || "No summary available",
          })),
      }),

      getPromotionBooks: builder.query({
        query: () => "/promotion",
        transformResponse: (response) =>
          response.map((book) => ({
            ...book,
            title: book.title || "Unknown Title",
            coverImageLink: book.images?.length > 0 ? [book.images[0].url] : [],
            price: book.price || 0,
            author: book.author || "Unknown Author",
            summary: book.description || "No summary available",
          })),
      }),
    }),
  }),
});

export const {
  useGetNewBooksQuery,
  useGetBestsellersQuery,
  useGetPromotionBooksQuery,
  useGetAllBooksQuery,
} = booksDataApi;
