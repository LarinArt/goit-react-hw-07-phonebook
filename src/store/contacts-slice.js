import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { filter: '' },

  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62f8d56f3eab3503d1dbfe4a.mockapi.io/',
  }),
  tagTypes: ['Contacts', 'Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: '/contacts',
      }),
      providesTags: ['Contacts'],
    }),
    getContactByid: builder.query({
      query: id => ({
        url: `/contacts/${id}`,
      }),
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    changeContact: builder.mutation({
      query: ({ contactId, ...newContact }) => ({
        url: `/contacts/${contactId}`,
        method: 'PUT',
        body: newContact,
      }),
      invalidatesTags: ['Contact', 'Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactByidQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
  useChangeContactMutation,
} = contactApi;

export const { changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
