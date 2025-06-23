"use client";

import React, { useState } from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

export default function Bio() {
  const router = useRouter();
  const [jobTitle, setJobTitle] = useState("");
  const [education, setEducation] = useState("");
  const [bio, setBio] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setBio(value);
    setCharCount(value.length);
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
            About Me
          </h1>
        </div>
        {/* Bio form */}
        <form
          id="bio-form"
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col gap-6"
        >
          {/* Job Title */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="job-title"
              className="text-lg font-semibold text-black"
            >
              Job Title
            </label>
            <input
              id="job-title"
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Nurse"
              className="w-full border-2 border-black/80 focus:border-teal-300 outline-none text-lg py-3 px-4 placeholder-gray-400 transition-colors bg-transparent text-black rounded-lg"
            />
          </div>

          {/* Education */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="education"
              className="text-lg font-semibold text-black"
            >
              Education
            </label>
            <input
              id="education"
              type="text"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              placeholder="UCLA"
              className="w-full border-2 border-black/80 focus:border-teal-300 outline-none text-lg py-3 px-4 placeholder-gray-400 transition-colors bg-transparent text-black rounded-lg"
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-2">
            <label htmlFor="bio" className="text-lg font-semibold text-black">
              Bio
            </label>
            <textarea
              id="bio"
              value={bio}
              onChange={handleBioChange}
              placeholder="I love spontaneous road trips, rom-coms, and iced coffee even in winter. Looking for something real, someone who can make me laugh & talk about life. Bonus points if you're kind, curious, and down for sushi."
              className="w-full border-2 border-black/80 focus:border-teal-300 outline-none text-lg py-3 px-4 placeholder-gray-400 transition-colors bg-transparent text-black rounded-lg min-h-[200px] resize-none"
              maxLength={350}
            />
            <p className="text-sm text-gray-500 text-right">
              {charCount}/350 characters
            </p>
          </div>
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
