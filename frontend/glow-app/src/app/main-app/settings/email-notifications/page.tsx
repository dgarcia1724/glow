"use client";

import React, { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function EmailNotificationsPage() {
  const router = useRouter();
  const [notifications, setNotifications] = useState({
    newLikes: true,
    newMatches: true,
    newMessages: false,
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

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
            {/* New Likes */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💛</span>
                  <div>
                    <p className="font-medium text-gray-900">New Likes</p>
                    <p className="text-sm text-gray-600">
                      Get notified when someone likes you
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleNotification("newLikes")}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 cursor-pointer ${
                    notifications.newLikes ? "bg-yellow-400" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications.newLikes ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* New Matches */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="font-medium text-gray-900">New Matches</p>
                    <p className="text-sm text-gray-600">
                      Get notified when you match with someone
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleNotification("newMatches")}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 cursor-pointer ${
                    notifications.newMatches ? "bg-yellow-400" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications.newMatches
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* New Messages */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="font-medium text-gray-900">New Messages</p>
                    <p className="text-sm text-gray-600">
                      Get notified when you receive a message
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleNotification("newMessages")}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 cursor-pointer ${
                    notifications.newMessages ? "bg-yellow-400" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications.newMessages
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
