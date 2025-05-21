import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productPageSlice = createApi({
	reducerPath: 'productPageSlice',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://biblioteka-backend-btd3.onrender.com',
	}),
	endpoints: builder => ({
		getBookInfo: builder.query({
			query: id => `/api/books/${id}`,
		}),
	}),
})

export const { useGetBookInfoQuery } = productPageSlice
