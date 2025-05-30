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

      <main className="flex-1 flex flex-col justify-center items-center px-6">
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8">
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
                    max="130"
                    value={minAge}
                    onChange={handleMinAgeChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-400"
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
                    max="130"
                    value={maxAge}
                    onChange={handleMaxAgeChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-400"
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
                  className="form-checkbox h-5 w-5 text-yellow-400 rounded border-gray-300 focus:ring-yellow-400 cursor-pointer"
                />
                <span className="text-gray-700">Non-negotiable for me</span>
              </label>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
