"use client";

import React, { useState } from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

export default function Notifications() {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save notification preference
    router.push("/onboarding/basic-info");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <main className="flex-1 flex flex-col justify-start items-center px-6 pt-8">
        {/* Progress indicator and icon */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-gray-200 inline-block" />
            <span className="w-2 h-2 rounded-full bg-gray-200 inline-block ml-2" />
            <span className="w-2 h-2 rounded-full bg-gray-200 inline-block ml-2" />
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-yellow-300 bg-white ml-2">
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-2 text-center">
            Enable notifications?
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Get notified about important updates and reminders
          </p>
        </div>

        {/* Notification options */}
        <div className="w-full max-w-md mx-auto flex flex-col gap-6">
          <div
            onClick={() => setNotificationsEnabled(!notificationsEnabled)}
            className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-yellow-400 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-black">Push Notifications</h3>
                <p className="text-sm text-gray-600">
                  Receive important updates and reminders
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div
                className={`w-12 h-6 rounded-full transition-colors ${
                  notificationsEnabled ? "bg-yellow-400" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                    notificationsEnabled ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex justify-center"
        >
          <YellowGradientButton type="submit">Continue</YellowGradientButton>
        </form>
      </div>
    </div>
  );
}
