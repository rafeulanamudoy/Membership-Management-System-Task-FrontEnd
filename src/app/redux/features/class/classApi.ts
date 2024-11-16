import { ISignUpData } from "@/app/types/Iuser";
import { baseApi } from "../../api/baseApi";
import { ISchedule } from "@/app/types/IClass";

export const classApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addClassSchedule: build.mutation({
      query: (data: ISchedule) => ({
        url: "/admin/createClass",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Class"],
    }),
    adminSignUp: build.mutation({
      query: (data: ISignUpData) => ({
        url: "/admin/signUp",
        method: "POST",
        body: data,
      }),
    }),
    // Add a new query for getting trainers

    getClasses: build.query({
      query: () => ({
        url: "/admin/getClass",
        method: "GET",
      }),
      providesTags: ["Class"],
    }),
  }),
});

export const {
  useAddClassScheduleMutation,
  useAdminSignUpMutation,

  useGetClassesQuery,
} = classApi;