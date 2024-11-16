"use client";

import {
  useDeleteTrainerMutation,
  useGetTrainersQuery,
} from "@/app/redux/features/trainers/trainersApi";
import React from "react";
import { IUserSchemaData } from "../types/Iuser";
import { useRouter } from "next/navigation";

export default function TrainerManagement() {
  const { data: trainerData, isLoading } = useGetTrainersQuery(undefined);

  const [deleteTrainer] = useDeleteTrainerMutation();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;

  if (!trainerData || !trainerData.data || trainerData.data.length === 0) {
    return <div>No trainers available</div>;
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this trainer?")) {
      deleteTrainer(id)
        .unwrap()
        .then(() => alert("Trainer deleted successfully"))
        .catch((err) => alert(`Error deleting trainer: ${err.message}`));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Trainer Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 font-medium text-sm text-gray-700">
                Name
              </th>
              <th className="px-4 py-2 font-medium text-sm text-gray-700">
                Email
              </th>
              <th className="px-4 py-2 font-medium text-sm text-gray-700">
                Update
              </th>
              <th className="px-4 py-2 font-medium text-sm text-gray-700">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {trainerData?.data?.map((trainer: IUserSchemaData) => (
              <tr key={trainer._id} className="border-t">
                <td className=" text-center px-4 py-2 text-sm text-gray-700">
                  {`${trainer.name.firstName} ${trainer?.name.lastName}`}
                </td>
                <td className="px-4 text-center py-2 text-sm text-gray-700">
                  {trainer.email}
                </td>
                <td className=" text-center px-4 py-2 text-sm text-gray-700">
                  <button
                    onClick={() =>
                      router.push(`/dashboard/updateTrainer/${trainer._id}`)
                    }
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Update
                  </button>
                </td>
                <td className="px-4 text-center py-2 text-sm text-gray-700">
                  <button
                    onClick={() => handleDelete(trainer._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
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
