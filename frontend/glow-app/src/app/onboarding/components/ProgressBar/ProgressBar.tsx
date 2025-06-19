"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { TOTAL_STEPS, getCurrentStep } from "./onboardingSteps";

export default function ProgressBar() {
  const pathname = usePathname();
  const currentStep = getCurrentStep(pathname);
  const progress = (currentStep / TOTAL_STEPS) * 100;

  return (
    <div className="fixed top-0 left-0 w-full h-6 sm:h-8 bg-gray-100 z-50">
      <div
        className="h-full bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-100 transition-all duration-500 ease-in-out"
        style={{
          width: `${progress}%`,
          boxShadow: "0 0 15px rgba(253, 224, 71, 0.6)",
        }}
      />
    </div>
  );
}
