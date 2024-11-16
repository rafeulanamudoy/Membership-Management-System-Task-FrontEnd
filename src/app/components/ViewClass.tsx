/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { UserPayload } from "../types/Iuser";
import { useViewClassQuery } from "../redux/features/trainee/traineeApi";

type Props = {
  user: UserPayload;
};

export default function ViewClass({ user }: Props) {
  const { data, isLoading, error } = useViewClassQuery(user._id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading classes.</div>;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold my-4">Enrolled Classes</h2>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Class Name</th>
              <th className="border border-gray-300 px-4 py-2">Trainer</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Time</th>
              <th className="border border-gray-300 px-4 py-2">
                Duration (min)
              </th>
              <th className="border border-gray-300 px-4 py-2">Max Capacity</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((classItem: any) => (
              <tr key={classItem._id}>
                <td className="border border-gray-300 px-4 py-2">
                  {classItem.className}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {`${classItem.trainer?.name?.firstName} ${classItem?.trainer?.name?.lastName}`}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(classItem?.date).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {classItem?.time}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {classItem?.duration}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {classItem?.maxCapacity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
