/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ClassSchema } from "@/app/lib/validation/YupValidation";
import { useAddClassScheduleMutation } from "@/app/redux/features/class/classApi";
import { ISchedule } from "@/app/types/IClass";
import { Form } from "@/app/utilities/reactHookForm/Form";
import Input from "@/app/utilities/reactHookForm/Input";
import { showToast } from "@/app/utilities/ToastOptions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISignUpData } from "@/app/types/Iuser";
import { useGetTrainersQuery } from "@/app/redux/features/trainers/trainersApi";

export default function CreateClass() {
  const { data: trainerData, isLoading } = useGetTrainersQuery(undefined);
  const [createSchedule] = useAddClassScheduleMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ClassSchema),
  });

  const onSubmit = async (formData: ISchedule) => {
    const scheduleData = {
      className: formData.className,
      trainer: formData.trainer,
      date: formData.date,
      time: formData.time, // Added time field
      duration: 60,
      maxCapacity: 10,
    };

    try {
      const payload = await createSchedule(scheduleData as ISchedule).unwrap();
      showToast("success", payload.message);
      reset();
    } catch (error: any) {
      showToast("error", error?.data?.message || "Failed to create class");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-6">
          Create Class
        </h2>
        <Form
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          className="space-y-6"
        >
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Class Name
            </label>
            <Input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="className"
              error={errors.className?.message}
              register={register}
              required
            />
          </div>

          <div>
            <Input
              name="trainer"
              label="Trainer"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              selectOptions={trainerData?.data?.map((trainer: ISignUpData) => ({
                value: trainer._id,
                label: trainer.email,
              }))}
              error={errors.trainer?.message}
              register={register}
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <Input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="date"
              label="Date"
              type="date"
              error={errors.date?.message}
              register={register}
              required
            />
          </div>

          <div>
            <Input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="time"
              label="Time"
              type="time"
              error={errors.time?.message}
              register={register}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition duration-300 shadow-md"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Create Class"}
          </button>
        </Form>
      </div>
    </div>
  );
}
