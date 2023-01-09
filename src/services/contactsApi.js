import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `contacts`,
      providesTags: ["Contacts"],
    }),

    getContact: builder.query({
      query: (id) => `contacts/${id}`,
      providesTags: ["Contacts"],
    }),

    deleteContact: builder.mutation({
      query: (id) => ({
        url: `contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),

    addContact: builder.mutation({
      query: (payload) => ({
        url: "contacts",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Contacts"],
    }),
    editContact: builder.mutation({
      query: (payload) => ({
        url: `contacts/${payload.id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetContactQuery,
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useEditContactMutation,
} = contactApi;
