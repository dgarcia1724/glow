"use client";
import React, { useState } from "react";
import TopNav from "../../components/TopNav";
import { dummyUser } from "@/data/dummyUser";

const POLITICAL_VIEWS = [
  { color: "bg-blue-700", text: "Liberal" },
  { color: "bg-sky-400", text: "Left-Leaning" },
  { color: "bg-purple-400", text: "Moderate" },
  { color: "bg-rose-400", text: "Right-Leaning" },
  { color: "bg-red-700", text: "Conservative" },
  { emoji: "❤️", text: "Open to all" },
];

export default function Politics() {
  const [selected, setSelected] = useState<string[]>(
    dummyUser.coreValues.politics ? [dummyUser.coreValues.politics] : []
  );
  const [isNonNegotiable, setIsNonNegotiable] = useState<boolean>(false);

  const handleSelection = (view: string) => {
    if (view === "Open to all") {
      setSelected(["Open to all"]);
    } else {
      setSelected((prev) => {
        const newSelection = prev.filter((v) => v !== "Open to all");
        if (prev.includes(view)) {
          return newSelection.filter((v) => v !== view);
        } else {
          return [...newSelection, view];
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
            Politics
          </h1>
          <div className="w-full max-w-md mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {POLITICAL_VIEWS.map((view) => (
                <label
                  key={view.text}
                  className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                    selected.includes(view.text)
                      ? "border-yellow-400 bg-yellow-50"
                      : "border-black/10 bg-white"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="politics"
                    value={view.text}
                    checked={selected.includes(view.text)}
                    onChange={() => handleSelection(view.text)}
                    className="form-checkbox accent-yellow-400 mr-3"
                  />
                  {view.color ? (
                    <div
                      className={`w-6 h-6 rounded-full ${view.color} mr-3`}
                    />
                  ) : (
                    <span className="text-xl mr-3">{view.emoji}</span>
                  )}
                  <span className="text-lg text-black">{view.text}</span>
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
