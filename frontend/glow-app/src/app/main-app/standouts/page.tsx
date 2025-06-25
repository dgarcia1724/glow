"use client";

import React from "react";
import { useRouter } from "next/navigation";
import YellowGradientButton from "@/components/YellowGradientButton";

export default function StandoutsPage() {
  const router = useRouter();

  // Dummy data for standouts
  const dummyStandouts = [
    {
      id: 1,
      firstName: "Sarah",
      age: 25,
      photoURL:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      category: "Trending",
    },
    {
      id: 2,
      firstName: "Emma",
      age: 23,
      photoURL:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      category: "Featured",
    },
    {
      id: 3,
      firstName: "Olivia",
      age: 27,
      photoURL:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      category: "Rising Stars",
    },
    {
      id: 4,
      firstName: "Ava",
      age: 24,
      photoURL:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop&crop=face",
      category: "Most Popular",
    },
    {
      id: 5,
      firstName: "Isabella",
      age: 26,
      photoURL:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      category: "Trending",
    },
    {
      id: 6,
      firstName: "Sophia",
      age: 22,
      photoURL:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      category: "Featured",
    },
  ];

  const hasStandouts = dummyStandouts.length > 0;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-extrabold text-gray-900">Standouts</h1>
            {hasStandouts && (
              <YellowGradientButton className="px-6 py-2 text-sm">
                Sparks
              </YellowGradientButton>
            )}
          </div>
        </div>
      </div>
      <main className="flex-1 flex flex-col px-6">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-6">
            {dummyStandouts.map((user) => (
              <div
                key={user.id}
                onClick={() => router.push(`/main-app/standouts/${user.id}`)}
                className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
              >
                <div className="aspect-square relative rounded-t-lg overflow-hidden">
                  <img
                    src={user.photoURL}
                    alt={user.firstName}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    🔥
                  </div>
                </div>
                <div className="px-3 py-2 border-t border-gray-100">
                  <p className="text-sm font-medium text-black">
                    {user.firstName}, {user.age}
                  </p>
                  <p className="text-xs text-gray-500">{user.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
