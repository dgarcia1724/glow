"use client";
import React from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

export default function CoreValues() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/onboarding/core-values-section/religion");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col justify-center items-center px-6">
        <div
          className="flex flex-col justify-center items-center text-center"
          style={{ minHeight: "60vh" }}
        >
          <div className="flex justify-center items-center gap-2 mb-8">
            <svg
              className="w-8 h-8 rotate-[-15deg] opacity-80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                fill="url(#starGradient)"
                stroke="url(#starGradient)"
                strokeWidth="0.5"
                transform="rotate(0 12 12)"
              />
              <defs>
                <linearGradient
                  id="starGradient"
                  x1="2"
                  y1="2"
                  x2="22"
                  y2="22"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FDE047" />
                  <stop offset="0.5" stopColor="#FEF08A" />
                  <stop offset="1" stopColor="#FEF9C3" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              className="w-16 h-16 rotate-[8deg] z-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                fill="url(#starGradient)"
                stroke="url(#starGradient)"
                strokeWidth="0.5"
                transform="rotate(0 12 12)"
              />
              <defs>
                <linearGradient
                  id="starGradient"
                  x1="2"
                  y1="2"
                  x2="22"
                  y2="22"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FDE047" />
                  <stop offset="0.5" stopColor="#FEF08A" />
                  <stop offset="1" stopColor="#FEF9C3" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              className="w-12 h-12 rotate-[-8deg] opacity-90"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                fill="url(#starGradient)"
                stroke="url(#starGradient)"
                strokeWidth="0.5"
                transform="rotate(0 12 12)"
              />
              <defs>
                <linearGradient
                  id="starGradient"
                  x1="2"
                  y1="2"
                  x2="22"
                  y2="22"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FDE047" />
                  <stop offset="0.5" stopColor="#FEF08A" />
                  <stop offset="1" stopColor="#FEF9C3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-black mb-8 leading-tight text-center">
            Share your core values
          </h1>
        </div>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex justify-center"
        >
          <YellowGradientButton type="submit">Continue</YellowGradientButton>
        </form>
      </div>
    </div>
  );
}
