import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category } from '../types';

export const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://the-trivia-api.com/api',
  }),
  tagTypes: ['Categories'],
  endpoints: (builder) => ({
    fetchCategories: builder.query<Category, void>({
      query: () => '/categories',
    }),
  }),
});

export const { useFetchCategoriesQuery } = categoriesApi;
