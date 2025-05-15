"use client";
import React from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

export default function Location() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/onboarding/name"); // Update this to the next onboarding step as needed
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col justify-start items-center px-6 pt-8">
        {/* Progress indicator and icon */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-6">
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
            {[...Array(9)].map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full bg-gray-200 inline-block ml-2"
              />
            ))}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-2 text-center">
            Where do you live?
          </h1>
          <p className="text-gray-500 text-base text-center">
            Only the neighborhood name will appear on your profile.
          </p>
        </div>
        {/* Location form */}
        <form
          id="location-form"
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Enter your address, neighborhood, or ZIP"
            required
            className="w-full border-b-2 border-black/80 focus:border-yellow-400 outline-none text-lg py-3 placeholder-gray-400 mb-2 transition-colors bg-transparent text-black"
          />
        </form>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton type="submit" form="location-form">
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
