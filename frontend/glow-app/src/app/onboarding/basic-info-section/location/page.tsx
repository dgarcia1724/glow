"use client";
import React, { useState } from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";
import LocationInput from "@/components/LocationInput";

export default function Location() {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedLocation) {
      // Here you would typically save the location to your state management or backend
      router.push("/onboarding/basic-info-section/gender");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col justify-start items-center px-6 pt-8">
        {/* Title section */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8 mt-16">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-2 text-center">
            Where are you located?
          </h1>
          <p className="text-sm text-gray-600 text-center">
            Only city, state will appear on your profile
          </p>
        </div>
        {/* Location form */}
        <form
          id="location-form"
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col gap-4"
        >
          <LocationInput
            onLocationSelect={setSelectedLocation}
            placeholder="Enter your location"
          />
        </form>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton
          type="submit"
          form="location-form"
          disabled={!selectedLocation}
        >
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
