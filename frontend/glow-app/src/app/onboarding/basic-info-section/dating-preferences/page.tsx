"use client";
import React, { useState } from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

export default function DatingPreferences() {
  const router = useRouter();
  const [preference, setPreference] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (preference) {
      // Save preference selection as needed
      router.push("/onboarding/core-values-section/core-values");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col justify-start items-center px-6 pt-8">
        {/* Progress indicator and icon */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-gray-200 inline-block"></span>
            <span className="w-2 h-2 rounded-full bg-gray-200 inline-block"></span>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-yellow-300 bg-white">
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
                />
              </svg>
            </span>
            {[...Array(7)].map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full bg-gray-200 inline-block ml-2"
              />
            ))}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-2 text-center">
            Who do you want to date?
          </h1>
        </div>
        {/* Dating preferences form */}
        <form
          id="dating-preferences-form"
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            <label
              className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                preference === "Men"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-black/10 bg-white"
              }`}
            >
              <input
                type="radio"
                name="preference"
                value="Men"
                checked={preference === "Men"}
                onChange={() => setPreference("Men")}
                className="form-radio accent-yellow-400 mr-3"
              />
              <span className="text-lg text-black">Men</span>
            </label>
            <label
              className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                preference === "Women"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-black/10 bg-white"
              }`}
            >
              <input
                type="radio"
                name="preference"
                value="Women"
                checked={preference === "Women"}
                onChange={() => setPreference("Women")}
                className="form-radio accent-yellow-400 mr-3"
              />
              <span className="text-lg text-black">Women</span>
            </label>
            <label
              className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                preference === "Nonbinary people"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-black/10 bg-white"
              }`}
            >
              <input
                type="radio"
                name="preference"
                value="Nonbinary people"
                checked={preference === "Nonbinary people"}
                onChange={() => setPreference("Nonbinary people")}
                className="form-radio accent-yellow-400 mr-3"
              />
              <span className="text-lg text-black">Nonbinary people</span>
            </label>
            <label
              className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                preference === "Everyone"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-black/10 bg-white"
              }`}
            >
              <input
                type="radio"
                name="preference"
                value="Everyone"
                checked={preference === "Everyone"}
                onChange={() => setPreference("Everyone")}
                className="form-radio accent-yellow-400 mr-3"
              />
              <span className="text-lg text-black">Everyone</span>
            </label>
          </div>
        </form>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton
          type="submit"
          form="dating-preferences-form"
          disabled={!preference}
        >
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
