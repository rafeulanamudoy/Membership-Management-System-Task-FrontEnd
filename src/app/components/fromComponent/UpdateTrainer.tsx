"use client";
import { UpdatTrainerScema } from "@/app/lib/validation/YupValidation";
import {
  useGetSingleTainerQuery,
  useUpdateTrainerMutation,
} from "@/app/redux/features/trainers/trainersApi";
import { ENUM_USER_ROLE, ISignUpData } from "@/app/types/Iuser";
import { Form } from "@/app/utilities/reactHookForm/Form";
import Input from "@/app/utilities/reactHookForm/Input";
import { showToast } from "@/app/utilities/ToastOptions";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

import React from "react";
import { useForm } from "react-hook-form";
type props = {
  id: string;
};
export default function UpdateTrainer({ id }: props) {
  const { data } = useGetSingleTainerQuery(id);
  const [updateTrainer] = useUpdateTrainerMutation();
  const router = useRouter();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(UpdatTrainerScema) });
  const onSubmit = async (userData: ISignUpData) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    try {
      const payload = await updateTrainer({ id, data: userData }).unwrap();
      showToast("success", payload?.message);
      router.push("/dashboard/admin/trainers");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      showToast("error", error?.data?.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4     text-center  text-gray-800">
          Update Trainer
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

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Role
            </label>
            <Input
              error={errors?.role?.message}
              register={register}
              name="role"
              selectOptions={[
                { value: ENUM_USER_ROLE.ADMIN, label: "Admin" },
                { value: ENUM_USER_ROLE.TRAINER, label: "Trainer" },
                { value: ENUM_USER_ROLE.TRAINEE, label: "Trainee" },
              ]}
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
