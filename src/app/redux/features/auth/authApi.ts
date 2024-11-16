import { ISignInData, ISignUpData } from "@/app/types/Iuser";
import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (data: ISignUpData) => ({
        url: "/account/signUp",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Trainer", id: "LIST" }],
    }),
    adminSignUp: build.mutation({
      query: (data: ISignUpData) => ({
        url: "/admin/signUp",
        method: "POST",
        body: data,
      }),
    }),
    SignIn: build.mutation({
      query: (data: ISignInData) => ({
        url: "/account/signin",
        method: "POST",
        body: data,
      }),
    }),
    updateUser: build.mutation({
      query: ({ id, data }) => ({
        url: `/account/${id}`,
        method: "PATCH",
        body: data, // Payload containing fields to update
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
    getSingleUser: build.query({
      query: (email) => ({
        url: `account/${email}`,
        method: "GET",
      }),
      // Invalidate the cache when a trainer is deleted
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useAdminSignUpMutation,
  useGetSingleUserQuery,
  useUpdateUserMutation,
} = authApi;
