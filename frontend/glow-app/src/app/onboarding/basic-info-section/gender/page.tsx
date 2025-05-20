"use client";
import React, { useState } from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

export default function Gender() {
  const router = useRouter();
  const [selectedGender, setSelectedGender] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedGender) {
      // Here you would typically save the gender to your state management or backend
      router.push("/onboarding/basic-info-section/dating-preferences");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col justify-start items-center px-6 pt-8">
        {/* Title section */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8 mt-16">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-2 text-center">
            What&apos;s your gender?
          </h1>
        </div>
        {/* Gender form */}
        <form
          id="gender-form"
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            <label
              className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                selectedGender === "Man"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-black/10 bg-white"
              }`}
            >
              <input
                type="radio"
                name="gender"
                value="Man"
                checked={selectedGender === "Man"}
                onChange={() => setSelectedGender("Man")}
                className="form-radio accent-yellow-400 mr-3"
              />
              <span className="text-lg text-black">Man</span>
            </label>
            <label
              className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                selectedGender === "Woman"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-black/10 bg-white"
              }`}
            >
              <input
                type="radio"
                name="gender"
                value="Woman"
                checked={selectedGender === "Woman"}
                onChange={() => setSelectedGender("Woman")}
                className="form-radio accent-yellow-400 mr-3"
              />
              <span className="text-lg text-black">Woman</span>
            </label>
            <label
              className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                selectedGender === "Nonbinary"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-black/10 bg-white"
              }`}
            >
              <input
                type="radio"
                name="gender"
                value="Nonbinary"
                checked={selectedGender === "Nonbinary"}
                onChange={() => setSelectedGender("Nonbinary")}
                className="form-radio accent-yellow-400 mr-3"
              />
              <span className="text-lg text-black">Nonbinary</span>
            </label>
          </div>
        </form>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton
          type="submit"
          form="gender-form"
          disabled={!selectedGender}
        >
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
