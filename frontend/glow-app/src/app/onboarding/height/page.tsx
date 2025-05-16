"use client";
import React, { useState } from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

export default function Height() {
  const router = useRouter();
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feet && inches) {
      // Save height selection as needed
      router.push("/onboarding/birthday"); // Update to next step as needed
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
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full bg-gray-200 inline-block ml-2"
              />
            ))}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-2 text-center">
            How tall are you?
          </h1>
        </div>
        {/* Height form */}
        <form
          id="height-form"
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col gap-4"
        >
          <div className="flex justify-between gap-3 w-full">
            <input
              type="text"
              inputMode="numeric"
              pattern="^[4-7]$"
              maxLength={1}
              placeholder="Ft"
              required
              value={feet}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "");
                if (val.length <= 1 && ((+val >= 4 && +val <= 7) || val === ""))
                  setFeet(val);
              }}
              className="text-center text-2xl sm:text-3xl font-bold border-b-2 border-black/80 focus:border-yellow-400 outline-none py-3 w-1/3 bg-transparent text-black"
            />
            <span className="text-2xl sm:text-3xl font-bold text-black/60 self-center">
              ft
            </span>
            <input
              type="text"
              inputMode="numeric"
              pattern="^([0-9]|1[0-1])$"
              maxLength={2}
              placeholder="In"
              required
              value={inches}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "");
                if (val.length <= 2 && (+val <= 11 || val === ""))
                  setInches(val);
              }}
              className="text-center text-2xl sm:text-3xl font-bold border-b-2 border-black/80 focus:border-yellow-400 outline-none py-3 w-1/3 bg-transparent text-black"
            />
            <span className="text-2xl sm:text-3xl font-bold text-black/60 self-center">
              in
            </span>
          </div>
        </form>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton
          type="submit"
          form="height-form"
          disabled={!feet || !inches}
        >
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
