import React from "react";
import { useRouter } from "next/navigation";
import { getActivityStatus } from "@/utils/activityMappings";

interface StandoutTopNavProps {
  firstName: string;
  age: number;
  lastActive: string;
  createdAt: string;
  onBack?: () => void;
}

export default function StandoutTopNav({
  firstName,
  age,
  lastActive,
  createdAt,
  onBack,
}: StandoutTopNavProps) {
  const router = useRouter();
  const activityStatus = getActivityStatus(lastActive, createdAt);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.push("/main-app/standouts");
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Existing Navigation */}
      <div className="max-w-md mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={handleBack}
            className="text-gray-700 hover:text-gray-900 cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-gray-900 truncate">
              <span className="font-extrabold">{firstName}</span>
              <span className="font-light">, {age}</span>
            </h1>
            {activityStatus.text && (
              <div
                className={`flex items-center justify-center mt-1 text-sm ${
                  activityStatus.className || "text-gray-600"
                }`}
              >
                <span className="mr-1">{activityStatus.emoji}</span>
                <span className="inline-block w-fit">
                  {activityStatus.text}
                </span>
              </div>
            )}
          </div>
          <div className="w-6" /> {/* Spacer for alignment */}
        </div>
      </div>
    </div>
  );
}
