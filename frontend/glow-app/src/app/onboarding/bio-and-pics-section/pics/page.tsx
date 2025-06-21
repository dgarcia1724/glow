"use client";

import React, { useState, useRef } from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

export default function Pics() {
  const router = useRouter();
  const [photos, setPhotos] = useState<File[]>([]);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handlePhotoChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.files && e.target.files[0]) {
      const newPhotos = [...photos];
      newPhotos[index] = e.target.files[0];
      setPhotos(newPhotos);
    }
  };

  const handleRemovePhoto = (index: number) => {
    const newPhotos = [...photos];
    newPhotos[index] = null as unknown as File;
    setPhotos(newPhotos);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (photos.filter(Boolean).length === 0) {
      return; // Don't proceed if no photos are selected
    }
    // Here you would typically handle the photo uploads
    router.push("/onboarding/done");
  };

  const photoCount = photos.filter(Boolean).length;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col justify-start items-center px-6 pt-8">
        {/* Title section */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8 mt-16">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-2 text-center">
            Add your pics
          </h1>

          <p className="text-sm text-gray-500">{photoCount}/4 photos added</p>
        </div>
        {/* Photos form */}
        <form
          id="pics-form"
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col gap-6"
        >
          <div className="grid grid-cols-2 gap-4 overflow-visible">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className="aspect-square border-2 border-dashed border-black/80 rounded-lg flex items-center justify-center cursor-pointer hover:border-teal-300 transition-colors relative overflow-visible"
                onClick={(e) => {
                  // Only trigger file input if not clicking the X button
                  if ((e.target as HTMLElement).closest("button")) return;
                  inputRefs[index].current?.click();
                }}
              >
                <input
                  ref={inputRefs[index]}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handlePhotoChange(e, index)}
                  className="absolute inset-0 w-full h-full opacity-0"
                  tabIndex={-1}
                />
                {photos[index] ? (
                  <div className="w-full h-full rounded-lg overflow-hidden relative">
                    <img
                      src={URL.createObjectURL(photos[index])}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleRemovePhoto(index);
                      }}
                      className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors border-2 border-black/10 z-30 cursor-pointer pointer-events-auto"
                    >
                      <svg
                        className="w-6 h-6 text-black"
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
                  </div>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full cursor-pointer">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <p className="text-sm text-gray-500">Add photo</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </form>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton
          type="submit"
          form="pics-form"
          disabled={photoCount === 0}
        >
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
