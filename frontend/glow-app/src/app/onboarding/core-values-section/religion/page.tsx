"use client";
import React, { useState } from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

const RELIGIONS = [
  "Buddhist",
  "Catholic",
  "Christian",
  "Hindu",
  "Jewish",
  "Muslim",
  "Spiritual",
  "Agnostic",
  "Atheist",
  "Other",
];

export default function Religion() {
  const router = useRouter();
  const [selected, setSelected] = useState<string>("");
  const [visible, setVisible] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selected) {
      // Save selection as needed
      router.push("/onboarding/core-values-section/values-selection");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col justify-start items-center px-6 pt-8">
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-6 text-center">
            What are your religious beliefs?
          </h1>
          <form
            id="religion-form"
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {RELIGIONS.map((religion) => (
                <label
                  key={religion}
                  className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                    selected === religion
                      ? "border-yellow-400 bg-yellow-50"
                      : "border-black/10 bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="religion"
                    value={religion}
                    checked={selected === religion}
                    onChange={() => setSelected(religion)}
                    className="form-radio accent-yellow-400 mr-3"
                  />
                  <span className="text-lg text-black">{religion}</span>
                </label>
              ))}
            </div>
          </form>
        </div>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton
          type="submit"
          form="religion-form"
          disabled={!selected}
        >
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
