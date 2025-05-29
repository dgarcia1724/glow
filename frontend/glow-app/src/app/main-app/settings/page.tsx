"use client";

import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="w-10" /> {/* Spacer for balance */}
          <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
          <button
            onClick={() => router.back()}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close settings"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Main content area */}
        <div className="flex-1 px-6 pt-8">
          <div className="max-w-md mx-auto space-y-4">
            <button className="w-full px-8 py-3 rounded-full bg-gradient-to-tr from-yellow-200 via-yellow-300 to-yellow-100 text-black font-medium hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-200 transition-all shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-200 text-center cursor-pointer">
              Log Out
            </button>
            <button className="w-full px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-all shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-200 text-center cursor-pointer">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
