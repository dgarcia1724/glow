"use client";

import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { dummyUser } from "@/data/dummyUser";

export default function FiltersPage() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="w-10" /> {/* Spacer for balance */}
          <h1 className="text-xl font-semibold text-gray-900">
            Dating Filters
          </h1>
          <button
            onClick={() => router.back()}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close filters"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Main content area */}
        <div className="flex-1 overflow-y-auto">
          {/* Dating Preferences Section */}
          <div className="p-6 border-b border-gray-200">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Dating Preferences
              </h2>
              <div className="space-y-4">
                <div
                  className="cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
                  onClick={() =>
                    router.push("/main-app/filters/filter-options/want-to-date")
                  }
                >
                  <h3 className="text-sm font-bold text-black">
                    I want to date
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {dummyUser.datingPreferences.lookingFor.join(", ")}
                  </p>
                </div>
                <div
                  className="cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
                  onClick={() => router.push("/main-app/filters/location")}
                >
                  <h3 className="text-sm font-bold text-black">My location</h3>
                  <p className="text-gray-600 mt-1">
                    {dummyUser.location.city}, {dummyUser.location.state}
                  </p>
                </div>
                <div
                  className="cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
                  onClick={() => router.push("/main-app/filters/distance")}
                >
                  <h3 className="text-sm font-bold text-black">Max distance</h3>
                  <p className="text-gray-600 mt-1">
                    {dummyUser.datingPreferences.distance} miles
                  </p>
                </div>
                <div
                  className="cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
                  onClick={() => router.push("/main-app/filters/age-range")}
                >
                  <h3 className="text-sm font-bold text-black">Age Range</h3>
                  <p className="text-gray-600 mt-1">
                    {dummyUser.datingPreferences.ageRange.min} -{" "}
                    {dummyUser.datingPreferences.ageRange.max} years
                  </p>
                </div>
                <div
                  className="cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
                  onClick={() => router.push("/main-app/filters/ethnicity")}
                >
                  <h3 className="text-sm font-bold text-black">Ethnicity</h3>
                  <p className="text-gray-600 mt-1">Not specified</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="p-6">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Core Values
              </h2>
              <div className="space-y-4">
                <div
                  className="cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
                  onClick={() => router.push("/main-app/filters/religion")}
                >
                  <h3 className="text-sm font-bold text-black">Religion</h3>
                  <p className="text-gray-600 mt-1">
                    {dummyUser.coreValues.religion}
                  </p>
                </div>
                <div
                  className="cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
                  onClick={() => router.push("/main-app/filters/politics")}
                >
                  <h3 className="text-sm font-bold text-black">Politics</h3>
                  <p className="text-gray-600 mt-1">
                    {dummyUser.coreValues.politics}
                  </p>
                </div>
                <div
                  className="cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
                  onClick={() =>
                    router.push("/main-app/filters/relationship-type")
                  }
                >
                  <h3 className="text-sm font-bold text-black">
                    Relationship Type
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {dummyUser.coreValues.relationshipType}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
