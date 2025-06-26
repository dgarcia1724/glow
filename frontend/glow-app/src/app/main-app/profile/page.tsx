"use client";

import React from "react";
import { FiSettings, FiShield } from "react-icons/fi";
import { dummyUser } from "@/data/dummyUser";
import ProfilePictureWithEdit from "@/components/ProfilePictureWithEdit";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const mainPicture = dummyUser.pictures.find((pic) => pic.isMain);

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
            <div className="px-4 py-2 rounded-full bg-black flex items-center gap-2">
              <svg
                className="w-6 h-6"
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
                    <stop stopColor="#5EEAD4" />
                    <stop offset="0.5" stopColor="#99F6E4" />
                    <stop offset="1" stopColor="#2DD4BF" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-teal-300 via-teal-200 to-teal-400">
                Glow
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => router.push("/main-app/profile/safety")}
                className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                aria-label="Safety"
              >
                <FiShield className="w-7 h-7" />
              </button>
              <button
                onClick={() => router.push("/main-app/profile/settings")}
                className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                aria-label="Settings"
              >
                <FiSettings className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <main className="flex-1 flex flex-col px-6 pt-8">
        <div className="flex flex-col items-center gap-7 mb-8">
          <ProfilePictureWithEdit
            imageUrl={mainPicture?.url || ""}
            onEditClick={() => router.push("/main-app/profile/edit-profile")}
          />
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              {dummyUser.firstName}, {calculateAge(dummyUser.birthday)}
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}
