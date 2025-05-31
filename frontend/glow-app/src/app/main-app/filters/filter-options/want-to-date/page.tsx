"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { dummyUser } from "@/data/dummyUser";
import TopNav from "../../components/TopNav";

const DATING_PREFERENCES = [
  { text: "Men" },
  { text: "Women" },
  { text: "Nonbinary" },
  { text: "Everyone" },
];

export default function WantToDate() {
  const router = useRouter();
  const [selected, setSelected] = useState<string>(
    dummyUser.datingPreferences.lookingFor[0] || ""
  );

  const handleSelection = (preference: string) => {
    setSelected(preference);
    // TODO: Save selection to backend
    router.push("/main-app/filters");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopNav />

      <main className="flex-1 flex flex-col justify-center items-center px-6">
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-6 text-center">
            Who do you want to date?
          </h1>
          <div className="w-full max-w-md mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {DATING_PREFERENCES.map((option) => (
                <label
                  key={option.text}
                  className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                    selected === option.text
                      ? "border-yellow-400 bg-yellow-50"
                      : "border-black/10 bg-white"
                  }`}
                  onClick={() => handleSelection(option.text)}
                >
                  <input
                    type="radio"
                    name="preference"
                    value={option.text}
                    checked={selected === option.text}
                    onChange={() => {}}
                    className="form-radio accent-yellow-400 mr-3"
                  />
                  <span className="text-lg text-black">{option.text}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
