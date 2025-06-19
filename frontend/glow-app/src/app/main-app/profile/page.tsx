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
            <h1 className="text-2xl font-extrabold text-gray-900">Profile</h1>
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
