"use client";
import React, { useState } from "react";
import TopNav from "../../components/TopNav";
import { dummyUser } from "@/data/dummyUser";

export default function MaxDistance() {
  const [distance, setDistance] = useState<number>(
    dummyUser.datingPreferences.distance
  );
  const [isNonNegotiable, setIsNonNegotiable] = useState<boolean>(false);

  const handleDistanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDistance(Number(e.target.value));
    // TODO: Save distance to backend
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
            Maximum Distance
          </h1>
          <div className="w-full max-w-md mx-auto flex flex-col gap-6">
            <div className="w-full px-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-black">
                  {distance} miles
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={distance}
                onChange={handleDistanceChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-400"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>1 mi</span>
                <span>100 mi</span>
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
