import { baseApi } from "../../api/baseApi";

export const trainerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTrainers: build.query({
      query: () => ({
        url: "/admin/trainers",
        method: "GET",
      }),
      providesTags: (result) =>
        result ? [{ type: "Trainer", id: "LIST" }] : [],
    }),
    updateTrainer: build.mutation({
      query: ({ id, data }) => ({
        url: `admin/trainers/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [{ type: "Trainer", id: "LIST" }],
    }),
    deleteTrainer: build.mutation({
      query: (id) => ({
        url: `admin/trainers/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: [{ type: "Trainer", id: "LIST" }],
    }),
    getSingleTainer: build.query({
      query: (id) => ({
        url: `admin/trainer/${id}`,
        method: "GET",
      }),
    }),
    getTrainerClass: build.query({
      query: (id) => ({
        url: `/trainer/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetTrainersQuery,
  useUpdateTrainerMutation,
  useDeleteTrainerMutation,
  useGetSingleTainerQuery,
  useGetTrainerClassQuery,
} = trainerApi;
