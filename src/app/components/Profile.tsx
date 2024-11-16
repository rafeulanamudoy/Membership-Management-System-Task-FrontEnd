"use client";

import React from "react";
import { useGetSingleUserQuery } from "../redux/features/auth/authApi";
import { UserPayload } from "../types/Iuser";
import { useRouter } from "next/navigation";

// Define props type
type Props = {
  user: UserPayload;
};

export default function Profile({ user }: Props) {
  const { data, isLoading, error } = useGetSingleUserQuery(user.email);
  const router = useRouter();
  // Handle loading, error, and display logic
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading user data.</div>;

  // Button click handler (Example)

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>

      {/* User Information Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left">Field</th>
              <th className="px-4 py-2 border-b text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            {/* Display user data */}
            <tr>
              <td className="px-4 py-2 border-b">Email</td>
              <td className="px-4 py-2 border-b">{data?.data?.email}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Name</td>
              <td className="px-4 py-2 border-b">{`${data?.data.name?.firstName} ${data?.data.name?.lastName}`}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Update Button */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={() =>
            router.push(`/dashboard/updateUser/${data?.data?._id}`)
          }
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Update
        </button>
      </div>
    </div>
  );
}
