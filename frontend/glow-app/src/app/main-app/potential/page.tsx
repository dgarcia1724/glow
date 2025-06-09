"use client";

import React from "react";
import { dummyUsers } from "@/data/dummyUsers";
import Image from "next/image";
import { coreValueEmojis } from "@/utils/emojiMappings";
import PotentialTopNav from "@/components/PotentialTopNav";

export default function PotentialPage() {
  // For now, we'll just use the first user
  const user = dummyUsers[0];

  return (
    <div className="min-h-screen bg-gray-100">
      <PotentialTopNav firstName={user.firstName} />

      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Core Values Section */}
        <div className="p-6 pb-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Core Values</h2>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1.5 rounded-full border-2 border-black/10 bg-white text-black text-sm font-medium whitespace-nowrap">
                {coreValueEmojis[user.coreValues.religion]}{" "}
                {user.coreValues.religion}
              </div>
              <div className="px-3 py-1.5 rounded-full border-2 border-black/10 bg-white text-black text-sm font-medium whitespace-nowrap flex items-center">
                <div
                  className={`w-4 h-4 rounded-full mr-2 ${
                    user.coreValues.politics === "Liberal"
                      ? "bg-blue-700"
                      : user.coreValues.politics === "Left-Leaning"
                      ? "bg-sky-400"
                      : user.coreValues.politics === "Moderate"
                      ? "bg-purple-400"
                      : user.coreValues.politics === "Right-Leaning"
                      ? "bg-rose-400"
                      : user.coreValues.politics === "Conservative"
                      ? "bg-red-700"
                      : ""
                  }`}
                />
                {user.coreValues.politics}
              </div>
              <div className="px-3 py-1.5 rounded-full border-2 border-black/10 bg-white text-black text-sm font-medium whitespace-nowrap">
                {coreValueEmojis[user.coreValues.relationshipType]}{" "}
                {user.coreValues.relationshipType}
              </div>
            </div>
          </div>
        </div>

        {/* Main Photo */}
        <div className="relative h-[500px] w-full">
          <Image
            src={user.pictures[0].url}
            alt={user.displayName || user.firstName}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Age and Location */}
        <div className="p-6 pb-0 flex flex-wrap gap-2">
          <div className="px-4 py-2 rounded-full border-2 border-black/10 bg-white text-black font-medium">
            <span className="mr-2">🎂</span>
            {new Date().getFullYear() - new Date(user.birthday).getFullYear()}
          </div>
          <div className="px-4 py-2 rounded-full border-2 border-black/10 bg-white text-black font-medium">
            <span className="mr-2">📍</span>
            {user.location.city}, {user.location.state}
          </div>
        </div>

        {/* User Info */}
        <div className="p-6 space-y-6">
          {/* Bio Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Bio</h2>
            <p className="text-gray-700 text-lg">{user.bio}</p>
          </div>

          {/* Second Photo */}
          {user.pictures[1] && (
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src={user.pictures[1].url}
                alt={`${user.firstName}'s second photo`}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Third Photo */}
          {user.pictures[2] && (
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src={user.pictures[2].url}
                alt={`${user.firstName}'s third photo`}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons - Sticky */}
      <div className="fixed bottom-24 left-0 right-0 flex justify-between px-8 z-50">
        <button className="w-16 h-16 rounded-full bg-gradient-to-tr from-gray-50 via-gray-100 to-gray-50 text-black flex items-center justify-center shadow-lg hover:from-gray-200 hover:via-gray-300 hover:to-gray-200 transition-all cursor-pointer">
          <svg
            className="w-8 h-8"
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
        </button>

        <button className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-200 via-yellow-300 to-yellow-100 text-black flex items-center justify-center shadow-lg hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-200 transition-all cursor-pointer">
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.5"
              transform="rotate(0 12 12)"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
