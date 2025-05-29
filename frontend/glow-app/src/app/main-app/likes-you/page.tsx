"use client";

import React from "react";

export default function LikesYou() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-extrabold text-gray-900">Likes You</h1>
          </div>
        </div>
      </div>
      <main className="flex-1 flex flex-col justify-center items-center px-6"></main>
    </div>
  );
}
