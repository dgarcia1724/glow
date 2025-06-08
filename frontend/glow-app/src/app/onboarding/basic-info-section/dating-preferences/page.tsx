"use client";
import React, { useState } from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

const DATING_PREFERENCES = [
  { text: "Men" },
  { text: "Women" },
  { text: "Nonbinary" },
  { text: "Everyone" },
];

export default function DatingPreferences() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selected.length > 0) {
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
            Who do you want to meet?
          </h1>
        </div>
        {/* Dating preferences form */}
        <form
          id="dating-preferences-form"
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            {DATING_PREFERENCES.map((option) => {
              const isChecked = selected.includes(option.text);
              return (
                <label
                  key={option.text}
                  className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                    isChecked
                      ? "border-yellow-400 bg-yellow-50"
                      : "border-black/10 bg-white"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="preference"
                    value={option.text}
                    checked={isChecked}
                    onChange={() => {
                      setSelected((prev) =>
                        isChecked
                          ? prev.filter((item) => item !== option.text)
                          : [...prev, option.text]
                      );
                    }}
                    className="form-checkbox accent-yellow-400 mr-3"
                  />
                  <span className="text-lg text-black">{option.text}</span>
                </label>
              );
            })}
          </div>
        </form>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton
          type="submit"
          form="dating-preferences-form"
          disabled={selected.length === 0}
        >
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
