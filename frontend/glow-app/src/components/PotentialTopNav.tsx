import React from "react";
import { useRouter } from "next/navigation";
import { getActivityStatus } from "@/utils/activityMappings";

interface PotentialTopNavProps {
  firstName: string;
  lastActive: string;
  createdAt: string;
  onBack?: () => void;
}

export default function PotentialTopNav({
  firstName,
  lastActive,
  createdAt,
  onBack,
}: PotentialTopNavProps) {
  const router = useRouter();
  const activityStatus = getActivityStatus(lastActive, createdAt);

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Existing Navigation */}
      <div className="max-w-md mx-auto px-6 py-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900 truncate">
              {firstName}
            </h1>
            {activityStatus.text && (
              <div
                className={`flex items-center mt-1 text-sm ${
                  activityStatus.className || "text-gray-600"
                }`}
              >
                <span className="mr-1">{activityStatus.emoji}</span>
                <span>{activityStatus.text}</span>
              </div>
            )}
          </div>
          <div className="flex space-x-8">
            <button
              onClick={onBack}
              className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              aria-label="Go back"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>
            </button>
            <button
              onClick={() => router.push("/main-app/filters?from=potential")}
              className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              aria-label="Open filters"
            >
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1" />
                  <div className="w-4 h-0.5 bg-black" />
                </div>
                <div className="flex items-center justify-end">
                  <div className="w-4 h-0.5 bg-black mr-1" />
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1" />
                  <div className="w-4 h-0.5 bg-black" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
