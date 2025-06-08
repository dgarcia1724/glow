"use client";

import React from "react";
import { dummyLikesYou } from "@/data/dummyLikesYou";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Daily10() {
  const router = useRouter();
  const hasLikes = dummyLikesYou.length > 0;

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
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-yellow-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </svg>
              <h1 className="text-2xl font-extrabold text-gray-900">
                Glow&apos;s Daily 10
              </h1>
            </div>
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
                    <stop stopColor="#FDE047" />
                    <stop offset="0.5" stopColor="#FEF08A" />
                    <stop offset="1" stopColor="#FEF9C3" />
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
                    <stop stopColor="#FDE047" />
                    <stop offset="0.5" stopColor="#FEF08A" />
                    <stop offset="1" stopColor="#FEF9C3" />
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
                    <stop stopColor="#FDE047" />
                    <stop offset="0.5" stopColor="#FEF08A" />
                    <stop offset="1" stopColor="#FEF9C3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-black mb-8 leading-tight text-center">
              No daily matches yet
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-6">
            {dummyLikesYou.map((user) => (
              <div
                key={user.id}
                onClick={() =>
                  router.push(`/main-app/potential/daily-10/${user.id}`)
                }
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
