"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { dummyStandouts } from "@/data/dummyStandouts";
import Image from "next/image";
import { coreValueEmojis } from "@/utils/emojiMappings";

export default function StandoutsPage() {
  const router = useRouter();

  const hasStandouts = dummyStandouts.length > 0;

  const calculateAge = (birthday: string) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="sticky top-0 z-50 bg-white">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-extrabold text-gray-900">
              🔥 Hot 5 🔥
            </h1>
            {hasStandouts && (
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-yellow-300 shadow-lg hover:bg-gray-900 transition-all cursor-pointer">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    transform="rotate(0 12 12)"
                  />
                </svg>
                <span className="text-sm font-medium">Sparks (1)</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <main className="flex-1 flex flex-col">
        {!hasStandouts ? (
          <div
            className="flex flex-col justify-center items-center text-center"
            style={{ minHeight: "60vh" }}
          >
            <div className="flex justify-center items-center gap-2 mb-8">
              <svg
                className="w-8 h-8 rotate-[-15deg] opacity-80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
              <svg
                className="w-16 h-16 rotate-[8deg] z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
              <svg
                className="w-12 h-12 rotate-[-8deg] opacity-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-black mb-8 leading-tight text-center">
              No standouts yet
            </h1>
          </div>
        ) : (
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Your Standouts
              </h2>
              <p className="text-gray-500">
                Scroll horizontally to view all your standout matches
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Sticky Horizontal Scroll at Bottom */}
      {hasStandouts && (
        <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 z-40">
          <div className="overflow-x-auto">
            <style jsx>{`
              .overflow-x-auto::-webkit-scrollbar {
                height: 20px;
              }
              .overflow-x-auto::-webkit-scrollbar-track {
                background: #f3f4f6;
                border-radius: 8px;
              }
              .overflow-x-auto::-webkit-scrollbar-thumb {
                background: #9ca3af;
                border-radius: 8px;
                border: 2px solid #f3f4f6;
              }
              .overflow-x-auto::-webkit-scrollbar-thumb:hover {
                background: #6b7280;
              }
            `}</style>
            <div className="flex gap-4 px-6 py-6 min-w-max">
              {dummyStandouts.map((user) => (
                <div
                  key={user.id}
                  onClick={() => router.push(`/main-app/standouts/${user.id}`)}
                  className="w-96 h-[80vh] bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex-shrink-0 overflow-hidden flex flex-col"
                >
                  {/* Profile Info */}
                  <div className="p-6 space-y-4">
                    {/* Name and Age */}
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-extrabold text-gray-900 truncate">
                        <span className="font-extrabold">{user.firstName}</span>
                        <span className="font-light">
                          , {calculateAge(user.birthday)}
                        </span>
                      </h2>
                    </div>

                    {/* Core Values */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Core Values
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <div className="px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700 text-sm font-medium flex items-center">
                          <div
                            className={`w-3 h-3 rounded-full mr-2 ${
                              user.coreValues.politics === "Liberal"
                                ? "bg-blue-700"
                                : user.coreValues.politics === "Left-Leaning"
                                ? "bg-sky-400"
                                : user.coreValues.politics === "Moderate"
                                ? "bg-purple-400"
                                : user.coreValues.politics === "Right-Leaning"
                                ? "bg-rose-400"
                                : user.coreValues.politics === "Conservative"
                                ? "bg-red-700"
                                : ""
                            }`}
                          />
                          {user.coreValues.politics}
                        </div>
                        <div className="px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700 text-sm font-medium">
                          {coreValueEmojis[user.coreValues.religion]}{" "}
                          {user.coreValues.religion}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Photo */}
                  <div className="relative flex-1 w-full">
                    <Image
                      src={user.photoURL || ""}
                      alt={user.firstName}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
