import React from "react";
import { dummyUser } from "@/data/dummyUser";
import Image from "next/image";
import { coreValueEmojis } from "@/utils/emojiMappings";

export default function ViewContent() {
  return (
    <div className="flex-1">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Core Values Section */}
        <div className="p-6 pb-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Core Values</h2>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1.5 rounded-full border-2 border-black/10 bg-white text-black text-sm font-medium whitespace-nowrap">
                {coreValueEmojis[dummyUser.coreValues.religion]}{" "}
                {dummyUser.coreValues.religion}
              </div>
              <div className="px-3 py-1.5 rounded-full border-2 border-black/10 bg-white text-black text-sm font-medium whitespace-nowrap flex items-center">
                <div
                  className={`w-4 h-4 rounded-full mr-2 ${
                    dummyUser.coreValues.politics === "Liberal"
                      ? "bg-blue-700"
                      : dummyUser.coreValues.politics === "Left-Leaning"
                      ? "bg-sky-400"
                      : dummyUser.coreValues.politics === "Moderate"
                      ? "bg-purple-400"
                      : dummyUser.coreValues.politics === "Right-Leaning"
                      ? "bg-rose-400"
                      : dummyUser.coreValues.politics === "Conservative"
                      ? "bg-red-700"
                      : ""
                  }`}
                />
                {dummyUser.coreValues.politics}
              </div>
              <div className="px-3 py-1.5 rounded-full border-2 border-black/10 bg-white text-black text-sm font-medium whitespace-nowrap">
                {coreValueEmojis[dummyUser.coreValues.relationshipType]}{" "}
                {dummyUser.coreValues.relationshipType}
              </div>
            </div>
          </div>
        </div>

        {/* Main Photo */}
        <div className="relative h-[500px] w-full">
          <Image
            src={dummyUser.pictures[0].url}
            alt={dummyUser.displayName || dummyUser.firstName}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Age and Location */}
        <div className="p-6 pb-0 flex flex-wrap gap-2">
          <div className="px-4 py-2 rounded-full border-2 border-black/10 bg-white text-black font-medium">
            <span className="mr-2">🎂</span>
            {new Date().getFullYear() -
              new Date(dummyUser.birthday).getFullYear()}
          </div>
          <div className="px-4 py-2 rounded-full border-2 border-black/10 bg-white text-black font-medium">
            <span className="mr-2">📍</span>
            {dummyUser.location.city}, {dummyUser.location.state}
          </div>
        </div>

        {/* User Info */}
        <div className="p-6 space-y-6">
          {/* Bio Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Bio</h2>
            <p className="text-gray-700 text-lg">{dummyUser.bio}</p>
          </div>

          {/* Second Photo */}
          {dummyUser.pictures[1] && (
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src={dummyUser.pictures[1].url}
                alt={`${dummyUser.firstName}'s second photo`}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Third Photo */}
          {dummyUser.pictures[2] && (
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src={dummyUser.pictures[2].url}
                alt={`${dummyUser.firstName}'s third photo`}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
