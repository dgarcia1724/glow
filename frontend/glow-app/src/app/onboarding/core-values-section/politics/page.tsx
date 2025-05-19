"use client";
import React, { useState } from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

const POLITICAL_VIEWS = ["Liberal", "Moderate", "Conservative"];

export default function Politics() {
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
            What are your political views?
          </h1>
          <form
            id="politics-form"
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {POLITICAL_VIEWS.map((view) => (
                <label
                  key={view}
                  className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                    selected === view
                      ? "border-yellow-400 bg-yellow-50"
                      : "border-black/10 bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="politics"
                    value={view}
                    checked={selected === view}
                    onChange={() => setSelected(view)}
                    className="form-radio accent-yellow-400 mr-3"
                  />
                  <span className="text-lg text-black">{view}</span>
                </label>
              ))}
            </div>
          </form>
        </div>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton
          type="submit"
          form="politics-form"
          disabled={!selected}
        >
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
