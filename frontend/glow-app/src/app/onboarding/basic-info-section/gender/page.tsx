"use client";
import React, { useState } from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

export default function Gender() {
  const router = useRouter();
  const [selectedGender, setSelectedGender] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedGender) {
      // Here you would typically save the gender to your state management or backend
      router.push("/onboarding/basic-info-section/dating-preferences");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col justify-start items-center px-6 pt-8">
        {/* Progress indicator and icon */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-gray-200 inline-block" />
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
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14a6 6 0 100 12 6 6 0 000-12z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </span>
            <span className="w-2 h-2 rounded-full bg-gray-200 inline-block ml-2" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-2 text-center">
            What&apos;s your gender?
          </h1>
        </div>
        {/* Gender form */}
        <form
          id="gender-form"
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            <label
              className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                selectedGender === "Man"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-black/10 bg-white"
              }`}
            >
              <input
                type="radio"
                name="gender"
                value="Man"
                checked={selectedGender === "Man"}
                onChange={() => setSelectedGender("Man")}
                className="form-radio accent-yellow-400 mr-3"
              />
              <span className="text-lg text-black">Man</span>
            </label>
            <label
              className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                selectedGender === "Woman"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-black/10 bg-white"
              }`}
            >
              <input
                type="radio"
                name="gender"
                value="Woman"
                checked={selectedGender === "Woman"}
                onChange={() => setSelectedGender("Woman")}
                className="form-radio accent-yellow-400 mr-3"
              />
              <span className="text-lg text-black">Woman</span>
            </label>
            <label
              className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                selectedGender === "Nonbinary"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-black/10 bg-white"
              }`}
            >
              <input
                type="radio"
                name="gender"
                value="Nonbinary"
                checked={selectedGender === "Nonbinary"}
                onChange={() => setSelectedGender("Nonbinary")}
                className="form-radio accent-yellow-400 mr-3"
              />
              <span className="text-lg text-black">Nonbinary</span>
            </label>
          </div>
        </form>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton
          type="submit"
          form="gender-form"
          disabled={!selectedGender}
        >
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
