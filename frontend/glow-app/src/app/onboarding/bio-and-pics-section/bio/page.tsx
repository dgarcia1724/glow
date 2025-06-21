"use client";

import React, { useState } from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

export default function Bio() {
  const router = useRouter();
  const [charCount, setCharCount] = useState(0);

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/onboarding/bio-and-pics-section/pics");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col justify-start items-center px-6 pt-8">
        {/* Title section */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8 mt-16">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-2 text-center">
            Add your bio (optional)
          </h1>
        </div>
        {/* Bio form */}
        <form
          id="bio-form"
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col gap-4"
        >
          <textarea
            onChange={handleBioChange}
            placeholder="I'm a nurse. I love food, the gym & Netflix. Looking for a long-term relationship :)"
            className="w-full border-2 border-black/80 focus:border-teal-300 outline-none text-lg py-3 px-4 placeholder-gray-400 mb-2 transition-colors bg-transparent text-black rounded-lg min-h-[150px] resize-none"
            maxLength={150}
          />
          <p className="text-sm text-gray-500 text-right">
            {charCount}/150 characters
          </p>
        </form>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton type="submit" form="bio-form">
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
