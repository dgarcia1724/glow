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
            Add your bio
          </h1>
          <p className="text-lg text-gray-600 text-center">
            Tell us who you are — in your own words.
          </p>
        </div>
        {/* Bio form */}
        <form
          id="bio-form"
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col gap-4"
        >
          <textarea
            onChange={handleBioChange}
            placeholder="I'm a nurse who runs marathons, collects vinyl, and makes killer guac."
            className="w-full border-2 border-black/80 focus:border-yellow-400 outline-none text-lg py-3 px-4 placeholder-gray-400 mb-2 transition-colors bg-transparent text-black rounded-lg min-h-[150px] resize-none"
            maxLength={400}
          />
          <p className="text-sm text-gray-500 text-right">
            {charCount}/400 characters
          </p>
        </form>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center gap-4">
        <YellowGradientButton type="submit" form="bio-form">
          Continue
        </YellowGradientButton>
        <button
          onClick={() => router.push("/onboarding/bio-and-pics-section/pics")}
          className="text-gray-500 hover:text-gray-700 font-medium cursor-pointer"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
}
