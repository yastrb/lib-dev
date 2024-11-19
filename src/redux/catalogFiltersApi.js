import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const catalogFiltersApi = createApi({
	reducerPath: 'catalogFiltersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: '/',
	}),
	endpoints: builder => ({
		getCatalogFilters: builder.query({
			query: () => 'https://backend-o1yz.onrender.com/api/catalog',
		}),
	}),
});

export const { useGetCatalogFiltersQuery } = catalogFiltersApi;
