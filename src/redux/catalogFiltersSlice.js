import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const catalogFiltersApi = createApi({
	reducerPath: 'catalogFiltersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: '/',
	}),
	endpoints: builder => ({
		getCatalogFilters: builder.query({
			query: () => 'filtersNames.json',
		}),
	}),
})

export const { useGetCatalogFiltersQuery } = catalogFiltersApi
