"use client";
import React from "react";
import { useRouter } from "next/navigation";
import TopNav from "../../components/TopNav";
import LocationInput from "@/components/LocationInput";

export default function Location() {
  const router = useRouter();

  const handleLocationSelect = () => {
    // TODO: Save location to backend
    router.push("/main-app/filters");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopNav />

      <main className="flex-1 px-6 py-8">
        <div className="w-full max-w-md mx-auto flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-2 text-center">
            Where are you located?
          </h1>
          <p className="text-sm text-gray-600 text-center mb-6">
            Only city, state will appear on your profile
          </p>
          <div className="w-full max-w-md mx-auto flex flex-col gap-6">
            <LocationInput
              onLocationSelect={handleLocationSelect}
              placeholder="Enter your location"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
