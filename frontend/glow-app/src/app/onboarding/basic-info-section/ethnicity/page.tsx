"use client";
import React, { useState } from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

const ETHNICITIES = [
  { text: "Black / African Descent" },
  { text: "East Asian" },
  { text: "Hispanic / Latino" },
  { text: "Middle Eastern" },
  { text: "Native American" },
  { text: "Pacific Islander" },
  { text: "South Asian" },
  { text: "Southeast Asian" },
  { text: "White / Caucasian" },
  { text: "Other" },
];

export default function Ethnicity() {
  const router = useRouter();
  const [selected, setSelected] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selected) {
      // Save selection as needed
      router.push("/onboarding/basic-info-section/dating-preferences");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col justify-start items-center px-6 pt-8">
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8 mt-16">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-6 text-center">
            What&apos;s your ethnicity?
          </h1>
          <form
            id="ethnicity-form"
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {ETHNICITIES.map((ethnicity) => (
                <label
                  key={ethnicity.text}
                  className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                    selected === ethnicity.text
                      ? "border-yellow-400 bg-yellow-50"
                      : "border-black/10 bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="ethnicity"
                    value={ethnicity.text}
                    checked={selected === ethnicity.text}
                    onChange={() => setSelected(ethnicity.text)}
                    className="form-radio accent-yellow-400 mr-3"
                  />
                  <span className="text-lg text-black">{ethnicity.text}</span>
                </label>
              ))}
            </div>
          </form>
        </div>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton
          type="submit"
          form="ethnicity-form"
          disabled={!selected}
        >
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
