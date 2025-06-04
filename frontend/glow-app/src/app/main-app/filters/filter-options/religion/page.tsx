"use client";
import React, { useState } from "react";
import TopNav from "../../components/TopNav";
import { dummyUser } from "@/data/dummyUser";

const RELIGIONS = [
  { text: "Buddhist" },
  { text: "Catholic" },
  { text: "Christian" },
  { text: "Hindu" },
  { text: "Jewish" },
  { text: "Muslim" },
  { text: "Spiritual but not religious" },
  { text: "Agnostic" },
  { text: "Atheist" },
  { text: "Other" },
  { text: "Open to all" },
];

export default function Religion() {
  const [selected, setSelected] = useState<string[]>(
    dummyUser.coreValues.religion ? [dummyUser.coreValues.religion] : []
  );
  const [isNonNegotiable, setIsNonNegotiable] = useState<boolean>(false);

  const handleSelection = (religion: string) => {
    if (religion === "Open to all") {
      setSelected(["Open to all"]);
    } else {
      setSelected((prev) => {
        const newSelection = prev.filter((r) => r !== "Open to all");
        if (prev.includes(religion)) {
          return newSelection.filter((r) => r !== religion);
        } else {
          return [...newSelection, religion];
        }
      });
    }
    // TODO: Save selection to backend
  };

  const handleNonNegotiableChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsNonNegotiable(e.target.checked);
    // TODO: Save non-negotiable preference to backend
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopNav />

      <main className="flex-1 flex flex-col justify-center items-center px-6">
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-6 text-center">
            Religion
          </h1>
          <div className="w-full max-w-md mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {RELIGIONS.map((religion) => (
                <label
                  key={religion.text}
                  className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                    selected.includes(religion.text)
                      ? "border-yellow-400 bg-yellow-50"
                      : "border-black/10 bg-white"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="religion"
                    value={religion.text}
                    checked={selected.includes(religion.text)}
                    onChange={() => handleSelection(religion.text)}
                    className="form-checkbox accent-yellow-400 mr-3"
                  />
                  <span className="text-lg text-black">{religion.text}</span>
                </label>
              ))}
            </div>

            {!selected.includes("Open to all") && (
              <div className="w-full px-4 mt-4">
                <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <input
                    type="checkbox"
                    checked={isNonNegotiable}
                    onChange={handleNonNegotiableChange}
                    className="form-checkbox h-5 w-5 text-yellow-400 rounded border-gray-300 focus:ring-yellow-400 cursor-pointer"
                  />
                  <span className="text-gray-700">Non-negotiable for me</span>
                </label>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
