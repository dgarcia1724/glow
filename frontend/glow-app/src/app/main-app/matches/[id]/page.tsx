"use client";

import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { dummyMatches } from "@/data/dummyMatches";
import Chat from "./components/Chat";
import Profile from "./components/Profile";

export default function MatchChatPage() {
  const router = useRouter();
  const params = useParams();
  const [selectedTab, setSelectedTab] = useState<"chat" | "profile">("chat");
  const [openMenu, setOpenMenu] = useState(false);
  const match = dummyMatches.find((m) => m.uid === params.id);

  const calculateAge = (birthday: string) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleUnmatch = (matchId: string) => {
    // TODO: Implement unmatch functionality
    console.log("Unmatch with:", matchId);
    setOpenMenu(false);
    router.push("/main-app/matches");
  };

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
              {match ? (
                <>
                  <span className="font-bold">{match.firstName}</span>
                  <span className="font-light">
                    , {calculateAge(match.birthday)}
                  </span>
                </>
              ) : (
                "Match"
              )}
            </span>
          </div>
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenMenu(!openMenu);
              }}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            {openMenu && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenu(false);
                  }}
                />
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUnmatch(match?.uid || "");
                    }}
                    className="w-full px-4 py-3 text-left text-red-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer flex items-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Unmatch
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Toggle bar */}
        <div className="grid grid-cols-5 px-4 py-4">
          <div></div>
          <button
            onClick={() => setSelectedTab("chat")}
            className={`text-lg font-bold transition-all cursor-pointer ${
              selectedTab === "chat"
                ? "text-black relative after:absolute after:bottom-[-1rem] after:left-[-1.5rem] after:right-[-1.5rem] after:h-2 after:bg-gradient-to-r after:from-teal-200 after:via-teal-300 after:to-teal-100"
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
                ? "text-black relative after:absolute after:bottom-[-1rem] after:left-[-1.5rem] after:right-[-1.5rem] after:h-2 after:bg-gradient-to-r after:from-teal-200 after:via-teal-300 after:to-teal-100"
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
      {selectedTab === "chat" ? <Chat /> : <Profile />}
    </div>
  );
}
