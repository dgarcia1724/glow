"use client";
import React, { useState } from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

export default function DatingPreferences() {
  const router = useRouter();
  const [preference, setPreference] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (preference) {
      // Save preference selection as needed
      router.push("/onboarding/core-values-section/core-values");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col justify-start items-center px-6 pt-8">
        {/* Title section */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8 mt-16">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-2 text-center">
            Who do you want to date?
          </h1>
        </div>
        {/* Dating preferences form */}
        <form
          id="dating-preferences-form"
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            <label
              className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                preference === "Men"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-black/10 bg-white"
              }`}
            >
              <input
                type="radio"
                name="preference"
                value="Men"
                checked={preference === "Men"}
                onChange={() => setPreference("Men")}
                className="form-radio accent-yellow-400 mr-3"
              />
              <span className="text-lg text-black">Men</span>
            </label>
            <label
              className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                preference === "Women"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-black/10 bg-white"
              }`}
            >
              <input
                type="radio"
                name="preference"
                value="Women"
                checked={preference === "Women"}
                onChange={() => setPreference("Women")}
                className="form-radio accent-yellow-400 mr-3"
              />
              <span className="text-lg text-black">Women</span>
            </label>
            <label
              className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                preference === "Nonbinary people"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-black/10 bg-white"
              }`}
            >
              <input
                type="radio"
                name="preference"
                value="Nonbinary people"
                checked={preference === "Nonbinary people"}
                onChange={() => setPreference("Nonbinary people")}
                className="form-radio accent-yellow-400 mr-3"
              />
              <span className="text-lg text-black">Nonbinary people</span>
            </label>
            <label
              className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                preference === "Everyone"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-black/10 bg-white"
              }`}
            >
              <input
                type="radio"
                name="preference"
                value="Everyone"
                checked={preference === "Everyone"}
                onChange={() => setPreference("Everyone")}
                className="form-radio accent-yellow-400 mr-3"
              />
              <span className="text-lg text-black">Everyone</span>
            </label>
          </div>
        </form>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton
          type="submit"
          form="dating-preferences-form"
          disabled={!preference}
        >
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
