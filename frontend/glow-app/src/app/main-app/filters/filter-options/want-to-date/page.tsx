"use client";
import React, { useState } from "react";
import { dummyUser } from "@/data/dummyUser";
import TopNav from "../../components/TopNav";

const DATING_PREFERENCES = [
  { text: "Men" },
  { text: "Women" },
  { text: "Nonbinary" },
  { text: "Everyone" },
];

export default function WantToDate() {
  const [selected, setSelected] = useState<string[]>(
    Array.isArray(dummyUser.datingPreferences.lookingFor)
      ? dummyUser.datingPreferences.lookingFor
      : []
  );
  const [isNonNegotiable, setIsNonNegotiable] = useState<boolean>(false);

  const handleSelection = (preference: string) => {
    if (preference === "Everyone") {
      setSelected(["Everyone"]);
    } else {
      setSelected((prev) => {
        const newSelection = prev.filter((p) => p !== "Everyone");
        if (prev.includes(preference)) {
          return newSelection.filter((p) => p !== preference);
        } else {
          const updatedSelection = [...newSelection, preference];
          // Check if all regular options are selected
          const regularOptions = DATING_PREFERENCES.filter(
            (v) => v.text !== "Everyone"
          ).map((v) => v.text);
          const allRegularSelected = regularOptions.every((opt) =>
            updatedSelection.includes(opt)
          );

          if (allRegularSelected) {
            return ["Everyone"];
          }
          return updatedSelection;
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
            Who do you want to date?
          </h1>
          <div className="w-full max-w-md mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {DATING_PREFERENCES.map((option) => (
                <label
                  key={option.text}
                  className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                    selected.includes(option.text)
                      ? "border-yellow-400 bg-yellow-50"
                      : "border-black/10 bg-white"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="preference"
                    value={option.text}
                    checked={selected.includes(option.text)}
                    onChange={() => handleSelection(option.text)}
                    className="form-checkbox accent-yellow-400 mr-3"
                  />
                  <span className="text-lg text-black">{option.text}</span>
                </label>
              ))}
            </div>

            {!selected.includes("Everyone") && (
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
