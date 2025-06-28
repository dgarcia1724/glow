"use client";

import React, { useState } from "react";
import { dummyLikesYou } from "@/data/dummyLikesYou";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { coreValueEmojis } from "@/utils/emojiMappings";

type FilterOption =
  | "New"
  | "Matches your filters"
  | "Nearby"
  | "Recently active";

export default function LikesYou() {
  const router = useRouter();
  const hasLikes = dummyLikesYou.length > 0;
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("New");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filterOptions: FilterOption[] = [
    "New",
    "Matches your filters",
    "Nearby",
    "Recently active",
  ];

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
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-extrabold text-gray-900">Likes You</h1>
            {hasLikes && (
              <div className="flex items-center gap-2">
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-300 cursor-pointer"
                  >
                    <span>{selectedFilter}</span>
                    <svg
                      className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 z-50 w-64 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                      <div className="px-6 py-4 border-b border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 text-center">
                          Sort your likes
                        </h3>
                      </div>
                      <div className="px-6 py-3 border-b border-gray-100">
                        <button className="w-full text-sm font-bold text-gray-900 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                          Subscribers only
                        </button>
                      </div>
                      {filterOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setSelectedFilter(option);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full px-6 py-3 text-sm text-left hover:bg-gray-50 cursor-pointer transition-colors ${
                            selectedFilter === option
                              ? "text-teal-500 font-medium"
                              : "text-gray-400"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  onClick={() =>
                    router.push("/main-app/filters?from=likes-you")
                  }
                  className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  aria-label="Open filters"
                >
                  <div className="flex flex-col space-y-1.5">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-black mr-1" />
                      <div className="w-4 h-0.5 bg-black" />
                    </div>
                    <div className="flex items-center justify-end">
                      <div className="w-4 h-0.5 bg-black mr-1" />
                      <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-black mr-1" />
                      <div className="w-4 h-0.5 bg-black" />
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <main className="flex-1 flex flex-col px-6">
        {!hasLikes ? (
          <div
            className="flex flex-col justify-center items-center text-center"
            style={{ minHeight: "60vh" }}
          >
            <div className="flex justify-center items-center gap-2 mb-8">
              <svg
                className="w-8 h-8 rotate-[-15deg] opacity-80"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                  fill="url(#starGradient)"
                  stroke="url(#starGradient)"
                  strokeWidth="0.5"
                  transform="rotate(0 12 12)"
                />
                <defs>
                  <linearGradient
                    id="starGradient"
                    x1="2"
                    y1="2"
                    x2="22"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E879F9" />
                    <stop offset="0.5" stopColor="#F0ABFC" />
                    <stop offset="1" stopColor="#A855F7" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                className="w-16 h-16 rotate-[8deg] z-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                  fill="url(#starGradient)"
                  stroke="url(#starGradient)"
                  strokeWidth="0.5"
                  transform="rotate(0 12 12)"
                />
                <defs>
                  <linearGradient
                    id="starGradient"
                    x1="2"
                    y1="2"
                    x2="22"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E879F9" />
                    <stop offset="0.5" stopColor="#F0ABFC" />
                    <stop offset="1" stopColor="#A855F7" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                className="w-12 h-12 rotate-[-8deg] opacity-90"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                  fill="url(#starGradient)"
                  stroke="url(#starGradient)"
                  strokeWidth="0.5"
                  transform="rotate(0 12 12)"
                />
                <defs>
                  <linearGradient
                    id="starGradient"
                    x1="2"
                    y1="2"
                    x2="22"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E879F9" />
                    <stop offset="0.5" stopColor="#F0ABFC" />
                    <stop offset="1" stopColor="#A855F7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-black mb-8 leading-tight text-center">
              No likes yet
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
            {dummyLikesYou.map((user) => (
              <div
                key={user.id}
                onClick={() => router.push(`/main-app/likes-you/${user.id}`)}
                className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer overflow-hidden"
              >
                {/* Profile Info */}
                <div className="p-4 space-y-3">
                  {/* Name and Age */}
                  <div className="flex items-center justify-between">
                    <h2 className="text-base font-extrabold text-gray-900 truncate">
                      <span className="font-extrabold">{user.firstName}</span>
                      <span className="font-light">
                        , {calculateAge(user.birthday)}
                      </span>
                    </h2>
                  </div>

                  {/* Core Values */}
                  <div className="space-y-2">
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
                <div className="aspect-square relative overflow-hidden">
                  {user.photoURL && (
                    <Image
                      src={user.photoURL}
                      alt={user.displayName || "User"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
