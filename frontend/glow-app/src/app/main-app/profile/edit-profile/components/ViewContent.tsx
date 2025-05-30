import React from "react";
import { dummyUser } from "@/data/dummyUser";

export default function ViewContent() {
  return (
    <div className="flex-1 p-6">
      <h2 className="text-xl font-semibold mb-4">View Profile</h2>
      {/* Add your view content here */}
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-700">Name</h3>
          <p className="mt-1 text-gray-900">{dummyUser.firstName}</p>
        </div>
        {/* Add more profile information as needed */}
      </div>
    </div>
  );
}
