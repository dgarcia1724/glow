"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { dummyUser } from "@/data/dummyUser";
import EditContent from "./components/EditContent";
import ViewContent from "./components/ViewContent";

export default function EditProfilePage() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<"edit" | "view">("edit");

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
          <div className="grid grid-cols-5 px-6 py-4">
            <div></div>
            <button
              onClick={() => setSelectedTab("edit")}
              className={`text-lg font-bold transition-all cursor-pointer ${
                selectedTab === "edit"
                  ? "text-black relative after:absolute after:bottom-[-1rem] after:left-[-1.5rem] after:right-[-1.5rem] after:h-2 after:bg-gradient-to-r after:from-yellow-200 after:via-yellow-300 after:to-yellow-100"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              aria-label="Edit"
            >
              Edit
            </button>
            <div></div>
            <button
              onClick={() => setSelectedTab("view")}
              className={`text-lg font-bold transition-all cursor-pointer ${
                selectedTab === "view"
                  ? "text-black relative after:absolute after:bottom-[-1rem] after:left-[-1.5rem] after:right-[-1.5rem] after:h-2 after:bg-gradient-to-r after:from-yellow-200 after:via-yellow-300 after:to-yellow-100"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              aria-label="View"
            >
              View
            </button>
            <div></div>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 overflow-y-auto mt-8">
          {selectedTab === "edit" ? <EditContent /> : <ViewContent />}
        </div>
      </div>
    </div>
  );
}
