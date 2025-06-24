"use client";
import React, { useState } from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

const RELIGIONS = [
  { emoji: "☸️", text: "Buddhist" },
  { emoji: "✝️", text: "Catholic" },
  { emoji: "✝️", text: "Christian" },
  { emoji: "🕉️", text: "Hindu" },
  { emoji: "✡️", text: "Jewish" },
  { emoji: "☪️", text: "Muslim" },
  { emoji: "✨", text: "Spiritual but not religious" },
  { emoji: "🤔", text: "Agnostic" },
  { emoji: "⚛️", text: "Atheist" },
  { emoji: "💫", text: "Other" },
];

export default function Religion() {
  const router = useRouter();
  const [selected, setSelected] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selected) {
      // Save selection as needed
      router.push("/onboarding/bio-and-pics-section/bio-and-pics");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col justify-start items-center px-6 pt-8">
        {/* Title section */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8 mt-16">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-2 text-center">
            What are your religious beliefs?
          </h1>
        </div>
        {/* Religion form */}
        <form
          id="religion-form"
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            {RELIGIONS.map((religion) => (
              <label
                key={religion.text}
                className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                  selected === religion.text
                    ? "border-teal-300 bg-teal-50"
                    : "border-black/10 bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="religion"
                  value={religion.text}
                  checked={selected === religion.text}
                  onChange={() => setSelected(religion.text)}
                  className="form-radio accent-teal-300 mr-3"
                />
                <span className="text-xl mr-3">{religion.emoji}</span>
                <span className="text-lg text-black">{religion.text}</span>
              </label>
            ))}
          </div>
        </form>
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
