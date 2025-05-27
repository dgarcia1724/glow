"use client";

import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function FiltersPage() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="w-10" /> {/* Spacer for balance */}
          <h1 className="text-xl font-semibold text-gray-900">
            Dating Filters
          </h1>
          <button
            onClick={() => router.back()}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close filters"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Main content area */}
        <div className="flex-1">{/* Content will go here */}</div>
      </div>
    </div>
  );
}
