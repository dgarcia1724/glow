"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { dummyUser } from "@/data/dummyUser";
import TopNav from "../../components/TopNav";

const RELATIONSHIP_TYPES = [
  { emoji: "💍", text: "Long-term" },
  { emoji: "🔥", text: "Short-term" },
  { emoji: "😈", text: "Casual" },
  { emoji: "🤔", text: "Open to Anything" },
];

export default function RelationshipType() {
  const router = useRouter();
  const [selected, setSelected] = useState<string>(
    dummyUser.coreValues.relationshipType
  );

  const handleSelection = (type: string) => {
    setSelected(type);
    // TODO: Save selection to backend
    router.push("/main-app/profile/edit-profile");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopNav />

      <main className="flex-1 flex flex-col justify-center items-center px-6">
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-6 text-center">
            What is your relationship type?
          </h1>
          <div className="w-full max-w-md mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {RELATIONSHIP_TYPES.map((type) => (
                <label
                  key={type.text}
                  className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                    selected === type.text
                      ? "border-yellow-400 bg-yellow-50"
                      : "border-black/10 bg-white"
                  }`}
                  onClick={() => handleSelection(type.text)}
                >
                  <input
                    type="radio"
                    name="relationship"
                    value={type.text}
                    checked={selected === type.text}
                    onChange={() => {}}
                    className="form-radio accent-yellow-400 mr-3"
                  />
                  <span className="text-xl mr-3">{type.emoji}</span>
                  <span className="text-lg text-black">{type.text}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
