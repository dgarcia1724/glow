"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { dummyStandouts } from "@/data/dummyStandouts";
import Image from "next/image";

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
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-extrabold text-gray-900">Standouts</h1>
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
          <div className="flex-1 overflow-x-auto">
            <div className="flex gap-4 px-6 py-6 min-w-max">
              {dummyStandouts.map((user) => (
                <div
                  key={user.id}
                  onClick={() => router.push(`/main-app/standouts/${user.id}`)}
                  className="w-80 h-[80vh] bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex-shrink-0 overflow-hidden flex flex-col"
                >
                  {/* Main Photo */}
                  <div className="relative h-4/5 w-full">
                    <Image
                      src={user.photoURL || ""}
                      alt={user.firstName}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Profile Info */}
                  <div className="p-6">
                    {/* Name and Age */}
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-gray-900">
                        {user.firstName}, {calculateAge(user.birthday)}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
