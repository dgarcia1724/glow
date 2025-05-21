"use client";

import React from "react";
import { dummyUsers } from "@/data/dummyUsers";
import Image from "next/image";

export default function PotentialPage() {
  // For now, we'll just use the first user
  const user = dummyUsers[0];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Main Photo */}
        <div className="relative h-[500px] w-full">
          <Image
            src={user.pictures[0].url}
            alt={user.displayName || user.firstName}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* User Info */}
        <div className="p-6 space-y-6">
          {/* Name and Age */}
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-extrabold text-gray-900">
              {user.firstName}
            </h1>
            <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
              <span className="mr-2">🎂</span>
              {new Date().getFullYear() - new Date(user.birthday).getFullYear()}
            </div>
          </div>

          {/* Bio */}
          <p className="text-gray-700 text-lg">{user.bio}</p>

          {/* Core Values Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Core Values</h2>
            <div className="flex flex-wrap gap-2">
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
                <span className="mr-2">{user.coreValues.religion.emoji}</span>
                {user.coreValues.religion.value}
              </div>
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
                <span className="mr-2">{user.coreValues.politics.emoji}</span>
                {user.coreValues.politics.value}
              </div>
            </div>
          </div>

          {/* Second Photo */}
          {user.pictures[1] && (
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src={user.pictures[1].url}
                alt={`${user.firstName}'s second photo`}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Lifestyle Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Lifestyle</h2>
            <div className="flex flex-wrap gap-2">
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
                <span className="mr-2">{user.lifestyle.fitness.emoji}</span>
                <span className="text-sm font-medium">Fitness:</span>{" "}
                {user.lifestyle.fitness.value}
              </div>
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
                <span className="mr-2">{user.lifestyle.alcohol.emoji}</span>
                <span className="text-sm font-medium">Alcohol:</span>{" "}
                {user.lifestyle.alcohol.value}
              </div>
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
                <span className="mr-2">{user.lifestyle.smoking.emoji}</span>
                <span className="text-sm font-medium">Smoking:</span>{" "}
                {user.lifestyle.smoking.value}
              </div>
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
                <span className="mr-2">{user.lifestyle.drugs.emoji}</span>
                <span className="text-sm font-medium">Drugs:</span>{" "}
                {user.lifestyle.drugs.value}
              </div>
            </div>
          </div>

          {/* Third Photo */}
          {user.pictures[2] && (
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src={user.pictures[2].url}
                alt={`${user.firstName}'s third photo`}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="p-4 flex justify-center space-x-4 border-t">
          <button className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <button className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors">
            <svg
              className="w-8 h-8"
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
          </button>
        </div>
      </div>
    </div>
  );
}
