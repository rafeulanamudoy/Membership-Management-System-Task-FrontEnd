"use client";

import { ENUM_USER_ROLE, ISignUpData } from "@/app/types/Iuser";

import Input from "@/app/utilities/reactHookForm/Input";
import Link from "next/link";
import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "@/app/lib/validation/YupValidation";
import { useForm } from "react-hook-form";
import { Form } from "@/app/utilities/reactHookForm/Form";
import { useSignUpMutation } from "@/app/redux/features/auth/authApi";

import { showToast } from "@/app/utilities/ToastOptions";

export default function TrainerAccount() {
  const [postUser] = useSignUpMutation();

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm({ resolver: yupResolver(SignUpSchema) });
  const onSubmit = async (userData: ISignUpData) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const submitData: ISignUpData = {
      name: {
        firstName: userData?.name?.firstName,
        lastName: userData?.name?.lastName,
      },
      email: userData?.email,
      password: userData?.password,
      role: ENUM_USER_ROLE.TRAINER,
    };

    try {
      const payload = await postUser(submitData).unwrap();

      showToast("success", payload?.message);

      reset();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      showToast("error", error?.data?.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-6">
          Trainer Account
        </h2>
        <Form
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          className="space-y-4"
        >
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              First Name
            </label>
            <Input
              type="text"
              name="name.firstName"
              error={errors?.name?.firstName && errors.name?.firstName.message}
              register={register}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Last Name
            </label>
            <Input
              error={errors?.name?.lastName && errors.name?.lastName.message}
              register={register}
              name="name.lastName"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Email
            </label>
            <Input
              type="email"
              error={errors.email?.message}
              register={register}
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Password
            </label>
            <Input
              type="password"
              error={errors.password?.message}
              register={register}
              name="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Confirm Password
            </label>
            <Input
              type="text"
              error={errors.confirmPassword?.message}
              register={register}
              name="confirmPassword"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Sign Up
          </button>
        </Form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <Link href="/signIn" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
