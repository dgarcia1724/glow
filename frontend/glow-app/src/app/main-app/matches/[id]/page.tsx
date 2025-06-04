"use client";

import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { dummyMatches } from "@/data/dummyMatches";

export default function MatchChatPage() {
  const router = useRouter();
  const params = useParams();
  const [selectedTab, setSelectedTab] = useState<"chat" | "profile">("chat");
  const match = dummyMatches.find((m) => m.uid === params.id);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-4 relative">
          <button
            onClick={() => router.back()}
            className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            aria-label="Back"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex-1 flex justify-center">
            <span className="text-lg font-bold text-gray-900 truncate">
              {match ? match.firstName : "Match"}
            </span>
          </div>
          <button
            className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            aria-label="More options"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="6" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="12" cy="18" r="1.5" />
            </svg>
          </button>
        </div>
        {/* Toggle bar */}
        <div className="grid grid-cols-5 px-4 py-4">
          <div></div>
          <button
            onClick={() => setSelectedTab("chat")}
            className={`text-lg font-bold transition-all cursor-pointer ${
              selectedTab === "chat"
                ? "text-black relative after:absolute after:bottom-[-1rem] after:left-[-1.5rem] after:right-[-1.5rem] after:h-2 after:bg-gradient-to-r after:from-yellow-200 after:via-yellow-300 after:to-yellow-100"
                : "text-gray-400 hover:text-gray-600"
            }`}
            aria-label="Chat"
          >
            Chat
          </button>
          <div></div>
          <button
            onClick={() => setSelectedTab("profile")}
            className={`text-lg font-bold transition-all cursor-pointer ${
              selectedTab === "profile"
                ? "text-black relative after:absolute after:bottom-[-1rem] after:left-[-1.5rem] after:right-[-1.5rem] after:h-2 after:bg-gradient-to-r after:from-yellow-200 after:via-yellow-300 after:to-yellow-100"
                : "text-gray-400 hover:text-gray-600"
            }`}
            aria-label="Profile"
          >
            Profile
          </button>
          <div></div>
        </div>
      </div>
      {/* Main content area */}
      <div className="flex-1 overflow-y-auto mt-8">
        {/* Leave blank for now */}
      </div>
    </div>
  );
}
