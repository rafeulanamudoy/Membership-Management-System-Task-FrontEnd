import { baseApi } from "../../api/baseApi";

export const traineeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    viewClass: build.query({
      query: (id) => ({
        url: `/trainee/view/${id}`,
        method: "GET",
      }),
      providesTags: (result) =>
        result ? [{ type: "Trainee", id: "LIST" }] : [],
    }),
    bookClass: build.mutation({
      query: ({ id, data }) => ({
        url: `trainee/book/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [{ type: "Trainee", id: "LIST" }],
    }),
  }),
});

export const { useViewClassQuery, useBookClassMutation } = traineeApi;
