"use client";

import React from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

export default function Name() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/onboarding/basic-info-section/birthday");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col justify-start items-center px-6 pt-8">
        {/* Title section */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8 mt-16">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-2 text-center">
            What&apos;s your name?
          </h1>
        </div>
        {/* Name form */}
        <form
          id="name-form"
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="First name (required)"
            required
            className="w-full border-b-2 border-black/80 focus:border-fuchsia-400 outline-none text-lg py-3 placeholder-gray-400 mb-2 transition-colors bg-transparent text-black"
          />
        </form>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton type="submit" form="name-form">
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
