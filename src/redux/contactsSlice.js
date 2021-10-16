import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://616ab73d16e7120017fa1085.mockapi.io/api/v1/',
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useFetchContactsQuery, useDeleteContactMutation } = contactApi;
