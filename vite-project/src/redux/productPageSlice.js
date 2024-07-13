import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productPageSlice = createApi({
	reducerPath: 'productPageSlice',
	baseQuery: fetchBaseQuery({
		baseUrl: '/',
	}),
	endpoints: builder => ({
		getBookInfo: builder.query({
			query: id => `https://backend-tan-phi.vercel.app/api/${id}`,
		}),
	}),
})

export const { useGetBookInfoQuery } = productPageSlice
