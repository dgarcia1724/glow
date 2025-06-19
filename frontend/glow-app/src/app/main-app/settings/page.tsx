"use client";

import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();
  const [isHidden, setIsHidden] = useState(false);

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
          <div className="max-w-md mx-auto space-y-6">
            {/* Profile Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Profile
              </h2>

              {/* Hide Account Section */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">👤</span>
                    <span className="font-semibold text-gray-900">
                      Hide Account
                    </span>
                  </div>
                  <button
                    onClick={() => setIsHidden(!isHidden)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 ${
                      isHidden ? "bg-yellow-400" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isHidden ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Your profile won&apos;t appear to new people. You can still
                  chat with existing likes and matches.
                </p>
              </div>
            </div>

            {/* Email Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Email
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="font-medium text-gray-900">
                        jane.doe@gmail.com
                      </p>
                      <p className="text-sm text-gray-600">
                        Primary email address
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 text-sm font-medium text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50 rounded-lg transition-colors cursor-pointer">
                    Edit
                  </button>
                </div>
              </div>
            </div>

            {/* Notifications Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Notifications
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <button
                  onClick={() =>
                    router.push("/main-app/settings/email-notifications")
                  }
                  className="w-full flex items-center justify-between hover:bg-gray-100 rounded-lg p-2 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📧</span>
                    <span className="font-medium text-gray-900">Email</span>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

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
