"use client";

import React from "react";
import { FiSettings } from "react-icons/fi";
import { dummyUser } from "@/data/dummyUser";
import ProfilePictureWithEdit from "@/components/ProfilePictureWithEdit";

export default function Profile() {
  const mainPicture = dummyUser.pictures.find((pic) => pic.isMain);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-extrabold text-gray-900">Profile</h1>
            <button
              className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              aria-label="Settings"
            >
              <FiSettings className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
      <main className="flex-1 flex flex-col justify-center items-center px-6">
        <ProfilePictureWithEdit
          imageUrl={mainPicture?.url || ""}
          onEditClick={() => console.log("Edit clicked")}
        />
      </main>
    </div>
  );
}
