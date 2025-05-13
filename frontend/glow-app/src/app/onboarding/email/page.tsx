"use client";

import React from "react";
import YellowGradientButton from "@/components/YellowGradientButton";
import { useRouter } from "next/navigation";

export default function Email() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/onboarding/birthday");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col justify-start items-center px-6 pt-8">
        {/* Progress indicator and icon */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8">
          <div className="text-xs text-gray-500 mb-4 tracking-wide text-center">
            NO BACKGROUND CHECKS ARE CONDUCTED
          </div>
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-yellow-300 bg-white">
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect
                  x="4"
                  y="6"
                  width="16"
                  height="12"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M8 10h8M8 14h4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div className="flex gap-1 ml-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
              <span className="w-2 h-2 rounded-full bg-gray-200 inline-block" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-2 text-center">
            Create your account
          </h1>
        </div>

        {/* Google Sign In Button */}
        <div className="w-full max-w-md mx-auto mb-8">
          <button className="w-full flex items-center justify-center gap-2 bg-black text-white font-medium py-3 rounded-full text-base shadow hover:opacity-90 transition-opacity cursor-pointer">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.64 9.20455C17.64 8.56636 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 12.9582 12.9232 11.8582 13.5614V15.8195H14.7418C16.4545 14.2527 17.64 11.9455 17.64 9.20455Z"
                fill="#4285F4"
              />
              <path
                d="M9 18C11.43 18 13.4673 17.1941 14.7418 15.8195L11.8582 13.5614C11.0236 14.1014 9.95818 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.22091 15.9832 5.31818 18 9 18Z"
                fill="#34A853"
              />
              <path
                d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957275C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z"
                fill="#FBBC05"
              />
              <path
                d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.3614 2.00455C13.4673 0.222727 11.43 -0.5 9 -0.5C5.31818 -0.5 2.22091 1.51682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>
        </div>

        <div className="w-full max-w-md mx-auto flex items-center gap-8 mb-12">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-gray-500 text-lg font-semibold px-4">or</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Sign Up form */}
        <form
          id="email-form"
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col gap-4"
        >
          <input
            type="email"
            placeholder="Email address (required)"
            required
            className="w-full border-b-2 border-black/80 focus:border-yellow-400 outline-none text-lg py-3 placeholder-gray-400 mb-2 transition-colors bg-transparent text-black"
          />
          <input
            type="password"
            placeholder="Password (required)"
            required
            minLength={8}
            className="w-full border-b-2 border-black/80 focus:border-yellow-400 outline-none text-lg py-3 placeholder-gray-400 mb-2 transition-colors bg-transparent text-black"
          />
        </form>
      </main>
      <div className="w-full px-0 pb-8 flex flex-col items-center">
        <YellowGradientButton type="submit" form="email-form">
          Continue
        </YellowGradientButton>
      </div>
    </div>
  );
}
