"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 pb-16">{children}</main>
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800">
        <div className="flex justify-around items-center h-16">
          <Link
            href="/main-app/potential"
            className={`flex flex-col items-center justify-center w-full h-full ${
              pathname === "/main-app/potential"
                ? "text-fuchsia-400"
                : "text-gray-400"
            }`}
          >
            <svg
              className="w-6 h-6"
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
            <span className="text-xs mt-1">Potential</span>
          </Link>
          <Link
            href="/main-app/likes-you"
            className={`flex flex-col items-center justify-center w-full h-full ${
              pathname === "/main-app/likes-you"
                ? "text-fuchsia-400"
                : "text-gray-400"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-xs mt-1">Likes You</span>
          </Link>
          <Link
            href="/main-app/matches"
            className={`flex flex-col items-center justify-center w-full h-full ${
              pathname === "/main-app/matches"
                ? "text-fuchsia-400"
                : "text-gray-400"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="text-xs mt-1">Matches</span>
          </Link>
          <Link
            href="/main-app/profile"
            className={`flex flex-col items-center justify-center w-full h-full ${
              pathname === "/main-app/profile"
                ? "text-fuchsia-400"
                : "text-gray-400"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
