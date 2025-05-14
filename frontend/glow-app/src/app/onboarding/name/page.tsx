"use client";

import React from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

export default function Name() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/onboarding/email");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col justify-start items-center px-6 pt-8">
        {/* Progress indicator and icon */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8">
          <div className="text-xs text-gray-500 mb-4 tracking-wide text-center">
            NO BACKGROUND CHECKS ARE CONDUCTED
          </div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-gray-200 inline-block" />
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-yellow-300 bg-white ml-2">
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect
                  x="4"
                  y="6"
                  width="16"
                  height="12"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M8 10h8M8 14h4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="w-2 h-2 rounded-full bg-gray-200 inline-block ml-2" />
            <span className="w-2 h-2 rounded-full bg-gray-200 inline-block ml-2" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-2 text-center">
            What&apos;s your name?
          </h1>
        </div>
        {/* Name form */}
        <form
          id="name-form"
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="First name (required)"
            required
            className="w-full border-b-2 border-black/80 focus:border-yellow-400 outline-none text-lg py-3 placeholder-gray-400 mb-2 transition-colors bg-transparent text-black"
          />
        </form>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton type="submit" form="name-form">
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
