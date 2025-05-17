"use client";
import React, { useState } from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

export default function Gender() {
  const router = useRouter();
  const [gender, setGender] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (gender) {
      // Save gender selection as needed
      router.push("/onboarding/dating-preferences"); // Update to dating preferences page
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col justify-start items-center px-6 pt-8">
        {/* Progress indicator and icon */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-6">
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
            {[...Array(8)].map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full bg-gray-200 inline-block ml-2"
              />
            ))}
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
                gender === "Man"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-black/10 bg-white"
              }`}
            >
              <input
                type="radio"
                name="gender"
                value="Man"
                checked={gender === "Man"}
                onChange={() => setGender("Man")}
                className="form-radio accent-yellow-400 mr-3"
              />
              <span className="text-lg text-black">Man</span>
            </label>
            <label
              className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                gender === "Woman"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-black/10 bg-white"
              }`}
            >
              <input
                type="radio"
                name="gender"
                value="Woman"
                checked={gender === "Woman"}
                onChange={() => setGender("Woman")}
                className="form-radio accent-yellow-400 mr-3"
              />
              <span className="text-lg text-black">Woman</span>
            </label>
          </div>
        </form>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton
          type="submit"
          form="gender-form"
          disabled={!gender}
        >
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
