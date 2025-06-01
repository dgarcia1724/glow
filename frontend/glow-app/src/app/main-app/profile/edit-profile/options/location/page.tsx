"use client";
import React from "react";
import { useRouter } from "next/navigation";
import TopNav from "../../components/TopNav";
import LocationInput from "@/components/LocationInput";

export default function Location() {
  const router = useRouter();

  const handleLocationSelect = () => {
    // TODO: Save location to backend
    router.push("/main-app/profile/edit-profile");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopNav />

      <main className="flex-1 flex flex-col justify-center items-center px-6">
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-6 text-center">
            Where are you located?
          </h1>
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
