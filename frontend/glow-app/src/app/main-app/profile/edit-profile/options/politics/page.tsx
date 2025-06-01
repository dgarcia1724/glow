"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { dummyUser } from "@/data/dummyUser";
import TopNav from "../../components/TopNav";

const POLITICAL_VIEWS = [
  { color: "bg-blue-700", text: "Liberal" },
  { color: "bg-sky-400", text: "Left-Leaning" },
  { color: "bg-purple-400", text: "Moderate" },
  { color: "bg-rose-400", text: "Right-Leaning" },
  { color: "bg-red-700", text: "Conservative" },
];

export default function Politics() {
  const router = useRouter();
  const [selected, setSelected] = useState<string>(
    dummyUser.coreValues.politics
  );

  const handleSelection = (view: string) => {
    setSelected(view);
    // TODO: Save selection to backend
    router.push("/main-app/profile/edit-profile");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopNav />

      <main className="flex-1 flex flex-col justify-center items-center px-6">
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-6 text-center">
            What are your political views?
          </h1>
          <div className="w-full max-w-md mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {POLITICAL_VIEWS.map((view) => (
                <label
                  key={view.text}
                  className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                    selected === view.text
                      ? "border-yellow-400 bg-yellow-50"
                      : "border-black/10 bg-white"
                  }`}
                  onClick={() => handleSelection(view.text)}
                >
                  <input
                    type="radio"
                    name="politics"
                    value={view.text}
                    checked={selected === view.text}
                    onChange={() => {}}
                    className="form-radio accent-yellow-400 mr-3"
                  />
                  <div className={`w-6 h-6 rounded-full ${view.color} mr-3`} />
                  <span className="text-lg text-black">{view.text}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
