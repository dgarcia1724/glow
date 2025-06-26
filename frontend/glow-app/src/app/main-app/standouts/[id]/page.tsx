"use client";

import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { dummyStandouts } from "@/data/dummyStandouts";
import Image from "next/image";
import { coreValueEmojis } from "@/utils/emojiMappings";
import StandoutTopNav from "@/components/StandoutTopNav";
import BlockModal from "@/components/BlockModal";
import SparkModal from "@/components/SparkModal";
import ReportModal from "@/components/ReportModal";

export default function StandoutDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  // Modal state - moved before conditional return
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [showSparkModal, setShowSparkModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  // Find the standout user by ID
  const user = dummyStandouts.find((standout) => standout.id.toString() === id);

  // If user not found, redirect to standouts page
  if (!user) {
    router.push("/main-app/standouts");
    return null;
  }

  const handleSparkClick = () => {
    setShowSparkModal(true);
  };

  const handleSendSpark = (comment: string) => {
    // Handle sending spark with comment
    console.log(`Sending spark to ${user.firstName} with comment:`, comment);
    setShowSparkModal(false);
  };

  const handleCloseSparkModal = () => {
    setShowSparkModal(false);
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

  const handleReportClick = () => {
    setShowReportModal(true);
  };

  const handleReportConfirm = (reason: string) => {
    // Handle reporting user
    console.log(`Reporting ${user.firstName} for: ${reason}`);
    setShowReportModal(false);
  };

  const handleCloseReportModal = () => {
    setShowReportModal(false);
  };

  const handleBack = () => {
    router.push("/main-app/standouts");
  };

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

  return (
    <div className="min-h-screen bg-gray-100">
      <StandoutTopNav
        firstName={user.firstName}
        age={calculateAge(user.birthday)}
        lastActive={user.lastActive}
        createdAt={user.createdAt}
        onBack={handleBack}
      />

      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden pb-32">
        {/* Core Values Section */}
        <div className="p-6 pb-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Core Values</h2>
            <div className="flex flex-wrap gap-2">
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
                {coreValueEmojis[user.coreValues.religion]}{" "}
                {user.coreValues.religion}
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
          {/* About Me Section */}
          {(user.jobTitle || user.education || user.bio) && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">About Me</h2>

              {/* Job Title and Education bubbles */}
              {(user.jobTitle || user.education) && (
                <div className="flex flex-wrap gap-2">
                  {/* Job Title */}
                  {user.jobTitle && (
                    <div className="px-3 py-1.5 rounded-full border-2 border-black/10 bg-white text-black text-sm font-medium whitespace-nowrap flex items-center">
                      <span className="mr-2">💼</span>
                      {user.jobTitle}
                    </div>
                  )}

                  {/* Education */}
                  {user.education && (
                    <div className="px-3 py-1.5 rounded-full border-2 border-black/10 bg-white text-black text-sm font-medium whitespace-nowrap flex items-center">
                      <span className="mr-2">🎓</span>
                      {user.education}
                    </div>
                  )}
                </div>
              )}

              {/* Bio */}
              {user.bio && <p className="text-gray-600">{user.bio}</p>}
            </div>
          )}

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
            <button
              className="w-full py-3 px-4 rounded-lg border-2 border-red-300 bg-white text-red-600 font-medium hover:bg-red-50 transition-colors cursor-pointer"
              onClick={handleReportClick}
            >
              Report
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons - Fixed Bottom */}
      <div className="fixed bottom-24 left-0 right-0 flex justify-center gap-16 sm:gap-22  px-8">
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
          className="w-16 h-16 rounded-full bg-black text-yellow-300 flex items-center justify-center shadow-lg hover:bg-gray-900 transition-all cursor-pointer"
          onClick={handleSparkClick}
        >
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

      {/* Block Modal */}
      {showBlockModal && (
        <BlockModal
          isOpen={showBlockModal}
          onClose={handleCloseBlockModal}
          onConfirm={handleBlockConfirm}
          userName={user.firstName}
        />
      )}

      {/* Spark Modal */}
      {showSparkModal && (
        <SparkModal
          isOpen={showSparkModal}
          onClose={handleCloseSparkModal}
          onSend={handleSendSpark}
          userName={user.firstName}
        />
      )}

      {/* Report Modal */}
      {showReportModal && (
        <ReportModal
          isOpen={showReportModal}
          onClose={handleCloseReportModal}
          onConfirm={handleReportConfirm}
          userName={user.firstName}
        />
      )}
    </div>
  );
}
