"use client";

import React, { useState } from "react";
import { dummyUsers } from "@/data/dummyUsers";
import Image from "next/image";
import { coreValueEmojis } from "@/utils/emojiMappings";
import PotentialTopNav from "@/components/PotentialTopNav";
import LikeModal from "@/components/LikeModal";
import BlockModal from "@/components/BlockModal";

export default function PotentialPage() {
  // For now, we'll just use the first user
  const user = dummyUsers[0];

  // Modal state
  const [showLikeModal, setShowLikeModal] = useState(false);
  const [likeType, setLikeType] = useState<"like" | "superlike">("like");
  const [showBlockModal, setShowBlockModal] = useState(false);

  const handleLikeClick = (type: "like" | "superlike") => {
    setLikeType(type);
    setShowLikeModal(true);
  };

  const handleSendLike = (type: "like" | "superlike", comment: string) => {
    // Handle sending like/super like with comment
    console.log(`Sending ${type} to ${user.firstName} with comment:`, comment);
    setShowLikeModal(false);
  };

  const handleCloseModal = () => {
    setShowLikeModal(false);
  };

  const handleBlockClick = () => {
    setShowBlockModal(true);
  };

  const handleBlockConfirm = () => {
    // Handle blocking user
    console.log(`Blocking ${user.firstName}`);
    setShowBlockModal(false);
  };

  const handleCloseBlockModal = () => {
    setShowBlockModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <PotentialTopNav
        firstName={user.firstName}
        age={new Date().getFullYear() - new Date(user.birthday).getFullYear()}
        lastActive={user.lastActive}
        createdAt={user.createdAt}
      />

      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden pb-32">
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

        {/* Relationship Type Section */}
        <div className="p-6 pb-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Looking For</h2>
            <div className="flex flex-wrap gap-2">
              {user.coreValues.relationshipType.map((type) => (
                <div
                  key={type}
                  className="px-3 py-1.5 rounded-full border-2 border-black/10 bg-white text-black text-sm font-medium whitespace-nowrap"
                >
                  {coreValueEmojis[type]} {type}
                </div>
              ))}
            </div>
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

          {/* Location */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Location</h2>
            <div className="flex flex-wrap gap-2">
              <div className="px-4 py-2 rounded-full border-2 border-black/10 bg-white text-black font-medium">
                <span className="mr-2">📍</span>
                {user.location.city}, {user.location.state}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <button
              className="w-full py-3 px-4 rounded-lg border-2 border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={handleBlockClick}
            >
              Block
            </button>
            <button className="w-full py-3 px-4 rounded-lg border-2 border-red-300 bg-white text-red-600 font-medium hover:bg-red-50 transition-colors cursor-pointer">
              Report
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons - Fixed Bottom */}
      <div className="fixed bottom-24 left-0 right-0 flex justify-center gap-48 sm:gap-64 px-8">
        <button className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-300 via-rose-200 to-rose-400 text-black flex items-center justify-center shadow-lg hover:from-rose-400 hover:via-rose-300 hover:to-rose-500 transition-all cursor-pointer">
          <svg
            className="w-10 h-10 font-bold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <button
          className="w-16 h-16 rounded-full bg-gradient-to-tr from-teal-300 via-teal-200 to-teal-400 text-black flex items-center justify-center shadow-lg hover:from-teal-400 hover:via-teal-300 hover:to-teal-500 transition-all cursor-pointer"
          onClick={() => handleLikeClick("like")}
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Like Modal */}
      {showLikeModal && (
        <LikeModal
          isOpen={showLikeModal}
          onClose={handleCloseModal}
          onSend={handleSendLike}
          likeType={likeType}
          userName={user.firstName}
        />
      )}

      {/* Block Modal */}
      {showBlockModal && (
        <BlockModal
          isOpen={showBlockModal}
          onClose={handleCloseBlockModal}
          onConfirm={handleBlockConfirm}
          userName={user.firstName}
        />
      )}
    </div>
  );
}
