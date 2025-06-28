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
  { color: "bg-gray-400", text: "Non political" },
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
          const updatedSelection = [...newSelection, view];
          // Check if all regular options are selected
          const regularOptions = POLITICAL_VIEWS.filter(
            (v) => v.text !== "Open to all"
          ).map((v) => v.text);
          const allRegularSelected = regularOptions.every((opt) =>
            updatedSelection.includes(opt)
          );

          if (allRegularSelected) {
            return ["Open to all"];
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

      <main className="flex-1 px-6 py-8">
        <div className="w-full max-w-md mx-auto flex flex-col items-center">
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
                      ? "border-teal-300 bg-teal-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="politics"
                    value={view.text}
                    checked={selected.includes(view.text)}
                    onChange={() => handleSelection(view.text)}
                    className="form-checkbox accent-teal-300 mr-3"
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
                    className="form-checkbox h-5 w-5 text-teal-300 rounded border-gray-300 focus:ring-teal-300 cursor-pointer"
                  />
                  <span className="text-gray-700">Non-negotiable</span>
                  <div className="relative group">
                    <svg
                      className="w-4 h-4 text-gray-400 cursor-help"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-10">
                      Your profile will only be visible to people who meet this
                      preference.
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                </label>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
