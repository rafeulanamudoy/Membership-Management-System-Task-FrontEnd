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
  }),
});

export const { useSignUpMutation, useSignInMutation, useAdminSignUpMutation } =
  authApi;
