"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { dummyUser } from "@/data/dummyUser";

export default function EditProfilePage() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="border-b border-gray-200">
          {/* Top Row */}
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => router.back()}
              className="text-lg font-bold text-black hover:text-gray-600 cursor-pointer transition-colors"
              aria-label="Cancel"
            >
              Cancel
            </button>
            <h1 className="text-2xl font-semibold text-gray-900">
              {dummyUser.firstName}
            </h1>
            <button
              onClick={() => {
                // TODO: Implement save functionality
                router.back();
              }}
              className="text-lg font-bold text-black hover:text-gray-600 cursor-pointer transition-colors"
              aria-label="Save changes"
            >
              Save
            </button>
          </div>
          {/* Second Row */}
          <div className="grid grid-cols-5 px-6 py-2">
            <div></div>
            <button
              className="text-lg font-bold text-black hover:text-gray-600 cursor-pointer transition-colors"
              aria-label="Edit"
            >
              Edit
            </button>
            <div></div>
            <button
              className="text-lg font-bold text-black hover:text-gray-600 cursor-pointer transition-colors"
              aria-label="View"
            >
              View
            </button>
            <div></div>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1">{/* Content will go here */}</div>
      </div>
    </div>
  );
}
