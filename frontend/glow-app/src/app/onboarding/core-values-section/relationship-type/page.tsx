"use client";
import React, { useState } from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

const RELATIONSHIP_TYPES = [
  { emoji: "💍", text: "Long-term Relationship" },
  { emoji: "💛", text: "Friendship" },
  { emoji: "🔥", text: "Short-term Relationship" },
  { emoji: "🤔", text: "Open to Anything" },
];

export default function RelationshipType() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelection = (typeText: string) => {
    if (typeText === "Open to Anything") {
      // If "Open to Anything" is already selected, deselect it
      if (selected.includes("Open to Anything")) {
        setSelected([]);
      } else {
        // If "Open to Anything" is selected, clear other selections
        setSelected(["Open to Anything"]);
      }
    } else {
      // If "Open to Anything" is currently selected, replace it
      if (selected.includes("Open to Anything")) {
        setSelected([typeText]);
      } else {
        // Toggle the selection
        if (selected.includes(typeText)) {
          setSelected(selected.filter((item) => item !== typeText));
        } else {
          // Add new selection
          const newSelected = [...selected, typeText];

          // If all other options (excluding "Open to Anything") are selected,
          // automatically select "Open to Anything" and deselect others
          const otherOptions = RELATIONSHIP_TYPES.filter(
            (type) => type.text !== "Open to Anything"
          ).map((type) => type.text);
          const allOthersSelected = otherOptions.every((option) =>
            newSelected.includes(option)
          );

          if (allOthersSelected) {
            setSelected(["Open to Anything"]);
          } else {
            setSelected(newSelected);
          }
        }
      }
    }
  };

  const isDisabled = (typeText: string) => {
    if (typeText === "Open to Anything") {
      // Disable "Open to Anything" if any other option is selected
      return selected.length > 0 && !selected.includes("Open to Anything");
    } else {
      // Disable other options if "Open to Anything" is selected
      return selected.includes("Open to Anything");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selected.length > 0) {
      // Save selection as needed
      router.push("/onboarding/basic-info-section/dating-preferences");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col justify-center items-center px-6">
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-6 text-center">
            What is your relationship type?
          </h1>
          <form
            id="relationship-form"
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {RELATIONSHIP_TYPES.map((type) => (
                <label
                  key={type.text}
                  className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                    selected.includes(type.text)
                      ? "border-teal-300 bg-teal-50"
                      : isDisabled(type.text)
                      ? "border-gray-200 bg-gray-100 cursor-not-allowed opacity-50"
                      : "border-black/10 bg-white"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="relationship"
                    value={type.text}
                    checked={selected.includes(type.text)}
                    onChange={() => handleSelection(type.text)}
                    disabled={isDisabled(type.text)}
                    className="form-checkbox accent-teal-300 mr-3"
                  />
                  <span className="text-xl mr-3">{type.emoji}</span>
                  <span className="text-lg text-black">{type.text}</span>
                </label>
              ))}
            </div>
          </form>
        </div>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton
          type="submit"
          form="relationship-form"
          disabled={selected.length === 0}
        >
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
