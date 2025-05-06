import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksDataApi = createApi({
  reducerPath: "booksDataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://biblioteka-backend-btd3.onrender.com/api/",
  }),
  endpoints: (builder) => ({
    // Fetch all books from the API
    getAllBooks: builder.query({
      query: () => "/books",
      transformResponse: (response) => {
        const books = response.content || [];
        return books.map((book) => ({
          ...book,
          title: book.title || "Unknown Title",
          coverImageLink: book.images?.length > 0 ? [book.images[0].url] : [],
          price: book.price || 0,
          author: book.author || "Unknown Author",
          summary: book.description || "No summary available",
        }));
      },
    }),

    // Fetch new books from the API
    getNewBooks: builder.query({
      query: () => "books/new",
      transformResponse: (response) => {
        const newBooks = response.content || [];
        return newBooks.map((item) => {
          const book = item.book || {}; 
          return {
            ...book,
            title: book.title || "Unknown Title",
            coverImageLink: book.images?.length > 0 ? [book.images[0].url] : [],
            price: book.price || 0,
            author: book.author || "Unknown Author",
            summary: book.description || "No summary available",
          };
        });
      },
    }),
   
    // Fetch bestsellers from the API
    getBestsellers: builder.query({
      query: () => "books/bestseller",
      transformResponse: (response) => {
        const bestsellers = response.content || [];
        return bestsellers.map((book) => ({
          ...book,
          title: book.title || "Unknown Title",
          coverImageLink: book.images?.length > 0 ? [book.images[0].url] : [],
          price: book.price || 0,
          author: book.author || "Unknown Author",
          summary: book.description || "No summary available",
        }));
      },
    }),

    // Fetch promotion books from the API
    getPromotionBooks: builder.query({
      query: () => "books/promotion",
      transformResponse: (response) => {
        const promotionBooks = response.content || [];
        return promotionBooks.map((book) => ({
          ...book,
          title: book.title || "Unknown Title",
          coverImageLink: book.images?.length > 0 ? [book.images[0].url] : [],
          price: book.price || 0,
          author: book.author || "Unknown Author",
          summary: book.description || "No summary available",
        }));
      },
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetNewBooksQuery,
  useGetBestsellersQuery,
  useGetPromotionBooksQuery,
} = booksDataApi;
