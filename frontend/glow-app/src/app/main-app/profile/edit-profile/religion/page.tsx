"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { dummyUser } from "@/data/dummyUser";
import TopNav from "../components/TopNav";

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
  const [selected, setSelected] = useState<string>(
    dummyUser.coreValues.religion
  );

  const handleSelection = (religion: string) => {
    setSelected(religion);
    // TODO: Save selection to backend
    router.push("/main-app/profile/edit-profile");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopNav />

      <main className="flex-1 flex flex-col justify-center items-center px-6">
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-6 text-center">
            What are your religious beliefs?
          </h1>
          <div className="w-full max-w-md mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {RELIGIONS.map((religion) => (
                <label
                  key={religion.text}
                  className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                    selected === religion.text
                      ? "border-yellow-400 bg-yellow-50"
                      : "border-black/10 bg-white"
                  }`}
                  onClick={() => handleSelection(religion.text)}
                >
                  <input
                    type="radio"
                    name="religion"
                    value={religion.text}
                    checked={selected === religion.text}
                    onChange={() => {}}
                    className="form-radio accent-yellow-400 mr-3"
                  />
                  <span className="text-xl mr-3">{religion.emoji}</span>
                  <span className="text-lg text-black">{religion.text}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
