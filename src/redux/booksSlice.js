import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksDataApi = createApi({
  reducerPath: "booksDataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    getNewBestsellersSalesBooks: builder.query({
      query: () => "https://backend-tan-phi.vercel.app/api",
      transformResponse: (response) => ({
        newBooks: response.newBooks.map((book) => ({
          ...book,
          title: book.title || 'Назва недоступна',
          summary: book.summary || 'Опис недоступний',
          coverImageLink: book.coverImageLink && book.coverImageLink.length > 0 ? book.coverImageLink : ['default-image.jpg'],
          price: book.price.length > 0 ? book.price : [{ original_price: 0, discounted_price: 0 }],
          author: book.author.length > 0 ? book.author : [{ name_ukr: 'Невідомий автор', surname_ukr: '' }],
        })),
        salesBooks: response.salesBooks.map((book) => ({
          ...book,
          title: book.title || 'Назва недоступна',
          summary: book.summary || 'Опис недоступний',
          coverImageLink: book.coverImageLink && book.coverImageLink.length > 0 ? book.coverImageLink : ['default-image.jpg'],
          price: book.price.length > 0 ? book.price : [{ original_price: 0, discounted_price: 0 }],
          author: book.author.length > 0 ? book.author : [{ name_ukr: 'Невідомий автор', surname_ukr: '' }],
        })),
        bestsellerBooks: response.bestsellerBooks.map((book) => ({
          ...book,
          title: book.title || 'Назва недоступна',
          summary: book.summary || 'Опис недоступний',
          coverImageLink: book.coverImageLink && book.coverImageLink.length > 0 ? book.coverImageLink : ['default-image.jpg'],
          price: book.price.length > 0 ? book.price : [{ original_price: 0, discounted_price: 0 }],
          author: book.author.length > 0 ? book.author : [{ name_ukr: 'Невідомий автор', surname_ukr: '' }],
        })),
      }),
    }),
  }),
});


export const useGetNewBestsellersSalesBooks = booksDataApi.endpoints.getNewBestsellersSalesBooks.useQuery;

