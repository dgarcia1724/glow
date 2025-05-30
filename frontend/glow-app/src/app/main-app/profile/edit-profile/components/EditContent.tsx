import React from "react";
import { dummyUser } from "@/data/dummyUser";

export default function EditContent() {
  return (
    <div className="flex-1 p-6">
      <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
      {/* Add your edit form fields here */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            defaultValue={dummyUser.firstName}
          />
        </div>
        {/* Add more form fields as needed */}
      </div>
    </div>
  );
}
