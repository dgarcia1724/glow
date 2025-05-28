"use client";

import React from "react";
import { FiSettings, FiEdit2 } from "react-icons/fi";
import { dummyUser } from "@/data/dummyUser";
import YellowGradientButton from "@/components/YellowGradientButton";

export default function Profile() {
  const mainPicture = dummyUser.pictures.find((pic) => pic.isMain);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="w-full px-6 py-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">Profile</h1>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <FiSettings className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </header>
      <main className="flex-1 flex flex-col justify-center items-center px-6">
        <div className="relative">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
            <img
              src={mainPicture?.url}
              alt="Profile picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <YellowGradientButton>
              <div className="flex items-center gap-2">
                <FiEdit2 className="w-4 h-4" />
                <span>Edit</span>
              </div>
            </YellowGradientButton>
          </div>
        </div>
      </main>
    </div>
  );
}
