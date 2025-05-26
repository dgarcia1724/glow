"use client";
import React, { useState } from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

const RELATIONSHIP_TYPES = [
  { text: "Long-term – 💍" },
  { text: "Short-term – 🔥" },
  { text: "Casual – 😈" },
  { text: "Open to Anything – 🤔" },
];

export default function RelationshipType() {
  const router = useRouter();
  const [selected, setSelected] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selected) {
      // Save selection as needed
      router.push("/onboarding/lifestyle-section/lifestyle");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col justify-center items-center px-6">
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-6 text-center">
            What is your relationship type?
          </h1>
          <form
            id="relationship-form"
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {RELATIONSHIP_TYPES.map((type) => (
                <label
                  key={type.text}
                  className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                    selected === type.text
                      ? "border-yellow-400 bg-yellow-50"
                      : "border-black/10 bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="relationship"
                    value={type.text}
                    checked={selected === type.text}
                    onChange={() => setSelected(type.text)}
                    className="form-radio accent-yellow-400 mr-3"
                  />
                  <span className="text-lg text-black">{type.text}</span>
                </label>
              ))}
            </div>
          </form>
        </div>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton
          type="submit"
          form="relationship-form"
          disabled={!selected}
        >
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
