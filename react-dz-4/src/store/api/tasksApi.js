import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  refetchOnFocus: true,
  endpoints: build => ({
    getTasks: build.query({
      query: arg => `todos`,
    }),
  })
});

export const {useGetTasksQuery} = tasksApi