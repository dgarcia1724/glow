"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function TopNav() {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-md mx-auto px-6 py-4">
        <button
          onClick={() => router.back()}
          className="text-lg font-bold text-black hover:text-gray-600 cursor-pointer transition-colors"
          aria-label="Back"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
