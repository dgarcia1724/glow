"use client";

import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function EmailNotificationsPage() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <button
            onClick={() => router.back()}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Go back"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Email</h1>
          <div className="w-10" /> {/* Spacer for balance */}
        </div>

        {/* Main content area */}
        <div className="flex-1 px-6 pt-8">
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center">
              <p className="text-gray-600">
                Email notification settings will go here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
