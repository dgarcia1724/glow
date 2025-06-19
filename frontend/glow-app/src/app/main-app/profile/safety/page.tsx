"use client";

import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function SafetyPage() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="w-10" /> {/* Spacer for balance */}
          <h1 className="text-xl font-semibold text-gray-900">Safety</h1>
          <button
            onClick={() => router.back()}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close safety"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Main content area */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-6 py-4">
            <p className="text-gray-600">
              Safety settings and features will be implemented here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
