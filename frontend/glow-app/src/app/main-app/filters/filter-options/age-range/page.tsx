"use client";
import React, { useState } from "react";
import TopNav from "../../components/TopNav";
import { dummyUser } from "@/data/dummyUser";

export default function AgeRange() {
  const [minAge, setMinAge] = useState<number>(
    dummyUser.datingPreferences.ageRange.min
  );
  const [maxAge, setMaxAge] = useState<number>(
    dummyUser.datingPreferences.ageRange.max
  );
  const [isNonNegotiable, setIsNonNegotiable] = useState<boolean>(false);

  const handleMinAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinAge = Number(e.target.value);
    if (newMinAge <= maxAge) {
      setMinAge(newMinAge);
      // TODO: Save min age to backend
    }
  };

  const handleMaxAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxAge = Number(e.target.value);
    if (newMaxAge >= minAge) {
      setMaxAge(newMaxAge);
      // TODO: Save max age to backend
    }
  };

  const handleNonNegotiableChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsNonNegotiable(e.target.checked);
    // TODO: Save non-negotiable preference to backend
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopNav />

      <main className="flex-1 px-6 py-8">
        <div className="w-full max-w-md mx-auto flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-6 text-center">
            Age Range
          </h1>
          <div className="w-full max-w-md mx-auto flex flex-col gap-6">
            <div className="w-full px-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-black">
                  {minAge} - {maxAge} years
                </span>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Min Age</span>
                    <span>{minAge} years</span>
                  </div>
                  <input
                    type="range"
                    min="18"
                    max="100"
                    value={minAge}
                    onChange={handleMinAgeChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-300"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Max Age</span>
                    <span>{maxAge} years</span>
                  </div>
                  <input
                    type="range"
                    min="18"
                    max="100"
                    value={maxAge}
                    onChange={handleMaxAgeChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-300"
                  />
                </div>
              </div>
            </div>

            <div className="w-full px-4 mt-4">
              <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <input
                  type="checkbox"
                  checked={isNonNegotiable}
                  onChange={handleNonNegotiableChange}
                  className="form-checkbox h-5 w-5 text-teal-300 rounded border-gray-300 focus:ring-teal-300 cursor-pointer"
                />
                <span className="text-gray-700">Non-negotiable</span>
                <div className="relative group">
                  <svg
                    className="w-4 h-4 text-gray-400 cursor-help"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-10">
                    Your profile will only be visible to people who meet this
                    preference.
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
