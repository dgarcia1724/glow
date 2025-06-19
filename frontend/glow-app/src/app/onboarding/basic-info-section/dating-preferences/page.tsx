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

const SPECIFIC_OPTIONS = ["Men", "Women", "Nonbinary"];

export default function DatingPreferences() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const handlePreferenceChange = (option: string) => {
    if (option === "Everyone") {
      // If "Everyone" is selected, clear other selections
      setSelected(["Everyone"]);
    } else {
      setSelected((prev) => {
        // Remove "Everyone" if it was selected
        const withoutEveryone = prev.filter((item) => item !== "Everyone");

        // Toggle the current option
        let newSelection;
        if (withoutEveryone.includes(option)) {
          newSelection = withoutEveryone.filter((item) => item !== option);
        } else {
          newSelection = [...withoutEveryone, option];
        }

        // Check if all specific options are selected
        const hasAllSpecificOptions = SPECIFIC_OPTIONS.every((opt) =>
          newSelection.includes(opt)
        );

        // If all specific options are selected, switch to "Everyone"
        if (hasAllSpecificOptions) {
          return ["Everyone"];
        }

        return newSelection;
      });
    }
  };

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
          <p className="text-gray-600 text-center">Select all that apply</p>
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
                      ? "border-fuchsia-400 bg-fuchsia-50"
                      : "border-black/10 bg-white"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="preference"
                    value={option.text}
                    checked={isChecked}
                    onChange={() => handlePreferenceChange(option.text)}
                    className="form-checkbox accent-fuchsia-400 mr-3"
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
