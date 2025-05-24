import React from "react";
import { getLastActiveText } from "@/utils/timeMappings";

interface PotentialTopNavProps {
  firstName: string;
  lastActive: string;
}

export default function PotentialTopNav({
  firstName,
  lastActive,
}: PotentialTopNavProps) {
  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-md mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-gray-900 truncate">
            {firstName}
          </h1>
          <div className="flex items-center">
            <div
              className={`w-2 h-2 rounded-full mr-2 ${
                getLastActiveText(lastActive).isActive
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            />
            <p
              className={`text-sm ${
                getLastActiveText(lastActive).isActive
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {getLastActiveText(lastActive).text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
