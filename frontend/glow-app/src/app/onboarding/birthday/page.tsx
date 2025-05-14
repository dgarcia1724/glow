"use client";

import React, { useState } from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";
import ConfirmationModal from "./ConfirmationModal";

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const date = new Date(dateStr + "T00:00:00"); // Add time component to ensure consistent timezone handling
  const day = date.getUTCDate();
  const month = date.toLocaleString("en-US", {
    month: "short",
    timeZone: "UTC",
  });
  const year = date.getUTCFullYear();
  return `Born ${day} ${month} ${year}`;
}

function calculateAge(dateStr: string) {
  if (!dateStr) return "";
  const today = new Date();
  const birthDate = new Date(dateStr);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return `${age} years old`;
}

export default function Birthday() {
  const router = useRouter();
  const [dob, setDob] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleEdit = () => setShowModal(false);
  const handleConfirm = () => router.push("/onboarding/next-step"); // Update as needed

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <ConfirmationModal
        isOpen={showModal}
        age={calculateAge(dob)}
        formattedDate={formatDate(dob)}
        onEdit={handleEdit}
        onConfirm={handleConfirm}
      />
      <main className="flex-1 flex flex-col justify-start items-center px-6 pt-8">
        {/* Progress indicator and icon */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-yellow-300 bg-white">
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2v2M8 4v2M16 4v2M4 10h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M4 14h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </span>
            <div className="flex gap-1 ml-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-2 text-center">
            What&apos;s your date of birth?
          </h1>
        </div>
        {/* Birthday form */}
        <form
          id="birthday-form"
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col gap-4"
        >
          <input
            type="date"
            required
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full border-b-2 border-black/80 focus:border-yellow-400 outline-none text-lg py-3 placeholder-gray-400 mb-2 transition-colors bg-transparent text-black"
          />
        </form>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton type="submit" form="birthday-form">
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
