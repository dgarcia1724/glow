"use client";

import React, { useState } from "react";
import { dummyLikesYou } from "@/data/dummyLikesYou";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
                    className="flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 cursor-pointer"
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
                    <div className="absolute left-0 z-50 w-40 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                      {filterOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setSelectedFilter(option);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-50 cursor-pointer ${
                            selectedFilter === option
                              ? "text-fuchsia-500 font-medium"
                              : "text-gray-700"
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-6">
            {dummyLikesYou.map((user) => (
              <div
                key={user.id}
                onClick={() => router.push(`/main-app/likes-you/${user.id}`)}
                className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
              >
                <div className="aspect-square relative rounded-t-lg overflow-hidden">
                  {user.photoURL && (
                    <Image
                      src={user.photoURL}
                      alt={user.displayName || "User"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  )}
                </div>
                <div className="px-3 py-2 border-t border-gray-100">
                  <p className="text-sm font-medium text-black">
                    {user.firstName}, {calculateAge(user.birthday)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
