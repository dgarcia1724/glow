import React, { useState } from "react";
import { useParams } from "next/navigation";
import { dummyMatches } from "@/data/dummyMatches";
import Image from "next/image";
import { coreValueEmojis } from "@/utils/emojiMappings";
import BlockModal from "@/components/BlockModal";
import ReportModal from "@/components/ReportModal";

export default function Profile() {
  const params = useParams();
  const match = dummyMatches.find((m) => m.uid === params.id);

  // Modal state
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  if (!match) {
    return <div className="text-center text-gray-400 mt-8">No match found</div>;
  }

  const handleBlockClick = () => {
    setShowBlockModal(true);
  };

  const handleBlockConfirm = () => {
    // Handle blocking user
    console.log(`Blocking ${match.firstName}`);
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
    console.log(`Reporting ${match.firstName} for: ${reason}`);
    setShowReportModal(false);
  };

  const handleCloseReportModal = () => {
    setShowReportModal(false);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gray-100">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden pb-32">
        {/* Core Values Section */}
        <div className="p-6 pb-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Core Values</h2>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1.5 rounded-full border-2 border-black/10 bg-white text-black text-sm font-medium whitespace-nowrap flex items-center">
                <div
                  className={`w-4 h-4 rounded-full mr-2 ${
                    match.coreValues.politics === "Liberal"
                      ? "bg-blue-700"
                      : match.coreValues.politics === "Left-Leaning"
                      ? "bg-sky-400"
                      : match.coreValues.politics === "Moderate"
                      ? "bg-purple-400"
                      : match.coreValues.politics === "Right-Leaning"
                      ? "bg-rose-400"
                      : match.coreValues.politics === "Conservative"
                      ? "bg-red-700"
                      : ""
                  }`}
                />
                {match.coreValues.politics}
              </div>
              <div className="px-3 py-1.5 rounded-full border-2 border-black/10 bg-white text-black text-sm font-medium whitespace-nowrap">
                {coreValueEmojis[match.coreValues.religion]}{" "}
                {match.coreValues.religion}
              </div>
            </div>
          </div>
        </div>

        {/* Main Photo */}
        <div className="relative h-[500px] w-full">
          <Image
            src={match.photoURL || ""}
            alt={match.displayName || match.firstName}
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
              {match.coreValues.relationshipType.map((type) => (
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
          {(match.jobTitle || match.education || match.bio) && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">About Me</h2>

              {/* Job Title and Education bubbles */}
              {(match.jobTitle || match.education) && (
                <div className="flex flex-wrap gap-2">
                  {/* Job Title */}
                  {match.jobTitle && (
                    <div className="px-3 py-1.5 rounded-full border-2 border-black/10 bg-white text-black text-sm font-medium whitespace-nowrap flex items-center">
                      <span className="mr-2">💼</span>
                      {match.jobTitle}
                    </div>
                  )}

                  {/* Education */}
                  {match.education && (
                    <div className="px-3 py-1.5 rounded-full border-2 border-black/10 bg-white text-black text-sm font-medium whitespace-nowrap flex items-center">
                      <span className="mr-2">🎓</span>
                      {match.education}
                    </div>
                  )}
                </div>
              )}

              {/* Bio */}
              {match.bio && <p className="text-gray-600">{match.bio}</p>}
            </div>
          )}

          {/* Second Photo */}
          {match.pictures && match.pictures[1] && (
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src={match.pictures[1].url}
                alt={`${match.firstName}'s second photo`}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Third Photo */}
          {match.pictures && match.pictures[2] && (
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src={match.pictures[2].url}
                alt={`${match.firstName}'s third photo`}
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
                {match.location.city}, {match.location.state}
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

      {/* Block Modal */}
      {showBlockModal && (
        <BlockModal
          isOpen={showBlockModal}
          onClose={handleCloseBlockModal}
          onConfirm={handleBlockConfirm}
          userName={match.firstName}
        />
      )}

      {/* Report Modal */}
      {showReportModal && (
        <ReportModal
          isOpen={showReportModal}
          onClose={handleCloseReportModal}
          onConfirm={handleReportConfirm}
          userName={match.firstName}
        />
      )}
    </div>
  );
}
