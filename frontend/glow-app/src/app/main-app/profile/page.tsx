"use client";

import React, { useState } from "react";
import { FiSettings, FiShield } from "react-icons/fi";
import { dummyUser } from "@/data/dummyUser";
import ProfilePictureWithEdit from "@/components/ProfilePictureWithEdit";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const [currentPremiumPlan, setCurrentPremiumPlan] = useState(0);
  const mainPicture = dummyUser.pictures.find((pic) => pic.isMain);

  const calculateAge = (birthday: string) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const premiumPlans = [
    {
      name: "Gold",
      description: "See everyone who likes you & send unlimited likes",
      gradient: "from-yellow-400 to-white",
      textColor: "text-black",
    },
    {
      name: "Diamond",
      description: "Includes all GOLD benefits. Plus weekly Sparks & Boosts",
      gradient: "from-blue-400 to-white",
      textColor: "text-black",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="px-4 py-2 rounded-full bg-black flex items-center gap-2">
              <svg
                className="w-6 h-6"
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
                    <stop stopColor="#5EEAD4" />
                    <stop offset="0.5" stopColor="#99F6E4" />
                    <stop offset="1" stopColor="#2DD4BF" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-teal-300 via-teal-200 to-teal-400">
                Glow
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => router.push("/main-app/profile/safety")}
                className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                aria-label="Safety"
              >
                <FiShield className="w-7 h-7" />
              </button>
              <button
                onClick={() => router.push("/main-app/profile/settings")}
                className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                aria-label="Settings"
              >
                <FiSettings className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <main className="flex-1 flex flex-col px-6 pt-8">
        <div className="flex flex-col items-center gap-7 mb-8">
          <ProfilePictureWithEdit
            imageUrl={mainPicture?.url || ""}
            onEditClick={() => router.push("/main-app/profile/edit-profile")}
          />
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              {dummyUser.firstName}, {calculateAge(dummyUser.birthday)}
            </h2>
          </div>
        </div>

        {/* Premium Feature Buttons */}
        <div className="space-y-4 mb-8 max-w-md mx-auto w-full">
          {/* Sparks Button */}
          <button className="w-full bg-white border border-gray-200 text-gray-900 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
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
              </div>
              <div className="text-left flex-1">
                <h3 className="text-lg font-bold mb-1">Sparks</h3>
                <p className="text-sm text-gray-600">
                  Sparks are seen first before standard likes
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-gray-900">0</span>
              </div>
            </div>
          </button>

          {/* Spotlights Button */}
          <button className="w-full bg-white border border-gray-200 text-gray-900 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <span className="text-lg">🔦</span>
                </div>
              </div>
              <div className="text-left flex-1">
                <h3 className="text-lg font-bold mb-1">Spotlights</h3>
                <p className="text-sm text-gray-600">
                  Be a top profile for 1 hour & get seen by more people
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-gray-900">2</span>
              </div>
            </div>
          </button>

          {/* Premium Plans Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl h-48">
              <div
                className="flex transition-transform duration-300 ease-in-out h-full"
                style={{
                  transform: `translateX(-${currentPremiumPlan * 100}%)`,
                }}
              >
                {premiumPlans.map((plan, index) => (
                  <div key={index} className="w-full flex-shrink-0 h-full">
                    <button
                      className={`w-full h-full p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-[1.02] bg-gradient-to-b ${plan.gradient} ${plan.textColor} cursor-pointer flex flex-col justify-between relative border border-gray-200`}
                    >
                      {/* Star Glow - GOLD at Top Center */}
                      <div className="text-center">
                        <div className="flex items-center justify-center">
                          <svg
                            className="w-6 h-6 mr-2"
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
                          <span className="text-lg font-bold mr-2">Glow</span>
                          <span className="text-lg font-bold">
                            - {plan.name.toUpperCase()}
                          </span>
                        </div>
                      </div>

                      {/* Description at Center Center */}
                      <div className="text-center flex-1 flex items-center justify-center">
                        <p className="text-lg opacity-90">{plan.description}</p>
                      </div>

                      {/* Upgrade Pill at Bottom Center */}
                      <div className="text-center">
                        <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                          Upgrade
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 space-x-4">
              {premiumPlans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPremiumPlan(index)}
                  className={`w-4 h-4 rounded-full transition-colors duration-200 cursor-pointer ${
                    index === currentPremiumPlan ? "bg-teal-300" : "bg-gray-300"
                  }`}
                  aria-label={`Go to ${premiumPlans[index].name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
