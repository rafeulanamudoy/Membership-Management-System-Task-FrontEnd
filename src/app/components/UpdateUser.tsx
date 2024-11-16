"use client";
import { UpdateUserSchema } from "@/app/lib/validation/YupValidation";
import { useGetSingleTainerQuery } from "@/app/redux/features/trainers/trainersApi";
import { ISignUpData } from "@/app/types/Iuser";
import { Form } from "@/app/utilities/reactHookForm/Form";
import Input from "@/app/utilities/reactHookForm/Input";
import { showToast } from "@/app/utilities/ToastOptions";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

import React from "react";
import { useForm } from "react-hook-form";
import { useUpdateUserMutation } from "../redux/features/auth/authApi";
type props = {
  id: string;
};
export default function UpdateUser({ id }: props) {
  const { data } = useGetSingleTainerQuery(id);
  const [updateUser] = useUpdateUserMutation();
  const router = useRouter();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(UpdateUserSchema) });
  const onSubmit = async (userData: ISignUpData) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    try {
      const payload = await updateUser({ id, data: userData }).unwrap();
      showToast("success", payload?.message);
      router.push("/dashboard/trainee/profile");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      showToast("error", error?.data?.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4     text-center  text-gray-800">
          Update User
        </h2>
        <Form
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          className="space-y-4"
          // Pass default values here
        >
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              First Name
            </label>
            <Input
              type="text"
              name="name.firstName"
              error={errors?.name?.firstName?.message}
              register={register}
              defaultValue={data?.data?.name?.firstName}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Last Name
            </label>
            <Input
              error={errors?.name?.lastName?.message}
              register={register}
              defaultValue={data?.data?.name?.lastName}
              name="name.lastName"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Update
          </button>
        </Form>
      </div>
    </div>
  );
}
