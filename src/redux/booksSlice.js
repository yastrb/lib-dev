import{ createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksDataApi = createApi({
  reducerPath: "booksDataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    getNewBestsellersSalesBooks: builder.query({
      query: () => "https://backend-tan-phi.vercel.app/api"
    }),
 }),
});

export const useGetNewBestsellersSalesBooks = booksDataApi.endpoints.getNewBestsellersSalesBooks.useQuery;