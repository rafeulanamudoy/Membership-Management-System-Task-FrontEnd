"use client";

import { ISignInData } from "@/app/types/Iuser";

import Input from "@/app/utilities/reactHookForm/Input";
import Link from "next/link";
import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { SignInSchema } from "@/app/lib/validation/YupValidation";
import { useForm } from "react-hook-form";
import { Form } from "@/app/utilities/reactHookForm/Form";
export default function SignIn() {
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SignInSchema) });
  const onSubmit = async (userData: ISignInData) => {
    console.log(userData);

    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4     text-center  text-gray-800">
          Sign In
        </h2>
        <Form
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          className="space-y-4"
        >
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

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Sign In
          </button>
        </Form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Don,t have an account?{" "}
          <Link href="/signUp" className="text-blue-500 hover:underline">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
}
