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
  if (!dateStr) return "0";
  const today = new Date();
  const birthDate = new Date(dateStr + "T00:00:00");
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return `${age} years old`;
}

function getAgeNumber(dateStr: string) {
  if (!dateStr) return 0;
  const today = new Date();
  const birthDate = new Date(dateStr + "T00:00:00");
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

export default function Birthday() {
  const router = useRouter();
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showAgeError, setShowAgeError] = useState(false);
  const [showMaxAgeError, setShowMaxAgeError] = useState(false);

  // Helper to pad month/day
  const pad = (val: string) => val.padStart(2, "0");
  // Combine to YYYY-MM-DD for date functions
  const dob = year && month && day ? `${year}-${pad(month)}-${pad(day)}` : "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const age = getAgeNumber(dob);

    if (age < 18) {
      setShowAgeError(true);
      setShowMaxAgeError(false);
      return;
    }

    if (age > 100) {
      setShowMaxAgeError(true);
      setShowAgeError(false);
      return;
    }

    setShowAgeError(false);
    setShowMaxAgeError(false);
    setShowModal(true);
  };

  const handleEdit = () => setShowModal(false);
  const handleConfirm = () =>
    router.push("/onboarding/basic-info-section/location");

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
        {/* Title section */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8 mt-16">
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
          <div className="flex justify-between gap-3 w-full">
            <input
              type="text"
              inputMode="numeric"
              pattern="^(0?[1-9]|1[0-2])$"
              maxLength={2}
              placeholder="MM"
              required
              value={month}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "");
                if (val.length <= 2 && (+val <= 12 || val === ""))
                  setMonth(val);
              }}
              className="text-center text-2xl sm:text-3xl font-bold border-b-2 border-black/80 focus:border-teal-300 outline-none py-3 w-1/3 bg-transparent text-black"
            />
            <input
              type="text"
              inputMode="numeric"
              pattern="^(0?[1-9]|[12][0-9]|3[01])$"
              maxLength={2}
              placeholder="DD"
              required
              value={day}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "");
                if (val.length <= 2 && (+val <= 31 || val === "")) setDay(val);
              }}
              className="text-center text-2xl sm:text-3xl font-bold border-b-2 border-black/80 focus:border-teal-300 outline-none py-3 w-1/3 bg-transparent text-black"
            />
            <input
              type="text"
              inputMode="numeric"
              pattern="^(19|20)\d{2}$"
              maxLength={4}
              placeholder="YYYY"
              required
              value={year}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "");
                if (val.length <= 4) {
                  // Only allow years between 1900 and current year
                  const currentYear = new Date().getFullYear();
                  const minYear = currentYear - 100; // Minimum year for 100 years old
                  if (
                    val === "" ||
                    (val.length === 4 && +val >= minYear && +val <= currentYear)
                  ) {
                    setYear(val);
                  } else if (val.length < 4) {
                    setYear(val);
                  }
                }
              }}
              className="text-center text-2xl sm:text-3xl font-bold border-b-2 border-black/80 focus:border-teal-300 outline-none py-3 w-1/3 bg-transparent text-black"
            />
          </div>
          {showAgeError && (
            <p className="text-red-500 text-sm mt-2">
              You must be at least 18 years old to use this app.
            </p>
          )}
          {showMaxAgeError && (
            <p className="text-red-500 text-sm mt-2">
              You must be less than 100 years old to use this app.
            </p>
          )}
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
