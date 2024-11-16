"use client";

import React from "react";
import { useGetClassesQuery } from "@/app/redux/features/class/classApi";
import { ISchedule } from "@/app/types/IClass";
import { formatDate, formatTime } from "@/app/utilities/FormatDataString";
import { useBookClassMutation } from "../redux/features/trainee/traineeApi";
import { showToast } from "../utilities/ToastOptions";
import { useRouter } from "next/navigation";
type props = {
  traineeId: string;
};
export default function BookClass({ traineeId }: props) {
  const { data, isLoading } = useGetClassesQuery(undefined);
  const [bookClass] = useBookClassMutation();
  const router = useRouter();
  console.log(data);
  if (isLoading) return <div className="text-center py-4">Loading...</div>;

  // If there's no data, show a message
  if (!data || !data.data || data.data.length === 0) {
    return <div className="text-center py-4">No classes available</div>;
  }

  const handleBook = async (classId: string) => {
    try {
      // Replace with dynamic value if available
      const payload = await bookClass({
        id: classId,
        data: { traineeId },
      }).unwrap();
      showToast("success", payload?.message);
      router.push("/dashboard/trainee/bookingClass");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      showToast("error", err?.data?.message || "Failed to book the class.");
    }
  };

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Class Schedules
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2 font-medium text-sm text-gray-700">
                Class Name
              </th>
              <th className="px-4 py-2 font-medium text-sm text-gray-700">
                Trainer Name
              </th>
              <th className="px-4 py-2 font-medium text-sm text-gray-700">
                Date
              </th>
              <th className="px-4 py-2 font-medium text-sm text-gray-700">
                Time
              </th>
              <th className="px-4 py-2 font-medium text-sm text-gray-700">
                Duration (min)
              </th>
              <th className="px-4 py-2 font-medium text-sm text-gray-700">
                Max Capacity
              </th>
              <th className="px-4 py-2 font-medium text-sm text-gray-700">
                Available Sit
              </th>
              <th className="px-4 py-2 font-medium text-sm text-gray-700">
                Book Sit
              </th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((classItem: ISchedule) => (
              <tr key={classItem._id} className="border-t">
                <td className="px-4 py-2 text-sm text-gray-700">
                  {classItem.className}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {`${classItem.trainer.name.firstName}  ${classItem.trainer.name.lastName}`}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {formatDate(classItem.date)}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {formatTime(classItem?.time)}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {`${classItem.duration} min`}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {classItem.maxCapacity}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {classItem.maxCapacity - classItem.trainees.length}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  <button
                    onClick={() => handleBook(classItem._id)}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                  >
                    book
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
