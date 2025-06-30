"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function SparksPage() {
  const router = useRouter();
  const [selectedBundle, setSelectedBundle] = useState<number | null>(null);

  const sparkBundles = [
    {
      id: 1,
      sparks: 3,
      price: 1.5,
      pricePerSpark: 0.5,
      savings: null,
      popular: false,
      bestValue: false,
    },
    {
      id: 2,
      sparks: 12,
      price: 4.5,
      pricePerSpark: 0.375,
      savings: "Save 25%",
      popular: true,
      bestValue: false,
    },
    {
      id: 3,
      sparks: 50,
      price: 12.5,
      pricePerSpark: 0.25,
      savings: "Save 50%",
      popular: false,
      bestValue: true,
    },
  ];

  const handlePurchase = () => {
    if (selectedBundle) {
      const bundle = sparkBundles.find((b) => b.id === selectedBundle);
      // Handle purchase logic here
      console.log(`Purchasing ${bundle?.sparks} sparks for $${bundle?.price}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            >
              <FiArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold text-gray-900">Get Sparks</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-6 py-8">
        {/* Sparks Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
            <svg
              className="w-10 h-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                fill="#FCD34D"
                stroke="#FCD34D"
                strokeWidth="0.5"
                transform="rotate(0 12 12)"
              />
            </svg>
          </div>
        </div>

        {/* Sparks Description */}
        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg">
            Sparks are seen first before standard likes
          </p>
        </div>

        {/* Spark Bundles */}
        <div className="space-y-4 mb-8">
          {sparkBundles.map((bundle) => (
            <div
              key={bundle.id}
              className={`relative p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                selectedBundle === bundle.id
                  ? "border-teal-300 bg-teal-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
              onClick={() => setSelectedBundle(bundle.id)}
            >
              {bundle.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <span className="bg-teal-300 text-black text-xs px-3 py-1 rounded-full font-semibold">
                    POPULAR
                  </span>
                </div>
              )}
              {bundle.bestValue && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <span className="bg-teal-300 text-black text-xs px-3 py-1 rounded-full font-semibold">
                    BEST VALUE
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                        fill="#FCD34D"
                        stroke="#FCD34D"
                        strokeWidth="0.5"
                        transform="rotate(0 12 12)"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {bundle.sparks} Sparks
                    </h3>
                    <p className="text-sm text-gray-600">
                      ${bundle.pricePerSpark.toFixed(2)} per spark
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xl font-bold text-gray-900">
                    ${bundle.price.toFixed(2)}
                  </div>
                  {bundle.savings && (
                    <div className="text-sm text-teal-600 font-semibold">
                      {bundle.savings}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Purchase Button */}
        <button
          onClick={handlePurchase}
          disabled={!selectedBundle}
          className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 cursor-pointer ${
            selectedBundle
              ? "bg-teal-300 text-black hover:bg-teal-300 transform hover:scale-[1.02]"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {selectedBundle
            ? `Get ${
                sparkBundles.find((b) => b.id === selectedBundle)?.sparks
              } Sparks for $${sparkBundles
                .find((b) => b.id === selectedBundle)
                ?.price.toFixed(2)}`
            : "Select a bundle"}
        </button>
      </div>
    </div>
  );
}
