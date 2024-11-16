import { baseApi } from "../../api/baseApi";

export const trainerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTrainers: build.query({
      query: () => ({
        url: "/admin/trainers",
        method: "GET",
      }),
      providesTags: (result) =>
        result ? [{ type: "Trainer", id: "LIST" }] : [], // Using a single list tag
    }),
    updateTrainer: build.mutation({
      query: ({ id, data }) => ({
        url: `admin/trainers/${id}`,
        method: "PATCH",
        body: data, // Payload containing fields to update
      }),
      invalidatesTags: [{ type: "Trainer", id: "LIST" }],
    }),
    deleteTrainer: build.mutation({
      query: (id) => ({
        url: `admin/trainers/${id}`,
        method: "DELETE",
      }),
      // Invalidate the cache when a trainer is deleted
      invalidatesTags: [{ type: "Trainer", id: "LIST" }],
    }),
    getSingleTainer: build.query({
      query: (id) => ({
        url: `admin/trainer/${id}`,
        method: "GET",
      }),
      // Invalidate the cache when a trainer is deleted
    }),
  }),
});

export const {
  useGetTrainersQuery,
  useUpdateTrainerMutation,
  useDeleteTrainerMutation,
  useGetSingleTainerQuery,
} = trainerApi;
