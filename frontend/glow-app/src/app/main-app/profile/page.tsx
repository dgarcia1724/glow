"use client";

import React from "react";
import { FiSettings } from "react-icons/fi";

export default function Profile() {
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
        <h1 className="text-4xl font-extrabold text-black">Profile</h1>
      </main>
    </div>
  );
}
